import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://crsqlxzivmrocvtoonku.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ZIof7M3OQ6gpz6dCYq2n4Q_PmJMLIjH';
const supabase = createClient(supabaseUrl, supabaseKey);

const PILOT_TEACHER_EMAIL='profesor@curador.ia';
const PILOT_TEACHER_PASSWORD='Curador2026!';
let pilotTeacherMode=false;

const DEMO_IMAGES = [
  'https://raw.githubusercontent.com/edludert/curador-ia/main/01.jpg',
  'https://raw.githubusercontent.com/edludert/curador-ia/main/02.jpg',
  'https://raw.githubusercontent.com/edludert/curador-ia/main/03.jpg',
  'https://raw.githubusercontent.com/edludert/curador-ia/main/04.jpg'
];

const curriculum = {
  1:[['A1001B','Historia del arte, diseño y ciudad'],['A1007','Teoría del arte, diseño y ciudad'],['AR1010B','Fundamentos de diseño'],['AR1029','Dibujo y expresión gráfica'],['DL1024','Métodos creativos'],['EG1006','Optativa de matemáticas y ciencias'],['H1007S','Inducción al servicio social'],['STEC1101S','Semana tec optativa I']],
  2:[['A1002B','Programación creativa'],['A1003B','Experimentación digital'],['AR1030','Investigación para industrias creativas'],['AR1031','Análisis y visualización de datos'],['DL1025','Diseño con matemáticas y física'],['EG1007','Optativa humanidades/bellas artes'],['HI1034','Inglés académico'],['STEC1102S','Semana tec optativa II'],['STEC1103S','Semana tec optativa III'],['VA1002B','Exploración disciplinar']],
  3:[['DL1001B','Estudio diseño I'],['DL1002B','Geometría'],['DL1026','Materiales I'],['DL1027','Dibujo y representación'],['EG1008','Optativa'],['STEC1104S','Semana tec IV'],['STEC1105S','Semana tec V']],
  4:[['DL2007B','Teorías y métodos'],['DL2008B','Estudio II'],['DL2060','Modelación'],['DL2061','Materiales II'],['EG1009','Optativa'],['STEC1106S','Semana tec VI'],['STEC2001S','Semana tec disciplinar']],
  5:[['DL2009B','Diseño y tecnología'],['DL2010B','Estudio III'],['DL2062','Historia y crítica'],['DL2063','Gestión'],['DL2064','Diseño para la vida'],['DL2065','Diseño especulativo'],['EG1010','Optativa'],['STEC1107S','Semana tec VII'],['STEC2002S','Vida profesional']],
  6:[['OP3098','Optativa profesional I'],['OP3099','Optativa profesional II'],['OP3100','Optativa profesional III'],['OP3101','Optativa profesional IV'],['OP3102','Optativa profesional V'],['OP3103','Optativa profesional VI'],['STEC1108S','Semana tec VIII'],['STEC1109S','Semana tec IX']],
  7:[['STEC1110S','Semana tec X'],['STEC1111S','Semana tec XI'],['VA3117','Tópicos I'],['VA3118','Tópicos II'],['VA3119','Tópicos III'],['VA3120','Tópicos IV'],['VA3121','Tópicos V'],['VA3122','Tópicos VI']],
  8:[['DL3023B','Estudio IV'],['OP3013B','Optativa multidisciplinar'],['STEC1112S','Semana tec XII'],['STEC3001S','Examen fin de carrera']]
};

const capabilities = [
  ['INVESTIGAR',['Investigación','Observación','Escucha y empatía','Problem framing']],
  ['PENSAR',['Pensamiento crítico','Pensamiento sistémico','Pensamiento de futuros','Pensamiento creativo','Conceptualización']],
  ['HACER',['Experimentación','Prototipado','Visualización','Materialización','Criterio de diseño']],
  ['DIRIGIR',['Dirección creativa','Curaduría','Storytelling','Facilitación','Co-diseño','Negociación']],
  ['CUIDAR',['Pensamiento ético','Inclusión','Aprendizaje continuo']],
  ['IA',['Alfabetización en IA','Interacción con IA','Orquestación de IA','Evaluación de outputs','Detección de sesgos','Trazabilidad','Autoría']]
];

const demoEvidence = [
  {id:'demo-01',semester:1,course:'AR1029 · Dibujo y expresión gráfica',project:'Cuerpo, línea y observación',reflection:'Descubrí que dibujar más lento me obliga a observar relaciones que normalmente doy por hechas. El dibujo empezó a funcionar como una forma de entender, no sólo de representar.',file_name:'01.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]},
  {id:'demo-02',semester:1,course:'DL1024 · Métodos creativos',project:'Variaciones imposibles',reflection:'Cuando dejé de buscar una primera idea “correcta”, aparecieron conexiones más inesperadas. Repetir y variar fue más útil que elegir demasiado pronto.',file_name:'02.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[1]},
  {id:'demo-03',semester:1,course:'AR1010B · Fundamentos de diseño',project:'Sistema y composición',reflection:'Entendí que una decisión formal nunca está aislada. Cambiar proporción, ritmo o jerarquía modifica todo el sistema.',file_name:'03.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'demo-04',semester:1,course:'A1001B · Historia del arte, diseño y ciudad',project:'Lecturas de ciudad',reflection:'Empecé a mirar la ciudad como una superposición de decisiones, memorias y conflictos. Diseñar también implica aprender a leer lo que ya existe.',file_name:'04.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]},

  {id:'demo-05',semester:2,course:'A1002B · Programación creativa',project:'Reglas que dibujan',reflection:'Programar me obligó a pensar en reglas antes que en formas. Me interesó perder un poco de control y observar lo que el sistema podía producir.',file_name:'01.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[1]},
  {id:'demo-06',semester:2,course:'A1003B · Experimentación digital',project:'Error digital',reflection:'Un fallo visual dejó de ser un problema cuando entendí que podía convertirse en lenguaje. El error empezó a funcionar como material.',file_name:'02.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'demo-07',semester:2,course:'AR1030 · Investigación para industrias creativas',project:'Observar antes de proponer',reflection:'Me di cuenta de que muchas veces quería diseñar demasiado pronto. Aprender a observar y formular mejores preguntas cambió la manera en que inicio un proyecto.',file_name:'03.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]},
  {id:'demo-08',semester:2,course:'AR1031 · Análisis y visualización de datos',project:'Patrones invisibles',reflection:'Visualizar información me ayudó a encontrar relaciones que no había visto en una tabla. La representación también produce conocimiento.',file_name:'04.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]},

  {id:'demo-09',semester:3,course:'DL1001B · Estudio diseño I',project:'Objeto y comportamiento',reflection:'Todavía estoy entendiendo cuándo una decisión formal realmente responde al comportamiento que quiero provocar y cuándo sólo responde a una preferencia estética.',file_name:'01.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'demo-10',semester:3,course:'DL1026 · Materiales I',project:'Aprender con la materia',reflection:'Estoy empezando a confiar más en lo que el material me obliga a cambiar. A veces el proyecto mejora cuando dejo de imponerle una forma.',file_name:'02.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]},
  {id:'demo-11',semester:3,course:'DL1027 · Dibujo y representación',project:'Representar para decidir',reflection:'Uso el dibujo para comparar posibilidades antes de comprometerme con una solución. Me sirve para pensar rápido y también para cuestionar lo que creía resuelto.',file_name:'03.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]}
];

const demoCareerReflections = [
  {question:'¿Qué ha cambiado en tu manera de diseñar desde que empezaste la carrera?',answer:'Antes pensaba que diseñar era llegar rápido a una buena forma. Ahora me interesa más entender qué decisiones me llevaron hasta ahí y qué aprendí durante el proceso.',theme:'TRAYECTORIA',date:'Ago 2026'},
  {question:'¿Qué error terminó enseñándote algo importante sobre tu manera de trabajar?',answer:'Descubrí que cuando intento controlar demasiado pronto el resultado, dejo de ver posibilidades. Equivocarme me ayuda a abrir el proyecto.',theme:'ERROR',date:'Sep 2026'},
  {question:'¿Qué parte de tu proceso reconoces como especialmente tuya?',answer:'Necesito dibujar, hacer listas, mover referencias y probar físicamente antes de sentir que entiendo un problema.',theme:'AUTORÍA',date:'Oct 2026'}
];

const app = document.querySelector('#app');
let session = null;
let profile = null;
let evidence = [];
let feedback = [];
let students = [];
let currentView = 'home';
let latestReading = null;
let selectedCapability = 'Experimentación';
let selectedCourse = null;
let openUploadOnArchive = false;
const allEvidence = () => [...evidence, ...demoEvidence.filter(d=>!evidence.some(e=>e.id===d.id))];

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function authMarkup(){
  return `
  <div class="auth-shell">
    <div class="auth-brand"><div class="logo">CURADOR.IA</div><div class="sub">Archivo vivo de proceso humano y ADN creativo.</div></div>
    <div class="auth-grid">
      <section class="card">
        <div class="k">ENTRAR</div><h2>Acceso</h2>
        <div class="field"><label>Email</label><input id="loginEmail" type="email"></div>
        <div class="field"><label>Contraseña</label><input id="loginPassword" type="password"></div>
        <button id="loginBtn" class="btn">Entrar</button>
        <div id="loginStatus" class="status"></div>
      </section>
      <section class="card">
        <div class="k">PRUEBA PILOTO</div><h2>Crear cuenta</h2>
        <div class="field"><label>Nombre</label><input id="signupName"></div>
        <div class="field"><label>Tipo de cuenta</label><input value="Estudiante" disabled></div>
        <div class="field"><label>Email</label><input id="signupEmail" type="email"></div>
        <div class="field"><label>Contraseña</label><input id="signupPassword" type="password"></div>
        <button id="signupBtn" class="btn ghost">Crear cuenta</button>
        <div id="signupStatus" class="status"></div>
      </section>
    </div>
  </div>`;
}

function navItems(){
  const student = [
    ['home','Inicio'],['archive','Archivo'],['courses','Materias'],['capabilities','Capacidades'],
    ['dna','ADN'],['introspection','Introspección'],['curator','CURADOR.IA'],['profile','Perfil vivo']
  ];
  const teacher = [
    ['home','Inicio'],['students','Estudiantes'],['review','Revisar proceso'],['dna','Lectura ADN'],['feedback','Feedback']
  ];
  return (profile?.role==='teacher'||profile?.role==='admin') ? teacher : student;
}

function shellMarkup(){
  return `
  <div class="app">
    <aside>
      <div class="logo">CURADOR.IA</div>
      <div class="sub">Archivo vivo de proceso humano y ADN creativo.</div>
      <div class="who">
        <b>${esc(profile?.name || session?.user?.email || 'Usuario')}</b>
        <span>${esc(profile?.role || 'usuario')}</span>
        ${pilotTeacherMode?'<span class="pilot-badge">MODO DEMO · no conectado a estudiantes reales</span>':''}
      </div>
      <nav id="nav">${navItems().map(([id,label])=>`<button data-view="${id}" class="${id===currentView?'active':''}">${label}</button>`).join('')}</nav>
      <button id="logoutBtn" class="logout">Cerrar sesión</button>
    </aside>
    <main id="mainView"></main>
  </div>`;
}

function homeView(){
  const total = allEvidence().length;
  const sems = [...new Set(allEvidence().map(e=>e.semester).filter(Boolean))].length;
  return `
  <section class="view active clean-home">
    <div class="eyebrow">${profile?.role==='teacher'?'VISTA DOCENTE':'PERFIL EN CONSTRUCCIÓN'}</div>
    <h1>Haz visible cómo piensas, decides y creas.</h1>
    <p class="intro">CURADOR.IA acompaña la trayectoria y convierte evidencias, decisiones, reflexiones y feedback en un archivo vivo de proceso humano y ADN creativo.</p>
    <div class="home-actions">
      ${profile?.role==='teacher'?'':'<button class="btn" id="homeAddEvidence">+ Agregar evidencia</button>'}
      <button class="btn ghost" data-go="${profile?.role==='teacher'?'review':'archive'}">${profile?.role==='teacher'?'Revisar procesos':'Abrir archivo'}</button>
      <button class="btn ghost" data-go="${profile?.role==='teacher'?'feedback':'curator'}">${profile?.role==='teacher'?'Dar feedback':'Hablar con CURADOR.IA'}</button>
    </div>
    <div class="home-index">
      <div><span class="k">EVIDENCIAS</span><b>${total}</b></div>
      <div><span class="k">SEMESTRES</span><b>${sems}</b></div>
      <div><span class="k">LECTURA</span><b>${latestReading?'Activa':'En proceso'}</b></div>
    </div>
    <div class="statement">El portafolio deja de ser un cierre: se convierte en una lectura continua de cómo una persona aprende, decide, crea y evoluciona.</div>
  </section>`;
}

function demoArchiveCards(){
  return DEMO_IMAGES.map((src,i)=>`
    <article class="media-card ${i===0?'span7':'span5'}" data-kind="image">
      <img class="real-image" src="${src}" alt="Evidencia visual de proceso ${i+1}" loading="lazy" onerror="this.closest('.media-card').classList.add('img-error')">
      <div class="meta"><span class="type">Proceso visual</span><b>${['Exploración material','Bocetos y variaciones','Prueba de forma','Iteración y detalle'][i]}</b></div>
    </article>`).join('');
}

async function evidenceCard(e){
  let src = e.demo_image || '';
  if(!src && e.mime_type?.startsWith('image/') && e.file_path){
    const {data} = await supabase.storage.from('evidence').createSignedUrl(e.file_path, 3600);
    src = data?.signedUrl || '';
  }
  return `
  <article class="media-card span6" data-kind="${src?'image':'file'}">
    ${src ? `<img class="real-image" src="${src}" alt="${esc(e.file_name)}">` : `<div class="file-placeholder">${esc(e.mime_type?.includes('pdf')?'PDF':'ARCHIVO')}</div>`}
    <div class="meta">
      <span class="type">Semestre ${esc(e.semester||'—')} · ${esc(e.course||'Sin materia')}</span>
      <b>${esc(e.project||e.file_name||'Evidencia')}</b>
      <p class="m">${esc(e.reflection||'')}</p>
    </div>
  </article>`;
}

function reflectionCards(){
  const rows=allEvidence().filter(e=>e.reflection && e.reflection.trim());
  if(!rows.length){
    return `
      <article class="media-card quote span6" data-kind="reflection">
        <div class="quote-inner">
          <span class="type">REFLEXIÓN</span>
          <p>“¿Qué decisión de este proceso sientes que fue verdaderamente tuya?”</p>
          <small>Ejemplo de reflexión · CURADOR.IA</small>
        </div>
      </article>`;
  }
  return rows.map(e=>`
    <article class="media-card quote span6" data-kind="reflection">
      <div class="quote-inner">
        <span class="type">REFLEXIÓN · SEMESTRE ${esc(e.semester||'—')}</span>
        <p>“${esc(e.reflection)}”</p>
        <small>${esc(e.project||e.file_name||'Evidencia')} · ${esc(e.course||'')}</small>
      </div>
    </article>`).join('');
}

async function archiveView(){
  const dynamicCards = await Promise.all(allEvidence().map(evidenceCard));
  return `
  <section class="view active">
    <div class="k">ARCHIVO VIVO</div><h1>Proceso antes que resultado.</h1>
    <p class="lead">Aquí conviven bocetos, pruebas, mapas, textos, errores, decisiones, imágenes, videos y reflexiones. No es una galería de “finales”; es trazabilidad.</p>
    <div class="archive-toolbar">
      <button class="btn" id="openUpload">+ Nueva evidencia</button>
      <div class="toggle"><button class="active" data-filter="all">ALL</button><button data-filter="image">IMÁGENES</button><button data-filter="reflection">REFLEXIONES</button></div>
    </div>
    <div id="uploadPanel" class="card upload-panel ${openUploadOnArchive?'':'hidden'}">
      <div class="k">NUEVA EVIDENCIA</div><h2>Subir proceso</h2>
      <div class="g2 grid">
        <div class="field"><label>Semestre</label><select id="semester"></select></div>
        <div class="field"><label>Materia</label><select id="course"></select></div>
      </div>
      <div class="field"><label>Proyecto</label><input id="project" placeholder="Nombre del proyecto"></div>
      <div class="field"><label>¿Qué decisión estás documentando?</label><textarea id="reflection" placeholder="Qué cambió, qué descubriste, qué descartaste..."></textarea></div>
      <div class="field"><label>Archivo</label><input id="file" type="file" accept="image/*,.pdf"></div>
      <button id="uploadBtn" class="btn">Guardar evidencia</button>
      <div id="uploadStatus" class="status"></div>
    </div>
    <div class="media-grid" id="mediaGrid">
      ${dynamicCards.join('')}
      ${reflectionCards()}
      
    </div>
  </section>`;
}

function coursesView(){
  return `
  <section class="view active">
    <div class="k">TRAYECTORIA</div><h1>Materias</h1>
    <p class="lead">La estructura académica funciona como índice del archivo. En esta prueba, el primer semestre aparece activo y el resto anticipa el recorrido.</p>
    ${Object.entries(curriculum).map(([sem,items])=>`
      <div class="semester-block">
        <div class="semester-number">0${sem}</div>
        <div class="course-list">
          ${items.map(([code,name])=>{
            const count=allEvidence().filter(e=>String(e.course||'').startsWith(code+' ·')||String(e.course||'')===code).length;
            const state=Number(sem)<3?'completed':Number(sem)===3?'current':'future';
            return `<button class="course-link" data-sem="${sem}" data-state="${state}" data-course="${esc(code)}" data-course-name="${esc(name)}"><strong>${esc(name)}</strong><small>${code}${count?' · '+count+' evid.':''}</small></button>`;
          }).join('')}
        </div>
      </div>`).join('')}
  </section>`;
}

function courseDetailView(){
  if(!selectedCourse) return coursesView();
  const matches=allEvidence().filter(e=>{
    const course=String(e.course||'');
    return course.startsWith(selectedCourse.code+' ·') || course===selectedCourse.code || course.includes(selectedCourse.name);
  });
  const reflections=matches.filter(e=>e.reflection && e.reflection.trim());
  return `
  <section class="view active">
    <button class="back-link" id="backToCourses">← Volver a materias</button>
    <div class="course-hero">
      <div class="card">
        <div class="k">MATERIA · SEMESTRE ${selectedCourse.semester}</div>
        <div class="big-title">${esc(selectedCourse.name)}</div>
        <p class="m">${esc(selectedCourse.code)}</p>
        <div class="row">
          <span class="pill">${matches.length} evidencias</span>
          <span class="pill">${reflections.length} reflexiones de proceso</span>
        </div>
      </div>
      <div class="card">
        <div class="k">LECTURA DE LA MATERIA</div>
        <h2>Proceso acumulado</h2>
        <p class="m">Esta vista reúne únicamente lo documentado dentro de esta materia: proyectos, archivos, decisiones y reflexiones ligadas a evidencias.</p>
      </div>
    </div>

    <div class="course-section-head"><div><div class="k">EVIDENCIAS</div><h2>Archivo de la materia</h2></div></div>
    <div id="courseEvidenceGrid" class="media-grid">
      ${matches.length ? '<div class="status">Cargando evidencias…</div>' : '<div class="empty-reflections"><p>Todavía no hay evidencias en esta materia.</p><span>Cuando subas procesos desde Archivo aparecerán aquí automáticamente.</span></div>'}
    </div>

    <div class="course-section-head top-gap"><div><div class="k">REFLEXIONES DE PROCESO</div><h2>Decisiones documentadas</h2></div></div>
    <div class="intro-history">
      ${reflections.length ? reflections.map(e=>`
        <article class="intro-entry">
          <div class="intro-entry-top"><span class="intro-tag">${esc(e.project||'PROCESO')}</span><small>Semestre ${esc(e.semester||selectedCourse.semester)}</small></div>
          <b>${esc(e.project||e.file_name||'Evidencia')}</b>
          <p>${esc(e.reflection)}</p>
        </article>`).join('') : '<div class="empty-reflections"><p>Todavía no hay reflexiones ligadas a evidencias de esta materia.</p><span>Estas son distintas al repositorio general de Introspección.</span></div>'}
    </div>
  </section>`;
}

async function hydrateCourseEvidence(){
  const grid=$('courseEvidenceGrid');
  if(!grid || !selectedCourse) return;
  const matches=allEvidence().filter(e=>{
    const course=String(e.course||'');
    return course.startsWith(selectedCourse.code+' ·') || course===selectedCourse.code || course.includes(selectedCourse.name);
  });
  if(!matches.length) return;
  const cards=await Promise.all(matches.map(evidenceCard));
  grid.innerHTML=cards.join('');
}

function capabilitiesView(){
  return `
  <section class="view active">
    <div class="k">CAPACIDADES</div><h1>Lo que se vuelve visible al hacer.</h1>
    <p class="lead">Las capacidades no son etiquetas fijas. Se sostienen con evidencias y se fortalecen cuando reaparecen en distintos proyectos, materias y decisiones.</p>
    <div class="cap-groups">
      ${capabilities.map(([group,items])=>`
        <div class="cap-group"><h4>${group}</h4><div class="cap-list">
          ${items.map(x=>`<button class="cap-chip ${x===selectedCapability?'active':''}" data-cap="${esc(x)}">${esc(x)}</button>`).join('')}
        </div></div>`).join('')}
    </div>
    <div class="grid g2 top-gap">
      <div class="skill-detail">
        <div class="k">LECTURA ACTUAL</div><div class="big" id="capTitle">${esc(selectedCapability)}</div>
        <p class="m" id="capText">${capabilityDescription(selectedCapability)}</p>
        <div class="cap-evidence">${allEvidence().length} evidencias disponibles para contrastar esta capacidad.</div>
      </div>
      <div class="card"><div class="k">PRINCIPIO</div><h2>Evidencia antes que etiqueta.</h2><p class="m">CURADOR.IA puede sugerir una capacidad; el estudiante decide si la reconoce, la cuestiona o necesita más evidencia.</p></div>
    </div>
  </section>`;
}

function capabilityDescription(name){
  const map={
    'Experimentación':'Prueba alternativas, tolera incertidumbre y convierte fallos o desviaciones en información para la siguiente decisión.',
    'Visualización':'Usa imágenes, diagramas, dibujo o representación para pensar, comunicar y descubrir relaciones.',
    'Investigación':'Formula preguntas, busca referencias, observa y conecta información con decisiones de diseño.',
    'Criterio de diseño':'Hace elecciones justificadas, descarta alternativas y sostiene decisiones con intención.'
  };
  return map[name] || 'Capacidad tentativa que debe leerse a través de evidencias, recurrencias y decisiones documentadas.';
}

function dnaView(){
  const words=['Observa antes de cerrar','Piensa dibujando','Itera con materiales','Cuestiona supuestos','Hace visible el proceso','Conecta escalas','Aprende del error','Cuida la autoría'];
  const pos=[[9,17],[65,12],[13,65],[68,68],[42,8],[42,77],[5,42],[75,42]];
  return `
  <section class="view active">
    <div class="k">ADN CREATIVO</div><h1>Hipótesis, no sentencia.</h1>
    <p class="lead">El ADN se construye con patrones que reaparecen en el tiempo. La IA propone relaciones; la persona conserva la última palabra.</p>
    <div class="dna-layout">
      <div class="dna-board">
        <div class="dna-core"><div><b>${esc(profile?.name||'Tu ADN')}</b><span>lectura viva</span></div></div>
        ${words.map((w,i)=>`<button class="dna-word" style="left:${pos[i][0]}%;top:${pos[i][1]}%">${w}</button>`).join('')}
      </div>
      <div class="dna-panel"><div class="k">LECTURA PROVISIONAL</div><div class="big">Explorar → contrastar → decidir</div><p class="m">Aparece una posible preferencia por comprender a través de hacer visible el proceso, probar y volver sobre decisiones anteriores.</p><div class="notice">Esta lectura es revisable. Necesita evidencia acumulada y validación del estudiante.</div></div>
    </div>
  </section>`;
}

function introspectionView(){
  const saved = window.sessionIntrospections || demoCareerReflections;
  return `
  <section class="view active">
    <div class="k">INTROSPECCIÓN</div><h1>Detenerse también es diseñar.</h1>
    <p class="lead">Un repositorio personal de reflexiones que acompaña toda la carrera. No depende de una materia ni de un proyecto: registra decisiones, intuiciones, dudas, cambios de criterio, autoría y aprendizajes que atraviesan tu trayectoria.</p>
    <div class="intro-shell">
      <div class="intro-card">
        <span class="intro-tag">TRAYECTORIA</span><span class="intro-tag">AUTORÍA</span><span class="intro-tag">DECISIÓN</span>
        <div class="intro-q" id="introQuestion">¿Qué decisión reciente te hizo reconocerte más claramente como diseñador/a?</div>
        <div class="intro-actions">
          <button class="btn ghost intro-next">Otra pregunta</button>
        </div>
      </div>
      <div class="intro-card">
        <label>Tu reflexión</label>
        <textarea id="introResponse" class="intro-textarea" placeholder="Escribe sin buscar una respuesta perfecta..."></textarea>
        <button id="saveReflection" class="btn">Guardar reflexión</button>
        <div id="introStatus" class="status"></div>
        <div class="intro-source">Estas reflexiones forman una memoria longitudinal de la carrera y alimentan la lectura del perfil vivo.</div>
      </div>
    </div>

    <div class="introspection-repo">
      <div class="repo-head">
        <div><div class="k">REPOSITORIO</div><h2>Reflexiones de trayectoria</h2></div>
        <span class="pill">${saved.length} guardadas</span>
      </div>
      <div id="introspectionHistory" class="intro-history">
        ${saved.length ? saved.map((r,i)=>`
          <article class="intro-entry">
            <div class="intro-entry-top"><span class="intro-tag">${esc(r.theme||'TRAYECTORIA')}</span><small>${esc(r.date||'')}</small></div>
            <b>${esc(r.question)}</b>
            <p>${esc(r.answer)}</p>
          </article>`).join('') : `
          <div class="empty-reflections">
            <p>Todavía no hay reflexiones guardadas.</p>
            <span>Este espacio irá creciendo semestre a semestre como una memoria personal de tu práctica.</span>
          </div>`}
      </div>
    </div>
  </section>`;
}

function curatorView(){
  return `
  <section class="view active">
    <div class="k">CURADOR.IA</div><h1>Una lectura que pregunta antes de definir.</h1>
    <p class="lead">Analiza la evidencia más reciente para proponer una hipótesis tentativa, una pregunta y capacidades posibles. Mientras la API no tenga créditos, usamos el modo simulación.</p>
    <div class="grid g2">
      <div class="card">
        <div class="k">EVIDENCIA DE ENTRADA</div>
        ${allEvidence()[0] ? `<h2>${esc(allEvidence()[0].project||allEvidence()[0].file_name)}</h2><p class="m">${esc(allEvidence()[0].reflection||'Sin reflexión')}</p><span class="pill">${esc(allEvidence()[0].course||'')}</span>` : '<h2>Sin evidencia todavía</h2><p class="m">Sube una evidencia desde Archivo para comenzar.</p>'}
        <button id="aiBtn" class="btn top-gap">Analizar evidencia más reciente</button>
      </div>
      <div class="curator">
        <div class="k">LECTURA</div><div id="aiOutput">${latestReading ? readingMarkup(latestReading) : '<h2>Aún no hay lectura.</h2><p class="m">La lectura aparecerá aquí.</p>'}</div>
      </div>
    </div>
  </section>`;
}

function readingMarkup(data){
  return `${data.simulation?'<span class="sim">SIMULACIÓN</span>':''}<h2>Hipótesis</h2><p>${esc(data.hypothesis)}</p><h3>Pregunta</h3><p>${esc(data.question)}</p><h3>Capacidades posibles</h3><div class="row">${(data.capabilities||[]).map(c=>`<span class="pill dark">${esc(c)}</span>`).join('')}</div>${data.note?`<p class="mini">${esc(data.note)}</p>`:''}`;
}

function profileView(){
  const projectCount=allEvidence().length;
  return `
  <section class="view active">
    <div class="k">PERFIL VIVO</div><h1>Una narrativa que cambia con la trayectoria.</h1>
    <div class="profile-hero">
      <div class="card"><div class="profile-statement">“Diseño para entender relaciones, hacer visible el proceso y aprender a través de la prueba.”</div><div class="profile-status">Declaración provisional · editable conforme crece el archivo</div></div>
      <div class="profile-meta">
        <div class="stat"><span>Proyectos documentados</span><b>${projectCount||'04'}</b></div>
        <div class="stat"><span>Lectura ADN</span><b>Viva</b></div>
      </div>
    </div>
    <div class="live-tabs"><button class="live-tab active" data-live="projects">Proyectos</button><button class="live-tab" data-live="caps">Capacidades</button><button class="live-tab" data-live="adn">ADN creativo</button><button class="live-tab" data-live="process">Proceso + autoría</button></div>
    <div id="liveContent">
      ${profileProjects()}
    </div>
  </section>`;
}

function profileProjects(){
  if(!allEvidence().length) return `<div class="project-story"><div><div class="k">PROYECTO</div><h2>Exploración de proceso</h2></div><div><div class="story-block"><div class="story-label">Decisión</div><p>Convertir el proceso en material visible, no esconder las pruebas intermedias.</p></div><div class="story-block"><div class="story-label">Aprendizaje</div><p>Las iteraciones permiten explicar cómo se llegó a una decisión.</p></div></div></div>`;
  return allEvidence().slice(0,6).map(e=>`<div class="project-story"><div><div class="k">SEMESTRE ${esc(e.semester||'—')}</div><h2>${esc(e.project||e.file_name)}</h2><span class="pill">${esc(e.course||'')}</span></div><div><div class="story-block"><div class="story-label">Reflexión</div><p>${esc(e.reflection||'Sin reflexión documentada.')}</p></div></div></div>`).join('');
}

function teacherStudentsView(){
  const list=students.length?students:[{id:'demo-lucia',name:'Lucía Romo',role:'student'}];
  return `
  <section class="view active"><div class="k">DOCENTE</div><h1>Estudiantes</h1>
  ${pilotTeacherMode?'<div class="notice">Estás en modo profesor piloto. Esta vista usa datos simulados y no puede consultar estudiantes reales de Supabase. Para ver a Edgar necesitas entrar con una cuenta real cuyo rol en profiles sea teacher.</div>':''}
  <p class="lead">Las cuentas reales registradas como estudiantes aparecen aquí automáticamente, aunque todavía no hayan subido evidencia.</p>
  <div class="teacher-grid"><div class="teacher-card">${list.map(s=>{
    const count=evidence.filter(e=>e.student_id===s.id || e.profiles?.name===s.name).length;
    return `<div class="student-row"><div><b>${esc(s.name||'Estudiante')}</b><div class="signal">${count} evidencias · ${count?'proceso activo':'aún sin evidencias'}</div></div><button class="btn ghost small" data-go="review">Revisar</button></div>`;
  }).join('')}</div><div class="teacher-card"><div class="k">PRINCIPIO</div><h2>Ver lo que el estudiante todavía no ve.</h2><p class="m">La lectura del profesor entra como señal externa y requiere interpretación del estudiante.</p></div></div></section>`;
}

async function teacherReviewView(){
  const cards=await Promise.all(evidence.map(evidenceCard));
  return `<section class="view active"><div class="k">REVISAR PROCESO</div><h1>Evidencias del grupo</h1><p class="lead">Navega evidencias antes de formular feedback.</p><div class="media-grid">${cards.join('')||demoArchiveCards()}</div></section>`;
}

function feedbackView(){
  return `
  <section class="view active"><div class="k">FEEDBACK</div><h1>Señal externa</h1><p class="lead">Veo · Me pregunto · Te propongo mirar. El feedback no modifica el ADN automáticamente.</p>
  <div class="teacher-grid">
    <div class="teacher-card">
      <div class="field"><label>Estudiante / evidencia</label><select id="feedbackEvidence">${evidence.map(e=>`<option value="${e.id}">${esc(e.profiles?.name||'Estudiante')} · ${esc(e.project||e.file_name)}</option>`).join('')}</select></div>
      <div class="field"><label>Tipo de lectura</label><select id="feedbackMode"><option>Veo</option><option>Me pregunto</option><option>Te propongo mirar</option></select></div>
      <div class="field"><label>Comentario</label><textarea id="feedbackText"></textarea></div>
      <button id="feedbackBtn" class="btn">Enviar señal externa</button><div id="feedbackStatus" class="status"></div>
    </div>
    <div class="teacher-card"><div class="k">HISTORIAL</div><div class="feedback-log">${feedback.map(f=>`<div class="feedback-entry"><span>${esc(f.mode)}</span><p>${esc(f.comment)}</p></div>`).join('')||'<p class="m">Todavía no hay señales externas.</p>'}</div></div>
  </div></section>`;
}

async function renderView(){
  const main=$('mainView');
  if(!main) return;
  const views={
    home:()=>homeView(),
    archive:()=>archiveView(),
    courses:()=>coursesView(),
    courseDetail:()=>courseDetailView(),
    capabilities:()=>capabilitiesView(),
    dna:()=>dnaView(),
    introspection:()=>introspectionView(),
    curator:()=>curatorView(),
    profile:()=>profileView(),
    students:()=>teacherStudentsView(),
    review:()=>teacherReviewView(),
    feedback:()=>feedbackView()
  };
  main.innerHTML=await (views[currentView]||views.home)();
  bindView();
}

function setView(id){
  currentView=id;
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===id || (id==='courseDetail' && b.dataset.view==='courses')));
  renderView();
}

function populateSemesters(){
  if(!$('semester')) return;
  $('semester').innerHTML=Object.keys(curriculum).map(s=>`<option value="${s}">Semestre ${s}</option>`).join('');
  populateCourses();
}
function populateCourses(){
  if(!$('course')||!$('semester')) return;
  const s=$('semester').value||'1';
  $('course').innerHTML=(curriculum[s]||[]).map(([code,name])=>`<option value="${code} · ${name}">${code} · ${name}</option>`).join('');
}

function bindView(){
  document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>setView(b.dataset.go));
  if($('homeAddEvidence')) $('homeAddEvidence').onclick=()=>{openUploadOnArchive=true;setView('archive');};
  document.querySelectorAll('.course-link[data-course]').forEach(btn=>btn.onclick=()=>{
    selectedCourse={code:btn.dataset.course,name:btn.dataset.courseName,semester:btn.dataset.sem};
    setView('courseDetail');
  });
  if($('backToCourses')) $('backToCourses').onclick=()=>{selectedCourse=null;setView('courses');};
  if($('openUpload')) $('openUpload').onclick=()=>{$('uploadPanel').classList.toggle('hidden');populateSemesters();};
  if(currentView==='archive' && openUploadOnArchive){populateSemesters();openUploadOnArchive=false;}
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.onclick=()=>{
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('#mediaGrid .media-card').forEach(card=>{
      const kind=card.dataset.kind;
      card.classList.toggle('hidden', filter!=='all' && !(filter==='image' ? kind==='image' : kind===filter));
    });
  });
  if($('semester')) {$('semester').onchange=populateCourses;populateSemesters();}
  if($('uploadBtn')) $('uploadBtn').onclick=uploadEvidence;
  document.querySelectorAll('.cap-chip').forEach(b=>b.onclick=()=>{selectedCapability=b.dataset.cap;renderView();});
  const qs=[
    '¿Qué decisión reciente te hizo reconocerte más claramente como diseñador/a?',
    '¿Qué has cambiado de opinión desde que empezaste la carrera?',
    '¿Qué error terminó enseñándote algo importante sobre tu manera de trabajar?',
    '¿Qué parte de tu proceso te cuesta explicar, pero sabes que es importante?',
    '¿Qué haces hoy de manera distinta a como lo hacías hace un año?',
    '¿Qué tipo de problemas te atraen una y otra vez?',
    '¿Cuándo sientes que una idea realmente se vuelve tuya?',
    '¿Qué papel ocupa la intuición en tus decisiones?',
    '¿Qué relación quieres construir con la IA dentro de tu práctica?',
    '¿Qué valor no estarías dispuesto/a a sacrificar en un proyecto?'
  ];
  if(document.querySelector('.intro-next')) document.querySelector('.intro-next').onclick=()=>{
    const q=$('introQuestion'); q.textContent=qs[(qs.indexOf(q.textContent)+1)%qs.length];
  };
  if($('saveReflection')) $('saveReflection').onclick=()=>{
    const answer=$('introResponse').value.trim();
    if(!answer){$('introStatus').textContent='Escribe una reflexión antes de guardarla.';return;}
    window.sessionIntrospections=window.sessionIntrospections||[...demoCareerReflections];
    window.sessionIntrospections.unshift({
      question:$('introQuestion').textContent,
      answer,
      theme:'TRAYECTORIA',
      date:new Date().toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'})
    });
    $('introStatus').textContent='Reflexión guardada en tu repositorio de trayectoria.';
    $('introResponse').value='';
    renderView();
  };
  if($('aiBtn')) $('aiBtn').onclick=analyzeLatest;
  document.querySelectorAll('.live-tab').forEach(btn=>btn.onclick=()=>{
    document.querySelectorAll('.live-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const mode=btn.dataset.live;
    $('liveContent').innerHTML=mode==='projects'?profileProjects():mode==='caps'
      ?`<div class="capability-ledger">${capabilities.flatMap(g=>g[1]).slice(0,10).map((c,i)=>`<div class="cap-row"><strong>${esc(c)}<span>${i<3?'Consolidando':'Explorando'}</span></strong><small>Lectura tentativa basada en evidencia acumulada.</small></div>`).join('')}</div>`
      :mode==='adn'?`<div class="dna-live-grid"><div class="dna-live-card"><h2>Piensa haciendo</h2><p class="m">Las pruebas y representaciones aparecen como herramientas de pensamiento.</p></div><div class="dna-live-card"><h2>Aprende del error</h2><p class="m">Las desviaciones pueden convertirse en evidencia de aprendizaje.</p></div></div>`
      :`<div class="provenance-grid"><div class="prov"><b>Humano</b><span>Decisiones, criterio, autoría</span></div><div class="prov"><b>IA</b><span>Organización y lectura tentativa</span></div><div class="prov"><b>Docente</b><span>Señales externas</span></div><div class="prov"><b>Evidencia</b><span>Trazabilidad del proceso</span></div></div>`;
  });
  if($('feedbackBtn')) $('feedbackBtn').onclick=sendFeedback;
  if(currentView==='courseDetail') hydrateCourseEvidence();
}

async function uploadEvidence(){
  const f=$('file')?.files[0];
  if(!f){$('uploadStatus').textContent='Selecciona un archivo.';return;}
  $('uploadStatus').textContent='Subiendo…';
  const path=`${session.user.id}/${crypto.randomUUID()}-${f.name}`;
  const up=await supabase.storage.from('evidence').upload(path,f);
  if(up.error){$('uploadStatus').textContent=up.error.message;return;}
  const row=await supabase.from('evidence').insert({
    student_id:session.user.id,semester:Number($('semester').value),course:$('course').value,
    project:$('project').value,reflection:$('reflection').value,file_path:path,file_name:f.name,mime_type:f.type
  }).select().single();
  if(row.error){$('uploadStatus').textContent=row.error.message;return;}
  $('uploadStatus').textContent='Evidencia guardada.';
  await loadData(); await renderView();
}

async function analyzeLatest(){
  if(!allEvidence()[0]){$('aiOutput').innerHTML='<p>Primero sube una evidencia.</p>';return;}
  $('aiOutput').innerHTML='<p>Analizando…</p>';
  const r=await fetch('/api/curate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
    project:allEvidence()[0].project,course:allEvidence()[0].course,reflection:allEvidence()[0].reflection
  })});
  const data=await r.json();
  if(!r.ok){$('aiOutput').innerHTML=`<p>${esc(data.error||'No se pudo analizar.')}</p>`;return;}
  latestReading=data;
  $('aiOutput').innerHTML=readingMarkup(data);
}

async function sendFeedback(){
  if(!$('feedbackEvidence')?.value){$('feedbackStatus').textContent='No hay evidencia seleccionada.';return;}
  const {error}=await supabase.from('feedback').insert({
    teacher_id:session.user.id,evidence_id:$('feedbackEvidence').value,
    mode:$('feedbackMode').value,comment:$('feedbackText').value
  });
  $('feedbackStatus').textContent=error?error.message:'Señal externa enviada.';
  if(!error){$('feedbackText').value='';await loadData();}
}

async function loadProfile(){
  if(pilotTeacherMode){profile={id:'pilot-teacher',name:'Profesor Piloto',role:'teacher'};return;}
  const {data,error}=await supabase.from('profiles').select('*').eq('id',session.user.id).single();
  if(error) console.warn(error);
  profile=data || {id:session.user.id,name:session.user.user_metadata?.name||'',role:session.user.user_metadata?.role||'student'};
}

async function loadData(){
  if(pilotTeacherMode){
    evidence=demoEvidence.map(e=>({...e,profiles:{name:'Lucía Romo'},student_id:'demo-lucia'}));
    feedback=[];
    students=[{id:'demo-lucia',name:'Lucía Romo',role:'student'}];
    return;
  }
  if(profile?.role==='teacher'||profile?.role==='admin'){
    const pr=await supabase.from('profiles').select('id,name,role').eq('role','student').order('name',{ascending:true});
    students=pr.data||[];
    if(pr.error) console.warn(pr.error);
  } else {
    students=[];
  }
  let q=supabase.from('evidence').select('*,profiles!evidence_student_id_fkey(name)').order('created_at',{ascending:false});
  if(profile?.role==='student') q=q.eq('student_id',session.user.id);
  const er=await q;
  evidence=er.data||[];
  if(er.error) console.warn(er.error);
  const fr=await supabase.from('feedback').select('*').order('created_at',{ascending:false});
  feedback=fr.data||[];
}

async function renderAuthenticated(){
  app.innerHTML=shellMarkup();
  $('logoutBtn').onclick=()=>{if(pilotTeacherMode){pilotTeacherMode=false;session=null;profile=null;refresh();}else{supabase.auth.signOut();}};
  document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>setView(b.dataset.view));
  await renderView();
}

async function refresh(){
  if(pilotTeacherMode){
    session={user:{id:'pilot-teacher',email:PILOT_TEACHER_EMAIL,user_metadata:{name:'Profesor Piloto',role:'teacher'}}};
    profile={id:'pilot-teacher',name:'Profesor Piloto',role:'teacher'};
    await loadData();
    await renderAuthenticated();
    return;
  }
  const {data:{session:s}}=await supabase.auth.getSession();
  session=s;
  if(!session){
    profile=null;evidence=[];feedback=[];students=[];currentView='home';
    app.innerHTML=authMarkup();
    const enterPilotTeacher=async()=>{
      pilotTeacherMode=true;
      session={user:{id:'pilot-teacher',email:PILOT_TEACHER_EMAIL,user_metadata:{name:'Profesor Piloto',role:'teacher'}}};
      profile={id:'pilot-teacher',name:'Profesor Piloto',role:'teacher'};
      await loadData();
      currentView='home';
      await renderAuthenticated();
    };
    $('loginBtn').onclick=async()=>{
      const email=$('loginEmail').value.trim().toLowerCase();
      const password=$('loginPassword').value.trim();
      if(email===PILOT_TEACHER_EMAIL.toLowerCase() && password===PILOT_TEACHER_PASSWORD){
        await enterPilotTeacher();
        return;
      }
      const {error}=await supabase.auth.signInWithPassword({email,password});
      $('loginStatus').textContent=error?error.message:'Acceso correcto';
    };
    if(new URLSearchParams(location.search).get('pilot')==='teacher'){ const b=document.createElement('button'); b.className='btn ghost pilot-login'; b.textContent='Entrar como profesor piloto'; b.onclick=enterPilotTeacher; $('loginBtn').after(b); }
    $('signupBtn').onclick=async()=>{
      const {error}=await supabase.auth.signUp({email:$('signupEmail').value,password:$('signupPassword').value,options:{emailRedirectTo:window.location.origin,data:{name:$('signupName').value,role:'student'}}});
      $('signupStatus').textContent=error?error.message:'Cuenta creada. Revisa tu correo para confirmar.';
    };
    return;
  }
  await loadProfile();
  await loadData();
  if((profile?.role==='teacher'||profile?.role==='admin') && !['home','students','review','dna','feedback'].includes(currentView)) currentView='home';
  if(profile?.role==='student' && ['students','review','feedback'].includes(currentView)) currentView='home';
  await renderAuthenticated();
}

supabase.auth.onAuthStateChange(()=>refresh());
refresh();
