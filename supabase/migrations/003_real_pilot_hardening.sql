-- CURADOR.IA real pilot hardening
-- Public signups are always students. Teacher/admin roles are assigned manually.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path=public
as $$
begin
  insert into public.profiles(id,name,role)
  values(
    new.id,
    coalesce(new.raw_user_meta_data->>'name',''),
    'student'
  );
  return new;
end;
$$;

-- Existing real users keep their current role.
-- Promote specific faculty manually after signup:
-- update public.profiles set role='teacher' where id='<USER_UUID>';
