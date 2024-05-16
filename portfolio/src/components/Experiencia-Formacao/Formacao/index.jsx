import styles from './Formacao.module.scss';

export default function Formacao() {
	return (
		<>
			<section className={styles.secao_formacao}>
				<h1>Formação</h1>
				<div className={styles.secao_formacao_formacoes}>
					<div className={`${styles.card_formacao} ${styles.senai}`}>
						<h1>SENAI</h1>
						<h2>Desenvolvimento de Sistemas</h2>
						<h3>2020-2022</h3>
					</div>
					<div className={`${styles.card_formacao} ${styles.descomplica}`}>
						<h1>Descomplica</h1>
						<h2>Sistemas de Informação</h2>
						<h3>2024-2028</h3>
					</div>
					<div className={`${styles.card_formacao} ${styles.alura}`}>
						<h1>Alura</h1>
						<h2>Cursos frontend e backend</h2>
						<h3>2023-2024</h3>
					</div>
				</div>
			</section>
		</>
	)
}
