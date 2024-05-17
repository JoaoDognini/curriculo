import styles from './Formacao.module.scss';
import formacoes from './formacoes.json';

export default function Formacao() {
	function estiloBackground(nome) {
		switch (nome.toLowerCase()) {
			case 'senai':
				return styles.senai;
			case 'descomplica':
				return styles.descomplica
			case 'alura':
				return styles.alura
			default:
				break;
		}
	}

	return (
		<>
			<section className={styles.secao_formacao}>
				<h1>Formação</h1>
				<div className={styles.secao_formacao_formacoes}>
					{formacoes.map(x =>
						<div key={x.nome} className={`${styles.card_formacao} ${estiloBackground(x.nome)}`}>
							<h1>{x.nome}</h1>
							<h2>{x.curso}</h2>
							<h3>{x.periodo}</h3>
						</div>
					)}
				</div>
			</section>
		</>
	)
}
