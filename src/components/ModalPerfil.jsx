import React from 'react'
import '../assets/css/ModalPerfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ModalPerfil = ({ toggle, hideModal }) => {
	let modalShow = `container_modal--perfil ${toggle}`

	return (
		<div id="modalPerfil" className={modalShow}>
			<div className="modal-perfiles">
				<div className="close">
					<a onClick={hideModal}>
						<FontAwesomeIcon icon={faWindowClose} />
						<i className="fas fa-window-close"></i>
					</a>
				</div>
				<div className="container_modal--perfil-caja">
					<h2>Registro de nuevo tripulante</h2>
					<div className="carrusel-perfil">
						<div className="row">
							<div className="col-12 text-center">
								<h1>Cohort 4 Diego</h1>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 col-md-12 col-lg-5 mx-auto modal-image-column">
								<div className="modal-image-container">
									<img
										className="bst-imagen-perfil border shadow"
										src="assets/images/FranciscoS.jpg"
										alt=""
									/>
								</div>
							</div>
							<div className="col-12 col-md-12 col-lg-7 profile-details text-center">
								<p id="nombre">
									<strong>Nombre: </strong> Francisco Javier
									Suarez Verdugo
								</p>
								<p id="nacionalidad">
									<strong>Nacionalidad: </strong>Colombia
								</p>
								<p id="ciudadOrigen">
									<strong>Ciudad origen: </strong>Bogotá
								</p>
								<p id="perfilTecnico">
									<strong>Perfil Tecnico: </strong>
									Desarrollador
								</p>
								<div className="modal-social-icons">
									<a
										href="https://platzi.com/@Ulzahk/"
										target="_blank"
									>
										<p id="perfilPlatzi">
											<strong>
												<img
													src="https://bit.ly/2W9mi6x"
													alt="plazi icono"
												/>
											</strong>
										</p>
									</a>
									<a
										href="https://bit.ly/2w3DcJm"
										target="_blank"
									>
										<p id="perfilTwiter">
											<FontAwesomeIcon
												icon={faTwitter}
												size="3x"
											/>
										</p>
									</a>
									<a
										href="https://www.linkedin.com/in/francisco-j-suarez"
										target="_blank"
									>
										<p id="perfilLinkedin">
											<strong>
												<FontAwesomeIcon
													icon={faLinkedin}
													size="3x"
												/>
											</strong>
										</p>
									</a>
									<a
										href="mailto:ulzahk@gmail.com"
										target="_blank"
									>
										<p id="email">
											<strong>
												<FontAwesomeIcon
													icon={faEnvelope}
													size="3x"
												/>
											</strong>
										</p>
									</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-12 mt-2 profile-answers">
								<p id="pregunta1">
									<strong>SuperPoder: </strong> Lorem ipsum
									dolor sit amet consectetur adipisicing elit.
								</p>
								<p id="pregunta2">
									<strong>Debilidad: </strong> Lorem ipsum
									dolor sit amet consectetur adipisicing elit.
								</p>
								<p id="pregunta3">
									<strong>
										Que deseas lograr con Platzi Master:
									</strong>{' '}
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalPerfil
