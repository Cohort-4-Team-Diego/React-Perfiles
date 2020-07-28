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
import ModalPerfil from './components/ModalPerfil.jsx'
import api from './api'

import ProfileCard from './components/ProfileCard'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
			loading: true,
			error: null,
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
				data,
			})
		} catch (error) {
			this.setState({
				loading: false,
				error,
			})
		}
	}

      this.setState({
        loading: false,
        data
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
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
              <ProfileCard
                profile={profile}
                key={profile._id}
              />
            </div>
				))}
        </div>
				<ModalPerfil />
				<ModalCrearPerfil />
				<Footer />
			</div>
		);
  }
}

export default App
