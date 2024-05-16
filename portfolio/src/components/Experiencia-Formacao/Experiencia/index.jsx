import styles from './Experiencia.module.scss';

export default function Experiencia() {
	return (
		<>
			<section className={styles.secao_experiencia}>
				<h1>Experiência</h1>
				<div className={styles.secao_experiencia_experiencias}>
					<h1>Operacional, Rodeio - SC</h1>
					<div className={styles.secao_experiencia_container}>
						<div className={styles.secao_experiencia_container_div}>
							<h2>Estagiário</h2>
							<h3>Dezembro/2021 - Fevereiro/2022</h3>
						</div>
						<div className={styles.secao_experiencia_container_div}>
							<h2>Assistente de Sistemas</h2>
							<h3>Fevereiro/2022 - Agosto/2022</h3>
						</div>
						<div className={styles.secao_experiencia_container_div}>
							<h2>Desenvolvedor web fullstack júnior</h2>
							<h3>Setembro/2022 - Junho/2023</h3>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
