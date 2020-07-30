import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ModalCrearPerfil = ({ toggle, hideModal, onChangeForm, formValues, handleSubmit }) => {
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
                  name="name"
                  value={formValues.name}
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
                  name="origin_city"
                  value={formValues.origin_city}
                />
              </div>

              <div className="items-form">
                <label htmlFor="profilTech">Perfil Tecnico</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="profilTech"
                  name="technical_profile"
                  value={formValues.technical_profile}
                />
              </div>

              <div className="items-form">
                <label htmlFor="description">
                  ¿En que quieres convertirte con la educación de Platzi Master?
                </label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="description"
                  name="description"
                  value={formValues.description}
                />
              </div>

              <div className="items-form">
                <label htmlFor="superpower">¿Cual es tu Superpoder?</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="superpower"
                  name="superpower"
                  value={formValues.superpower}
                />
              </div>

              <div className="items-form">
                <label htmlFor="weakness">¿Cual es tu debilidad?</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="weakness"
                  name="weakness"
                  value={formValues.weakness}
                />
              </div>

              <div className="items-form">
                <label htmlFor="email">Correo</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="email"
                  name="email"
                  value={formValues.email}
                />
              </div>

              <div className="items-form">
                <label htmlFor="github_profile">Github</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="github_profile"
                  name="github_profile"
                  value={formValues.github_profile}
                />
              </div>

              <div className="items-form">
                <label htmlFor="platzi_profile">Usuario Platzi</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="platzi_profile"
                  name="platzi_profile"
                  value={formValues.platzi_profile}
                />
              </div>

              <div className="items-form">
                <label htmlFor="linkedin_profile">Linkedin</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="linkedin_profile"
                  name="linkedin_profile"
                  value={formValues.linkedin_profile}
                />
              </div>

              <div className="items-form">
                <label htmlFor="twitter_profile">Twitter</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="twitter_profile"
                  name="twitter_profile"
                  value={formValues.twitter_profile}
                />
              </div>

              <input
                  onChange={onChangeForm}
                  type="file"
                  id="photo"
                  name="photo"
                  value={formValues.photo}
                />

              <button className="modal-in" onClick={handleSubmit}>
                Enviar
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
