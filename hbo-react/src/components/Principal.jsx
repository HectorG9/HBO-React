// import Principal from './Header';
// import Footer from './Footer';
import styles from '../css/principal.module.css';
export default function Principal() {
  return (
    <>
    {/* <Header /> */}
    <main>
        <section className={styles.subscription}>
            <div className={styles.container}>
              <h2 className={styles.title}>
                Conheça nossos planos e economize na assinatura trimestral 
                ou anual com pagamento antecipado.
              </h2>
              <div className={styles.subscriptionPlans}>
                <div className={styles.subscriptionCard}>
                  <div>
                    <div className={styles.subscriptionPlan}>
                      <h3>Mobile</h3>
                      <p className={styles.subscriptionPrice}>R$ 19,90<span className={styles.textSmall}>/mês</span></p>
                    </div>
                    <ul className={styles.subscriptionGoals}>
                      <li className={styles.subscriptionSubscription}>
                        Aproveite em smartphones, tablets onde quiser
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Assista em 1 tela por vez
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Tenha conteúdo em resolução adaptada para cada dispositivo
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Baixe suas séries e filmes favoritos, assista onde e quando quiser.
                      </li>
                    </ul>
                  </div>
                  <button className={styles.button & styles.buttonGradient}>Escolher plano mobile</button>
                </div>
                <div className={styles.subscriptionCard}>
                  <div>
                    <div className={styles.subscriptionPlan}>
                      <h1>Multitelas</h1>
                      <p className={styles.subscriptionPrice}>R$ 27,90<span className={styles.textSmall}>/mês</span></p>
                    </div>
                    <ul>
                      <li className={styles.subscriptionSubscription}>
                        Aproveite em todos os seus dispositivos
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Chromecast e Airplay disponiveis
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Assista em 3 telas ao mesmo tempo
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Tenha conteúdos em alta definição, com qualidade 4k
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Baixe suas séries e filmes favoritos
                      </li>
                      <li className={styles.subscriptionSubscription}>
                        Crie até 5 perfis diferentes
                      </li>
                    </ul>
                  </div>
                  <button className={styles.button & styles.buttonGradient}>Escolher o Plano Multitelas</button>
                </div>
              </div>
            </div>
        </section>
        <section id="contents" className={styles.contents & styles.container}>
            <h2 className={styles.title}>Descubra novos universos</h2>
            <div className={styles.contentsContainer}>
              <div className={styles.contentsCard}>
                {/* <img className={styles.contents-image} src="assets/images/hbo-default_0.webp" alt="HBO"/> */}
              </div>
              <div className={styles.contentsCard}>
                {/* <img className={styles.contents-image} src="assets/images/MAX-Default.webp" alt="Max Originals"/> */}
              </div>
              <div className={styles.contentsCard}>
                {/* <img className={styles.contentsImage} src="assets/images/DC_Default.webp" alt="DC"/> */}
              </div>
              <div className={styles.contentsCard}>
                {/* <img className={styles.contentsImage} src="assets/images/WB-Default.webp" alt="Warner Bross"/> */}
              </div>
              <div className={styles.contentsCard}>
                {/* <img className={styles.contentsImage} src="assets/images/CN-Default.webp" alt="Cartoon Network"/> */}
              </div>
              <div className={styles.contentsCard}>
                {/* <img className={styles.contentsImage} src="assets/images/UCL-Default.webp" alt="UEFA Champions League"/> */}
              </div>
            </div>
        </section>
    </main>
   
    </>
  )
}
