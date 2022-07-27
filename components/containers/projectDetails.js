import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import IssueCard from "../cards/issue";
import Link from 'next/link'
import functions from '../functions'


export default function ProjectDetails({projectId,token}){
    const [load, setLoad] = useState(true)
    const [issues, setIssues] = useState(null)
    const [todo, setTodo] = useState([])
    const [development, setDevelopment] = useState([])
    const [testing, setTesting] = useState([])
    const [completed, setCompleted] = useState([])

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
                setTodo(functions.filterByStatus('todo',JSON.parse(issues)))
                setDevelopment(functions.filterByStatus('development',JSON.parse(issues)))
                setTesting(functions.filterByStatus('testing',JSON.parse(issues)))
                setCompleted(functions.filterByStatus('completed',JSON.parse(issues)))
                console.log(data)
                setLoad(false)
            }catch(e){
                console.log(e)
            }
        }
        getIssueList()
        // if(issues){
        //      todo =functions.filterByStatus('todo',JSON.parse(issues))
        //      development =functions.filterByStatus('development',JSON.parse(issues))
        //      testing =functions.filterByStatus('testing',JSON.parse(issues))
        //      completed =functions.filterByStatus('completed',JSON.parse(issues))
        // }
        
    })
    return(
        load?<Backdrop open>
                <CircularProgress color="inherit" />
            </Backdrop>:
            <div className='flex'>
                <div className='width-25'>
                    <h3>To Do</h3>
                    {todo.map(issue=>{
                        return(
                            <Link key={issue._id} href={`/dashboard/projectBoard/issueDetails/${issue._id}`}>
                                <a><IssueCard  issue={issue}/></a>
                            </Link>
                        )
                    })}
                </div>
                <div className='width-25'>
                    <h3>Development</h3>
                    {development.map(issue=>{
                        return(
                            <Link key={issue._id} href={`/dashboard/projectBoard/issueDetails/${issue._id}`}>
                                <a><IssueCard  issue={issue}/></a>
                            </Link>
                        )
                    })}
                </div>
                <div className='width-25'>
                    <h3>Testing</h3>
                    {testing.map(issue=>{
                        return(
                            <Link key={issue._id} href={`/dashboard/projectBoard/issueDetails/${issue._id}`}>
                                <a><IssueCard  issue={issue}/></a>
                            </Link>
                        )
                    })}
                </div>
                <div className='width-25'>
                    <h3>Completed</h3>
                    {completed.map(issue=>{
                        return(
                            <Link key={issue._id} href={`/dashboard/projectBoard/issueDetails/${issue._id}`}>
                                <a><IssueCard  issue={issue}/></a>
                            </Link>
                        )
                    })}
                </div>
            </div>
    )
}