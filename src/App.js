import React from 'react';
import './App.css';
import './assets/css/profile-picture.css';
import './assets/css/footer.css';

import Header from './components/Header';
import TeamDistribution from './components/TeamDistribution';
import TeamDistributionItem from './components/TeamDistributionItem';
import Footer from './components/Footer';

const teamMates = [
  {
    name: 'Francisco', classPosition: 'img-1'
  },
  {
    name: 'Ildebrando', classPosition: 'img-2'
  },
  {
    name: 'Oscar', classPosition: 'img-3'
  },
  {
    name: 'Juan', classPosition: 'img-4'
  },
  {
    name: 'Santiago', classPosition: 'img-5'
  },
  {
    name: 'Didier', classPosition: 'img-6'
  },
  {
    name: 'Adrian', classPosition: 'img-7'
  },
  {
    name: 'Diego', classPosition: 'img-8'
  }
]

function App() {
  return (
    <div className="App">

      <Header />

      <TeamDistribution>
        {
          teamMates.map(
            ({name, classPosition}) => <TeamDistributionItem name={name} classPosition={classPosition}/>
          )
        }
      </TeamDistribution>

      <Footer/>

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
