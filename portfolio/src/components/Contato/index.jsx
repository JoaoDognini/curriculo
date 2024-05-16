import styles from './Contato.module.scss';
import linkedin from './imgs/linkedin.png';
import whatsapp from './imgs/whatsapp.png';
import github from './imgs/github.png';
import gmail from './imgs/gmail.png';

export default function Contato() {
	return (
		<>
			<footer className={styles.rodape}>
				<h1 className={styles.rodape_titulo}>Contato</h1>
				<p>Entre em contato e retornarei o mais rápido possível!</p>
				<div className={styles.rodape_contato}>
					<ul className={styles.rodape_contato_lista}>
						<li className={styles.rodape_contato_lista_item}>
							<a target='blank' href='https://wa.me/5547996937865'>
								<img src={whatsapp} />
							</a>
						</li>
						<li className={styles.rodape_contato_lista_item}>
							<a target='blank' href='mailto:joaootavioazevedo@gmail.com'>
								<img src={gmail} />
							</a>
						</li>
						<li className={styles.rodape_contato_lista_item}>
							<a target='blank' href='https://www.linkedin.com/in/joão-otávio-azevedo-51637721b/'>
								<img src={linkedin} />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
}
