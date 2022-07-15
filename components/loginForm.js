import classes from "../styles/LoginForm.module.css"

export default function LoginForm(){
    return(
        <div>
      <h1>Login</h1>
          <form id="form">
              <div className={classes["login-field"]}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Enter your email address' />
              </div>
              <div className={classes["login-field"]}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder='Enter your password' />
              </div>
              <div className={classes['password-forgot']}>
                  <p>Forgot Password?</p>
              </div>
             <button className={classes.btn} type="submit">Login</button>
          </form>

      </div>
    )
}