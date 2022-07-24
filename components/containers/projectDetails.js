import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import IssueCard from "../cards/issue";
import Link from 'next/link'

export default function ProjectDetails({projectId,token}){
    const [load, setLoad] = useState(true)
    const [issues, setIssues] = useState(null)
    useEffect( () => {
       const getIssueList = async ()=>{
            try{
                // const token = window.localStorage.getItem('userToken')
                const data = await issueServices.getIssuesByProjectId(projectId,
                    { headers :{ "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        'Authorization' : token}})
                if(!data){
                    setLoad(true)
                }
                setIssues(JSON.stringify(data))
                console.log(data)
                setLoad(false)
            }catch(e){
                console.log(e)
            }
        }
        getIssueList()
    })
    return(
        load?<Backdrop open>
                <CircularProgress color="inherit" />
            </Backdrop>:
        <div>
            {issues ? JSON.parse(issues).map(issue=>{
                return(
                    <Link key={issue._id} href={`/dashboard/projectBoard/issueDetails/${issue._id}`}>
                        <a><IssueCard  issue={issue}/></a>
                    </Link>
                    
                )
            }):null}
        </div>
    )
}