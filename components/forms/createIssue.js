import classes from "../../styles/LoginForm.module.css"
import issueService from '../../services/issue'
import React, {useEffect, useState } from "react";

export default function CreateIssueForm({user}){
   
    const [project , setProject] = useState('')
    const [assignee, setAssignee] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')
    const [msg, setMsg] = useState(null)
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            setLoading(true)
            console.log(token)
            console.log(user)
            const data = await issueService.createIssue({
                project_id: project,
                issued_to: assignee,
                created_by: JSON.parse(user).id
            },{ headers :{ "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            'Authorization' : token}})
            setMsg('success')
            setProject('')
            setAssignee('')
            setLoading(false)
            setTimeout(()=>{
                setMsg(null)
            },5000)
            
        }catch(e){
            setMsg('error')
            setLoading(false)
            setTimeout(()=>{
                setMsg(null)
            },5000)
            console.log(e)
        }
    }
    useEffect(()=>{
        setToken(window.localStorage.getItem('userToken'))
    })
    return(
        
        <div className='flex align-center jc-center'>
          {msg?(msg=='error'?<div>Something went wong</div>:<div>successfully created issue</div>):null}
          <form id="form" onSubmit={handleSubmit}>
              <h1>Create Issue</h1>
              <div className={classes["login-field"]}>
              <label htmlFor="project">Project Id</label>
              <input type="text" name="project" id="project" value={project} onChange={(e)=>{setProject(e.target.value)}} placeholder='Enter project Id' />
              </div>
              <div className={classes["login-field"]}>
              <label htmlFor="owner">Assignee Id</label>
              <input type="text" name="assignee" id="assignee" value={assignee} onChange={(e)=>{setAssignee(e.target.value)}} placeholder='Enter Assignee Id' />
              </div>
              {loading?<button className={classes.btn} disabled> Creating Issue</button>:<button className={classes.btn} type="submit">Create </button>}
             
          </form>

        </div>
    )
}