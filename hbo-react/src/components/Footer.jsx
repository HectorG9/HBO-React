import style from '../css/signin.module.css'

export default function footer() {
  return (
    <footer className={style.footer .container}>
    <div>
      <a class="footer-link" href="https://www.hbomax.com/br/pt/sitemap">
        Agora na HBO Max
      </a>
      <a class="footer-link" href="https://www.hbomax.com/br/pt/coming-soon">
        Em breve
      </a>
      <a class="footer-link" href="https://www.hbomax.com/br/pt/feature">
        Filme em destaque
      </a>
      <a class="footer-link" href="https://www.hbomax.com/br/pt/series">Séries</a>
      <a class="footer-link" href="https://help.hbomax.com/br">Ajuda</a>
    </div>
    <p class="text-small footer-legal">
      © 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos
      reservados. HBO Max é usado sob licença.
    </p>
    <div class="footer-social">
      <a href="https://www.facebook.com/HBOMaxBr/" class="footer-social-link">
        <img src="assests/images/fb_0.png" alt="Facebook" />
      </a>
      <a href="https://twitter.com/HBOMaxBR" class="footer-social-link">
        <img src="assests/images/twitter_0.png" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/hbomaxbr/" class="footer-social-link">
        <img src="assests/images/instagram_0.png" alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/c/hbomaxbr" class="footer-social-link">
        <img src="assests/images/youtube_0.png" alt="Youtube" />
      </a>
    </div>
  </footer>
  )
}
