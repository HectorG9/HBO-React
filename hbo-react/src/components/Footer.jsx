import {Routes, Route} from 'react-router-dom' 
import styles from '../css/footer.module.css';
export default function footer() {
  return (
    <footer className={styles.footer & styles.container}>
      <div>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/sitemap">Agora na HBO Max</a>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/coming-soon">Em breve</a>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/feature">Filme em destaque</a>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/series">Séries</a>
        <a className={styles.footerLink} href="https://help.hbomax.com/br">Ajuda</a>
      </div>
      <p className={styles.textSmall & styles.footerLegal}>
        © 2024 WarnerMedia Direct Latin America, LLC. Todos os direitos
        reservados. HBO Max é usado sob licença.
      </p>
      <div className={styles.footerSocial}>
        <a href="https://www.facebook.com/HBOMaxBr/" className={styles.footerSocialLink}>
          <img src="assets/images/fb_0.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/HBOMaxBR" className={styles.footerSocialLink}>
          <img src="assets/images/twitter_0.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/hbomaxbr/" className={styles.footerSocialLink}>
          <img src="assets/images/instagram_0.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/c/hbomaxbr" className={styles.footerSocialLink}>
          <img src="assets/images/youtube_0.png" alt="Youtube" />
        </a>
      </div>
    </footer>
  )
}
