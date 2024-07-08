import style from '../css/signin.module.css';

export default function principal() {
  return (
    <>
      <main className={style.content}>

        <form className={style.login .container}>
          <h1 className={style.login - title}>Entrar</h1>
          <label className={style.login - label}> Você tem uma conta da HBO Max? </label>
          <input className={style.login - field} type="email" name="email" id="email" placeholder="Endereço de e-mail" />
          <input className={style.login - field} type="password" name="password" id="password" placeholder="Senha" minlength="8" />

          <div className={style.login - actions}>
            <button type="submit" className={style.button .button-gradient}>Entrar</button>
            <a href="#" className={style.login-link}> Esqueceu a senha? </a>
          </div>
        </form>
      </main>
    </>
  )
}