import styles from '../css/nav.module.css';
import { Link } from 'react-router-dom'
import logo from '/Senai-frontend/HBO-React/hbo-react/src/images/hbo-logo.png';
export default function Nav() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLogo}>
        <img className={styles.menuLogoImage} alt="logo hbo" src={logo} />
      </a>
      <div>
        <Link to="SignIn" className={styles.menuItem}>Entrar</Link>
        <Link to="SignIn" className={styles.menuItem}>Assinar Agora</Link>
      </div>
    </nav>
  )
}
