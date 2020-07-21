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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const teamMates = [
	{
		name: 'Francisco',
		classPosition: 'img-1',
	},
	{
		name: 'Ildebrando',
		classPosition: 'img-2',
	},
	{
		name: 'Oscar',
		classPosition: 'img-3',
	},
	{
		name: 'Juan',
		classPosition: 'img-4',
	},
	{
		name: 'Santiago',
		classPosition: 'img-5',
	},
	{
		name: 'Didier',
		classPosition: 'img-6',
	},
	{
		name: 'Adrian',
		classPosition: 'img-7',
	},
	{
		name: 'Diego',
		classPosition: 'img-8',
	},
]

function App() {
	return (
		<div className="App">
			<Header />

			<TeamDistribution>
				{teamMates.map(({ name, classPosition }) => (
					<TeamDistributionItem
						name={name}
						classPosition={classPosition}
					/>
				))}
			</TeamDistribution>
			<ModalPerfil />
			<ModalCrearPerfil />
			<Footer />
		</div>
	)
}

export default App
