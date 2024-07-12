import style from './signin.module.css';


export default function principal() {
  return (
    <>
      <main className={style.content}>
        <div className={style.container}>
          <form className={style.login}>
            <h1 className={style.logintitle}>Entrar</h1>
            <label className={style.loginlabel}> Você tem uma conta da HBO Max? </label>
            <input className={style.loginfield} type="email" name="email" id="email" autoComplete="Username" placeholder="Endereço de e-mail" />
            <input className={style.loginfield} type="password" name="password" id="password" autoComplete="current-password" placeholder="Senha" minLength="8" maxLength="10" />
            <div className={style.loginactions}>
              <button className={style.button} type="submit">Entrar</button>
              
                <a className={style.loginlink}>Esqueceu a senha?</a>

            </div>
          </form>
        </div>
      </main>
    </>
  )
}