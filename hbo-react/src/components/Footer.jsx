
import style from '../css/signin.module.css'


export default function footer() {
  return (
    <>
      <footer className={style.container}>
        <div>
          <a className={style.footerlink} href="https://www.hbomax.com/br/pt/sitemap">
            Agora na HBO Max
          </a>
          <a className={style.footerlink} href="https://www.hbomax.com/br/pt/coming-soon">
            Em breve
          </a>
          <a className={style.footerlink} href="https://www.hbomax.com/br/pt/feature">
            Filme em destaque
          </a>
          <a className={style.footerlink} href="https://www.hbomax.com/br/pt/series">Séries</a>
          <a className={style.footerlink} href="https://help.hbomax.com/br">Ajuda</a>
        </div>
        <p className={style.footerlegal}>
          © 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos
          reservados. HBO Max é usado sob licença.
        </p>
        <div className={style.footersocial}>
          <a href="https://www.facebook.com/HBOMaxBr/" className={style.footersocialink}>
            <img src="./assets/images/fb_0.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/HBOMaxBR"className={style.footersocialink}>
            <img src="./images/twitter_0.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/hbomaxbr/" className={style.footersocialink}>
            <img src="./images/instagram_0.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/c/hbomaxbr" className={style.footersocialink}>
            <img src="./images/youtube_0.png" alt="Youtube" />
          </a>
        </div>
      </footer>
    </>
  )
}
