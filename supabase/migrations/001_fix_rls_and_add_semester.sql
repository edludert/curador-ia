-- CURADOR.IA MVP v1.1
-- Corrige recursión RLS y añade semestre a evidencias.

alter table public.evidence
  add column if not exists semester integer
  check (semester between 1 and 8);

-- Eliminar policies que consultaban profiles desde profiles.
drop policy if exists "profiles own read" on public.profiles;
drop policy if exists "teachers read profiles" on public.profiles;
drop policy if exists "students read own evidence" on public.evidence;
drop policy if exists "students insert own evidence" on public.evidence;
drop policy if exists "feedback visible to owner and teachers" on public.feedback;
drop policy if exists "teachers insert feedback" on public.feedback;
drop policy if exists "student read own files" on storage.objects;
drop policy if exists "student upload evidence files" on storage.objects;

-- Helper SECURITY DEFINER: evita recursión de policies.
create or replace function public.current_user_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

revoke all on function public.current_user_role() from public;
grant execute on function public.current_user_role() to authenticated;

-- Profiles
create policy "profiles own read"
on public.profiles for select
to authenticated
using (id = auth.uid());

create policy "teachers read profiles"
on public.profiles for select
to authenticated
using (public.current_user_role() in ('teacher','admin'));

-- Evidence
create policy "students read own evidence"
on public.evidence for select
to authenticated
using (
  student_id = auth.uid()
  or public.current_user_role() in ('teacher','admin')
);

create policy "students insert own evidence"
on public.evidence for insert
to authenticated
with check (
  student_id = auth.uid()
  and public.current_user_role() = 'student'
);

-- Feedback
create policy "feedback visible to owner and teachers"
on public.feedback for select
to authenticated
using (
  exists (
    select 1 from public.evidence e
    where e.id = evidence_id and e.student_id = auth.uid()
  )
  or public.current_user_role() in ('teacher','admin')
);

create policy "teachers insert feedback"
on public.feedback for insert
to authenticated
with check (
  teacher_id = auth.uid()
  and public.current_user_role() in ('teacher','admin')
);

-- Storage
create policy "student upload evidence files"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'evidence'
  and (storage.foldername(name))[1] = auth.uid()::text
  and public.current_user_role() = 'student'
);

create policy "student read own files"
on storage.objects for select
to authenticated
using (
  bucket_id = 'evidence'
  and (
    (storage.foldername(name))[1] = auth.uid()::text
    or public.current_user_role() in ('teacher','admin')
  )
);
