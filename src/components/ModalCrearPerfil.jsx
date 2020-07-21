import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const ModalCrearPerfil = ({ toggle, hideModal }) => {
	const modalShow = `container_modal ${toggle}`
	return (
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
								<label for="name">Nombre</label>
								<input type="text" id="name" />
							</div>
							<div className="items-form">
								<label for="lastName">Apellido</label>
								<input type="text" id="lastName" />
							</div>

							<div className="items-form">
								<label for="nacion">Nacionalidad</label>
								<input type="text" id="nacion" />
							</div>

							<div className="items-form">
								<label for="city">Ciudad de Origen</label>
								<input type="text" id="city" />
							</div>

							<div className="items-form">
								<label for="profilTech">Perfil Tecnico</label>
								<input type="text" id="profilTech" />
							</div>

							<div className="items-form">
								<label for="question1">
									¿En que quieres convertirte con la educación
									de Platzi Master?
								</label>
								<input type="text" id="question1" />
							</div>

							<div className="items-form">
								<label for="question2">
									¿Cual es tu Superpoder?
								</label>
								<input type="text" id="question2" />
							</div>

							<div className="items-form">
								<label for="question3">
									¿Cual es tu debilidad?
								</label>
								<input type="text" id="question3" />
							</div>

							<div className="items-form">
								<label for="email">Correo</label>
								<input type="text" id="email" />
							</div>

							<div className="items-form">
								<label for="github">Github</label>
								<input type="text" id="github" />
							</div>

							<div className="items-form">
								<label for="linkedin">Linkedin</label>
								<input type="text" id="linkedin" />
							</div>

							<div className="items-form">
								<label for="facebook">Facebook</label>
								<input type="text" id="facebook" />
							</div>

							<div className="items-form">
								<label for="twitter">Twitter</label>
								<input type="text" id="twitter" />
							</div>

							<button className="modal-in" onClick={hideModal}>
								Enviar y Salir
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalCrearPerfil
