import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ModalCrearPerfil = ({
  toggle,
  hideModal,
	onChangeForm,
	formValues
}) => {
  const modalShow = `container_modal ${toggle}`;
  return ReactDOM.createPortal(
    <div id="cajaFooter" className={modalShow}>
      <div className="wrapper-footer">
        <div className="close">
          <a onClick={hideModal}>
            <FontAwesomeIcon icon={faWindowClose} />
          </a>
        </div>
        <div className="container_modal--caja">
          <h2>Registro de nuevo tripulante</h2>
          <div className="carrusel">
            <form action="" className="formulario">
              <div className="items-form">
                <label htmlFor="name">Nombre</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="name"
									name="firstName"
									value={formValues.firstName}
                />
              </div>
              <div className="items-form">
                <label htmlFor="lastName">Apellido</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="lastName"
									name="lastName"
									value={formValues.lastName}
                />
              </div>

              <div className="items-form">
                <label htmlFor="nacion">Nacionalidad</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="nacion"
									name="country"
									value={formValues.country}
                />
              </div>

              <div className="items-form">
                <label htmlFor="city">Ciudad de Origen</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="city"
									name="city"
									value={formValues.city}
                />
              </div>

              <div className="items-form">
                <label htmlFor="profilTech">Perfil Tecnico</label>
                <input type="text" id="profilTech" />
              </div>

              <div className="items-form">
                <label htmlFor="question1">
                  ¿En que quieres convertirte con la educación de Platzi Master?
                </label>
                <input type="text" id="question1" />
              </div>

              <div className="items-form">
                <label htmlFor="question2">¿Cual es tu Superpoder?</label>
                <input type="text" id="question2" />
              </div>

              <div className="items-form">
                <label htmlFor="question3">¿Cual es tu debilidad?</label>
                <input type="text" id="question3" />
              </div>

              <div className="items-form">
                <label htmlFor="email">Correo</label>
                <input type="text" id="email" />
              </div>

              <div className="items-form">
                <label htmlFor="github">Github</label>
                <input type="text" id="github" />
              </div>

              <div className="items-form">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" id="linkedin" />
              </div>

              <div className="items-form">
                <label htmlFor="facebook">Facebook</label>
                <input type="text" id="facebook" />
              </div>

              <div className="items-form">
                <label htmlFor="twitter">Twitter</label>
                <input type="text" id="twitter" />
              </div>

              <button className="modal-in" onClick={hideModal}>
                Enviar y Salir
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalCrearPerfil;
