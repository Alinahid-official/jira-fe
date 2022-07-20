import { useEffect } from "react";
import { useRouter } from 'next/router'
import Layout from '../../../layout/layout'
import ProjectList from "../../../components/containers/projectList";

export default function ProjectBoard({user}){
    const router = useRouter()
    useEffect(() =>{
        if(!user){
            router.push('/login')
        }
    })
    
    return(
        <>
            <Layout role={user ? JSON.parse(user).job_role : null}>
                <ProjectList/>
            </Layout>
        </>
    )
}