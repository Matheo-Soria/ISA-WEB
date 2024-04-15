import React from 'react'
import "./inicial.css"
import Footer from '../Footer/Footer';
import InicialFoto from "./inicialpic.png"
import JardinFoto from "./jardinfoto.png"
import Familiaicon from './FullFamily.png'
import CorteFoto from "./imagenescorte.jpg"
import FamiliaSuperpuestaIcon from "./peoplesuperpuesta.png"
import DiversityIcon from "./diveristyicon.png"
import HeartHandIcon from "./hearthandicon.png"
import FamilyQuestionIcon from "./familyquestionicon.png"
import VoiceIcon from "./VoiceIcon.png"
import ProcessIcon from "./ProcessIcon.png"
import CaduceusIcon from "./CaduceusIcon.png"
import Piaget from "./piaget.png"
import Vygotsky from "./vygotsky.png"
import Bruner from "./bruner.png"
import Ausubel from "./ausubel.png"
import AulasDig from "./aulasdigitales.jpg"
import MusicaPic from "./musica.jpg"
import EdFisica from "./edfisica.jpg"
import Campamentos from "./campamentos.jpg"
import Salidas from "./salidasdidacticas.jpg"
import PropuestasDidacticas from "./propuestasdidacticas.jpg"
import Ingles from "./Ingles.jpg"
import Swal from 'sweetalert2'

function Inicial() {

    const handleAdmisionesClick = () => {
        Swal.fire({
          icon: 'info',
          title: 'Disculpe las molestias',
          text: 'Página en construcción'
        });
      };

  return (
    <>
        <div>
        <div className="container-fluid">
        <div id="carouselExampleCaptionsBottom1" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={InicialFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center center'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Nivel Inicial</h5>
                <p className='text-shadow'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
                <button type="button" className="btn custom-btn" onClick={handleAdmisionesClick}>Admisiones</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={JardinFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Second slide label</h5>
                <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid text-center barracolores">
        <div className="row">
          <div className="col azul"></div>
          <div className="col rojo"></div>
          <div className="col azul"></div>
          <div className="col rojo"></div>
        </div>
      </div>
      <div class="container text-center">
      <p class="fs-1 items-desc titleinicial">Objetivos</p>
      <hr className='divisor'/>
  <div class="row row-cols-2">
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
        </svg>
        <p className='items-desc'>Lograr nivel académico, orden y disciplina.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
        <p className='items-desc'>Asegurar el clima de unión, de coerción y de esperanza entre todos los miembros de la comunidad educativa.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
        <p className='items-desc'>Favorecer que la vida de la escuela se renueve permanentemente a partir de un continuo trabajo.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
        </svg>
        <p className='items-desc'>Educar con sentido de justicia y libertad que promueva la solidaridad y el compromiso social.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg>
        <p className='items-desc'>Estimular el afecto progresivo hacia los otros, desarrollando el sentido de equidad, de respeto a la libertad y a los criterios y valores ajenos.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
        </svg>
        <p className='items-desc'>Desarrollar actividades culturales, deportivas, científicas tecnológicas, extra programáticas que formen parte de la currícula institucional.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
        </svg>
        <p className='items-desc'>Valorizar la necesidad de profesionalizar en forma creciente la docencia.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-badge" viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
        </svg>
        <p className='items-desc'>Afianzar la identificación.</p>
    </div>
  </div>
</div>
    <div class="container text-center">
    <p class="fs-1 items-desc titleinicial text-center">Metas</p>
      <hr className='divisor'/>
      <div className='row row-cols-2'>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-walking" viewBox="0 0 16 16">
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
            </svg>
        <p className='items-desc'>Lograr una integración social que permita al alumno dirigir su conducta como protagonista del medio en que vive.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            </svg>
        <p className='items-desc'>Despertar permanentemente la curiosidad en los niños para que sean continuos descubridores de experiencia.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
            </svg>
        <p className='items-desc'>Ayudar a los niños a ir formándose como personas honestas, alegres, con capacidad de escucha y fieles defensores de su cultura.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={Familiaicon} alt='familiaicon'/>
        <p className='items-desc'>Permitir al total alumnado, familias y cuerpo docente crecer con la riqueza que permite la diferencia.</p>
        </div>
        </div>
        <img src={CorteFoto} className='img-fluid' alt='fotolinea'/>
      </div>
      <div class="container text-center">
    <p class="fs-1 items-desc titleinicial text-center">Modalidades</p>
      <hr className='divisor'/>
      <div className='row row-cols-2'>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>
        <p className='items-desc'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamiliaSuperpuestaIcon} alt='familiaicon'/>
        <p className='items-desc'>Estimular hábitos de integración social, de convivencia grupal, de solidaridad y cooperación y de conservación del medio ambiente.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={DiversityIcon} alt='familiaicon'/>
        <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={HeartHandIcon} alt='familiaicon'/>
        <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamilyQuestionIcon} alt='familiaicon'/>
        <p className='items-desc'>Favorecer el desarrollo progresivo de la identidad, la autonomía y la pertenencia a la comunidad local.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={VoiceIcon} alt='familiaicon'/>
        <p className='items-desc'>Fomentar la comunicación, el diálogo y el respeto mutuo entre las familias y la institución.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={ProcessIcon} alt='familiaicon'/>
        <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={CaduceusIcon} alt='familiaicon'/>
        <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
        </div>
        </div>
      </div>
      <div class="container text-center">
        <p class="fs-1 items-desc titleinicial text-center">Propuesta Educativa</p>
        <hr className='divisor'/>
      </div>
      <p class="lh-base propuestas-text">Nuestra propuesta educativa se fundamenta en un enfoque integrador de las concepciones de Piaget, tomando en cuenta la construcción del conocimiento a través de una visión constructiva.Vigotsky en relación a las zonas de desarrollo real, próximo y potencial, Bruner desde el concepto de aprendizaje por el concepto del andamiaje.Ausbel, tenido en cuenta desde los aprendizajes y el contenido significativo, basándose en la construcción del significado, sentido y la interacción e inteligencias múltiple.</p>
      <div class="container text-center">
        <div class="row">
            <div class="col">
                <img class="img-fluid imagenes-redondas" alt="avatar2" src={Piaget} />
                <p className='items-desc'>Jean Piaget</p>
            </div>
            <div class="col">
                <img class="img-fluid imagenes-redondas" alt="avatar2" src={Vygotsky} />
                <p className='items-desc'>Vygotsky</p>
            </div>
            <div class="col">
                <img class="img-fluid imagenes-redondas" alt="avatar2" src={Bruner} />
                <p className='items-desc'>Bruner</p>
            </div>
            <div class="col">
                <img class="img-fluid imagenes-redondas" alt="avatar2" src={Ausubel} />
                <p className='items-desc'>Ausbel</p>
            </div>
        </div>
      </div>
      <p class="lh-base propuestas-text">El juego en el Nivel Inicial es patrimonio privilegiado de la infancia y uno de sus derechos inalienables. Por lo tanto, resulta importante garantizarlo en el nivel. El mismo permite explorar y construir el conocimiento, fomentar un espacio de construcción del aprendizaje y de esta manera ejercitar las funciones cognitivas y favorecer el autoestima. Las características fundamentales de toda situación de juego son actividades libres, juego arreglado, juego de construcción y dramático.</p>
      <div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">
            <img className='img-fluid' src={AulasDig}/>
            <p className='items-desc'>Aulas Digitales</p>
          </div>
          <div class="col">
            <img className='img-fluid' src={MusicaPic}/>
            <p className='items-desc'>Música</p>
          </div>
          <div class="col">
            <img className='img-fluid' src={EdFisica}/>
            <p className='items-desc'>Educación Física</p>
          </div>
          <div class="col">
            <img className='img-fluid' src={Campamentos}/>
            <p className='items-desc'>Campamentos</p>
          </div>
        </div>
        <div class="row row-cols-2">
        <div class="col">
          <img className='img-fluid' src={Salidas}/>
          <p className='items-desc'>Salidas didácticas</p>
        </div>
        <div class="col">
          <img className='img-fluid' src={PropuestasDidacticas}/>
          <p className='items-desc'>Propuestas Didácticas</p>
        </div>
        <div class="col">
          <img className='img-fluid' src={Ingles}/>      
          <p className='items-desc'>Inglés</p>  
          </div>
      </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Inicial