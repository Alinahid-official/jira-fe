import { useContext , useEffect,useState } from "react";
import { Context } from "../../../context";
import { useRouter } from 'next/router'
import Layout from '../../../layout/layout'
import ProjectDetailsContent from "../../../components/containers/projectDetails";

export default function ProjectDetails(){
    const router = useRouter()
    const [role, setRole] = useState(null)
    const [projectId , setProjectId] = useState(null)
    const { state, dispatch } = useContext(Context);
    useEffect(() =>{
        if(!state.user){
            router.push('/login')
        }
        if(state && state.user){
            setRole(state.user.job_role)
        }
        setProjectId(router.query.projectId)
    })
    
    return(
        <>
            <Layout role={role}>
                <ProjectDetailsContent projectId={projectId}/>
            </Layout>
        </>
    )
}