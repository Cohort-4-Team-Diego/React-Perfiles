import React from 'react'
import '../assets/css/profile-card.css'
import pandaPlaceholder from '../assets/images/panda-placeholder.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const ProfileCard = (props) => {
    const { profile } = props
    return (
        <div className="profile">
            <div className="profile__item">
                
            </div>
            <div className="profile__img-container">
                <img src={ profile.photo || pandaPlaceholder } alt="señor musk" />
            </div>
            <div className="profile__content">
                <h3 className="profile__badge">Fronted</h3>
                <h2>{profile.name}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus laudantium dignissimos molestias dolor sed iure cumque quidem? Quod voluptas maxime aliquam quae tempora itaque? Vitae quae tempora recusandae eaque placeat?</p>
                <div className="profile__social">
                    <a href="#"><FontAwesomeIcon
                        icon={faGithub}
                    /></a>
                    <a href="#"><FontAwesomeIcon
                        icon={faTwitter}
                    /></a>
                    <a href="#"><FontAwesomeIcon
                        icon={faLinkedin}
                    /></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard