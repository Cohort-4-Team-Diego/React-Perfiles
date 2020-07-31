import React from 'react'
import '../assets/css/profile-card.css'
import pandaPlaceholder from '../assets/images/panda-placeholder.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const ProfileCard = (props) => {
    const { profile, showModal } = props
    return (
			<div id="description" className="profile">
				<div className="profile__item"></div>
				<div className="profile__img-container">
					<img src={profile.photo || pandaPlaceholder} alt="señor musk" />
				</div>
				<div className="profile__content">
					<button onClick={() => showModal(profile._id)}>
						<h3 className="profile__badge">{profile.role}</h3>
					</button>
					<h2>{profile.name}</h2>
					<p>{profile.origin_city}</p>
					<p>{profile.description}</p>
					<div className="profile__social">
						<a href={profile.github_profile} target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href={profile.twitter_profile} target="_blank">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href={profile.linkedin_profile} target="_blank">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
			</div>
		);
}

export default ProfileCard