import { useContext , useEffect,useState } from "react";
import { Context } from "../../context";
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
import CreateIssueForm from "../../components/forms/createIssue";

export default function CreateIssue(){
    const router = useRouter()
    const [role, setRole] = useState(null)
    const { state, dispatch } = useContext(Context);
    useEffect(() =>{
        if(!state.user){
            router.push('/login')
        }
        if(state && state.user){
            setRole(state.user.job_role)
        }
    })
    
    return(
        <>
            <Layout role={role}>
                <CreateIssueForm/>
            </Layout>
        </>
    )
}