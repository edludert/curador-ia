-- CURADOR.IA · student profile fields
alter table public.profiles
  add column if not exists first_name text,
  add column if not exists last_name text,
  add column if not exists matricula text,
  add column if not exists semester integer check (semester between 1 and 8);

create unique index if not exists profiles_matricula_unique
on public.profiles (matricula)
where matricula is not null and matricula <> '';

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_email text := lower(coalesce(new.email,''));
  assigned_role text;
  fn text := coalesce(new.raw_user_meta_data->>'first_name','');
  ln text := coalesce(new.raw_user_meta_data->>'last_name','');
  full_name text := trim(concat_ws(' ', fn, ln));
  student_matricula text := nullif(upper(coalesce(new.raw_user_meta_data->>'matricula','')),'');
  student_semester integer := nullif(new.raw_user_meta_data->>'semester','')::integer;
begin
  assigned_role := case
    when normalized_email in (
      'arturo.gil.islas@tec.mx',
      'mmaya@tec.mx',
      'm.tentori@tec.mx',
      'lopezclau@tec.mx',
      'dianajmz_@tec.mx',
      'laura.picca@tec.mx',
      'edgar.ludert@tec.mx'
    ) then 'teacher'
    else 'student'
  end;

  insert into public.profiles(
    id,name,first_name,last_name,matricula,semester,role
  )
  values(
    new.id,
    coalesce(nullif(full_name,''), new.raw_user_meta_data->>'name',''),
    nullif(fn,''),
    nullif(ln,''),
    case when assigned_role='student' then student_matricula else null end,
    case when assigned_role='student' then student_semester else null end,
    assigned_role
  )
  on conflict (id) do update
  set
    name=excluded.name,
    first_name=excluded.first_name,
    last_name=excluded.last_name,
    matricula=excluded.matricula,
    semester=excluded.semester,
    role=excluded.role;

  return new;
end;
$$;
