import Layout from '../layout/layout'
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context";
import LoginForm from "../components/forms/loginForm"
import { useRouter } from 'next/router'

export default function Login(){
    const router = useRouter()
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
           if(state.user){
            router.push('/dashboard/projectBoard')
           }
    })
    return(
        <>
            <Layout>
                <LoginForm/>
            </Layout>
        </>
    )
}
