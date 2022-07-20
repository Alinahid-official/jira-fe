import '../styles/globals.css'
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState('')

  useEffect(()=>{
    if(window.localStorage.userToken){
      setUser(window.localStorage.getItem('user'));
    }
  })
  return(
      <Component user={user} {...pageProps} />
  ) 
}

export default MyApp
