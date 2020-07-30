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

const defaultValues = {
	role: 'NA',
	birthdate: '1990-01-01',
	facebook: 'NA'
}

const defaultEmpty =  {
	_id: "",
	name: "",
	birthdate: "1990-01-01",
	origin_city: "",
	country: "",
	technical_profile: "",
	platzi_profile: "",
	twitter_profile: "",
	linkedin_profile: "",
	github_profile: "",
	role: "NA",
	superpower: "",
	weakness: "",
	description: "",
	photo: "",
	email: "",
	facebook: "NA",
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
			loading: true,
			error: null,
			showCreateProfileModal: '',
			editMode: false,
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
		this.setState({
			showCreateProfileModal: 'aparece',
			createProfileForm: {...defaultEmpty},
			editMode: false
		})
	}

	showEditProfileModal = async (id) => {
		this.setState({
			loading: true,
			error: null,
		})

		try {
			const profile = await api.profiles.read(id);

			this.setState({
				showCreateProfileModal: 'aparece',
				createProfileForm: {...profile},
				editMode: true,
				loading: false
			})

		} catch (error) {

			this.setState({
				loading: false,
				error: error,
			})

		}
	}

	hideCreateProfileModal = (id) => {
		this.setState({ showCreateProfileModal: '' })
	}

	handleChangeCreateProfileForm = e => {
		this.setState({
			createProfileForm: {
				...this.state.createProfileForm,
				...defaultValues,
				[e.target.name]: e.target.value
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

	handleUpdate = async (e, id) => {
		e.preventDefault();
		this.setState({
			loading: true,
			error: null,
		})

    try {
			await api.profiles.update(id, this.state.createProfileForm)
			this.fetchData();
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			})
		}
	}

	handleDelete = async (e, id) => {
		e.preventDefault();
		this.setState({
			loading: true,
			error: null,
		})

    try {
			await api.profiles.remove(id, this.state.createProfileForm)
			this.fetchData();
		} catch (error) {
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
							key={profile.id}
						/>
					))}
				</TeamDistribution>
				<div className="row">
					{this.state.data.map((profile) => (
						<div className="col-12 col-xl-6">
							<ProfileCard
								showModal={this.showEditProfileModal}
								profile={profile}
								key={profile._id}
							/>
						</div>
					))}
				</div>
				<Footer showModal={this.showCreateProfileModal} />
				<ModalCrearPerfil
					editMode={this.state.editMode}
					handleUpdate={this.handleUpdate}
					onChangeForm={this.handleChangeCreateProfileForm}
					formValues={this.state.createProfileForm}
					toggle={this.state.showCreateProfileModal}
					hideModal={this.hideCreateProfileModal}
					handleSubmit={this.handleSubmitProfile}
					handleDelete={this.handleDelete}
				/>
			</div>
		)
	}
}

export default App
