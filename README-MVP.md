# CURADOR.IA · MVP v1

Esta rama convierte el prototipo estático en una prueba funcional con:

- Login y registro con roles Estudiante / Profesor
- Carga de evidencias a Supabase Storage
- Evidencias vinculadas a materia, proyecto y reflexión
- Vista docente para feedback como lectura externa
- Endpoint seguro de IA para curaduría e introspección
- Structured Outputs para que la IA entregue: hipótesis, pregunta y capacidades

## 1. Crear Supabase

1. Crear un proyecto en Supabase.
2. Abrir SQL Editor y ejecutar `supabase/schema.sql`.
3. Copiar Project URL y Publishable/Anon key.

## 2. Variables

Crear un archivo `.env.local`:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
OPENAI_API_KEY=...
```

Nunca subir `.env.local` ni la clave de OpenAI al repositorio.

## 3. Ejecutar local

```bash
npm install
npm run dev
```

Abrir la URL que indique Vite.

## 4. Despliegue recomendado

Vercel:
- importar el repo
- Root Directory: raíz
- Build command: `npm run build`
- Output directory: `dist`
- agregar las 3 variables de entorno
- usar `index-mvp.html` como punto de entrada durante desarrollo o renombrarlo a `index.html` cuando se decida reemplazar la demo pública

## Principio pedagógico

La IA no define el ADN creativo. Propone hipótesis tentativas, preguntas y conexiones. El estudiante valida, cuestiona o descarta. El feedback docente entra como lectura externa vinculada a evidencia.
