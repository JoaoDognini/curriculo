import styles from './Experiencia.module.scss';
import experiencias from './experiencias.json';

export default function Experiencia() {
	return (
		<>
			<section className={styles.secao_experiencia}>
				<h1>Experiência</h1>
				<div className={styles.secao_experiencia_experiencias}>
					<h1>Operacional, Rodeio - SC</h1>
					<div className={styles.secao_experiencia_experiencias_container}>
						{experiencias.map((experiencia, index) =>
							<div key={index} className={styles.secao_experiencia_experiencias_container_funcao}>
								<h2>{experiencia.funcao}</h2>
								<h3>{experiencia.periodo}</h3>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	)
}
