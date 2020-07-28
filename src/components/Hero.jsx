import React from 'react'
import '../assets/css/Hero.css'
import logoPanDev from '../assets/images/logoPandev.png'
import logoCss from '../assets/images/tec-logos/css-logo-3.png'
import logoHtml from '../assets/images/tec-logos/html-2.png'
import logoGitHub from '../assets/images/tec-logos/github-logo.png'
import logoMongo from '../assets/images/tec-logos/mongo-logo-3.png'
import logoReact from '../assets/images/tec-logos/react-logo-2.png'
const Hero = () => {
	return (
		<section className="Hero">
			<div className="superior">
				<figure>
					<img src="" alt="" />
				</figure>
				<div className="Hero-container">
					<figure className="Hero-img">
						<img src={logoPanDev} alt="logo" />
					</figure>
					<h1 className="Hero-title">
						Haz llegado al sitio de PanDevs
					</h1>
					<h2 className="Hero-description">
						Somos miembros del Cohort 4 de Platzi Master y estamos
						aquí para hacer tus proyectos una realdad
					</h2>
					<button className="Hero-button">Conócenos</button>
				</div>
			</div>
			<div className="inferior">
				<div className="Hero-logos">
					<figure>
						<img
							className="Hero-logos_html"
							src={logoHtml}
							alt="logoHtml"
						/>
					</figure>
					<figure>
						<img
							className="Hero-logos_css"
							src={logoCss}
							alt="logoCss"
						/>
					</figure>
					<figure>
						<img
							className="Hero-logos_react"
							src={logoReact}
							alt="logoReact"
						/>
					</figure>
					<figure>
						<img
							className="Hero-logos_mongo"
							src={logoMongo}
							alt="logoMongo"
						/>
					</figure>
					<figure>
						<img
							className="Hero-logos_github"
							src={logoGitHub}
							alt="logoGitHub"
						/>
					</figure>
				</div>
			</div>
		</section>
	)
}

export default Hero
