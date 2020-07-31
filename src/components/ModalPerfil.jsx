import React from 'react'
import ReactDOM from 'react-dom';
import '../assets/css/ModalPerfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import pandaPlaceholder from '../assets/images/panda-placeholder.webp'

const ModalPerfil = ({ toggle, hideModal, profile }) => {
	const modalShow = `container_modal--perfil ${toggle}`

	if (!profile) {
		return null;
	}

	return ReactDOM.createPortal(
		<div id="modalPerfil" className={modalShow}>
			<div className="modal-perfiles">
				<div className="close">
					<a onClick={hideModal}>
						<FontAwesomeIcon icon={faWindowClose} />
						<i className="fas fa-window-close"></i>
					</a>
				</div>
				<div className="container_modal--perfil-caja">
					<div className="carrusel-perfil">
						<div className="row">
							<div className="col-12 text-center">
								<h1>PanDevs</h1>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 col-md-12 col-lg-5 mx-auto modal-image-column">
								<div className="modal-image-container">
									<img
										className="bst-imagen-perfil border shadow"
										src={profile.photo || pandaPlaceholder}
										alt={profile.name}
									/>
								</div>
							</div>
							<div className="col-12 col-md-12 col-lg-7 profile-details text-center">
								<p id="nombre">
									<strong>Nombre: </strong> {profile.name}
								</p>
								<p id="nacionalidad">
									<strong>Nacionalidad: </strong> {profile.country} {profile.country?.toLowerCase() === 'colombia' ? '🇨🇴' : '🇲🇽'}
								</p>
								<p id="ciudadOrigen">
									<strong>Ciudad origen: </strong> {profile.origin_city}
								</p>
								<p id="perfilTecnico">
									<strong>Perfil Tecnico: </strong> {profile.technical_profile}
								</p>
								<div className="modal-social-icons">
									<a
										href={`https://platzi.com/@${profile.platzi_profile}/`}
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
										href={profile.twitter_profile}
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
										href={profile.linkedin_profile}
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
										href={`mailto:${profile.email}`}
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
									<strong>SuperPoder: </strong> {profile.superpower}
								</p>
								<p id="pregunta2">
									<strong>Debilidad: </strong> {profile.weakness}
								</p>
								<p id="pregunta3">
									<strong>
										Que deseas lograr con Platzi Master:
									</strong>{' '}
									{profile.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	)
}

export default ModalPerfil
