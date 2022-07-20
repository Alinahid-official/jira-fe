
import projectServices from "../../services/project"
import React, {useEffect, useState, useContext } from "react";
import Link from 'next/link'

export default function ProjectList({token}){
    const [load, setLoad] = useState(false)
    const [projects, setProjects] = useState(null)
    useEffect( () => {
        
       const getProjectsList = async ()=>{
            try{
                // const token = window.localStorage.getItem('userToken')
                const data = await projectServices.getProjects(
                    { headers :{ "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        'Authorization' : token}})
                setProjects(JSON.stringify(data))
            }catch(e){
                console.log(e)
            }
        }
        setLoad(true)
        getProjectsList()
        setLoad(false)
        // const projectList = JSON.parse(projects)
    })
    return(
        <>
        {load ? <div>loading....</div>:
            <div>
            {projects?JSON.parse(projects).map(project =>{
                return(
                    <li key={project._id}>
                        <Link href={`/dashboard/projectBoard/${project._id}`} ><a>{project._id}</a></Link>   
                    </li>
                )
            }):null}
            </div>
        }
        </>
        
    )
}