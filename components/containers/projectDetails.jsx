import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";
import classes from "../../styles/ProjectDetails.module.css"
export default function ProjectDetails({projectId,token}){
    const [load, setLoad] = useState(false)
    const [issues, setIssues] = useState(null)
    // useEffect( () => {
    //     setLoad(true)
    //    const getIssueList = async ()=>{
    //         try{
    //             // const token = window.localStorage.getItem('userToken')
    //             const data = await issueServices.getIssuesByProjectId(projectId,
    //                 { headers :{ "Access-Control-Allow-Origin" : "*",
    //                     "Content-type": "Application/json",
    //                     'Authorization' : token}})
    //             setIssues(JSON.stringify(data))
    //             console.log(data)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     getIssueList()
    //     setLoad(false)
    // })
    return(
        // <div>
        //     {issues ? JSON.parse(issues).map(issue=>{
        //         return(
        //             <li key = {issue._id}>
        //                 {issue._id}
        //             </li>
        //         )
        //     }):null}
        // </div>
        <div className={classes.projectDetails}>
            <h1>Project Details</h1>
            <div className={classes.dGrid}>
                <div className={classes.select}>
                <label htmlFor="projectName">Project Name</label>
                    <select name="projectName" id="projectName">
                        <option vlaue="1">a</option>
                        <option vlaue="2">b</option>
                        <option vlaue="3">c</option>
                    </select>
                    <div>
                        <p className={classes.date}>Start Date : 31-01-2022 |   End Date : 31-01-2022</p>
                    </div>
                </div>
                <div className={classes.select}>
                <label htmlFor="projectOwner">Project Owner</label>
                    <select name="projectOwner" id="projectOwner">
                        <option vlaue="1">a</option>
                        <option vlaue="2">b</option>
                        <option vlaue="3">c</option>
                    </select>
                   
                </div>
                <div className={classes.apGrid}>
                <div className={classes["assignee-priority"]}>
                
                    <select name="assignee" id="assignee">
                        <option value="">Select</option>
                        <option vlaue="1">a</option>
                        <option vlaue="2">b</option>
                        <option vlaue="3">c</option>
                    </select>
                    <label className={classes.label} htmlFor="assignee">Filter Assignee</label>
                </div>
                <div className={classes["assignee-priority"]}>
               
                    <select name="priority" id="priority">
                        <option value="">Select</option>
                        <option vlaue="1">a</option>
                        <option vlaue="2">b</option>
                        <option vlaue="3">c</option>
                    </select>
                    <label className={classes.label} htmlFor="priority">Filter Priority</label>
                </div>
                </div>

            </div>
            
        </div>
    )
}