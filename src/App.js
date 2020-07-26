import React from 'react'
import './App.css'
import './assets/css/profile-picture.css'
import './assets/css/footer.css'

import Header from './components/Header'
import TeamDistribution from './components/TeamDistribution'
import TeamDistributionItem from './components/TeamDistributionItem'
import Footer from './components/Footer'
import ModalCrearPerfil from './components/ModalCrearPerfil.jsx'
import ModalPerfil from './components/ModalPerfil.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const data = await api.profiles.list();

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

        <TeamDistribution>
          {this.state.data.map((profile, index) => (
            <TeamDistributionItem
              profile={profile}
              classPosition={`img-${index+1}`}
              key={profile._id}
            />
          ))}
        </TeamDistribution>
        <ModalPerfil />
        <ModalCrearPerfil />
        <Footer />
      </div>
    )
  }
}

export default App
