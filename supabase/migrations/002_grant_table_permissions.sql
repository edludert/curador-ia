-- CURADOR.IA MVP v1.2
-- Permisos base para usuarios autenticados; RLS sigue controlando qué filas pueden leer/escribir.

grant usage on schema public to authenticated;

grant select on public.profiles to authenticated;
grant select, insert on public.evidence to authenticated;
grant select, insert on public.feedback to authenticated;

-- Opcional para futuras actualizaciones/borrados controlados por RLS.
grant update, delete on public.evidence to authenticated;
grant update, delete on public.feedback to authenticated;
