import styles from './Projetos.module.scss';
import organo from '../../assets/projs/Organo.png';
import organo2 from '../../assets/projs/Organo2.png';
import aluroni from '../../assets/projs/Aluroni.png';
import aluroni2 from '../../assets/projs/Aluroni2.png';
import aluroni3 from '../../assets/projs/Aluroni3.png';
import clonexo from '../../assets/projs/Clonexo.png';
import clonexo2 from '../../assets/projs/Clonexo2.png';
import react from '../../assets/tecs/react.png';
import typescript from '../../assets/tecs/typescript.png';
import scss from '../../assets/tecs/scss.png';
import css from '../../assets/tecs/css.png';
import html from '../../assets/tecs/html.png';
import figma from '../../assets/tecs/figma.png';

export default function Projetos() {
	return (
		<>
			<section className={styles.secao_projetos}>
				<h1>Projetos</h1>
				<ul className={styles.secao_projetos_lista}>
					<li>
						<div className={styles.secao_projetos_card}>
							<h1>Organo</h1>
							<img src={organo} alt='Imagem da tela inicial do Organo' />
							<p>Site feito para curso da Alura, de forma simples para possibilitar a criação de equipes, podendo cadastrar novos usuários e classificar a equipe que fazem parte.</p>
							<hr />
							<div className={styles.secao_projetos_card_rodape}>
								<ul className={styles.secao_projetos_card_rodape_lista}>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={react} alt='Logo do React' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={typescript} alt='Logo do Typescript' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={html} alt='Logo do HTML' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={css} alt='Logo do CSS' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={figma} alt='Logo do Figma' />
									</li>
								</ul>
								<div className={styles.secao_projetos_card_rodape_botoes}>
									<a target='blank' href='https://organo-joao.vercel.app/'>Deploy</a>
									<a target='blank' href='https://github.com/JoaoDognini/organo'>Repositório</a>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.secao_projetos_card}>
							<h1>Clonexo</h1>
							<img src={clonexo} alt='Imagem da tela inicial do Clonexo' />
							<p>Projeto feito para a gincana de férias da empresa onde meu primo trabalha, sendo uma cópia básica do jogo conexo.ws.</p>
							<hr />
							<div className={styles.secao_projetos_card_rodape}>
								<ul className={styles.secao_projetos_card_rodape_lista}>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={react} alt='Logo do React' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={typescript} alt='Logo do Typescript' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={scss} alt='Logo do SCSS' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={html} alt='Logo do HTML' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={css} alt='Logo do CSS' />
									</li>
								</ul>
								<div className={styles.secao_projetos_card_rodape_botoes}>
									<a target='blank' href='https://conexo-clone.vercel.app/'>Deploy</a>
									<a target='blank' href='https://github.com/JoaoDognini/conexo-clone'>Repositório</a>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.secao_projetos_card}>
							<h1>Aluroni</h1>
							<img src={aluroni} alt='Imagem da tela inicial do Aluroni' />
							<p>Site projeto do curso da Alura, utilizando uma interface simples para conhecer mais sobre o restaurante e também o cardápio, podendo buscar, filtrar e ordenar os pratos conforme requisitado.</p>
							<hr />
							<div className={styles.secao_projetos_card_rodape}>
								<ul className={styles.secao_projetos_card_rodape_lista}>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={react} alt='Logo do React' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={typescript} alt='Logo do Typescript' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={scss} alt='Logo do SCSS' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={html} alt='Logo do HTML' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={css} alt='Logo do CSS' />
									</li>
									<li className={styles.secao_projetos_card_rodape_lista_item}>
										<img src={figma} alt='Logo do Figma' />
									</li>
								</ul>
								<div className={styles.secao_projetos_card_rodape_botoes}>
									<a target='blank' href='https://aluroni-joao.vercel.app/'>Deploy</a>
									<a target='blank' href='https://github.com/JoaoDognini/Aluroni'>Repositório</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</>
	)
}
