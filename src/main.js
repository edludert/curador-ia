import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://crsqlxzivmrocvtoonku.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ZIof7M3OQ6gpz6dCYq2n4Q_PmJMLIjH';
const supabase = createClient(supabaseUrl, supabaseKey);

const app=document.querySelector('#app');
let session=null, profile=null;

app.innerHTML=`
<div class="shell">
  <header class="top">
    <div><div class="brand">CURADOR.IA</div><div class="sub">Archivo vivo de proceso humano y ADN creativo.</div></div>
    <div id="userArea"></div>
  </header>

  <section id="authView" class="grid">
    <div class="card">
      <div class="k">ENTRAR</div><h2>Acceso</h2>
      <div class="field"><label>Email</label><input id="loginEmail" type="email"></div>
      <div class="field"><label>Contraseña</label><input id="loginPassword" type="password"></div>
      <button id="loginBtn" class="btn">Entrar</button>
      <div id="loginStatus" class="status"></div>
    </div>
    <div class="card">
      <div class="k">PRUEBA PILOTO</div><h2>Crear cuenta</h2>
      <div class="field"><label>Nombre</label><input id="signupName"></div>
      <div class="field"><label>Rol</label><select id="signupRole"><option value="student">Estudiante</option><option value="teacher">Profesor</option></select></div>
      <div class="field"><label>Email</label><input id="signupEmail" type="email"></div>
      <div class="field"><label>Contraseña</label><input id="signupPassword" type="password"></div>
      <button id="signupBtn" class="btn ghost">Crear cuenta</button>
      <div id="signupStatus" class="status"></div>
    </div>
  </section>

  <section id="cmsView" class="hidden">
    <div class="grid">
      <div class="card" id="studentPanel">
        <div class="k">ESTUDIANTE · NUEVA EVIDENCIA</div><h2>Subir proceso</h2>
        <div class="field"><label>Materia</label><input id="course" placeholder="Ej. Métodos creativos"></div>
        <div class="field"><label>Proyecto</label><input id="project" placeholder="Nombre del proyecto"></div>
        <div class="field"><label>¿Qué decisión estás documentando?</label><textarea id="reflection"></textarea></div>
        <div class="field"><label>Archivo</label><input id="file" type="file" accept="image/*,.pdf"></div>
        <button id="uploadBtn" class="btn">Guardar evidencia</button>
        <div id="uploadStatus" class="status"></div>
      </div>

      <div class="card">
        <div class="k">CURADOR.IA</div><h2>Introspección y curaduría</h2>
        <p>Selecciona una evidencia y pide una lectura. La IA propone preguntas y patrones; tú decides qué representa tu práctica.</p>
        <button id="aiBtn" class="btn ghost">Analizar evidencia más reciente</button>
        <div id="aiOutput" class="ai status">Aún no hay lectura.</div>
      </div>

      <div class="card wide">
        <div class="k">ARCHIVO VIVO</div><h2>Evidencias</h2>
        <div id="evidenceList"></div>
      </div>

      <div class="card wide hidden" id="teacherPanel">
        <div class="k">VISTA DOCENTE</div><h2>Feedback como lectura externa</h2>
        <p>El feedback no modifica el ADN automáticamente. Entra como señal para que el estudiante la valide, cuestione o conecte con evidencia.</p>
        <div class="field"><label>Estudiante / evidencia</label><select id="feedbackEvidence"></select></div>
        <div class="field"><label>Tipo de lectura</label><select id="feedbackMode"><option>Veo</option><option>Me pregunto</option><option>Te propongo mirar</option></select></div>
        <div class="field"><label>Comentario</label><textarea id="feedbackText"></textarea></div>
        <button id="feedbackBtn" class="btn">Enviar señal externa</button>
        <div id="feedbackStatus" class="status"></div>
      </div>
    </div>
  </section>
</div>`;

const $=id=>document.getElementById(id);

async function loadProfile(){
  const {data}=await supabase.from('profiles').select('*').eq('id',session.user.id).single();
  profile=data;
}

async function refresh(){
  const {data:{session:s}}=await supabase.auth.getSession();
  session=s;
  if(!session){
    $('authView').classList.remove('hidden'); $('cmsView').classList.add('hidden'); $('userArea').innerHTML='';
    return;
  }
  await loadProfile();
  $('authView').classList.add('hidden'); $('cmsView').classList.remove('hidden');
  $('userArea').innerHTML=`<span class="role">${profile?.role||'usuario'}</span> <button id="logoutBtn" class="btn ghost">Salir</button>`;
  $('logoutBtn').onclick=()=>supabase.auth.signOut();
  const teacher=profile?.role==='teacher'||profile?.role==='admin';
  $('teacherPanel').classList.toggle('hidden',!teacher);
  $('studentPanel').classList.toggle('hidden',teacher);
  await loadEvidence();
}

$('loginBtn').onclick=async()=>{
  const {error}=await supabase.auth.signInWithPassword({email:$('loginEmail').value,password:$('loginPassword').value});
  $('loginStatus').textContent=error?error.message:'Acceso correcto';
};
$('signupBtn').onclick=async()=>{
  const {data,error}=await supabase.auth.signUp({email:$('signupEmail').value,password:$('signupPassword').value,options:{emailRedirectTo:window.location.origin,data:{name:$('signupName').value,role:$('signupRole').value}}});
  $('signupStatus').textContent=error?error.message:'Cuenta creada. Revisa tu correo si la confirmación está activa.';
};
supabase.auth.onAuthStateChange(()=>refresh());

$('uploadBtn').onclick=async()=>{
  const f=$('file').files[0]; if(!f){$('uploadStatus').textContent='Selecciona un archivo.';return}
  const path=`${session.user.id}/${crypto.randomUUID()}-${f.name}`;
  const up=await supabase.storage.from('evidence').upload(path,f);
  if(up.error){$('uploadStatus').textContent=up.error.message;return}
  const row=await supabase.from('evidence').insert({student_id:session.user.id,course:$('course').value,project:$('project').value,reflection:$('reflection').value,file_path:path,file_name:f.name,mime_type:f.type}).select().single();
  $('uploadStatus').textContent=row.error?row.error.message:'Evidencia guardada.';
  await loadEvidence();
};

async function loadEvidence(){
  let q=supabase.from('evidence').select('*,profiles!evidence_student_id_fkey(name)').order('created_at',{ascending:false});
  if(profile?.role==='student') q=q.eq('student_id',session.user.id);
  const {data,error}=await q;
  if(error){$('evidenceList').textContent=error.message;return}
  $('evidenceList').innerHTML=(data||[]).map(e=>`<div class="evidence" data-id="${e.id}"><b>${e.project||'Sin título'}</b> · ${e.course||'Sin materia'}<div class="status">${e.reflection||''}</div><span class="tag">${e.file_name}</span></div>`).join('')||'<div class="status">Todavía no hay evidencias.</div>';
  if(profile?.role!=='student'){
    $('feedbackEvidence').innerHTML=(data||[]).map(e=>`<option value="${e.id}">${e.profiles?.name||'Estudiante'} · ${e.project||e.file_name}</option>`).join('');
  }
  window.latestEvidence=data?.[0]||null;
}

$('feedbackBtn').onclick=async()=>{
  const {error}=await supabase.from('feedback').insert({
    teacher_id:session.user.id,
    evidence_id:$('feedbackEvidence').value,
    mode:$('feedbackMode').value,
    comment:$('feedbackText').value
  });
  $('feedbackStatus').textContent=error?error.message:'Señal externa enviada.';
  if(!error) $('feedbackText').value='';
};

$('aiBtn').onclick=async()=>{
  if(!window.latestEvidence){$('aiOutput').textContent='Primero sube una evidencia.';return}
  $('aiOutput').textContent='Analizando…';
  const r=await fetch('/api/curate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
    project:window.latestEvidence.project,
    course:window.latestEvidence.course,
    reflection:window.latestEvidence.reflection
  })});
  const data=await r.json();
  if(!r.ok){$('aiOutput').textContent=data.error||'No se pudo analizar.';return}
  $('aiOutput').innerHTML=`<b>Hipótesis:</b> ${data.hypothesis}<br><br><b>Pregunta:</b> ${data.question}<br><br><b>Capacidades:</b> ${data.capabilities.join(' · ')}`;
};

refresh();
