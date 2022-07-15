import Layout from '../layout/auth'
import React, { useState, useContext } from "react";
import { Context } from "../context";

export default function Login(){
    const { state, dispatch } = useContext(Context);
    return(
        <div>
            <Layout>
                <div>
                    <div>
                        login page
                    </div>
                    <button
                    onClick={
                        ()=>
                        dispatch({
                            type:'LOG_IN',
                            payload : { name :'Nahid' }
                        })
                    }>log in</button>
                    <div>{JSON.stringify(state)}</div>
                </div>
            </Layout>
        </div>
    )
}
