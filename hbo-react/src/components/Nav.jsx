import {Routes, Route} from 'react-router-dom' 
import styles from '../css/nav.module.css';
export default function Nav() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLogo}>
        {/* <img src={assets/images/hbo-logo.png} alt="logo hbo" className={menu-logo-image}>  */}
      </a>
      <div>
        <a href="signIn.html" className={styles.menuItem}>Entrar</a>
        <a href="signIn.html" className={styles.menuItem}>Assinar Agora</a>
      </div>
    </nav>
  )
}
