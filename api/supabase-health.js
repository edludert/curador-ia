export default async function handler(req,res){
  const url='https://crsqlxzivmrocvtooknu.supabase.co';
  const key='sb_publishable_ZIof7M3OQ6gpz6dCYq2n4Q_PmJMLIjH';
  try{
    const r=await fetch(url+'/auth/v1/health',{headers:{apikey:key}});
    const text=await r.text();
    return res.status(200).json({reachable:true,status:r.status,body:text.slice(0,500)});
  }catch(e){
    return res.status(500).json({reachable:false,error:String(e)});
  }
}