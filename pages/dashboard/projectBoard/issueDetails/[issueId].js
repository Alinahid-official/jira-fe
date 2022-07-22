import { useEffect,useState } from "react";
import { useRouter } from 'next/router'
import Layout from '../../../layout/layout'
import IssueDetailsContent from "../../../components/containers/issueDetails";

export default function IssueDetails({user,t}){
    const router = useRouter()
    const [issueId , setIssueId] = useState(null)
    useEffect(() =>{
        if(!user){
            router.push('/login')
        }
        setIssueId(router.query.issuetId)
    })
    
    return(
        <>
            <Layout role={user ? JSON.parse(user).job_role : null}>
                <IssueDetailsContent issueId={issueId}/>
            </Layout>
        </>
    )
}