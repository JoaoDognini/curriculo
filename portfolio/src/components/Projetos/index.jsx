import styles from './Projetos.module.scss';
import organo from '../../assets/projs/Organo.png';
import organo2 from '../../assets/projs/Organo2.png';
import aluroni from '../../assets/projs/Aluroni.png';
import aluroni2 from '../../assets/projs/Aluroni2.png';
import aluroni3 from '../../assets/projs/Aluroni3.png';
import clonexo from '../../assets/projs/Clonexo.png';
import clonexo2 from '../../assets/projs/Clonexo2.png';

import projetos from './projetos.json';

export default function Projetos() {
	return (
		<>
			<section className={styles.secao_projetos}>
				<h1>Projetos</h1>
				<ul className={styles.secao_projetos_lista}>
					{projetos.map((projeto, index) =>
						<div key={index} className={styles.secao_projetos_lista_card}>
							<h1>{projeto.nome}</h1>
							<img src={projeto.imagem} alt='Imagem da tela inicial do Organo' />
							<p>{projeto.descricao}</p>
							<hr />
							<div className={styles.secao_projetos_lista_card_rodape}>
								<ul className={styles.secao_projetos_lista_card_rodape_lista}>
									{projeto.ferramentas.map((ferramenta, index) =>
										<li key={index} className={styles.secao_projetos_lista_card_rodape_lista_item}>
											<img src={ferramenta.imagem} alt={ferramenta.alt} />
										</li>
									)}
								</ul>
								<div className={styles.secao_projetos_lista_card_rodape_botoes}>
									<a target='blank' href={projeto.links.deploy}>Deploy</a>
									<a target='blank' href={projeto.links.repositorio}>Repositório</a>
								</div>
							</div>
						</div>
					)}
				</ul>
			</section>
		</>
	)
}
