import style from '../css/signin.module.css';

export default function principal() {
  return (
    <>
      <main className={style.content}>
        <div className={style.container}>
          <form className={style.login}>
            <h1 className={style.logintitle}>Entrar</h1>
            <label className={style.loginlabel}> Você tem uma conta da HBO Max? </label>
            <input className={style.loginfield} type="email" name="email" id="email" placeholder="Endereço de e-mail" />
            <input className={style.loginfield} type="password" name="password" id="password" placeholder="Senha" minlength="8" />

            <div className={style.loginactions}>
              <button type="submit" className={style.button.buttongradient}>Entrar</button>
              <a href="#" className={style.loginlink}> Esqueceu a senha? </a>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}