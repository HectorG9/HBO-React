import { Link } from "react-router-dom";
import style from '../css/signin.module.css'


export default function footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.container}>
          <nav>
            <Link to="/images">
              <img src="" alt="HBO Max" />
            </Link>
            <Link to="/images">
              <img src="" alt="DC" />
            </Link>
            <Link to="/images">
              <img src="" alt="CN" />
            </Link>
            <Link to="/images">
              <img src="" alt="HBO Max" />
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
{/* <nav>
        <Link to=""></Link>
      </nav>*/}