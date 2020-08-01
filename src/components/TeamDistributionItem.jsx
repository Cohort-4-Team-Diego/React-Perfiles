import React from 'react'
import ModalPerfil from './ModalPerfil.jsx'
import pandaPlaceholder from '../assets/images/panda-placeholder.webp'

class TeamDistributionItem extends React.Component {
	constructor({ profile, classPosition }) {
		super()
		this.state = {
			profile,
			itemClass: `team-distribution-img ${classPosition}`,
			show: '',
		}
	}

	showModal = () => {
		this.setState({ show: 'aparece' })
	}
	hideModal = () => {
		this.setState({ show: '' })
	}

	render() {
		return (
			<div className={this.state.itemClass}>
				<img src={this.state.profile.photo || pandaPlaceholder} alt={this.state.profile.name}/>
				<button onClick={this.showModal}>
					<h2>{this.state.profile.name}</h2>
				</button>
				<ModalPerfil
				    profile={this.state.profile}
					toggle={this.state.show}
					hideModal={this.hideModal}
				/>
			</div>
		)
	}
}

export default TeamDistributionItem
