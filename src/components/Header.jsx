import React from 'react';
import logo from '../assets/images/logoPandev.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = ({ onToggleBurger, burgerActive }) => {
	let navClass = burgerActive ? 'ulNavbar ulNavbar--active' : 'ulNavbar';
	return (
		<header className="nav-header">
			<nav id="navbar">
				<a href="#">
					<img
						className="logo-initial"
						src={logo}
						alt="Este es un logo"
					/>
				</a>
				<p className="logo-nombre-toggle">
					Pan<span>Devs</span>
				</p>

				<div className="toggle">
					<div className="menu">
						<img
							className="logo-toggle"
							src={logo}
							alt="Este es un logo"
						/>
						<p className="logo-nombre">
							Pan<span>Devs</span>
						</p>
						<FontAwesomeIcon
							onClick={onToggleBurger}
							icon={faBars}
						/>
					</div>
				</div>
				<ul class={navClass}>
					<li>
						<a
							className="item-li team-nav"
							onClick={onToggleBurger}
							href="#team-cohort"
						>
							Equipo
						</a>
					</li>
					<li>
						<a
							className="item-li team-description"
							href="#description"
							onClick={onToggleBurger}
						>
							Detalles
						</a>
					</li>
					<li>
						<a
							className="item-li contact-nav"
							onClick={onToggleBurger}
							href="#contact"
						>
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
