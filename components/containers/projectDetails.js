import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";

export default function ProjectDetails({projectId,token}){
    const [load, setLoad] = useState(false)
    const [issues, setIssues] = useState(null)
    useEffect( () => {
        setLoad(true)
       const getIssueList = async ()=>{
            try{
                // const token = window.localStorage.getItem('userToken')
                const data = await issueServices.getIssuesByProjectId(projectId,
                    { headers :{ "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        'Authorization' : token}})
                setIssues(JSON.stringify(data))
                console.log(data)
            }catch(e){
                console.log(e)
            }
        }
        getIssueList()
        setLoad(false)
    })
    return(
        <div>
            {issues ? JSON.parse(issues).map(issue=>{
                return(
                    <li key = {issue._id}>
                        {issue._id}
                    </li>
                )
            }):null}
        </div>
    )
}