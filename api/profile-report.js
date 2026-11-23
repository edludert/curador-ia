function fallbackReport(body){
  const evidenceCount=Array.isArray(body.evidence)?body.evidence.length:0;
  const reflectionCount=Array.isArray(body.reflections)?body.reflections.length:0;
  return {
    simulation:true,
    title:'Diagnóstico profundo de perfil creativo',
    synthesis:'La trayectoria muestra un perfil en construcción que aprende haciendo visible el proceso, compara alternativas y vuelve sobre sus propias decisiones. Esta lectura es provisional y debe leerse junto con la evidencia acumulada.',
    patterns:[
      {name:'Proceso visible',description:'Existe una tendencia a documentar cómo cambian las decisiones y no sólo el resultado final.',evidence:'Evidencias y reflexiones acumuladas en la trayectoria.'},
      {name:'Aprendizaje por iteración',description:'La práctica parece fortalecerse al probar, revisar y ajustar.',evidence:'Proyectos con momentos de conceptualización y prototipado.'}
    ],
    strengths:['Capacidad para reflexionar sobre decisiones','Disposición a iterar y revisar','Interés por hacer trazable el proceso'],
    tensions:['Evitar cerrar soluciones demasiado pronto','Mantener claridad sobre autoría cuando interviene IA'],
    decision_style:'La toma de decisiones parece apoyarse en observación, comparación de alternativas y revisión del proceso.',
    learning_style:'El aprendizaje se fortalece al documentar, contrastar, probar y reinterpretar evidencia.',
    authorship_ai:'La IA aparece como apoyo de exploración y organización; la autoría se sostiene cuando el estudiante explicita qué decisiones conserva como propias.',
    emerging_competencies:['Investigación','Visualización','Experimentación','Criterio de diseño'],
    trajectory_projection:'Con más evidencia longitudinal será posible distinguir qué patrones son recurrentes y cuáles dependen de proyectos específicos.',
    open_questions:['¿Qué decisiones aparecen repetidamente como propias?','¿Qué tipo de problemas activa mejor su manera de diseñar?','¿Qué cambia cuando la IA entra demasiado pronto en el proceso?'],
    source_summary:`${evidenceCount} evidencias y ${reflectionCount} reflexiones consideradas.`,
    disclaimer:'Lectura interpretativa y provisional. No constituye una evaluación definitiva, psicológica ni diagnóstica de la persona.'
  };
}

function extractOutputText(json){
  return (json.output||[])
    .flatMap(item=>Array.isArray(item.content)?item.content:[])
    .find(part=>part.type==='output_text' && typeof part.text==='string')?.text;
}

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const body=req.body||{};

  if(!process.env.OPENAI_API_KEY){
    return res.status(200).json(fallbackReport(body));
  }

  const evidence=Array.isArray(body.evidence)?body.evidence.slice(0,40):[];
  const reflections=Array.isArray(body.reflections)?body.reflections.slice(0,20):[];
  const profile=body.profile||{};

  const sourceText=[
    `ESTUDIANTE: ${profile.name||'—'}`,
    `PLAN: ${profile.plan||'—'}`,
    `SEMESTRE: ${profile.semester||'—'}`,
    `CAMPUS: ${profile.campus||'—'}`,
    '',
    'EVIDENCIAS:',
    ...evidence.map((e,i)=>`${i+1}. ${e.project||e.file_name||'Evidencia'} | ${e.course||'Sin materia'} | Semestre ${e.semester||'—'} | Etapa ${e.stage||'—'}\nReflexión: ${String(e.reflection||'').slice(0,1800)}`),
    '',
    'REFLEXIONES DE TRAYECTORIA:',
    ...reflections.map((r,i)=>`${i+1}. ${r.question||'Reflexión'}\n${String(r.answer||'').slice(0,1800)}`)
  ].join('\n\n').slice(0,30000);

  try{
    const response=await fetch('https://api.openai.com/v1/responses',{
      method:'POST',
      headers:{
        'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        model:'gpt-6-luna',
        input:[
          {
            role:'system',
            content:[{type:'input_text',text:'Eres CURADOR.IA, una herramienta pedagógica para leer trayectorias creativas en educación superior de diseño. Produce un diagnóstico profundo, sensible y crítico basado únicamente en la evidencia suministrada. No psicologices, no diagnostiques personalidad, no califiques al estudiante y no conviertas patrones tentativos en verdades. Distingue fortalezas, tensiones, modos de decidir, modos de aprender, relación con IA y competencias emergentes. Usa lenguaje claro, académico pero cercano. Toda afirmación debe mantenerse provisional y trazable a la evidencia.'}]
          },
          {
            role:'user',
            content:[{type:'input_text',text:sourceText}]
          }
        ],
        text:{format:{
          type:'json_schema',
          name:'creative_profile_report',
          strict:true,
          schema:{
            type:'object',
            additionalProperties:false,
            properties:{
              title:{type:'string'},
              synthesis:{type:'string'},
              patterns:{
                type:'array',
                items:{
                  type:'object',
                  additionalProperties:false,
                  properties:{
                    name:{type:'string'},
                    description:{type:'string'},
                    evidence:{type:'string'}
                  },
                  required:['name','description','evidence']
                }
              },
              strengths:{type:'array',items:{type:'string'}},
              tensions:{type:'array',items:{type:'string'}},
              decision_style:{type:'string'},
              learning_style:{type:'string'},
              authorship_ai:{type:'string'},
              emerging_competencies:{type:'array',items:{type:'string'}},
              trajectory_projection:{type:'string'},
              open_questions:{type:'array',items:{type:'string'}},
              source_summary:{type:'string'},
              disclaimer:{type:'string'}
            },
            required:['title','synthesis','patterns','strengths','tensions','decision_style','learning_style','authorship_ai','emerging_competencies','trajectory_projection','open_questions','source_summary','disclaimer']
          }
        }}
      })
    });

    const json=await response.json();
    if(!response.ok){
      const message=(json.error?.message||'').toLowerCase();
      if(response.status===429 || /credit|quota|billing/.test(message)){
        return res.status(200).json(fallbackReport(body));
      }
      return res.status(response.status).json({error:json.error?.message||'OpenAI error'});
    }

    const refusal=(json.output||[])
      .flatMap(item=>Array.isArray(item.content)?item.content:[])
      .find(part=>part.type==='refusal');
    if(refusal) return res.status(200).json(fallbackReport(body));

    const outputText=extractOutputText(json);
    if(!outputText) return res.status(200).json(fallbackReport(body));

    return res.status(200).json({...JSON.parse(outputText),simulation:false});
  }catch(e){
    console.error('PROFILE_REPORT_ERROR',e?.message);
    return res.status(200).json(fallbackReport(body));
  }
}
