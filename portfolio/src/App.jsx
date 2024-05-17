import './App.css'
import { Element } from 'react-scroll'
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
