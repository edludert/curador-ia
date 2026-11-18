-- CURADOR.IA teacher allowlist for real pilot
-- These six emails are automatically assigned role='teacher' at signup.
-- Every other new account becomes role='student'.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path=public
as $$
declare
  normalized_email text := lower(coalesce(new.email,''));
  assigned_role text;
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

  insert into public.profiles(id,name,role)
  values(
    new.id,
    coalesce(new.raw_user_meta_data->>'name',''),
    assigned_role
  )
  on conflict (id) do update
    set name=excluded.name,
        role=excluded.role;

  return new;
end;
$$;

-- If any of the six already exist, promote them immediately.
update public.profiles p
set role='teacher'
from auth.users u
where p.id=u.id
and lower(u.email) in (
  'arturo.gil.islas@tec.mx',
  'mmaya@tec.mx',
  'm.tentori@tec.mx',
  'lopezclau@tec.mx',
  'dianajmz_@tec.mx',
  'laura.picca@tec.mx',
  'edgar.ludert@tec.mx'
);
