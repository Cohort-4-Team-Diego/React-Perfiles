import React from 'react'
import ModalPerfil from './ModalPerfil.jsx'
import pandaPlaceholder from '../assets/images/panda-placeholder.webp'

class TeamDistributionItem extends React.Component {
	constructor({ name, classPosition, photo }) {
		super()
		this.state = {
			itemClass: `team-distribution-img ${classPosition}`,
			name,
			photo: photo || pandaPlaceholder,
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
				<img src={this.state.photo} alt={this.state.name}/>
				<a onClick={this.showModal}>
					<h2>{this.state.name}</h2>
				</a>
				<ModalPerfil
					toggle={this.state.show}
					hideModal={this.hideModal}
				/>
			</div>
		)
	}
}

export default TeamDistributionItem
