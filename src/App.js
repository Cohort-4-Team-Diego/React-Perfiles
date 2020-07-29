import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './assets/css/profile-picture.css'
import './assets/css/footer.css'

import Header from './components/Header'
import Hero from './components/Hero.jsx'
import TeamDistribution from './components/TeamDistribution'
import TeamDistributionItem from './components/TeamDistributionItem'
import Footer from './components/Footer'
import ModalCrearPerfil from './components/ModalCrearPerfil.jsx'
import api from './api'

import ProfileCard from './components/ProfileCard'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
			loading: true,
			error: null,
			showCreateProfileModal: false,
			createProfileForm: {}
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({
			loading: true,
			error: null,
		})

		try {
			const data = await api.profiles.list()

			this.setState({
				loading: false,
				showCreateProfileModal: '',
				data,
			})
		} catch (error) {
			this.setState({
				loading: false,
				error,
			})
		}
	}

	showCreateProfileModal = () => {
		this.setState({ showCreateProfileModal: 'aparece' })
	}

	hideCreateProfileModal = () => {
		this.setState({ showCreateProfileModal: '' })
	}

	handleChangeCreateProfileForm = e => {
		this.setState({
			createProfileForm: {
				...this.state.createProfileForm,
				[e.target.name]: e.target.value,
				role: 'NA',
				birthdate: '1990-01-01',
				facebook: 'NA'
			}
		})
	}

	handleSubmitProfile = async (e) => {
		e.preventDefault();
		this.setState({
			loading: true,
			error: null,
		})

    try {
			console.log('Form: ', this.state.createProfileForm)
			await api.profiles.create(this.state.createProfileForm)
			this.fetchData();

		} catch (error) {
			console.log(error);
			this.setState({
				loading: false,
				error: error
			})
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Hero />
				<TeamDistribution>
					{this.state.data.map((profile, index) => (
						<TeamDistributionItem
							profile={profile}
							classPosition={`img-${index + 1}`}
							key={profile._id}
						/>
					))}
				</TeamDistribution>
				<div className="row">
					{this.state.data.map((profile) => (
						<div className="col-6">
							<ProfileCard profile={profile} key={profile._id} />
						</div>
					))}
				</div>
				<Footer showModal={this.showCreateProfileModal} />
				<ModalCrearPerfil
					onChangeForm={this.handleChangeCreateProfileForm}
					formValues={this.state.createProfileForm}
					toggle={this.state.showCreateProfileModal}
					hideModal={this.hideCreateProfileModal}
					handleSubmit={this.handleSubmitProfile}
				/>
			</div>
		)
	}
}

export default App
