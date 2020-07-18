import React from 'react';
import logo from './assets/images/Logo-Cohort-No-Background.png';
import logoNoTexto from './assets/images/Logo-Texto-No-Fondo.png';
import './App.css';
import './assets/css/profile-picture.css';
import './assets/css/footer.css';

function App() {
  return (
    <div className="App">

      <header className="nav-header">
        <nav id="navbar">
          <a href="#"><img className="logo-initial" src={logo}
              alt="Este es un logo" /></a>
          <div className="toggle">
            <div className="menu">
              <img className="logo-toggle" src="assets/images/Logo-Cohort-No-Background.png" alt="Este es un logo" />
              <i className="fas fa-bars burger-button" aria-hidden="true"></i>
            </div>
          </div>
          <ul class="ulNavbar">
            <li><a className="item-li team-nav" href="#team-cohort">Equipo</a></li>
            <li><a className="item-li contact-nav" href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section id="team-cohort">
        <div class="team-distribution">
          <div class="team-distribution-img img-1">
            <a onclick="review('#modalPerfil')">
              <h2>Francisco</h2>
            </a>
          </div>
          <div class="team-distribution-img img-2">
            <a onclick="review('#modalPerfil')">
              <h2>Ildebrando</h2>
            </a>
          </div>
          <div class="team-distribution-img img-3">
            <a onclick="review('#modalPerfil')">
              <h2>Oscar</h2>
            </a>
          </div>
          <div class="team-distribution-img img-4">
            <a onclick="review('#modalPerfil')">
              <h2>Juan</h2>
            </a>
          </div>
          <div class="team-distribution-img img-5">
            <a onclick="review('#modalPerfil')">
              <h2>Santiago</h2>
            </a>
          </div>
          <div class="team-distribution-img img-6">
            <a onclick="review('#modalPerfil')">
              <h2>Didier</h2>
            </a>
          </div>
          <div class="team-distribution-img img-7">
            <a onclick="review('#modalPerfil')">
              <h2>Adrian</h2>
            </a>
          </div>
          <div class="team-distribution-img img-8">
            <a onclick="review('#modalPerfil')">
              <h2>Diego</h2>
            </a>
          </div>
          <div class="team-distribution-img img-9">
            <img src={logoNoTexto} alt="logo" />
          </div>
        </div>
      </section>

      <div id="cajaFooter" class="container_modal">
        <div class="wrapper-footer">
          <div class="close">
            <a onclick="review('#cajaFooter')"><i class="fas fa-window-close"></i></a>
          </div>
          <div class="container_modal--caja">
            <h2>Registro de nuevo tripulante</h2>
            <div class="carrusel">
              <form action="" class="formulario">
                <div class="items-form">
                  <label for="name">Nombre</label>
                  <input type="text" id="name" />
                </div>
                <div class="items-form">
                  <label for="lastName">Apellido</label>
                  <input type="text" id="lastName" />
                </div>

                <div class="items-form">
                  <label for="nacion">Nacionalidad</label>
                  <input type="text" id="nacion" />
                </div>

                <div class="items-form">
                  <label for="city">Ciudad de Origen</label>
                  <input type="text" id="city" />
                </div>

                <div class="items-form">
                  <label for="profilTech">Perfil Tecnico</label>
                  <input type="text" id="profilTech" />
                </div>

                <div class="items-form">
                  <label for="question1">¿En que quieres convertirte con la educación de Platzi
                    Master?</label>
                  <input type="text" id="question1" />
                </div>

                <div class="items-form">
                  <label for="question2">¿Cual es tu Superpoder?</label>
                  <input type="text" id="question2" />
                </div>

                <div class="items-form">
                  <label for="question3">¿Cual es tu debilidad?</label>
                  <input type="text" id="question3" />
                </div>

                <div class="items-form">
                  <label for="email">Correo</label>
                  <input type="text" id="email" />
                </div>

                <div class="items-form">
                  <label for="github">Github</label>
                  <input type="text" id="github" />
                </div>

                <div class="items-form">
                  <label for="linkedin">Linkedin</label>
                  <input type="text" id="linkedin" />
                </div>

                <div class="items-form">
                  <label for="facebook">Facebook</label>
                  <input type="text" id="facebook" />
                </div>

                <div class="items-form">
                  <label for="twitter">Twitter</label>
                  <input type="text" id="twitter" />
                </div>

                <button class="modal-in" onclick="review('#cajaFooter')">
                  Enviar y Salir
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer id="contact" className="footer">
        <ul className="granlista">
          <a href="https://github.com/Cohort-4-Team-Diego" target="_blank"><li className="abrirlista1 github"></li></a>
          <a href="https://platzi.com/" target="_blank"><li className="abrirlista1 Platzi"></li></a>
          <a href="mailto:c4random.master@gmail.com" target="_blank"><li className="abrirlista1 correo"></li></a>
          <li className="list-item-new-member">
            <a href="#contact" className="modal-footer-new-member" onclick="review('#cajaFooter')">
              <i className="fas fa-user-plus"></i> Nuevo Miembro
            </a>
          </li>
        </ul>

      </footer>

      <div id="modalPerfil" class="container_modal--perfil">
        <div class="modal-perfiles">
          <div class="close">
            <a onclick="review('#modalPerfil')"><i class="fas fa-window-close"></i></a>
          </div>
          <div class="container_modal--perfil-caja">
            <h2>Registro de nuevo tripulante</h2>
            <div class="carrusel-perfil">
              <div class="row">
                <div class="col-12 text-center">
                  <h1>Cohort 4 Diego</h1>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 col-md-12 col-lg-5 mx-auto modal-image-column">
                  <div class="modal-image-container">
                    <img class="bst-imagen-perfil border shadow" src="assets/images/FranciscoS.jpg" alt="" />
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-7 profile-details text-center">
                  <p id="nombre">
                    <strong>Nombre: </strong> Francisco Javier Suarez Verdugo
                  </p>
                  <p id="nacionalidad"><strong>Nacionalidad: </strong>Colombia</p>
                  <p id="ciudadOrigen"><strong>Ciudad origen: </strong>Bogotá</p>
                  <p id="perfilTecnico">
                    <strong>Perfil Tecnico: </strong>Desarrollador
                  </p>
                  <div class="modal-social-icons">
                    <a href="https://platzi.com/@Ulzahk/" target="_blank">
                      <p id="perfilPlatzi">
                        <strong><img src="https://bit.ly/2W9mi6x" alt="plazi icono" /></strong>
                      </p>
                    </a>
                    <a href="https://bit.ly/2w3DcJm" target="_blank">
                      <p id="perfilTwiter">
                        <strong><i class="fab fa-twitter fa-3x"></i></strong>
                      </p>
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-j-suarez" target="_blank">
                      <p id="perfilLinkedin">
                        <strong><i class="fab fa-linkedin fa-3x"></i></strong>
                      </p>
                    </a>
                    <a href="mailto:ulzahk@gmail.com" target="_blank">
                      <p id="email">
                        <strong><i class="fas fa-envelope fa-3x"></i></strong>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12 mt-2 profile-answers">
                  <p id="pregunta1">
                    <strong>SuperPoder: </strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                  <p id="pregunta2">
                    <strong>Debilidad: </strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                  <p id="pregunta3">
                    <strong>Que deseas lograr con Platzi Master:</strong> Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
