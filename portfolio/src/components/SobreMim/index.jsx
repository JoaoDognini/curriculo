import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';
import styles from './SobreMim.module.scss';
import foto from './imgs/foto.png';

export default function SobreMim() {
	return (
		<>
			<section className={styles.secao_sobremim}>
				<div className={styles.secao_sobremim_container}>
					<div className={styles.secao_sobremim_container_info}>
						<div className={styles.secao_sobremim_container_info_apresentacao}>
							<h3>Olá, me chamo</h3>
							<h1>João Otávio Dognini Azevedo</h1>
							<h2>Desenvolvedor front-end</h2>
						</div>
						<div className={styles.secao_sobremim_container_info_links}>
							<a target='blank' href='https://github.com/JoaoDognini'>
								<img src={github} alt='Logo do Github' />
							</a>
							<a target='blank' href='https://www.linkedin.com/in/joão-otávio-azevedo-51637721b/'>
								<img src={linkedin} alt='Logo do Linkedin' />
							</a>
							<a target='blank' href='mailto:joaootavioazevedo@gmail.com'>
								<img src={gmail} alt='Logo do Gmail' />
							</a>
						</div>
					</div>
					<hr />
				</div>


				<div className={styles.secao_sobremim_apresentacao_texto}>
					<p>Já trabalhei como Fullstack Júnior, e atualmente sigo estudando para aprimorar minhas habilidades no desenvolvimento web. Meu foco é no front-end, porém tenho interesse em back-end também. Minha especialidade inclui <b>React, JavaScript, TypeScript, HTML, CSS, SCSS, Styled Components.</b></p>
					<img src={foto} />
				</div>
			</section>
		</>
	)
}
