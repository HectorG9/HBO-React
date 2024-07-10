import { Link } from "react-router-dom";

import style from './signin.module.css'


export default function footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.container}>
          <Link to="/images">
          <Link to="/images">
            <img src="./asstes/images/max_originals.png" alt="HBO Max" />
          </Link>
          <Link to="/images">
            <img src="assets/images/dc.png" alt="DC" />
          </Link>
          <Link to="/images">
            <img src="assets/images/cartoon-network_neutral.png" alt="CN" />
          </Link>
          <Link to="/images">
            <img src="assets/images/logo_0.png" alt="HBO Max" />
          </Link>
          </Link>
        </div>
      </footer>
    </>
  )
}
      {/* <nav>
        <Link to=""></Link>
      </nav>*/}