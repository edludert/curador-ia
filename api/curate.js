function simulateCurator(body){
  const text = `${body.course||''} ${body.project||''} ${body.reflection||''}`.toLowerCase();
  const caps = [];
  const add = x => { if(!caps.includes(x) && caps.length<4) caps.push(x); };
  if(/probar|prueba|iter|error|equivoc|experiment/.test(text)) add('Experimentación');
  if(/dibuj|bocet|visual|represent/.test(text)) add('Visualización');
  if(/persona|usuario|comunidad|escuch|empat/.test(text)) add('Escucha y empatía');
  if(/material|protot|objeto|físic|fisic|maquet/.test(text)) add('Prototipado');
  if(/decid|descart|criterio|eleg/.test(text)) add('Criterio de diseño');
  if(/investig|fuente|referencia|buscar/.test(text)) add('Investigación');
  if(/ia|modelo|prompt|algorit/.test(text)) add('Alfabetización en IA');
  if(caps.length===0){ add('Pensamiento crítico'); add('Conceptualización'); }

  let hypothesis='Veo una posible recurrencia en la forma en que conviertes decisiones de proceso en conocimiento sobre tu propia práctica.';
  let question='¿Qué decisión de este proceso revela mejor tu manera personal de diseñar, y por qué?';

  if(/error|equivoc|fall|fric/.test(text)){
    hypothesis='Parece que la fricción y el error están funcionando como parte del proceso de descubrimiento, no solamente como algo que corriges.';
    question='¿Qué aprendiste de aquello que no funcionó y qué decidiste conservar de ese error?';
  } else if(/dibuj|bocet/.test(text)){
    hypothesis='El dibujo parece estar funcionando como una herramienta para pensar y descubrir relaciones antes de cerrar una solución.';
    question='¿Qué pudiste entender dibujando que todavía no podías explicar con palabras?';
  } else if(/material|protot|objeto/.test(text)){
    hypothesis='La materialización parece ayudarte a tomar decisiones: entiendes la idea mientras la pruebas físicamente.';
    question='¿Qué cambió en tu idea cuando dejó de ser abstracta y se volvió material?';
  } else if(/persona|usuario|comunidad/.test(text)){
    hypothesis='Hay una posible tendencia a tomar decisiones a partir de la experiencia de otras personas y del contexto.';
    question='¿Qué cambió en tu propuesta después de escuchar u observar a otras personas?';
  }

  return {
    simulation:true,
    hypothesis,
    question,
    capabilities:caps,
    note:'Lectura simulada para probar la experiencia de CURADOR.IA. No fue generada por un modelo de IA.'
  };
}

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const body=req.body||{};

  if(!process.env.OPENAI_API_KEY){
    return res.status(200).json(simulateCurator(body));
  }

  try{
    const response=await fetch('https://api.openai.com/v1/responses',{
      method:'POST',
      headers:{'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'gpt-6-luna',
        input:[{
          role:'system',
          content:[{type:'input_text',text:'Eres CURADOR.IA, una herramienta pedagógica de introspección. No defines la identidad del estudiante. Propones hipótesis tentativas, una pregunta socrática y capacidades posibles basadas solo en la evidencia dada. Evita calificar o diagnosticar.'}]
        },{
          role:'user',
          content:[{type:'input_text',text:`Materia: ${body.course||''}\nProyecto: ${body.project||''}\nReflexión: ${body.reflection||''}`}]
        }],
        text:{format:{
          type:'json_schema',
          name:'curador_reading',
          strict:true,
          schema:{
            type:'object',
            additionalProperties:false,
            properties:{
              hypothesis:{type:'string'},
              question:{type:'string'},
              capabilities:{type:'array',items:{type:'string'},maxItems:4}
            },
            required:['hypothesis','question','capabilities']
          }
        }}
      })
    });

    const json=await response.json();

    if(!response.ok){
      const message=(json.error?.message||'').toLowerCase();
      const code=(json.error?.code||'').toLowerCase();
      if(response.status===429 || /credit|quota|billing/.test(message) || /quota|billing/.test(code)){
        return res.status(200).json(simulateCurator(body));
      }
      return res.status(response.status).json({error:json.error?.message||'OpenAI error'});
    }

    try{
      const text=json.output?.[0]?.content?.find(x=>x.type==='output_text')?.text;
      return res.status(200).json({...JSON.parse(text),simulation:false});
    }catch(e){
      return res.status(500).json({error:'No se pudo interpretar la respuesta de IA'});
    }
  }catch(e){
    return res.status(200).json(simulateCurator(body));
  }
}
