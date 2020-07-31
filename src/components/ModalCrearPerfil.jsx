import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ModalCrearPerfil = ({
  toggle,
  hideModal,
  onChangeForm,
  formValues,
  handleSubmit,
  editMode,
  handleUpdate,
  handleDelete,
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
          {editMode ? (
            <h2>Actualizar Datos del Miembro</h2>
          ) : (
            <h2>Registrar Datos del Nuevo Miembro</h2>
          )}
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
                <label htmlFor="role">Rol</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="role"
                  name="role"
                  value={formValues.role}
                />
              </div>
              <div className="items-form">
                <label htmlFor="photo">Enlace de Foto</label>
                <input
                  onChange={onChangeForm}
                  type="text"
                  id="photo"
                  name="photo"
                  value={formValues.photo}
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
              {editMode ? (
                <React.Fragment>
                  <button
                    className="modal-in update-button"
                    onClick={(e) => handleUpdate(e, formValues._id)}
                  >
                    Actualizar
                  </button>

                  {!formValues.main && (
                    <button
                      className="modal-in delete-button"
                      onClick={(e) => handleDelete(e, formValues._id)}
                    >
                      Borrar
                    </button>
                  )}
                </React.Fragment>
              ) : (
                <button
                  className="modal-in create-button"
                  onClick={handleSubmit}
                >
                  Crear
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalCrearPerfil;
