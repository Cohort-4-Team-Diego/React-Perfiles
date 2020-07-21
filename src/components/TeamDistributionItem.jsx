import React from 'react'
import ModalPerfil from './ModalPerfil.jsx'
class TeamDistributionItem extends React.Component {
	constructor({ name, classPosition }) {
		super()
		this.state = {
			itemClass: `team-distribution-img ${classPosition}`,
			name: name,
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
