-- CURADOR.IA · campus matching for teachers and students

alter table public.profiles
  add column if not exists campus text;

alter table public.profiles
  drop constraint if exists profiles_campus_check;

alter table public.profiles
  add constraint profiles_campus_check
  check (
    campus is null or campus in (
      'Querétaro',
      'Monterrey',
      'León',
      'Sonora Norte',
      'Puebla',
      'Ciudad de México',
      'Guadalajara',
      'Estado de México'
    )
  );

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
  user_matricula text := nullif(upper(coalesce(new.raw_user_meta_data->>'matricula','')),'');
  user_semester integer := nullif(new.raw_user_meta_data->>'semester','')::integer;
  user_campus text := nullif(coalesce(new.raw_user_meta_data->>'campus',''),'');
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
    id,name,first_name,last_name,matricula,semester,campus,role
  )
  values(
    new.id,
    coalesce(nullif(full_name,''), new.raw_user_meta_data->>'name',''),
    nullif(fn,''),
    nullif(ln,''),
    case when assigned_role='student' then user_matricula else null end,
    case when assigned_role='student' then user_semester else null end,
    user_campus,
    assigned_role
  )
  on conflict (id) do update
  set
    name=excluded.name,
    first_name=excluded.first_name,
    last_name=excluded.last_name,
    matricula=excluded.matricula,
    semester=excluded.semester,
    campus=excluded.campus,
    role=excluded.role;

  return new;
end;
$$;
