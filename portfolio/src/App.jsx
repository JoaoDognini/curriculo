import './App.css'
import { Link, Element } from 'react-scroll';
// import opt from './assets/operacional-logo.jpeg';
// import alura from './assets/alura-logo.png';
// import senai from './assets/senai-logo.png';
// import descomplica from './assets/descomplica-logo.png';
import linkedin from './assets/tecs/linkedin.png';
import github from './assets/tecs/github.png';
import foto from './assets/foto.jpeg';
import SobreMim from './components/SobreMim';
import Cabecalho from './components/Cabecalho';
import ExperienciaFormacao from './components/Experiencia-Formacao';
import Skills from './components/Skills';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
	return (
		<>
			<Cabecalho />
			<div className='corpo'>
				<Element name='sobremim'>
					<SobreMim />
				</Element>
				<Element name='experiencia_formacao'>
					<ExperienciaFormacao />
				</Element>
				<Element name='skills'>
					<Skills />
				</Element>
				<Element name='projetos'>
					<Projetos />
				</Element>
				<Element name='contato'>
					<Contato />
				</Element >
			</div>
		</>
	)
}

export default App
