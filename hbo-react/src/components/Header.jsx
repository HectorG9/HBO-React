import styles from '../css/header.module.css';
// import Nav from './Nav'
export default function Header() {
  return (
    <>
    {/* <Nav /> */}
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerChannels}>
          {/* <img class="headerChannel" src="assets/images/hbo.png" alt="HBO logo">
          <img class="headerChannel" src="assets/images/dc.png" alt="DC logo">
          <img class="headerChannel" src="assets/images/wb.png" alt="WarnerBros logo">
          <img class="headerChannel" src="assets/images/cartoon-network_neutral.png" alt="CartoonNetwoork logo">
          <img class="headerChannel" src="assets/images/max_originals.png" alt="MaxOriginals logo"> */}
        </div>
        <h1 className={styles.headerTitle}>
          <span className={styles.headerTitleLight}>Curta as melhores histórias</span>
          Para todo mundo
        </h1>
        <div className={styles.divider}></div>
          <div className={styles.offer}>
            <p>Assinaturas a partir de</p>
            <p className={styles.offerPrice}>$14,15<span className={styles.offerPriceSmall}>/mês*</span></p>
          </div>
          <a href="signIn.html" className={styles.button & styles.buttonGradient & styles.headerButton}>
            Assine agora...
          </a>
          <p className={styles.textSmall}>*Aplicável ao plano anual com pagamento antecipado</p>
        </div>
    </header>
    
    </>
  )
}
