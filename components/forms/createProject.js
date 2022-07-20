import classes from "../../styles/LoginForm.module.css"
import projectService from '../../services/project'
import React, {useEffect, useState} from "react";

export default function CreateProjectForm(){
    const [name , setName] = useState('')
    const [owner, setOwner] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')
    const [msg, setMsg] = useState(null)
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            setLoading(true)
            console.log(token)
            const data = await projectService.createProject({
                name : name,
                owner : owner
            },{ headers :{ "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            'Authorization' : token}})
            setMsg('success')
            setName('')
            setOwner('')
            setLoading(false)
            setTimeout(()=>{
                setMsg(null)
            },5000)
        }catch(e){
            setMsg('error')
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
          {msg?(msg=='error'?<div>Something went wong</div>:<div>successfully created Project</div>):null}
          <form id="form" onSubmit={handleSubmit}>
              <h1>Create Project</h1>
              <div className={classes["login-field"]}>
              <label htmlFor="name">Project Name</label>
              <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter project name' />
              </div>
              <div className={classes["login-field"]}>
              <label htmlFor="owner">Project Owner</label>
              <input type="text" name="owner" id="owner" value={owner} onChange={(e)=>{setOwner(e.target.value)}} placeholder='Enter owner name' />
              </div>
              {loading?<button className={classes.btn} disabled> Creating Project</button>:<button className={classes.btn} type="submit">Create </button>}
             
          </form>

      </div>
    )
}