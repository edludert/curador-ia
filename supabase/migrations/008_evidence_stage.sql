alter table public.evidence
add column if not exists stage text;

alter table public.evidence
drop constraint if exists evidence_stage_check;

alter table public.evidence
add constraint evidence_stage_check
check (
  stage is null or stage in (
    'Investigación',
    'Conceptualización',
    'Prototipado'
  )
);