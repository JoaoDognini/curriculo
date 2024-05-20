import styles from './Projetos.module.scss';

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
