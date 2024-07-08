import { Link } from "react-router-dom";

import style from '../css/signin.module.css'
import '../style.global.css'

export default function footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.container}>
          <Link>
          <Link to="/">
            <img src="assests/images/logo_0.png" alt="HBO Max" />
          </Link>
          <Link to="/">
            <img src="assests/images/lo.png" alt="HBO Max" />
          </Link>
          <Link to="/">
            <img src="assests/images/logo_0.png" alt="HBO Max" />
          </Link>
          <Link to="/">
            <img src="assests/images/logo_0.png" alt="HBO Max" />
          </Link>
          </Link>
        </div>
      </footer>
    </>
  )
}
