import { useEffect,useState } from "react";
import { useRouter } from 'next/router'
import Layout from '../../../layout/layout'
import ProjectDetailsContent from "../../../components/containers/projectDetails";
import Header from '../../components/headers/searchbar'

export default function ProjectDetails({user,token}){
    const router = useRouter()
    const [projectId , setProjectId] = useState(null)
    useEffect(() =>{
        if(!user){
            router.push('/login')
        }
        setProjectId(router.query.projectId)
    })
    
    return(
        <>
            <Layout role={user ? JSON.parse(user).job_role : null}>
                <Header/>
                <ProjectDetailsContent projectId={projectId} token={token}/>
            </Layout>
        </>
    )
}