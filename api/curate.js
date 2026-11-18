export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  if(!process.env.OPENAI_API_KEY) return res.status(503).json({error:'OPENAI_API_KEY no configurada'});

  const body=req.body||{};
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
  if(!response.ok) return res.status(response.status).json({error:json.error?.message||'OpenAI error'});
  try{
    const text=json.output?.[0]?.content?.find(x=>x.type==='output_text')?.text;
    return res.status(200).json(JSON.parse(text));
  }catch(e){
    return res.status(500).json({error:'No se pudo interpretar la respuesta de IA'});
  }
}
