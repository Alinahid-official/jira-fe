import { useEffect } from "react";
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
import CreateIssueForm from "../../components/forms/createIssue";

export default function CreateIssue({user}){
    const router = useRouter()
    useEffect(() =>{
        if(!user){
            router.push('/login')
        }
    })
    
    return(
        <>
            <Layout role={user ? JSON.parse(user).job_role : null}>
            <CreateIssueForm user={user}/>
            </Layout> 
        </>
    )
}