import { useEffect } from "react";
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
import CreateProjectForm from "../../components/forms/createProject";

export default function CreateProject({user}){
    const router = useRouter()
    useEffect(() =>{
        if(!user){
            router.push('/login')
        }
    })
    return(
        <>
            <Layout role={user ? JSON.parse(user).job_role : null}>
                <CreateProjectForm />
            </Layout>
        </>
    )
}