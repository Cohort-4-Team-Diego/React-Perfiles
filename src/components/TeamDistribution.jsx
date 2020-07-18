import React from 'react';
import logoNoTexto from '../assets/images/Logo-Texto-No-Fondo.png';

const TeamDistribution = ({children}) => {
    return (
        <section id="team-cohort">
            <div class="team-distribution">
                {children}
                <div class="team-distribution-img img-9">
                    <img src={logoNoTexto} alt="logo" />
                </div>
            </div>
        </section>
    )
};

export default TeamDistribution;