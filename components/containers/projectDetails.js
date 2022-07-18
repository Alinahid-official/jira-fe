import classes from "../../styles/LoginForm.module.css"
import issueServices from "../../services/issue"
import React, {useEffect, useState, useContext } from "react";
import { Context } from "../../context";


export default function ProjectDetails({projectId}){
    const [issues, setIssues] = useState(null)
    useEffect( () => {
       const getIssueList = async ()=>{
            try{
                const token = window.localStorage.getItem('userToken')
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