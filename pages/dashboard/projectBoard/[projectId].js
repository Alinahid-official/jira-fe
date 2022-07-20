import { useEffect,useState } from "react";
import { useRouter } from 'next/router'
import Layout from '../../../layout/layout'
import ProjectDetailsContent from "../../../components/containers/projectDetails";

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
                <ProjectDetailsContent projectId={projectId} token={token}/>
            </Layout>
        </>
    )
}