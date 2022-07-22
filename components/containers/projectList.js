
import projectServices from "../../services/project"
import React, {useEffect, useState, useContext } from "react";
import Link from 'next/link'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProjectList({token}){
    const [load, setLoad] = useState(false)
    const [projects, setProjects] = useState('[]')
    useEffect( () => {
        
       const getProjectsList = async ()=>{
            
            try{
            
                // const token = window.localStorage.getItem('userToken')
                
                const data = await projectServices.getProjects(
                    { headers :{ "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        'Authorization' : token}})
                if (!data){
                    setLoad(false)
                    return
                }
                setProjects(JSON.stringify(data))
                setLoad(true)
            }catch(e){
                console.log(e)
            }
            
        }
        getProjectsList()
        
        // setLoad(true)
        // const projectList = JSON.parse(projects)
    })
    return(
        <>
        {!load ? <Backdrop open>
                    <CircularProgress color="inherit" />
                </Backdrop>:
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