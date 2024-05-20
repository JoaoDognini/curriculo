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
			<Element name='sobremim'>
				<SobreMim />
			</Element>
			<Element name='experiencia_formacao' className='elemento'>
				<ExperienciaFormacao />
			</Element>
			<Element name='skills' className='elemento'>
				<Skills />
			</Element>
			<Element name='projetos' className='elemento'>
				<Projetos />
			</Element>
			<Element name='contato' className='elemento'>
				<Contato />
			</Element >
		</>
	)
}

export default App
