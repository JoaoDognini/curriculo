import styles from './Skills.module.scss';
import git from '../../assets/tecs/git.png';
import javascript from '../../assets/tecs/javascript.png';
import html from '../../assets/tecs/html.png';
import react from '../../assets/tecs/react.png';
import scss from '../../assets/tecs/scss.png';
import css from '../../assets/tecs/css.png';
import styledcomponents from '../../assets/tecs/styledcomponents.png';
import typescript from '../../assets/tecs/typescript.png';

export default function Skills() {
	return (
		<>
			<section className={styles.secao_skills}>
				<h1>Skills</h1>
				<ul className={styles.secao_skills_lista}>
					<li className={styles.secao_skills_lista_item}>
						<h3>Git</h3>
						<img src={git} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>Javascript</h3>
						<img src={javascript} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>Typescript</h3>
						<img src={typescript} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>HTML</h3>
						<img src={html} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>CSS</h3>
						<img src={css} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>React</h3>
						<img src={react} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>SCSS</h3>
						<img src={scss} />
					</li>
					<li className={styles.secao_skills_lista_item}>
						<h3>Styled Components</h3>
						<img src={styledcomponents} />
					</li>
				</ul>
			</section>
		</>
	)
}
