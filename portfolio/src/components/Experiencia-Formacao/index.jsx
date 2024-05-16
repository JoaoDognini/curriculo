import styles from './Experiencia-Formacao.module.scss';
import Experiencia from './Experiencia';
import Formacao from './Formacao';

export default function ExperienciaFormacao() {
	return (
		<section className={styles.secao_experiencia_e_formacao}>
			<Experiencia />
			<Formacao />
		</section>
	)
}
