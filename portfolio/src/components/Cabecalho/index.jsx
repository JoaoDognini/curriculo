import { Link } from "react-scroll";
import linkedin from '../../assets/linkedin2.png';
import github from '../../assets/tecs/github.png';
import styles from './Cabecalho.module.scss';
import menuFechado from '../../assets/menu.png';
import menuAberto from '../../assets/close.png';
import { useState } from "react";

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
					<ul className={`${aberto ? styles.menuAberto : ''}`}>
						<li>
							<Link to='sobremim' spy={true} smooth={true} duration={500} onClick={() => abrirMenu()} className={styles.navegacao_mobile_menu_links}>
								Sobre mim
							</Link>
						</li>
						<li>
							<Link to='experiencia_formacao' spy={true} smooth={true} duration={500} onClick={() => abrirMenu()} className={styles.navegacao_mobile_menu_links}>
								Experiência Profissional
							</Link>
						</li>
						<li>
							<Link to='experiencia_formacao' spy={true} smooth={true} duration={500} onClick={() => abrirMenu()} className={styles.navegacao_mobile_menu_links}>
								Formação
							</Link>
						</li>
						<li>
							<Link to='skills' spy={true} smooth={true} duration={500} onClick={() => abrirMenu()} className={styles.navegacao_mobile_menu_links}>
								Skills
							</Link>
						</li>
						<li>
							<Link to='projetos' spy={true} smooth={true} duration={500} onClick={() => abrirMenu()} className={styles.navegacao_mobile_menu_links}>
								Projetos
							</Link>
						</li>
						<li>
							<Link to='contato' spy={true} smooth={true} duration={500} onClick={() => abrirMenu()} className={styles.navegacao_mobile_menu_links}>
								Contato
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.navegacao_mobile_links}>
					<a target='blank' href='https://github.com/JoaoDognini'>
						<img src={github} />
					</a>
					<a target='blank' href='https://www.linkedin.com/in/joão-otávio-azevedo-51637721b/'>
						<img src={linkedin} />
					</a>
				</div>
			</header>
			<header className={styles.navegacao}>
				<ul>
					<li>
						<Link to='sobremim' spy={true} smooth={true} duration={500}>
							Sobre mim
						</Link>
					</li>
					<li>
						<Link to='experiencia_formacao' spy={true} smooth={true} duration={500}>
							Experiência Profissional
						</Link>
					</li>
					<li>
						<Link to='experiencia_formacao' spy={true} smooth={true} duration={500}>
							Formação
						</Link>
					</li>
					<li>
						<Link to='skills' spy={true} smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link to='projetos' spy={true} smooth={true} duration={500}>
							Projetos
						</Link>
					</li>
					<li>
						<Link to='contato' spy={true} smooth={true} duration={500}>
							Contato
						</Link>
					</li>
				</ul>
				<div className={styles.navegacao_links}>
					<a target='blank' href='https://github.com/JoaoDognini'>
						<img src={github} />
					</a>
					<a target='blank' href='https://www.linkedin.com/in/joão-otávio-azevedo-51637721b/'>
						<img src={linkedin} />
					</a>
				</div>
			</header>
		</>
	)
}
