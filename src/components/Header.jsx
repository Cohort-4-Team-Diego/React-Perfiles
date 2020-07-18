import React from 'react';
import logo from '../assets/images/Logo-Cohort-No-Background.png';

const Header = () => {
    return (
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
    )
};

export default Header;