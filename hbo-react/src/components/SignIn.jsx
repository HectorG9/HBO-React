import style from '../css/signin.module.css';

import Principal from './Principal.jsx';
import Footer from './Footer.jsx';

export default function SignIn() {
  return (
    <>
      <div className={style.bgf}>

        <Principal/>

        <Footer/>

      </div>
    </>
  )
}
