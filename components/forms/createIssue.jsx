// import classes from "../../styles/LoginForm.module.css"
// import issueService from '../../services/issue'
// import React, {useEffect, useState, useContext } from "react";
// import { Context } from "../../context";

// export default function CreateIssueForm(){
   
//     const [project , setProject] = useState('')
//     const [assignee, setAssignee] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [token, setToken] = useState('')
//     const { state, dispatch } = useContext(Context);
//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         try{
//             setLoading(true)
//             console.log(token)
//             const data = await issueService.createIssue({
//                 project_id: project,
//                 issued_to: assignee,
//                 created_by: state.user.id
//             },{ headers :{ "Access-Control-Allow-Origin" : "*",
//             "Content-type": "Application/json",
//             'Authorization' : token}})
//             console.log(data)
//             setProject('')
//             setAssignee('')
//             setLoading(false)
            
//         }catch(e){
//             console.log(e)
//         }
//     }
//     useEffect(()=>{
//         setToken(window.localStorage.getItem('userToken'))
//     })
//     return(
        
//         <div className='flex align-center jc-center'>
      
//           <form id="form" onSubmit={handleSubmit}>
//               <h1>Create Issue</h1>
//               <div className={classes["login-field"]}>
//               <label htmlFor="project">Project Id</label>
//               <input type="text" name="project" id="project" value={project} onChange={(e)=>{setProject(e.target.value)}} placeholder='Enter project Id' />
//               </div>
//               <div className={classes["login-field"]}>
//               <label htmlFor="owner">Assignee Id</label>
//               <input type="text" name="assignee" id="assignee" value={assignee} onChange={(e)=>{setAssignee(e.target.value)}} placeholder='Enter Assignee Id' />
//               </div>
//               {loading?<button className={classes.btn} disabled> Creating Issue</button>:<button className={classes.btn} type="submit">Create </button>}
             
//           </form>

//       </div>
//     )
// }

import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios';
// import classes from "../../styles/CreateIssueForm.module.css"
import classes from "../../styles/CreateProjectForm.module.css"
import TextField from "./TextField";
import CustomSelect from "./CustomSelect";
import { useEffect,useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { MultiSelect } from "react-multi-select-component";





const CreateIssueForm = ()=>{
    const [token, setToken] = useState('')
    const [loading,setLoading] = useState(false)
    const [projectName,setProjectName] = useState("")
    // const [projectId,setProjectId] = useState("")
    const [assignee,setAssignee] = useState("")
    const [selected,setSelected] = useState([]);
    const [a,setA] = useState(JSON.stringify([]));
    // console.log(projectId)
    // console.log("",a)
  


  async function  getAssignees(projectId){
        try {
            const response = await axios.get(
                `http://localhost:4000/project/${projectId}`
            )
            if(!response){
                setLoading(false);
            }else{
                const a = response.data
                                            // const b =  a.map(m=>m.members)
                   setAssignee(a)
                // console.log("members",a)
                if(assignee){
                    const a =  assignee.members.map(m=>{
                        return {value:m._id ,
                                 label: m.name
                            }
                    })
                    
                    setA(JSON.stringify(a));
                    console.log("a",a)
                }
            }
        } catch (e) {
            
        }
  }
    
  const handleOnChange = (event ) => {
    console.log("Form::onChange", event);
};
    useEffect(()=>{

        setToken(window.localStorage.getItem('userToken'))

        async function getData(){
            try{
                const response = await axios.get(
                    "http://localhost:4000/project"
                );
                if(!response){
                   setLoading(false);
                }else{
                    const project  = response.data
                    // console.log("name",project)
                    setProjectName(project)
                   
                    
                    setLoading(true)
                    // console.log("owner",owner)
                }
            }catch(e){
                 console.log(e)
            }
        }
        getData()
       
      
        
    },[a])

    // const a ={
    //         //  value:assignee.members.map(i=>i._id),
    //         //  label:assignee.members.map(m=>m.name)
           
    // }

    
    // console.log("sd",a)

    if(!loading){
        return <Backdrop open>
   <CircularProgress color="inherit" />
 </Backdrop>
    }
    else{
        return (
            <Formik
             initialValues={{
                summary:"",
                type:"",
                project:"",
                description:"",
                priority:"",
                asignee:"",
                tags:"",
                sprint:"",
                storyPoints:""
             }}
             >
  
    
            {
                formik=>{
                    return(
                        <Form>
                            <h1 className={classes.head}>Create User Stories/Tasks/Bugs</h1>
                            <div className={classes.grid}>
                                {/* summary */}
                                <div className={classes.summary}>
                                    <TextField
                                      label= "Summary"
                                      name = "summary"
                                      type = "text"
                                      placeholder="Add Summary"
                                    >
                                    </TextField>
                                    </div>
    
                                    {/* description */}
                                    <div className={classes.description}>
                                    <TextField
                                      label= "Description"
                                      name = "description"
                                      type = "text"
                                      placeholder="Write Description"
                                    >
                                    </TextField>
                                    </div>
    
                                    {/* priority */}
                                    <div className={classes.priority}>
                                        <CustomSelect
                                         label="Priority"
                                         name="priority"
                                         placeholder="Select"
                                        >
                                            <option value="high">High</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
    
                                        </CustomSelect>
                                    </div>
    
                                    {/* project */}
                                    <div className={classes.project}>
                                        <CustomSelect
                                         label="Project"
                                         name="project"
                                         placeholder="Select"
                                        //  value = {formik.values.project}
                                        //  onChange ={handleOnChange}
                                         onChange = {(event)=>{
                                        //    value = event.target.value
                                        //    console.log(value)
                                        // value = formik.values.project
                                        console.log(formik.values.project)
                                         console.log("id",event.target.value)
                                            getAssignees( event.target.value)
                                         }}
                                        >
                                            {/* <option value="" disabled selected hidden>Please Choose...</option> */}
                                           {projectName.map((v)=>{
                              {/* // {console.log(value._id)} */}
                         return  <option  className={classes.option}  key={v._id} value={v._id}>{v.name}</option> 
                          })} 
                                        </CustomSelect>
                                    </div>

                                    {/* assignee */}
                                    <div className={classes.assignee}>
                                        <label className={classes.label} htmlFor="assignees">Assignees</label>
                                        <MultiSelect
                                          options={ JSON.parse(a)}
                                          name="assignees"
                                          required="true"
                                          displayValue = "value"
                                          value={selected}
                                          onChange={setSelected}
                                          className={classes.multiInput}
                                     onRemove = {(event)=>{console.log(event)}}

                                        >

                                        </MultiSelect>
                                        
                                             {/* {<option value={assignee.members} key={assignee._id}>{assignee.members}</option>} */}
                                            {/* {assignee.map((value)=>{
                                                return <option className={classes.option} value={value._id} key={value._id} >{value.members}</option>
                                            })} */}
                                          
                                        
                                    </div>
    
                                
                            </div>
                        </Form>
                    )
                }
            }    
    
            </Formik>
        )
    }
    
}


export default CreateIssueForm;