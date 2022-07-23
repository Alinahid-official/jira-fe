import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';

export default function ProjectDetails({projectId}){
    const [load, setLoad] = useState(true)
    const [issues, setIssues] = useState(null)
    useEffect( () => {
        setLoad(true)
       const getIssueList = async ()=>{
            try{
                // const token = window.localStorage.getItem('userToken')
                const data = await issueServices.getIssueById(projectId,
                    { headers :{ "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        'Authorization' : token}})
                if(!data){
                    setLoad(true)
                    return
                }
                setIssues(JSON.stringify(data))
                console.log(data)
                setLoad(false)
            }catch(e){
                console.log(e)
            }
        }
        getIssueList()
        setLoad(false)
    })
    return(
        load?<Backdrop open>
                <CircularProgress color="inherit" />
            </Backdrop>:
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