import styles from './Cabecalho.module.scss';
import { useState } from "react";
import { Link } from "react-scroll";
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';
import menuFechado from './imgs/menu.png';
import menuAberto from './imgs/close.png';

export default function Cabecalho() {
	const [aberto, setAberto] = useState(false);

	function abrirMenu() {
		setAberto(!aberto);
	}

	return (
		<>
			<header className={styles.navegacao_mobile}>
				<div className={styles.navegacao_mobile_menu}>
					<button className={styles.navegacao_mobile_menu_botao} onClick={() => abrirMenu()}>
						<img src={aberto ? menuAberto : menuFechado} />
					</button>
					<ul className={`${styles.navegacao_mobile_menu_lista} ${aberto ? styles.menu_aberto : ''}`}>
						<li className={styles.navegacao_mobile_menu_lista_item}>
							<Link
								to='sobremim'
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => abrirMenu()}
								className={styles.navegacao_mobile_menu_lista_item_link}
							>
								Sobre mim
							</Link>
						</li>
						<li className={styles.navegacao_mobile_menu_lista_item}>
							<Link
								to='experiencia_formacao'
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => abrirMenu()}
								className={styles.navegacao_mobile_menu_lista_item_link}
							>
								Experiência Profissional
							</Link>
						</li>
						<li className={styles.navegacao_mobile_menu_lista_item}>
							<Link
								to='experiencia_formacao'
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => abrirMenu()}
								className={styles.navegacao_mobile_menu_lista_item_link}
							>
								Formação
							</Link>
						</li>
						<li className={styles.navegacao_mobile_menu_lista_item}>
							<Link
								to='skills'
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => abrirMenu()}
								className={styles.navegacao_mobile_menu_lista_item_link}
							>
								Skills
							</Link>
						</li>
						<li className={styles.navegacao_mobile_menu_lista_item}>
							<Link
								to='projetos'
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => abrirMenu()}
								className={styles.navegacao_mobile_menu_lista_item_link}
							>
								Projetos
							</Link>
						</li>
						<li className={styles.navegacao_mobile_menu_lista_item}>
							<Link
								to='contato'
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => abrirMenu()}
								className={styles.navegacao_mobile_menu_lista_item_link}
							>
								Contato
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.navegacao_mobile_links}
				>
					<a target='blank' href='https://github.com/JoaoDognini'>
						<img src={github} />
					</a>
					<a target='blank' href='https://www.linkedin.com/in/joão-otávio-azevedo-51637721b/'>
						<img src={linkedin} />
					</a>
					<a target='blank' href='mailto:joaootavioazevedo@gmail.com'>
						<img src={gmail} alt='Logo do Gmail' />
					</a>
				</div>
			</header>
			<header className={styles.navegacao}>
				<ul>
					<li>
						<Link
							to='sobremim'
							spy={true}
							smooth={true}
							duration={500}
						>
							Sobre mim
						</Link>
					</li>
					<li>
						<Link
							to='experiencia_formacao'
							spy={true}
							smooth={true}
							duration={500}
						>
							Experiência Profissional
						</Link>
					</li>
					<li>
						<Link
							to='experiencia_formacao'
							spy={true}
							smooth={true}
							duration={500}
						>
							Formação
						</Link>
					</li>
					<li>
						<Link
							to='skills'
							spy={true}
							smooth={true}
							duration={500}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							to='projetos'
							spy={true}
							smooth={true}
							duration={500}
						>
							Projetos
						</Link>
					</li>
					<li>
						<Link
							to='contato'
							spy={true}
							smooth={true}
							duration={500}
						>
							Contato
						</Link>
					</li>
				</ul>
				<div className={styles.navegacao_links}
				>
					<a target='blank' href='https://github.com/JoaoDognini'>
						<img src={github} />
					</a>
					<a target='blank' href='https://www.linkedin.com/in/joão-otávio-azevedo-51637721b/'>
						<img src={linkedin} />
					</a>
					<a target='blank' href='mailto:joaootavioazevedo@gmail.com'>
						<img src={gmail} alt='Logo do Gmail' />
					</a>
				</div>
			</header>
		</>
	)
}
