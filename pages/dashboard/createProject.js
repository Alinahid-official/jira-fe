import { useContext , useEffect, useState } from "react";
import { Context } from "../../context";
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
import CreateProjectForm from "../../components/forms/createProject";

export default function CreateProject(){
    const router = useRouter()
    const [role, setRole] = useState(null)
    const { state, dispatch } = useContext(Context);
    useEffect(() =>{
        if(!state.user || state.user.job_role!='manager'){
            router.push('/login')
        }
        if(state && state.user){
            setRole(state.user.job_role)
        }
    })
    return(
        <>
            <Layout role={role}>
                <CreateProjectForm/>
            </Layout>
        </>
    )
}