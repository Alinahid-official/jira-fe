import '../styles/globals.css'
import { Provider } from "../context";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setUser] = useState('')

  useEffect(()=>{
    if(window.localStorage.userToken){
      setUser(window.localStorage.getItem('user'));
    }
  })
  return(
    <Provider loggedInUser = {loggedInUser}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
