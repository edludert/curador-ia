import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://crsqlxzivmrocvtoonku.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ZIof7M3OQ6gpz6dCYq2n4Q_PmJMLIjH';
const supabase = createClient(supabaseUrl, supabaseKey);

const LUCIA_DEMO_EMAIL='lucia@curador.ia';
const LUCIA_DEMO_PASSWORD='LuciaPiloto2026!';
let luciaDemoMode=false;

const PLAN2026_DEMO_EMAIL='valeria2026@curador.ia';
const PLAN2026_DEMO_PASSWORD='ValeriaPlan2026!';
let plan2026DemoMode=false;

const PILOT_TEACHER_EMAIL='profesor@curador.ia';
const PILOT_TEACHER_PASSWORD='Curador2026!';
const TEACHER_PILOT_PASSWORD='CuradorPiloto2026!';
const TEACHER_PILOT_EMAILS=[
  'arturo.gil.islas@tec.mx',
  'mmaya@tec.mx',
  'm.tentori@tec.mx',
  'lopezclau@tec.mx',
  'dianajmz_@tec.mx',
  'laura.picca@tec.mx',
  'edgar.ludert@tec.mx'
];
let pilotTeacherMode=false;

const DEMO_IMAGES = [
  'https://raw.githubusercontent.com/edludert/curador-ia/main/01.jpg',
  'https://raw.githubusercontent.com/edludert/curador-ia/main/02.jpg',
  'https://raw.githubusercontent.com/edludert/curador-ia/main/03.jpg',
  'https://raw.githubusercontent.com/edludert/curador-ia/main/04.jpg'
];

const curriculum2026 = {
  1:[['A1001B','Historia del arte, diseño y ciudad'],['A1007','Teoría del arte, diseño y ciudad'],['AR1010B','Fundamentos de diseño'],['AR1029','Dibujo y expresión gráfica'],['DL1024','Métodos creativos'],['EG1006','Optativa de matemáticas y ciencias'],['H1007S','Inducción al servicio social'],['STEC1101S','Semana tec optativa I']],
  2:[['A1002B','Programación creativa'],['A1003B','Experimentación digital'],['AR1030','Investigación para industrias creativas'],['AR1031','Análisis y visualización de datos'],['DL1025','Diseño con matemáticas y física'],['EG1007','Optativa humanidades/bellas artes'],['HI1034','Inglés académico'],['STEC1102S','Semana tec optativa II'],['STEC1103S','Semana tec optativa III'],['VA1002B','Exploración disciplinar']],
  3:[['DL1001B','Estudio diseño I'],['DL1002B','Geometría'],['DL1026','Materiales I'],['DL1027','Dibujo y representación'],['EG1008','Optativa'],['STEC1104S','Semana tec IV'],['STEC1105S','Semana tec V']],
  4:[['DL2007B','Teorías y métodos'],['DL2008B','Estudio II'],['DL2060','Modelación'],['DL2061','Materiales II'],['EG1009','Optativa'],['STEC1106S','Semana tec VI'],['STEC2001S','Semana tec disciplinar']],
  5:[['DL2009B','Diseño y tecnología'],['DL2010B','Estudio III'],['DL2062','Historia y crítica'],['DL2063','Gestión'],['DL2064','Diseño para la vida'],['DL2065','Diseño especulativo'],['EG1010','Optativa'],['STEC1107S','Semana tec VII'],['STEC2002S','Vida profesional']],
  6:[['OP3098','Optativa profesional I'],['OP3099','Optativa profesional II'],['OP3100','Optativa profesional III'],['OP3101','Optativa profesional IV'],['OP3102','Optativa profesional V'],['OP3103','Optativa profesional VI'],['STEC1108S','Semana tec VIII'],['STEC1109S','Semana tec IX']],
  7:[['STEC1110S','Semana tec X'],['STEC1111S','Semana tec XI'],['VA3117','Tópicos I'],['VA3118','Tópicos II'],['VA3119','Tópicos III'],['VA3120','Tópicos IV'],['VA3121','Tópicos V'],['VA3122','Tópicos VI']],
  8:[['DL3023B','Estudio IV'],['OP3013B','Optativa multidisciplinar'],['STEC1112S','Semana tec XII'],['STEC3001S','Examen fin de carrera']]
};

const curriculum2019 = {
  1:[
    ['A1004','Cultura visual y sonora'],
    ['AV1002B','Técnicas y discursos fotográficos'],
    ['CO1001B','Metodologías de investigación de factores humanos'],
    ['DL1022','Metodologías del pensamiento creativo'],
    ['EG1001','Optativa de matemáticas y ciencias'],
    ['EH1001B','Inmersión y experimentación creativa']
  ],
  2:[
    ['AR1001B','Representación formal del espacio'],
    ['AV1001B','Narrativa audiovisual'],
    ['EG1002','Optativa de humanidades y bellas artes'],
    ['EH1008','Imaginarios culturales de México'],
    ['EH1009','Semiótica y narratologías contemporáneas'],
    ['H1001B','Estructuras simbólicas en la imagen, la literatura y la música']
  ],
  3:[
    ['DL2001B','Comunicación digital del producto'],
    ['DL2002B','Configuración del objeto'],
    ['DL2042','Representación visual'],
    ['DL2043','Materia y expresión'],
    ['EG1003','Optativa de ciencias sociales y del comportamiento'],
    ['VA1001B','Tópico de exploración']
  ],
  4:[
    ['DL2003B','Pensamiento y proceso creativo'],
    ['DL2004B','Especificación de productos y servicios'],
    ['DL2005B','Diseño e innovación'],
    ['DL2044','Administración de proyectos de diseño'],
    ['EG1004','Optativa de liderazgo, emprendimiento e innovación']
  ],
  5:[
    ['DL3003B','Diseño de familia de productos'],
    ['DL3004B','Modularidad y optimización'],
    ['DL3005B','Experiencia extendida'],
    ['DL3028','Diseño estratégico'],
    ['DL3009B','Diseño y producción'],
    ['DL3010B','Diseño interactivo'],
    ['DL3011B','Desarrollo de proyecto de estrategia visual'],
    ['DL3029','Comunicación visual y gráfica'],
    ['DL3014B','Integración tecnológica'],
    ['DL3015B','Tecnologías emergentes y transformación digital'],
    ['DL3016B','Materiales inteligentes'],
    ['DL3030','Filosofía del diseño y la tecnología'],
    ['DL3031','Tecnología, diseño y sociedad'],
    ['DL3032','Diseño prospectivo y tecnología']
  ],
  6:[
    ['DL3006B','Forma, función, sentido y valor'],
    ['DL3012B','Diseño de marca, experiencia e interfaz'],
    ['DL3017B','Diseño de productos de base tecnológica y emprendimiento']
  ],
  7:[],
  8:[
    ['DL3002B','Proyecto integral de diseño'],
    ['OP3001B','Optativa profesional multidisciplinaria']
  ]
};

function activeCurriculum(){
  return profile?.plan==='2019' ? curriculum2019 : curriculum2026;
}

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

const demo2026Evidence = [
  {id:'v26-01',semester:1,course:'AR1030 · Investigación para industrias creativas',stage:'Investigación',project:'Rastros de espera en espacios cotidianos',reflection:'Quería entender cómo un espacio aparentemente simple puede afectar el ánimo, la atención y la percepción del tiempo. Decidí registrar no sólo lo que la gente hacía, sino también cómo ocupaba el espacio, qué evitaba tocar, dónde se detenía y qué expresiones corporales repetía. Al inicio estaba observando de forma muy superficial; después entendí que necesitaba organizar la información en patrones y no sólo juntar datos sueltos. Usé IA para ayudarme a agrupar observaciones en categorías iniciales, pero la interpretación final y la síntesis visual fueron mías.',file_name:'rastros-espera.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]},
  {id:'v26-02',semester:1,course:'AR1010B · Fundamentos de diseño',stage:'Conceptualización',project:'Objeto ritual para iniciar el día',reflection:'Quería explorar cómo un objeto puede generar una experiencia emocional y no sólo cumplir una función práctica. Elegí trabajar con la idea de pausa y respiración antes de iniciar actividades, en lugar de diseñar algo puramente utilitario. Mis primeras ideas eran demasiado obvias y formales; después me enfoqué más en la sensación que quería provocar que en la forma final del objeto. No utilicé IA en esta fase.',file_name:'objeto-ritual.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[1]},
  {id:'v26-03',semester:1,course:'DL1024 · Métodos creativos',stage:'Conceptualización',project:'Narrar una experiencia a través de secuencia visual',reflection:'Quería experimentar con la secuencia, el ritmo y la atmósfera para comunicar sensaciones más que explicar de forma literal. Decidí usar contrastes entre imágenes muy cerradas y muy abiertas para generar tensión y luego descanso visual. Me di cuenta de que estaba explicando demasiado y tuve que quitar elementos para confiar más en la fuerza de la secuencia. Usé IA para explorar algunas posibilidades de composición, pero la edición y selección final fueron mías.',file_name:'secuencia-visual.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'v26-04',semester:2,course:'AR1031 · Análisis y visualización de datos',stage:'Investigación',project:'Mapa de relaciones del consumo de agua en vivienda estudiantil',reflection:'Quería dejar de ver el problema sólo como gastar mucha agua y entender relaciones, causas, hábitos, infraestructura y cultura. Elegí trabajar con vivienda estudiantil porque era un contexto cercano. Al principio hice un mapa muy lineal; después entendí que necesitaba visibilizar retroalimentaciones, actores invisibles y consecuencias indirectas. Usé IA para probar formas de organizar visualmente el sistema, pero el diagrama final surgió de mis observaciones y decisiones.',file_name:'mapa-agua.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]},
  {id:'v26-05',semester:2,course:'AR1030 · Investigación para industrias creativas',stage:'Conceptualización',project:'Objeto de memoria para una práctica familiar',reflection:'Quería trabajar la memoria cotidiana y afectiva, no una idea decorativa de identidad. Tomé como punto de partida un gesto doméstico repetido en mi familia y lo convertí en detonador de forma y relato. Me costó no simplificar la cultura; tuve que regresar a relatos concretos y dejar de hablar en términos abstractos. Usé IA para explorar variantes visuales de presentación, pero no para definir el concepto central.',file_name:'memoria-familiar.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]},
  {id:'v26-06',semester:2,course:'A1003B · Experimentación digital',stage:'Prototipado',project:'Sistema para reducir desechables en consumo para llevar',reflection:'Quería pasar de una crítica general al desperdicio a una propuesta concreta capaz de modificar comportamientos. En vez de diseñar un solo objeto, propuse un pequeño sistema de interacción entre usuario, comercio y recipiente. Mi primera idea dependía demasiado de que la gente quisiera cambiar; después entendí que la solución tenía que facilitar el cambio, no sólo pedirlo. Usé IA para simular escenarios de uso y visualizar variantes, pero la estructura del sistema y sus reglas fueron definidas por mí.',file_name:'sistema-desechables.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[1]},
  {id:'v26-07',semester:3,course:'DL1027 · Dibujo y representación',stage:'Prototipado',project:'Kit visual para explicar un proceso complejo',reflection:'Quería hacer comprensible algo complejo sin simplificarlo en exceso. Opté por una estrategia de capas: visión general primero y luego despiece de componentes. Mis primeras pruebas eran demasiado cargadas, así que reduje ruido visual y jerarquicé mejor la información. Utilicé IA para iterar algunas visualizaciones, pero la jerarquía, edición y articulación final fueron mías.',file_name:'kit-visual.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'v26-08',semester:3,course:'DL1001B · Estudio diseño I',stage:'Investigación',project:'Bitácora visual de decisiones en proceso',reflection:'Quería hacer visible el proceso, no sólo el resultado, y entender qué patrones aparecían en mis maneras de investigar y decidir. Decidí documentar errores, dudas y cambios de dirección, no sólo los aciertos. Me costó mostrar partes inacabadas porque sentía que eran débiles, pero después entendí que ahí estaba una parte importante del aprendizaje. Usé IA como interlocutora para contrastar opciones y como apoyo de organización, pero no como autora de las decisiones centrales.',file_name:'bitacora-decisiones.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]}
];

const demo2026CareerReflections = [
  {question:'¿Qué decisión reciente te hizo reconocerte más claramente como diseñadora?',answer:'Me reconocí como diseñadora cuando dejé de buscar la idea correcta y empecé a confiar en mi proceso de observación. Entendí que diseñar para mí no es responder rápido, sino sostener una pregunta el tiempo suficiente para que aparezcan relaciones que no eran evidentes al inicio.',theme:'TRAYECTORIA',date:'Ago 2026'},
  {question:'¿Qué haces tú que no puede resumirse solamente en el resultado final?',answer:'Creo que una parte importante de mi trabajo está en cómo organizo, conecto y traduzco información. Aunque el resultado pueda verse simple, detrás casi siempre hay un esfuerzo por encontrar patrones, hacer mapas y volver visible algo que al principio estaba disperso.',theme:'AUTORÍA',date:'Sep 2026'},
  {question:'¿Dónde sientes tensión cuando trabajas con IA?',answer:'La IA me ayuda a abrir posibilidades y a iterar más rápido, pero también me hace preguntarme qué decisiones siguen siendo realmente mías. La tensión aparece cuando una imagen se ve resuelta demasiado pronto; en esos casos trato de regresar al proceso, a mis notas y a mis criterios para no perder autoría.',theme:'IA + AUTORÍA',date:'Oct 2026'},
  {question:'¿Qué aprendizaje atraviesa varios de tus proyectos?',answer:'He notado que en varios proyectos aparece la necesidad de observar antes de proponer. Me interesa comprender relaciones entre personas, contexto y objetos, y después traducir eso en sistemas visuales, narrativos o materiales que hagan más legible una situación compleja.',theme:'RECURRENCIA',date:'Nov 2026'}
];

const demo2026Profile={id:'demo-valeria-2026',name:'Valeria Soto',role:'student',campus:'Monterrey',semester:3,plan:'2026'};

const demoCareerReflections = [
  {question:'¿Qué ha cambiado en tu manera de diseñar desde que empezaste la carrera?',answer:'Antes pensaba que diseñar era llegar rápido a una buena forma. Ahora me interesa más entender qué decisiones me llevaron hasta ahí y qué aprendí durante el proceso.',theme:'TRAYECTORIA',date:'Ago 2026'},
  {question:'¿Qué error terminó enseñándote algo importante sobre tu manera de trabajar?',answer:'Descubrí que cuando intento controlar demasiado pronto el resultado, dejo de ver posibilidades. Equivocarme me ayuda a abrir el proyecto.',theme:'ERROR',date:'Sep 2026'},
  {question:'¿Qué parte de tu proceso reconoces como especialmente tuya?',answer:'Necesito dibujar, hacer listas, mover referencias y probar físicamente antes de sentir que entiendo un problema.',theme:'AUTORÍA',date:'Oct 2026'}
];

const demoStudents = [
  {id:'demo-lucia',name:'Lucía Romo',role:'student'},
  {id:'demo-diego',name:'Diego Salazar',role:'student'},
  {id:'demo-sofia',name:'Sofía Contreras',role:'student'},
  {id:'demo-regina',name:'Regina Betancourt',role:'student'}
];

const demoStudentEvidence = [
  ...demoEvidence.map(e=>({...e,student_id:'demo-lucia',profiles:{name:'Lucía Romo'}})),
  {id:'diego-01',student_id:'demo-diego',profiles:{name:'Diego Salazar'},semester:1,course:'AR1029 · Dibujo y expresión gráfica',project:'Observación y gesto',reflection:'Aprendí a usar el dibujo como registro rápido para decidir antes de modelar.',file_name:'diego-01.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[1]},
  {id:'diego-02',student_id:'demo-diego',profiles:{name:'Diego Salazar'},semester:2,course:'A1003B · Experimentación digital',project:'Variación algorítmica',reflection:'Me interesa cuándo un sistema produce algo que yo no habría imaginado por mi cuenta.',file_name:'diego-02.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'diego-03',student_id:'demo-diego',profiles:{name:'Diego Salazar'},semester:3,course:'DL1001B · Estudio diseño I',project:'Objeto y uso',reflection:'Estoy empezando a justificar mejor cada decisión a partir del comportamiento del usuario.',file_name:'diego-03.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]},
  {id:'sofia-01',student_id:'demo-sofia',profiles:{name:'Sofía Contreras'},semester:1,course:'DL1024 · Métodos creativos',project:'Conexiones improbables',reflection:'Me sirve combinar referencias lejanas para salir de respuestas demasiado obvias.',file_name:'sofia-01.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]},
  {id:'sofia-02',student_id:'demo-sofia',profiles:{name:'Sofía Contreras'},semester:2,course:'AR1030 · Investigación para industrias creativas',project:'Escuchar antes de diseñar',reflection:'Entendí que entrevistar mejor cambia por completo la dirección del proyecto.',file_name:'sofia-02.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[1]},
  {id:'regina-01',student_id:'demo-regina',profiles:{name:'Regina Betancourt'},semester:1,course:'AR1010B · Fundamentos de diseño',project:'Jerarquía y ritmo',reflection:'Estoy aprendiendo a detectar cuándo una composición se siente clara y por qué.',file_name:'regina-01.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[2]},
  {id:'regina-02',student_id:'demo-regina',profiles:{name:'Regina Betancourt'},semester:2,course:'AR1031 · Análisis y visualización de datos',project:'Narrar con datos',reflection:'La forma de visualizar también cambia la historia que cuenta la información.',file_name:'regina-02.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[3]},
  {id:'regina-03',student_id:'demo-regina',profiles:{name:'Regina Betancourt'},semester:3,course:'DL1026 · Materiales I',project:'Ensayos de material',reflection:'Estoy entendiendo que el material propone límites y oportunidades que debo escuchar.',file_name:'regina-03.jpg',mime_type:'image/jpeg',demo_image:DEMO_IMAGES[0]}
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
let deletedDemoEvidenceIds = new Set();
const allEvidence = () => [...evidence];

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
        <div class="grid g2">
          <div class="field"><label>Nombre</label><input id="signupFirstName" autocomplete="given-name"></div>
          <div class="field"><label>Apellido</label><input id="signupLastName" autocomplete="family-name"></div>
        </div>
        <div id="studentRegistrationFields">
          <div class="grid g2">
            <div class="field"><label>Matrícula</label><input id="signupMatricula" placeholder="A0XXXXXXXX"></div>
            <div class="field"><label>Semestre actual</label>
              <select id="signupSemester">
                <option value="">Selecciona semestre</option>
                <option value="1">1er semestre</option>
                <option value="2">2º semestre</option>
                <option value="3">3er semestre</option>
                <option value="4">4º semestre</option>
                <option value="5">5º semestre</option>
                <option value="6">6º semestre</option>
                <option value="7">7º semestre</option>
                <option value="8">8º semestre</option>
              </select>
            </div>
          </div>
          <div class="field"><label>Plan de estudios</label>
            <select id="signupPlan">
              <option value="">Selecciona plan</option>
              <option value="2019">TEC21 · Plan 2019</option>
              <option value="2026">TEC21 · Plan 2026</option>
            </select>
          </div>

        </div>
          <div class="field"><label>Campus</label>
            <select id="signupCampus">
              <option value="">Selecciona campus</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Monterrey">Monterrey</option>
              <option value="León">León</option>
              <option value="Sonora Norte">Sonora Norte</option>
              <option value="Puebla">Puebla</option>
              <option value="Ciudad de México">Ciudad de México</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Estado de México">Estado de México</option>
            </select>
          </div>
        <div class="field"><label>Tipo de cuenta</label><input id="signupAccountType" value="Estudiante" disabled></div>\n        <div id="teacherPilotNote" class="teacher-pilot-note hidden">Correo docente autorizado.</div>
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
    ['home','Inicio'],['upload','Documentar proceso'],['archive','Bóveda'],['courses','Línea del tiempo'],['capabilities','Competencias'],
    ['dna','ADN'],['introspection','Introspección']
  ];
  const teacher = [
    ['home','Inicio'],['students','Estudiantes'],['review','Revisar proceso'],['feedback','Feedback']
  ];
  return (profile?.role==='teacher'||profile?.role==='admin') ? teacher : student;
}

function shellMarkup(){
  return `
  <div class="app menu-collapsed" id="appShell">
    <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="menu-overlay" id="menuOverlay"></div>
    <aside id="sideMenu" aria-hidden="true">
      <div class="aside-head">
        <div>
          <div class="logo">CURADOR.IA</div>
          <div class="sub">Archivo vivo de proceso humano y ADN creativo.</div>
        </div>
        <button class="menu-close" id="menuClose" aria-label="Cerrar menú">×</button>
      </div>
      <div class="who">
        <div class="welcome-user">Bienvenido(a), ${esc(toTitleCaseName(profile?.name || '') || session?.user?.email || 'Usuario')}</div>
        <span>${esc(profile?.role || 'usuario')}</span>
        ${pilotTeacherMode?'<span class="pilot-badge">MODO DEMO · no conectado a estudiantes reales</span>':''}
      </div>
      <nav id="nav">${navItems().map(([id,label])=>`<button data-view="${id}" class="${id===currentView?'active':''}">${label}</button>`).join('')}</nav>
      <button id="logoutBtn" class="logout">Cerrar sesión</button>
      <div class="drawer-brand">
        <img src="https://fdl.tec.mx/sites/g/files/vgjovo1506/files/Logo-EAAD.png" onerror="this.onerror=null;this.src='/drawer-logo.png?v=1';" alt="Tecnológico de Monterrey · Escuela de Arquitectura, Arte y Diseño">
      </div>
    </aside>
    <main id="mainView"></main>
  </div>`;
}

function teacherHomeView(){
  const list=pilotTeacherMode ? demoStudents : students;
  const rows=pilotTeacherMode ? demoStudentEvidence : evidence;
  const activeIds=new Set(rows.map(e=>e.student_id).filter(Boolean));
  const activeCount=list.filter(s=>activeIds.has(s.id)).length;
  const noEvidenceCount=Math.max(0,list.length-activeCount);
  const projectCount=new Set(rows.map(e=>[e.student_id,e.project].join('||')).filter(Boolean)).size;
  const recent=rows.slice(0,5);

  return `
  <section class="view active teacher-home">
    <div class="teacher-home-hero">
      <div>
        <div class="k">DOCENTE · ${esc(profile?.campus||'Campus sin asignar')}</div>
        <div class="home-welcome">Bienvenido(a), ${esc(toTitleCaseName(profile?.name||'Profesor/a'))}</div>
        <h1>Acompaña procesos, no sólo entregas.</h1>
        <p class="intro">CURADOR.IA reúne la evidencia documentada por estudiantes de tu campus para ayudarte a observar trayectorias, detectar procesos que requieren atención y ofrecer feedback con mayor contexto.</p>
      </div>
      <div class="teacher-home-actions">
        <button class="btn" data-go="students">Ver estudiantes</button>
        <button class="btn ghost" data-go="review">Revisar procesos</button>
        <button class="btn ghost" data-go="feedback">Dar feedback</button>
      </div>
    </div>

    <div class="teacher-dashboard-metrics">
      <div class="teacher-dashboard-metric"><b>${list.length}</b><span>Estudiantes</span></div>
      <div class="teacher-dashboard-metric"><b>${activeCount}</b><span>Con proceso documentado</span></div>
      <div class="teacher-dashboard-metric"><b>${noEvidenceCount}</b><span>Sin evidencia todavía</span></div>
      <div class="teacher-dashboard-metric"><b>${rows.length}</b><span>Evidencias</span></div>
    </div>

    <div class="teacher-dashboard-grid">
      <div class="teacher-card">
        <div class="teacher-section-head">
          <div><div class="k">SEGUIMIENTO</div><h2>Estudiantes del campus</h2></div>
          <button class="btn ghost small" data-go="students">Ver todos</button>
        </div>
        <div class="teacher-home-students">
          ${list.length ? list.slice(0,6).map(s=>{
            const count=rows.filter(e=>e.student_id===s.id).length;
            return `<div class="teacher-home-student">
              <div>
                <b>${esc(toTitleCaseName(s.name||'Estudiante'))}</b>
                <small>Semestre ${esc(s.semester||'—')} · ${count} evidencia${count===1?'':'s'}</small>
              </div>
              <span class="teacher-status ${count?'active':'empty'}">${count?'Proceso activo':'Sin evidencia'}</span>
            </div>`;
          }).join('') : '<div class="empty-reflections"><p>Todavía no hay estudiantes registrados en este campus.</p></div>'}
        </div>
      </div>

      <div class="teacher-card">
        <div class="teacher-section-head">
          <div><div class="k">ACTIVIDAD RECIENTE</div><h2>Últimas evidencias</h2></div>
          <button class="btn ghost small" data-go="review">Revisar</button>
        </div>
        <div class="teacher-recent-list">
          ${recent.length ? recent.map(e=>`
            <div class="teacher-recent-row">
              <div>
                <b>${esc(e.project||e.file_name||'Evidencia')}</b>
                <small>${esc(e.profiles?.name||'Estudiante')} · ${esc(e.course||'Sin materia')}</small>
              </div>
              ${e.stage?`<span class="pill">${esc(e.stage)}</span>`:''}
            </div>`).join('') : '<div class="empty-reflections"><p>Aún no hay evidencia reciente para revisar.</p></div>'}
        </div>
      </div>
    </div>

    <div class="teacher-principle-card">
      <div class="k">PRINCIPIO DE ACOMPAÑAMIENTO</div>
      <h2>Observar → señalar evidencia → preguntar → devolver al estudiante.</h2>
      <p>El feedback docente funciona como una señal externa. No define automáticamente el perfil ni las competencias del estudiante.</p>
    </div>
  </section>`;
}

function homeView(){
  if(profile?.role==='teacher'||profile?.role==='admin') return teacherHomeView();
  const rows=allEvidence();
  const total=rows.length;
  const imageCount=rows.filter(e=>e.mime_type?.startsWith('image/')).length;
  const videoCount=rows.filter(e=>e.mime_type?.startsWith('video/')).length;
  const audioCount=rows.filter(e=>e.mime_type?.startsWith('audio/')).length;
  const pdfCount=rows.filter(e=>e.mime_type?.includes('pdf')).length;
  const projectCount=new Set(rows.map(e=>e.project).filter(Boolean)).size;
  const reflectionCount=careerReflections().length;
  const profileSignals = total
    ? [
        ['Exploración','alta'],
        ['Experimentación', total>=4?'alta':'emergente'],
        ['Pensamiento visual', imageCount>=2?'alta':'emergente'],
        ['Reflexión', reflectionCount>=2?'alta':'en construcción'],
        ['Trazabilidad', total>=3?'visible':'inicial']
      ]
    : [
        ['Exploración','inicial'],
        ['Experimentación','inicial'],
        ['Pensamiento visual','inicial'],
        ['Reflexión','inicial'],
        ['Trazabilidad','inicial']
      ];
  const profileSummary = total
    ? 'Tu perfil empieza a mostrar una práctica que aprende haciendo, compara alternativas y vuelve sobre sus propias decisiones. Esta lectura es provisional y crecerá con cada proceso documentado.'
    : 'Tu perfil todavía está comenzando. A medida que documentes procesos, CURADOR.IA podrá detectar recurrencias, decisiones, formas de hacer y capacidades emergentes.';
  return `
  <section class="view active clean-home">
    <div class="home-topbar">
      <div class="home-topbar-left">
        <div class="eyebrow">${profile?.role==='teacher'?'VISTA DOCENTE':'PERFIL EN CONSTRUCCIÓN'}</div>
    ${profile?.role==='student'?'<div class="home-welcome">Bienvenido(a), '+esc(toTitleCaseName(profile?.name || '') || session?.user?.email || 'Estudiante')+'</div>':''}
    <h1>Haz visible cómo piensas, decides y creas.</h1>
    <p class="intro">CURADOR.IA acompaña la trayectoria y convierte evidencias, decisiones, reflexiones y feedback en un archivo vivo de proceso humano y ADN creativo.</p>
      </div>
    </div>
    <div class="home-actions">
      ${profile?.role==='teacher'?'':'<button class="btn" id="homeAddEvidence">Documentar proceso</button>'}
      <button class="btn ghost" data-go="${profile?.role==='teacher'?'review':'archive'}">${profile?.role==='teacher'?'Revisar procesos':'Abrir bóveda'}</button>
      <button class="btn ghost" data-go="${profile?.role==='teacher'?'feedback':'introspection'}">${profile?.role==='teacher'?'Dar feedback':'Introspección'}</button>
    </div>

    ${profile?.role==='student' ? `
    <div class="profile-infographic">
      <div class="profile-infographic-head">
        <div><div class="k">PERFIL VIVO</div><h2>Lo que empieza a hacerse visible.</h2></div>
        <span class="pill">lectura provisional</span>
      </div>

      <div class="profile-metrics">
        <div class="profile-metric"><b>${total}</b><span>Evidencias</span></div>
        <div class="profile-metric"><b>${projectCount}</b><span>Proyectos</span></div>
        <div class="profile-metric"><b>${reflectionCount}</b><span>Reflexiones</span></div>
        <div class="profile-metric"><b>${imageCount+videoCount+audioCount+pdfCount}</b><span>Archivos</span></div>
      </div>

      <div class="profile-infographic-grid">
        <div class="profile-summary-card">
          <div class="k">PERFIL EMERGENTE</div>
          <p>${profileSummary}</p>
          <div class="profile-media-row">
            <span>Imagen ${imageCount}</span>
            <span>PDF ${pdfCount}</span>
            <span>Audio ${audioCount}</span>
            <span>Video ${videoCount}</span>
          </div>
        </div>
        <div class="profile-signal-card">
          <div class="k">SEÑALES ACTUALES</div>
          ${profileSignals.map(([label,state])=>`
            <div class="profile-signal-row">
              <span>${label}</span><b>${state}</b>
            </div>`).join('')}
        </div>
      </div>
    </div>` : ''}
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
  const isImage=e.mime_type?.startsWith('image/');
  const isVideo=e.mime_type?.startsWith('video/');
  const isAudio=e.mime_type?.startsWith('audio/');
  const isPdf=e.mime_type?.includes('pdf');
  if(!src && (isImage||isVideo||isAudio||isPdf) && e.file_path){
    const {data} = await supabase.storage.from('evidence').createSignedUrl(e.file_path, 3600);
    src = data?.signedUrl || '';
  }
  let media='';
  if(isImage && src){
    media=`<img class="real-image" src="${src}" alt="${esc(e.file_name)}">`;
  }else if(isVideo && src){
    media=`<video class="real-video" controls preload="metadata"><source src="${src}" type="${esc(e.mime_type||'video/mp4')}">Tu navegador no puede reproducir este video.</video>`;
  }else if(isAudio && src){
    media=`<div class="audio-card"><div class="file-placeholder">AUDIO</div><audio controls preload="metadata"><source src="${src}" type="${esc(e.mime_type||'audio/mpeg')}">Tu navegador no puede reproducir este audio.</audio></div>`;
  }else if(isPdf && src){
    media=`<a class="file-placeholder file-link" href="${src}" target="_blank" rel="noopener">PDF · Abrir documento</a>`;
  }else{
    media=`<div class="file-placeholder">ARCHIVO</div>`;
  }
  return `
  <article class="media-card span6 evidence-card" data-kind="${isImage?'image':isVideo?'video':isAudio?'audio':isPdf?'pdf':'file'}" data-evidence-id="${esc(e.id)}">
    ${(!String(e.id||'').startsWith('demo-') && profile?.role==='student') ? `<button class="evidence-delete" data-delete-evidence="${esc(e.id)}" data-file-path="${esc(e.file_path||'')}" aria-label="Eliminar evidencia" title="Eliminar evidencia">×</button>` : ''}
    ${media}
    <div class="meta">
      <span class="type">${e.stage?esc(e.stage)+' · ':''}Semestre ${esc(e.semester||'—')} · ${esc(e.course||'Sin materia')}</span>
      <b>${esc(e.project||e.file_name||'Evidencia')}</b>
    </div>
  </article>`;
}

function uniqueProjectReflections(rows=allEvidence()){
  const seen=new Set();
  return rows.filter(e=>{
    const reflection=String(e.reflection||'').trim();
    if(!reflection) return false;
    const key=[
      e.student_id||profile?.id||'student',
      e.semester||'',
      e.course||'',
      e.project||'',
      reflection
    ].join('||');
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function careerReflections(){
  if(window.sessionIntrospections) return window.sessionIntrospections;
  if(plan2026DemoMode) return demo2026CareerReflections;
  return luciaDemoMode ? demoCareerReflections : [];
}

function reflectionCardArray(){
  const rows=careerReflections();
  if(!rows.length){
    return [`
      <article class="media-card quote span6" data-kind="reflection">
        <div class="quote-inner">
          <span class="type">INTROSPECCIÓN</span>
          <p>“Todavía no hay reflexiones de trayectoria guardadas.”</p>
          <small>Guarda una reflexión desde Introspección para verla aquí.</small>
        </div>
      </article>`];
  }
  return rows.map(r=>`
    <article class="media-card quote span6" data-kind="reflection">
      <div class="quote-inner">
        <span class="type">${esc(r.theme||'INTROSPECCIÓN')}${r.date?' · '+esc(r.date):''}</span>
        <p>“${esc(r.answer||'')}”</p>
        <small>${esc(r.question||'Reflexión de trayectoria')}</small>
      </div>
    </article>`);
}

function reflectionCards(){
  return reflectionCardArray().join('');
}

function interleavedArchiveCards(evidenceCards,reflectionCards){
  if(!reflectionCards.length) return evidenceCards.join('');
  const output=[];
  let r=0;
  evidenceCards.forEach((card,i)=>{
    output.push(card);
    if((i+1)%2===0 && r<reflectionCards.length){
      output.push(reflectionCards[r++]);
    }
  });
  while(r<reflectionCards.length) output.push(reflectionCards[r++]);
  return output.join('');
}

function uploadView(){
  return `
  <section class="view active">
    <div class="k">DOCUMENTAR PROCESO · PLAN ${esc(profile?.plan||'2026')}</div>
    <h1>Documentar un proyecto</h1>
    <p class="lead">La unidad básica no es el archivo: es el proyecto + su proceso. Organiza la evidencia según el momento en que apareció.</p>

    <div class="grid g2">
      <div class="card">
        <div class="field"><label>Semestre</label><select id="semester"></select></div>
        <div class="field"><label>Materia</label><select id="course"></select></div>
        <div class="field"><label>Nombre del proyecto</label><input id="projectName" placeholder="Nombre del proyecto"></div>

      </div>

      <div class="card">
        <div class="k">BRIEF / RETO</div>
        <h2>¿Cuál era el punto de partida?</h2>
        <div class="field brief-field">
          <textarea id="brief" placeholder="Describe el reto, pregunta, encargo o situación que dio origen al proyecto."></textarea>
        </div>
      </div>
    </div>

    <div class="process-stage-grid">
      <article class="process-stage">
        <div class="stage-number">01</div>
        <div class="k">INVESTIGACIÓN</div>
        <h2>Comprender antes de proponer</h2>
        <p class="m">Mapas, esquemas, diagramas, moodboards, investigación de campo, referentes, registros, fotografías, notas y hallazgos.</p>
        <div class="drop stage-drop">
          <input id="researchFiles" type="file" multiple accept="image/*,video/*,audio/*,.pdf">
          <button id="pickResearch" type="button" class="btn ghost small">Seleccionar archivos</button>
          <p class="m mini">Imágenes · PDF · audio · video</p>
        </div>
        <div id="researchFileList" class="files"></div>
      </article>

      <article class="process-stage">
        <div class="stage-number">02</div>
        <div class="k">CONCEPTUALIZACIÓN</div>
        <h2>Dar forma a las ideas</h2>
        <p class="m">Sketches, mapas mentales, thumbnails, mockups, storyboards, exploraciones formales, alternativas y primeras propuestas.</p>
        <div class="drop stage-drop">
          <input id="conceptFiles" type="file" multiple accept="image/*,video/*,audio/*,.pdf">
          <button id="pickConcept" type="button" class="btn ghost small">Seleccionar archivos</button>
          <p class="m mini">Imágenes · PDF · audio · video</p>
        </div>
        <div id="conceptFileList" class="files"></div>
      </article>

      <article class="process-stage">
        <div class="stage-number">03</div>
        <div class="k">PROTOTIPADO</div>
        <h2>Materializar y probar</h2>
        <p class="m">Renders, modelos, planos, maquetas, prototipos, pruebas materiales, iteraciones, piezas funcionales y versiones finales.</p>
        <div class="drop stage-drop">
          <input id="prototypeFiles" type="file" multiple accept="image/*,video/*,audio/*,.pdf">
          <button id="pickPrototype" type="button" class="btn ghost small">Seleccionar archivos</button>
          <p class="m mini">Imágenes · PDF · audio · video</p>
        </div>
        <div id="prototypeFileList" class="files"></div>
      </article>
    </div>

    <div class="upload-reflection-grid">
      <div class="card">
        <div class="k">REFLEXIÓN DEL PROCESO</div>
        <div class="grid g2 reflection-fields">
          <div class="field"><label>¿Cuál fue tu intención?</label><textarea id="intent" placeholder="¿Qué querías explorar, provocar o comprender?"></textarea></div>
          <div class="field"><label>¿Qué decisión consideras verdaderamente tuya?</label><textarea id="decision" placeholder="Una decisión que reconoces como propia."></textarea></div>
          <div class="field"><label>¿Qué salió mal, cambió o te hizo dudar?</label><textarea id="friction" placeholder="Errores, cambios, contradicciones o momentos de duda."></textarea></div>
          <div class="field"><label>¿Dónde intervino IA?</label><textarea id="aiUse" placeholder="Si utilizaste IA, explica dónde intervino y qué decisiones siguieron siendo tuyas."></textarea></div>
        </div>
      </div>
      <div class="process-save-row">
        <button id="saveProcessBtn" class="btn save-process-btn">Guardar proyecto + proceso</button>
        <div id="uploadStatus" class="status"></div>
      </div>
    </div>
  </section>`;
}

async function archiveView(){
  const dynamicCards = await Promise.all(allEvidence().map(evidenceCard));
  const mixedCards = interleavedArchiveCards(dynamicCards,reflectionCardArray());
  return `
  <section class="view active">
    <div class="k">BÓVEDA</div><h1>Proceso antes que resultado.</h1>
    <p class="lead">Aquí conviven bocetos, pruebas, mapas, textos, errores, decisiones, imágenes, videos y reflexiones. No es una galería de “finales”; es trazabilidad.</p>
    <div class="archive-toolbar">
      <button class="btn" id="openUpload">+ Nueva evidencia</button>
      <div class="toggle archive-filters">
  <button class="active" data-filter="all">ALL</button>
  <button data-filter="image">IMÁGENES</button>
  <button data-filter="pdf">PDF</button>
  <button data-filter="audio">AUDIO</button>
  <button data-filter="video">VIDEO</button>
  <button data-filter="reflection">REFLEXIONES</button>
</div>
    </div>
        <div class="media-grid" id="mediaGrid">
      ${mixedCards}
      
    </div>
  </section>`;
}

function coursesView(){
  return `
  <section class="view active">
    <div class="k">TRAYECTORIA · PLAN ${esc(profile?.plan||'2026')}</div><h1>Línea del tiempo</h1>
    <p class="lead">La estructura académica funciona como índice del archivo. En esta prueba, el primer semestre aparece activo y el resto anticipa el recorrido.</p>
    ${Object.entries(activeCurriculum()).map(([sem,items])=>`
      <div class="semester-block">
        <div class="semester-number">0${sem}</div>
        <div class="course-list">
          ${items.map(([code,name])=>{
            const matches=allEvidence().filter(e=>String(e.course||'').startsWith(code+' ·')||String(e.course||'')===code);
            const count=matches.length;
            const state=luciaDemoMode
              ? (Number(sem)<3?'completed':Number(sem)===3?'current':'future')
              : (count>0?'documented':'empty');
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
  const reflections=uniqueProjectReflections(matches);
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
  const competencyFramework=[
    {
      code:'C26DI0001',
      name:'Diseño de productos y sistemas',
      subs:[
        ['S26AR0009','Fundamentos y procesos de diseño'],
        ['S26AR0008','Investigación'],
        ['S26DI0002','Comunicación del diseño']
      ]
    },
    {
      code:'C26DI0002',
      name:'Diseño para la vida',
      subs:[
        ['S26DI0003','Pensamiento sistémico'],
        ['S26DI0004','Identidad cultural'],
        ['S26DI0005','Innovación social y ambiental responsable']
      ]
    },
    {
      code:'C26DI0003',
      name:'Cultura del diseño',
      subs:[
        ['S26A0001','Historia y teoría'],
        ['S26DI0006','Retórica especializada de diseño']
      ]
    },
    {
      code:'C26DI0004',
      name:'Humanización tecnológica',
      subs:[
        ['S26DI0001','Pensamiento matemático, físico y computacional'],
        ['S26DI0007','Generación de productos tecnológicos'],
        ['S26DI0008','Diseño especulativo y realidades tecnológicas']
      ]
    },
    {
      code:'C26DI0005',
      name:'Gestión de la creatividad',
      subs:[
        ['S26EM0012','Emprendimiento para industrias creativas'],
        ['S26DI0009','Desarrollo de portafolio creativo'],
        ['S26EM0003','Emprendimiento']
      ]
    }
  ];

  return `
  <section class="view active">
    <div class="k">COMPETENCIAS</div>
    <h1>Competencias que se hacen visibles en el proceso.</h1>
    <p class="lead">Esta lectura parte de las 5 competencias y 14 subcompetencias de LDI. Por ahora se muestran como estructura curricular; más adelante CURADOR.IA podrá relacionarlas con evidencias concretas del estudiante.</p>

    <div class="competency-grid">
      ${competencyFramework.map((comp,index)=>`
        <article class="competency-card">
          <div class="competency-head">
            <div>
              <span class="competency-index">0${index+1}</span>
              <div class="k">${esc(comp.code)}</div>
              <h2>${esc(comp.name)}</h2>
            </div>
            <span class="pill">${comp.subs.length} subcompetencias</span>
          </div>
          <div class="subcompetency-list">
            ${comp.subs.map(([code,name])=>`
              <button class="subcompetency-row" data-cap="${esc(name)}">
                <span>
                  <small>${esc(code)}</small>
                  <strong>${esc(name)}</strong>
                </span>
                <span class="subcompetency-state">Por leer</span>
              </button>`).join('')}
          </div>
        </article>`).join('')}
    </div>
  </section>`;
}

function shortDnaSignal(text){
  const clean=String(text||'').replace(/\s+/g,' ').trim();
  if(!clean) return '';
  const words=clean.split(' ');
  return words.length<=6 ? clean : words.slice(0,6).join(' ')+'…';
}

function dnaView(){
  const reading=latestReading;
  const rawSignals=(reading?.capabilities||[]).filter(Boolean).slice(0,10);
  const fallbackPool=['Observación','Proceso','Decisiones','Autoría','Síntesis','Experimentación','Pensamiento sistémico','Visualización','Criterio','Reflexión'];
  const evidenceCount=allEvidence().length;
  const reflectionCount=careerReflections().length;
  const maturity=Math.min(10, Math.max(4, 4 + Math.floor((evidenceCount+reflectionCount)/3)));
  const sourceSignals=rawSignals.length ? rawSignals : fallbackPool;
  const expanded=[...sourceSignals];
  for(const item of fallbackPool){
    if(expanded.length>=maturity) break;
    if(!expanded.includes(item)) expanded.push(item);
  }
  const signals=expanded.slice(0,maturity).map(shortDnaSignal);

  const nodes=[
    {x:17,y:20,delay:'0s'},
    {x:82,y:18,delay:'-1.2s'},
    {x:12,y:72,delay:'-2.4s'},
    {x:86,y:74,delay:'-3.6s'},
    {x:48,y:9,delay:'-4.8s'},
    {x:50,y:88,delay:'-6s'},
    {x:6,y:45,delay:'-7.2s'},
    {x:94,y:47,delay:'-8.4s'},
    {x:28,y:86,delay:'-9.6s'},
    {x:72,y:88,delay:'-10.8s'}
  ];

  return `
  <section class="view active">
    <div class="k">ADN CREATIVO</div><h1>Hipótesis, no sentencia.</h1>
    <p class="lead">El ADN se construye con patrones que reaparecen en el tiempo. CURADOR.IA cruza evidencias y reflexiones; tú decides si la lectura te representa.</p>

    <div class="dna-actions">
      <button class="btn" id="refreshDna">${reading?'Actualizar ADN creativo':'Generar ADN creativo'}</button>
      ${reading?'<span class="pill">'+(reading.simulation?'lectura simulada':'lectura con IA')+'</span>':''}
    </div>

    <div class="dna-constellation">
      <svg class="dna-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${signals.map((_,i)=>`<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[(i+1)%signals.length].x}" y2="${nodes[(i+1)%signals.length].y}" />`).join('')}
        ${signals.map((_,i)=>`<line x1="50" y1="50" x2="${nodes[i].x}" y2="${nodes[i].y}" />`).join('')}
      </svg>

      <div class="dna-core constellation-core">
        <div>
          <b>${esc(profile?.name||'Tu ADN')}</b>
          <span>${reading?'lectura viva':'por construir'}</span>
        </div>
      </div>

      ${signals.map((signal,i)=>`
        <button class="dna-star" style="--x:${nodes[i].x}%;--y:${nodes[i].y}%;--delay:${nodes[i].delay}" title="${esc(rawSignals[i]||signal)}">
          <span class="dna-star-label">${esc(signal)}</span>
        </button>
      `).join('')}
    </div>

    <div class="dna-panel dna-reading-clean">
      <div class="k">LECTURA PROVISIONAL</div>
      ${reading ? `
        <div class="big">${esc(reading.hypothesis||'Lectura en construcción')}</div>
      ` : `
        <div class="big">Tu ADN todavía no ha sido leído.</div>
        <p class="m">Genera una lectura para cruzar tu trayectoria documentada, proyectos y reflexiones.</p>
      `}
    </div>
  </section>`;
}

async function generateDnaReading(){
  const rows=allEvidence();
  const refs=careerReflections();
  if(!rows.length && !refs.length){
    alert('Primero documenta un proyecto o guarda una reflexión.');
    return;
  }

  const button=$('refreshDna');
  if(button){button.disabled=true;button.textContent='Leyendo trayectoria…';}

  const projects=[...new Map(rows.filter(e=>e.project).map(e=>[e.project,e])).values()];
  const processNotes=uniqueProjectReflections(rows).slice(0,8).map(e=>e.reflection).filter(Boolean);
  const careerNotes=refs.slice(0,8).map(r=>`${r.question}: ${r.answer}`);
  const reflection=[
    ...projects.slice(0,8).map(e=>`Proyecto: ${e.project} · Materia: ${e.course||'—'} · Etapa: ${e.stage||'—'}`),
    ...processNotes,
    ...careerNotes
  ].join('\n\n').slice(0,12000);

  try{
    const r=await fetch('/api/curate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        project:'Trayectoria acumulada',
        course:'Múltiples materias y proyectos',
        reflection
      })
    });
    const data=await r.json();
    if(!r.ok) throw new Error(data.error||'No se pudo generar la lectura.');
    latestReading=data;
    await renderView();
  }catch(e){
    alert(e.message||'No se pudo actualizar el ADN creativo.');
    if(button){button.disabled=false;button.textContent='Actualizar ADN creativo';}
  }
}

function introspectionView(){
  const saved = careerReflections();
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

    <div class="introspection-repo top-gap">
      <div class="repo-head">
        <div><div class="k">CURADOR.IA</div><h2>Leer la trayectoria, no una sola entrega.</h2></div>
      </div>
      <p class="m">CURADOR.IA cruza lo que has documentado y tus reflexiones para detectar recurrencias, tensiones, decisiones y capacidades emergentes. La lectura es provisional: tú decides si te representa.</p>
      <div class="grid g2 top-gap curator-trajectory-grid">
        <div class="card trajectory-source-card">
          <div class="k">FUENTES DE LECTURA</div>
          <h2>Lo que CURADOR.IA está mirando</h2>
          <div class="trajectory-stats">
            <div><b>${allEvidence().length}</b><span>Evidencias</span></div>
            <div><b>${new Set(allEvidence().map(e=>e.project).filter(Boolean)).size}</b><span>Proyectos</span></div>
            <div><b>${saved.length}</b><span>Reflexiones</span></div>
          </div>
          <div class="trajectory-recent">
            ${[...new Map(allEvidence().filter(e=>e.project).map(e=>[e.project,e])).values()].slice(0,3).map(e=>`
              <div class="trajectory-source-row">
                <span>${esc(e.project)}</span>
                <small>${esc(e.course||'Sin materia')}${e.stage?' · '+esc(e.stage):''}</small>
              </div>`).join('') || '<p class="m">Todavía no hay proyectos documentados.</p>'}
          </div>
        </div>
        <div class="curator trajectory-reading-card">
          <div class="k">LECTURA DE TRAYECTORIA</div>
          <div id="aiOutput">${latestReading ? readingMarkup(latestReading) : '<h2>Aún no hay lectura.</h2><p>Cuando quieras, CURADOR.IA puede proponer una primera lectura sobre patrones que empiezan a repetirse en tu trayectoria.</p>'}</div>
          <button id="aiBtn" class="btn top-gap">Generar lectura de mi trayectoria</button>
        </div>
      </div>
    </div>
  </section>`;
}

function curatorView(){ return introspectionView(); }

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
  const list=students.length?students:demoStudents;
  return `
  <section class="view active"><div class="k">DOCENTE · ${esc(profile?.campus||'Campus sin asignar')}</div><h1>Estudiantes</h1>
  ${pilotTeacherMode?'<div class="notice">Estás en modo profesor piloto. Esta vista usa datos simulados y no puede consultar estudiantes reales de Supabase. Para ver a Edgar necesitas entrar con una cuenta real cuyo rol en profiles sea teacher.</div>':''}
  <p class="lead">Las cuentas reales registradas como estudiantes aparecen aquí automáticamente, aunque todavía no hayan subido evidencia.</p>
  <div class="teacher-grid"><div class="teacher-card">${list.map(s=>{
    const count=evidence.filter(e=>e.student_id===s.id || e.profiles?.name===s.name).length;
    return `<div class="student-row"><div><b>${esc(toTitleCaseName(s.name||'Estudiante'))}</b><div class="signal">${esc(s.campus||'Sin campus')} · Semestre ${esc(s.semester||'—')} · ${count} evidencias · ${count?'proceso activo':'aún sin evidencias'}</div></div><button class="btn ghost small" data-go="review">Revisar</button></div>`;
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
    upload:()=>uploadView(),
    archive:()=>archiveView(),
    courses:()=>coursesView(),
    courseDetail:()=>courseDetailView(),
    capabilities:()=>capabilitiesView(),
    dna:()=>dnaView(),
    introspection:()=>introspectionView(),
    curator:()=>introspectionView(),
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
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',(b.dataset.view===id) || (id==='curator' && b.dataset.view==='introspection') || (id==='courseDetail' && b.dataset.view==='courses')));
  renderView();
}

function populateSemesters(){
  if(!$('semester')) return;
  $('semester').innerHTML=Object.keys(activeCurriculum()).map(s=>`<option value="${s}">Semestre ${s}</option>`).join('');
  populateCourses();
}
function populateCourses(){
  if(!$('course')||!$('semester')) return;
  const s=$('semester').value||'1';
  $('course').innerHTML=(activeCurriculum()[s]||[]).map(([code,name])=>`<option value="${code} · ${name}">${code} · ${name}</option>`).join('');
}

function bindView(){
  document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>setView(b.dataset.go));
  document.querySelectorAll('[data-delete-evidence]').forEach(b=>b.onclick=async(e)=>{
    e.stopPropagation();
    const id=b.dataset.deleteEvidence;
    const path=b.dataset.filePath;
    if(!confirm('¿Eliminar esta evidencia? Esta acción no se puede deshacer.')) return;
    b.disabled=true;

    const isDemoEvidence =
      luciaDemoMode ||
      plan2026DemoMode ||
      String(id||'').startsWith('demo-') ||
      String(id||'').startsWith('v26-');

    if(isDemoEvidence){
      deletedDemoEvidenceIds.add(id);
      evidence=evidence.filter(row=>row.id!==id);
      await renderView();
      return;
    }

    const {error:dbError}=await supabase.from('evidence').delete().eq('id',id).eq('student_id',session.user.id);
    if(dbError){alert(dbError.message);b.disabled=false;return;}
    if(path) await supabase.storage.from('evidence').remove([path]);
    await loadData();
    await renderView();
  });
  if($('homeAddEvidence')) $('homeAddEvidence').onclick=()=>setView('upload');
  if($('refreshDna')) $('refreshDna').onclick=generateDnaReading;
  document.querySelectorAll('.course-link[data-course]').forEach(btn=>btn.onclick=()=>{
    selectedCourse={code:btn.dataset.course,name:btn.dataset.courseName,semester:btn.dataset.sem};
    setView('courseDetail');
  });
  if($('backToCourses')) $('backToCourses').onclick=()=>{selectedCourse=null;setView('courses');};
  if($('openUpload')) $('openUpload').onclick=()=>setView('upload');
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
  if($('pickResearch')&&$('researchFiles')) $('pickResearch').onclick=()=>$('researchFiles').click();
  if($('pickConcept')&&$('conceptFiles')) $('pickConcept').onclick=()=>$('conceptFiles').click();
  if($('pickPrototype')&&$('prototypeFiles')) $('pickPrototype').onclick=()=>$('prototypeFiles').click();
  if($('researchFiles')) $('researchFiles').onchange=()=>renderSelectedFiles('researchFiles','researchFileList');
  if($('conceptFiles')) $('conceptFiles').onchange=()=>renderSelectedFiles('conceptFiles','conceptFileList');
  if($('prototypeFiles')) $('prototypeFiles').onchange=()=>renderSelectedFiles('prototypeFiles','prototypeFileList');
  if($('saveProcessBtn')) $('saveProcessBtn').onclick=uploadProcess;
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
    window.sessionIntrospections=window.sessionIntrospections||[...(luciaDemoMode?demoCareerReflections:[])];
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

function renderSelectedFiles(inputId,listId){
  const input=$(inputId);
  const list=$(listId);
  if(!input||!list) return;
  const files=[...input.files];
  list.innerHTML=files.length
    ? files.map(f=>`<div class="file-row"><span>${esc(f.name)}</span><small>${Math.max(1,Math.round(f.size/1024))} KB</small></div>`).join('')
    : '';
}

function curateProcessDraft(){
  const intent=$('intent')?.value.trim();
  const decision=$('decision')?.value.trim();
  const friction=$('friction')?.value.trim();
  const ai=$('aiUse')?.value.trim();
  const items=[
    decision&&`La decisión propia: ${esc(decision)}`,
    friction&&`La fricción o cambio: ${esc(friction)}`,
    intent&&`La intención inicial: ${esc(intent)}`,
    ai&&`La intervención de IA y sus límites: ${esc(ai)}`
  ].filter(Boolean);
  $('curateDraft').innerHTML=items.length?`<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul><p class="m">La IA sugiere qué conviene conservar. Tú decides qué entra.</p>`:'<p class="m">Completa algunas reflexiones para generar una lectura preliminar.</p>';
}

async function uploadProcess(){
  const stagedFiles=[
    ...[...($('researchFiles')?.files||[])].map(file=>({file,stage:'Investigación'})),
    ...[...($('conceptFiles')?.files||[])].map(file=>({file,stage:'Conceptualización'})),
    ...[...($('prototypeFiles')?.files||[])].map(file=>({file,stage:'Prototipado'}))
  ];
  const project=$('projectName')?.value.trim();
  if(!project){$('uploadStatus').textContent='Escribe el nombre del proyecto.';return;}
  if(!stagedFiles.length){$('uploadStatus').textContent='Selecciona al menos un archivo en alguna etapa del proceso.';return;}
  const reflection=[
    $('brief')?.value.trim()&&`Brief / reto: ${$('brief').value.trim()}`,
    $('intent')?.value.trim()&&`Intención: ${$('intent').value.trim()}`,
    $('decision')?.value.trim()&&`Decisión propia: ${$('decision').value.trim()}`,
    $('friction')?.value.trim()&&`Fricción / cambio: ${$('friction').value.trim()}`,
    $('aiUse')?.value.trim()&&`Intervención de IA: ${$('aiUse').value.trim()}`
  ].filter(Boolean).join('\n\n');

  $('uploadStatus').textContent='Guardando proceso…';
  for(const {file,stage} of stagedFiles){
    const path=safeStoragePath(session.user.id,file);
    const up=await supabase.storage.from('evidence').upload(path,file);
    if(up.error){$('uploadStatus').textContent=up.error.message;return;}
    const row=await supabase.from('evidence').insert({
      student_id:session.user.id,
      semester:Number($('semester').value),
      course:$('course').value,
      project,
      reflection,
      stage,
      file_path:path,
      file_name:file.name,
      mime_type:file.type||'application/octet-stream'
    });
    if(row.error){$('uploadStatus').textContent=row.error.message;return;}
  }
  $('uploadStatus').textContent=`Proyecto guardado con ${stagedFiles.length} evidencia${stagedFiles.length===1?'':'s'}.`;
  await loadData();
  setView('archive');
}

function toTitleCaseName(value){
  return String(value||'')
    .trim()
    .toLowerCase()
    .replace(/(^|[\s'-])([a-záéíóúüñ])/g,(m,sep,ch)=>sep+ch.toUpperCase());
}

function safeStoragePath(userId,file){
  const raw=String(file?.name||'');
  const dot=raw.lastIndexOf('.');
  const ext=dot>=0 ? raw.slice(dot+1).toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,10) : '';
  const suffix=ext ? '.'+ext : '';
  return `${userId}/${crypto.randomUUID()}${suffix}`;
}

function safeFileName(name){
  const parts=String(name||'archivo').split('.');
  const ext=parts.length>1 ? '.'+parts.pop().toLowerCase().replace(/[^a-z0-9]/g,'') : '';
  const base=parts.join('.')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-zA-Z0-9_-]+/g,'-')
    .replace(/-+/g,'-')
    .replace(/^-|-$/g,'')
    .slice(0,120) || 'archivo';
  return base+ext;
}

async function uploadEvidence(){
  const f=$('file')?.files[0];
  if(!f){$('uploadStatus').textContent='Selecciona un archivo.';return;}
  $('uploadStatus').textContent='Subiendo…';
  const path=safeStoragePath(session.user.id,f);
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
  const rows=allEvidence();
  const refs=careerReflections();
  if(!rows.length && !refs.length){
    $('aiOutput').innerHTML='<p>Primero documenta un proyecto o guarda una reflexión.</p>';
    return;
  }
  $('aiOutput').innerHTML='<p>Construyendo una lectura de tu trayectoria…</p>';
  const projects=[...new Map(rows.filter(e=>e.project).map(e=>[e.project,e])).values()];
  const processNotes=uniqueProjectReflections(rows).slice(0,8).map(e=>e.reflection).filter(Boolean);
  const careerNotes=refs.slice(0,8).map(r=>`${r.question}: ${r.answer}`);
  const reflection=[
    ...projects.slice(0,8).map(e=>`Proyecto: ${e.project} · Materia: ${e.course||'—'} · Etapa: ${e.stage||'—'}`),
    ...processNotes,
    ...careerNotes
  ].join('\n\n').slice(0,12000);

  const r=await fetch('/api/curate',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      project:'Trayectoria acumulada',
      course:'Múltiples materias y proyectos',
      reflection
    })
  });
  const data=await r.json();
  if(!r.ok){$('aiOutput').innerHTML=`<p>${esc(data.error||'No se pudo generar la lectura.')}</p>`;return;}
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
  if(luciaDemoMode){profile={id:'demo-lucia',name:'Lucía Romo',role:'student',plan:'2026'};return;}
  if(plan2026DemoMode){profile={...demo2026Profile};return;}
  if(pilotTeacherMode){profile={id:'pilot-teacher',name:'Profesor Piloto',role:'teacher'};return;}
  const {data,error}=await supabase.from('profiles').select('*').eq('id',session.user.id).single();
  if(error) console.warn(error);
  profile=data || {id:session.user.id,name:session.user.user_metadata?.name||'',role:session.user.user_metadata?.role||'student'};
}

async function loadData(){
  if(luciaDemoMode){
    evidence=demoEvidence.filter(e=>!deletedDemoEvidenceIds.has(e.id)).map(e=>({...e,student_id:'demo-lucia',profiles:{name:'Lucía Romo'}}));
    feedback=[];
    students=[];
    return;
  }
  if(plan2026DemoMode){
    evidence=demo2026Evidence.filter(e=>!deletedDemoEvidenceIds.has(e.id)).map(e=>({...e,student_id:'demo-valeria-2026',profiles:{name:'Valeria Soto'}}));
    feedback=[];
    students=[];
    return;
  }
  if(pilotTeacherMode){
    evidence=[...demoStudentEvidence];
    feedback=[];
    students=[...demoStudents];
    return;
  }
  if(profile?.role==='teacher'||profile?.role==='admin'){
    let prq=supabase.from('profiles').select('id,name,role,campus,semester,matricula,plan').eq('role','student').order('name',{ascending:true});
    if(profile?.role==='teacher' && profile?.campus) prq=prq.eq('campus',profile.campus);
    const pr=await prq;
    students=pr.data||[];
    if(pr.error) console.warn(pr.error);
  } else {
    students=[];
  }
  let q=supabase.from('evidence').select('*,profiles!evidence_student_id_fkey(name,campus,semester)').order('created_at',{ascending:false});
  if(profile?.role==='student') {
    q=q.eq('student_id',session.user.id);
  } else if(profile?.role==='teacher' && profile?.campus) {
    const campusStudentIds=students.map(s=>s.id);
    if(campusStudentIds.length) q=q.in('student_id',campusStudentIds);
    else q=q.eq('student_id','00000000-0000-0000-0000-000000000000');
  }
  const er=await q;
  evidence=er.data||[];
  if(er.error) console.warn(er.error);
  const fr=await supabase.from('feedback').select('*').order('created_at',{ascending:false});
  feedback=fr.data||[];
}

async function renderAuthenticated(){
  app.innerHTML=shellMarkup();
  const openMenu=()=>{
    $('appShell')?.classList.remove('menu-collapsed');
    $('appShell')?.classList.add('menu-open');
    $('sideMenu')?.setAttribute('aria-hidden','false');
    $('menuToggle')?.setAttribute('aria-expanded','true');
  };
  const closeMenu=()=>{
    $('appShell')?.classList.remove('menu-open');
    $('appShell')?.classList.add('menu-collapsed');
    $('sideMenu')?.setAttribute('aria-hidden','true');
    $('menuToggle')?.setAttribute('aria-expanded','false');
  };
  if($('menuToggle')) $('menuToggle').onclick=openMenu;
  if($('menuClose')) $('menuClose').onclick=closeMenu;
  if($('menuOverlay')) $('menuOverlay').onclick=closeMenu;
  $('logoutBtn').onclick=()=>{if(luciaDemoMode){luciaDemoMode=false;session=null;profile=null;refresh();}else if(plan2026DemoMode){plan2026DemoMode=false;session=null;profile=null;refresh();}else if(pilotTeacherMode){pilotTeacherMode=false;session=null;profile=null;refresh();}else{supabase.auth.signOut();}};
  document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{setView(b.dataset.view);closeMenu();});
  await renderView();
}

async function refresh(){
  if(luciaDemoMode){
    session={user:{id:'demo-lucia',email:LUCIA_DEMO_EMAIL,user_metadata:{name:'Lucía Romo',role:'student'}}};
    profile={id:'demo-lucia',name:'Lucía Romo',role:'student',plan:'2026'};
    await loadData();
    await renderAuthenticated();
    return;
  }
  if(plan2026DemoMode){
    session={user:{id:'demo-valeria-2026',email:PLAN2026_DEMO_EMAIL,user_metadata:{name:'Valeria Soto',role:'student',plan:'2026'}}};
    profile={...demo2026Profile};
    await loadData();
    await renderAuthenticated();
    return;
  }
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
    profile=null;evidence=[];feedback=[];students=[];luciaDemoMode=false;plan2026DemoMode=false;currentView='home';
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
      if(email===LUCIA_DEMO_EMAIL.toLowerCase() && password===LUCIA_DEMO_PASSWORD){
        luciaDemoMode=true;
        session={user:{id:'demo-lucia',email:LUCIA_DEMO_EMAIL,user_metadata:{name:'Lucía Romo',role:'student',plan:'2026'}}};
        profile={id:'demo-lucia',name:'Lucía Romo',role:'student',plan:'2026'};
        await loadData();
        currentView='home';
        await renderAuthenticated();
        return;
      }
      if(email===PLAN2026_DEMO_EMAIL.toLowerCase() && password===PLAN2026_DEMO_PASSWORD){
        plan2026DemoMode=true;
        session={user:{id:'demo-valeria-2026',email:PLAN2026_DEMO_EMAIL,user_metadata:{name:'Valeria Soto',role:'student',plan:'2026'}}};
        profile={...demo2026Profile};
        await loadData();
        currentView='home';
        await renderAuthenticated();
        return;
      }
      if(email===PILOT_TEACHER_EMAIL.toLowerCase() && password===PILOT_TEACHER_PASSWORD){
        await enterPilotTeacher();
        return;
      }
      const {error}=await supabase.auth.signInWithPassword({email,password});
      $('loginStatus').textContent=error?error.message:'Acceso correcto';
    };
    if(new URLSearchParams(location.search).get('pilot')==='teacher'){ const b=document.createElement('button'); b.className='btn ghost pilot-login'; b.textContent='Entrar como profesor piloto'; b.onclick=enterPilotTeacher; $('loginBtn').after(b); }
    const updateSignupMode=()=>{
      const email=$('signupEmail')?.value.trim().toLowerCase()||'';
      const isTeacher=TEACHER_PILOT_EMAILS.includes(email);
      if($('signupAccountType')) $('signupAccountType').value=isTeacher?'Profesor/a piloto':'Estudiante';
      if($('studentRegistrationFields')) $('studentRegistrationFields').classList.toggle('hidden',isTeacher);
      if(isTeacher && $('signupPassword')) $('signupPassword').value='';
    };
    if($('signupEmail')) $('signupEmail').oninput=updateSignupMode;
    $('signupBtn').onclick=async()=>{
      const email=$('signupEmail').value.trim().toLowerCase();
      const isTeacher=TEACHER_PILOT_EMAILS.includes(email);
      const password=isTeacher?TEACHER_PILOT_PASSWORD:$('signupPassword').value;
      const firstName=toTitleCaseName($('signupFirstName')?.value||'');
      const lastName=toTitleCaseName($('signupLastName')?.value||'');
      const matricula=$('signupMatricula')?.value.trim().toUpperCase()||'';
      const semester=$('signupSemester')?.value||'';
      const plan=$('signupPlan')?.value||'';
      const campus=$('signupCampus')?.value||'';
      if(!firstName || !lastName){$('signupStatus').textContent='Escribe nombre y apellido.';return;}
      if(!campus){$('signupStatus').textContent='Selecciona un campus.';return;}
      if(!isTeacher && (!matricula || !semester || !plan)){$('signupStatus').textContent='Para estudiantes, matrícula, semestre y plan de estudios son obligatorios.';return;}
      const fullName=[firstName,lastName].filter(Boolean).join(' ');
      const {error}=await supabase.auth.signUp({
        email,
        password,
        options:{
          emailRedirectTo:window.location.origin,
          data:{
            first_name:firstName,
            last_name:lastName,
            name:fullName,
            matricula:isTeacher?null:matricula,
            semester:isTeacher?null:Number(semester),
            plan:isTeacher?null:plan,
            campus,
            role:isTeacher?'teacher':'student'
          }
        }
      });
      $('signupStatus').textContent=error?error.message:(isTeacher?'Cuenta docente creada. Revisa tu correo para confirmar y después entra con la contraseña piloto.':'Cuenta creada. Revisa tu correo para confirmar.');
    };
    return;
  }
  await loadProfile();
  await loadData();
  if((profile?.role==='teacher'||profile?.role==='admin') && !['home','students','review','feedback'].includes(currentView)) currentView='home';
  if(profile?.role==='student' && ['students','review','feedback'].includes(currentView)) currentView='home';
  await renderAuthenticated();
}

supabase.auth.onAuthStateChange(()=>refresh());
refresh();
