alter table public.profiles
add column if not exists plan text;

alter table public.profiles
drop constraint if exists profiles_plan_check;

alter table public.profiles
add constraint profiles_plan_check
check (plan is null or plan in ('2019','2026'));
