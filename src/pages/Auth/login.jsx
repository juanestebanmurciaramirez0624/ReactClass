import './login.css'
import logo from '../../assets/img/logo.png'

const Login = () => {
    return (
<div>
  <section className="header" id="home">
    <nav>
      <a href="index"><img src={logo} alt="Logo" /><span className='text-logo'>ticket</span></a>
      <div className="nav-links" id="navLinks">
        <i className="fa-solid fa-xmark" />
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#">Pagina Principal</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
      <i className="fa-solid fa-bars" />
    </nav>
    <div className="content-tex-box">
      <div className="text-box">
        <h1>SERVIPLUS - TICKETS DE SERVICIO AL CLIENTE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt quia libero tempore delectus dolores consequatur odio excepturi. Repellendus similique at libero numquam ex expedita nobis! Dolorum labore at accusamus.
        Beatae, magni incidunt hic necessitatibus commodi nam repellat ad. Voluptate commodi dicta aut officia similique, delectus, eligendi quae repellendus dolor excepturi rem asperiores nihil consequuntur distinctio ipsam vero cupiditate facilis?
        Velit ab maxime, tenetur, ex, ipsa perspiciatis magnam dolorum saepe numquam odio illo. Modi perspiciatis ex illo fugiat blanditiis assumenda. In optio assumenda voluptate facere asperiores eum ea eos quibusdam!</p>
      </div>
      <app-login />
    </div>
  </section>
  {/*Cards about of the ENSI*/}
  <section className="cards" id="about">
    <h1>Nuestras sedes</h1>
    <p>Nuestra institucion cuenta con varias sedes, entre las que tenemos</p>
    <div className="row">
      <div className="activitys-col">
        <img src="" alt="sede1" />
        <h3>Sede Antonio Nariño</h3>
        <p>La sede Antonio Nariño es un lugar donde los sueños de los estudiantes toman forma. Es un espacio
          donde se exploran nuevas ideas,
          se cultivan talentos y se forjan amistades duraderas. Cada día, esta sede refleja nuestro compromiso
          con la educación de calidad
          y el crecimiento personal de quienes la conforman</p>
      </div>
      <div className="activitys-col">
        <img src="" alt="sede2" />
        <h3>Sede Principal</h3>
        <p>La sede principal de nuestro colegio es el epicentro de la educación que transforma vidas. Es un
          lugar donde se promueve la curiosidad,
          la colaboración y el compromiso con el aprendizaje. Cada rincón respira el espíritu de la excelencia
          académica y la formación integral,
          creando un ambiente que impulsa el crecimiento intelectual y personal de nuestros estudiantes</p>
      </div>
      <div className="activitys-col">
        <img src="" alt="sede3"/>
        <h3>Sede Centro Piloto</h3>
        <p>La sede Centro Piloto es un lugar donde la tradición se combina con la innovación, y donde se fomenta
          el respeto, la tolerancia y
          la responsabilidad. Es un símbolo de nuestro compromiso con la educación de calidad y la formación
          integral de nuestros estudiantes
          en el corazón de la ciudad</p>
      </div>
    </div>
  </section>
  {/*Vision, Mission and values*/}
  <section className="vmv">
    <h1>Vision Mision y Valores</h1>
    <br />
    <p>Visión, misión y valores son fundamentales. La visión guía el futuro, la misión define el propósito y los
      valores forman la base. Juntos, dirigen nuestro camino por lo que nuestra vison mision y valores son necesarios
      para comprender quienes somos y quienes aspiramos a ser</p>
    <div className="row">
      <div className="vmv-col">
        <img src="" alt="vision" width={500} height={500} />
        <div className="layer vision">
          <h3>VISION</h3>
          <p><br /><br />En el año 2023, La Escuela Normal Superior de Ibagué será una Institución líder a nivel
            local,
            regional y nacional, con proyección internacional ven el campo de la formación docente, a través
            del fortalecimiento de las prácticas pedagógicas, de educación inclusiva, de los procesos de
            calidad educativa y de investigación, como ejes dinamizadores del desarrollo institucional</p>
        </div>
      </div>
      <div className="vmv-col">
        <img src="" alt="vision" width={500} height={500} />
        <div className="layer mission">
          <h3>MISION</h3>
          <p><br /><br />La Escuela Normal Superior de Ibagué es una Institución Educativa de carácter oficial,
            formadora
            de maestros para preescolar y básica primaria;
            fundamenta en todos los niveles, los valores de compromiso, respeto, honestidad e idoneidad, y
            desarrolla prácticas pedagógicas, académicas e
            investigativas a través de la reflexión dialogada de acuerdo con las necesidades de inclusión,
            modernización y calidad educativa</p>
        </div>
      </div>
      <div className="vmv-col">
        <img src="" alt="vision" />
        <div className="layer values">
          <h3>VALORES</h3>
          <p><br /><br />RESPETO <br />
            Es afín con la justicia, la prudencia, la autonomía, la equidad, la tolerancia, la aceptación y
            el reconocimiento del otro como ser diferente
            pero igual en derechos y oportunidades. Este valor se concreta en los principios de crítica
            constructiva, franqueza en la interacción y sinceridad
            con nosotros mismos y con los demás</p>
        </div>
      </div>
    </div>
  </section>
  {/*Activitys*/}
  <section className="activitys">
    <h1>Ofrecemos diferentes actividades</h1>
    <br />
    <p>Nuestra institucion cuenta con varias actividades extracurriculares entre las que encontramos </p>
    <div className="row">
      <div className="col">
        <h3>Fútbol Escolar</h3>
        <p>Nuestra institución ofrece emocionantes actividades deportivas, como el fútbol, donde los estudiantes
          pueden aprender habilidades deportivas, fomentar la
          camaradería y disfrutar de una sana competencia en un entorno seguro y supervisado</p>
      </div>
      <div className="col">
        <h3>Club de Ciencias</h3>
        <p> Explora el mundo de la ciencia en nuestro Club de Ciencias, donde los estudiantes participan en
          experimentos, proyectos de investigación y actividades
          innovadoras que despiertan la curiosidad y el pensamiento crítico</p>
      </div>
      <div className="col">
        <h3>Club de Arte Creativo</h3>
        <p>Para los amantes del arte, ofrecemos un Club de Arte Creativo donde los estudiantes pueden
          desarrollar su creatividad, explorar diversas formas de expresión
          artística y exhibir su talento en exposiciones escolares</p>
      </div>
    </div>
  </section>
  {/*Contact*/}
  <section className="cta" id="contact">
    <h1>Contactenos</h1>
    <app-contact />
  </section>
  {/*Foooter*/}
  <footer className="footer">
    <h4>Escuela Normal Superior de Ibague</h4>
    <p>Escuela Normal Superior de Ibagué | Formando Futuros Líderes | Todos los derechos reservados
    </p><p id="year">© </p>
    <div className="icons">
      <i className="fa-brands fa-facebook" />
      <i className="fa-brands fa-instagram" />
      <i className="fa-brands fa-twitter" />
      <i className="fa-brands fa-github" />
    </div>
    <p>Hecho por Juan Esteban Murcia Ramirez</p>
  </footer>
</div>

    )
}

export default Login


