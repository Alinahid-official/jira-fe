import classes from "../../styles/LoginForm.module.css"
import userService from '../../services/user'
import React, { useState } from "react";
import { useRouter } from 'next/router'

export default function LoginForm(){
    const router = useRouter()
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const handleLogin = async (e)=>{
        e.preventDefault();
        try{
            setLoading(true)
            const data = await userService.login({
                email : email,
                password : password
            })
            window.localStorage.setItem(
                'userToken', `bearer ${data.accessToken}`
            )
            window.localStorage.setItem(
                'user', JSON.stringify(data.user)
            )
            setEmail('')
            setPassword('')
            router.push('/dashboard/projectBoard')
            setLoading(false)
            
        }catch(e){
            console.log(e)
        }
    }
    return(
        
        <div className='flex align-center jc-center'>
      
          <form id="form" onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className={classes["login-field"]}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email address' />
              </div>
              <div className={classes["login-field"]}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password' />
              </div>
              <div className={classes['password-forgot']}>
                  <p>Forgot Password?</p>
              </div>
              {loading?<button className={classes.btn} disabled> logging In</button>:<button className={classes.btn} type="submit">Login</button>}
             
          </form>

      </div>
    )
}