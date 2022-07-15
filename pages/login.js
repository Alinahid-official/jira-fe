import Layout from '../layout/auth'
import LoginForm from '../components/loginForm'
import classes from "../styles/Login.module.css"
export default function Login(){
    return(
        <div >
            <Layout>
                <div className={classes.grid}>
                    
                    <div className={classes.sideBar}>
                        <h1>Tracker</h1>
                        </div>
                {/* login page */}
                <div className={classes.loginForm}>
                <LoginForm/>
                </div>
                </div>
           
            </Layout>
        </div>
    )
}
