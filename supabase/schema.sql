-- CURADOR.IA MVP v1
create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  role text not null default 'student' check (role in ('student','teacher','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.evidence (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  course text,
  project text,
  reflection text,
  file_path text not null,
  file_name text not null,
  mime_type text,
  created_at timestamptz not null default now()
);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  evidence_id uuid not null references public.evidence(id) on delete cascade,
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  mode text not null check (mode in ('Veo','Me pregunto','Te propongo mirar')),
  comment text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.evidence enable row level security;
alter table public.feedback enable row level security;

create policy "profiles own read" on public.profiles for select using (auth.uid() = id);
create policy "teachers read profiles" on public.profiles for select using (
  exists(select 1 from public.profiles p where p.id=auth.uid() and p.role in ('teacher','admin'))
);

create policy "students read own evidence" on public.evidence for select using (
  student_id=auth.uid() or exists(select 1 from public.profiles p where p.id=auth.uid() and p.role in ('teacher','admin'))
);
create policy "students insert own evidence" on public.evidence for insert with check (student_id=auth.uid());

create policy "feedback visible to owner and teachers" on public.feedback for select using (
  exists(select 1 from public.evidence e where e.id=evidence_id and e.student_id=auth.uid())
  or exists(select 1 from public.profiles p where p.id=auth.uid() and p.role in ('teacher','admin'))
);
create policy "teachers insert feedback" on public.feedback for insert with check (
  teacher_id=auth.uid() and exists(select 1 from public.profiles p where p.id=auth.uid() and p.role in ('teacher','admin'))
);

insert into storage.buckets (id,name,public) values ('evidence','evidence',false)
on conflict (id) do nothing;

create policy "student upload evidence files" on storage.objects for insert to authenticated
with check (bucket_id='evidence' and (storage.foldername(name))[1]=auth.uid()::text);

create policy "student read own files" on storage.objects for select to authenticated
using (
  bucket_id='evidence' and (
    (storage.foldername(name))[1]=auth.uid()::text
    or exists(select 1 from public.profiles p where p.id=auth.uid() and p.role in ('teacher','admin'))
  )
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.profiles(id,name,role)
  values(new.id, coalesce(new.raw_user_meta_data->>'name',''), coalesce(new.raw_user_meta_data->>'role','student'));
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
