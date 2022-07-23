import projectService from '../../services/project'
import userService from '../../services/user'
import {Formik,Form,Field,ErrorMessage} from "formik"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from "./TextField"
import {useField}  from "formik"
import * as Yup from "yup"
import axios from 'axios';
import CustomSelect from "./CustomSelect"
import { useEffect,useState } from "react"
import DatePicker from "react-datepicker"
import classes from "../../styles/CreateProjectForm.module.css"
import "react-datepicker/dist/react-datepicker.css"
import { MultiSelect } from "react-multi-select-component";

import { useRouter } from 'next/router'

// import { set } from 'mongoose';


const CreateProjectForm = ({token})=>{
    const router = useRouter()
     const [projectData,setProjectData] = useState([])
    const [owners,setOwners] = useState('[]')
    const [name,setName] = useState('')
    const [owner,setOwner] = useState('select Owner')
    const [loading,setLoading] = useState(false)
    const [member,setMember] = useState('[]')
    // const [token, setToken] = useState('')
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState("");
    const [error,setError] = useState(false);
    const [selected,setSelected] = useState([]);
    const onSubmit = async (values) => {
       
        try{
                const data = await projectService.createProject({
                    name:values.projectName,
                    owner:values.projectOwner,
                    start_date: startDate,
                    end_date:endDate,
                    members:selected.map(s=>s.value)
                },
                { headers :{ "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                'Authorization' : token}})
                setProjectData(data)
                resetData()
                // setLoading(false)
            }catch(e){
                resetData()
                // setLoading(false)
                console.log(e)
            }
        }

    const  resetData = ()=>{
    setStartDate('');
    setEndDate('');
    // setUser('')
    setError(false)
    setSelected([])
    // setName('')
    setMember('[]')
    setOwner('')
    }
    useEffect(()=>{
        // setToken(window.localStorage.getItem('userToken'))
        async function getData(token){
            try{
                // console.log('start')
                const users = await userService.getUsers({
                    headers :{ "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                'Authorization' : token}
                })
                // console.log("users",users)
                if(!users){
                    setLoading(false)
                    return
                }
                const members  = users.filter(function(user){
                    return user.job_role == "developer"
                })

                setMember(JSON.stringify(members))
                
                // console.log("members",members)
                const owners  = users.filter(function(user){
                    return user.job_role == "manager"
                })
                setOwners(JSON.stringify(owners))
                // setLoading(false)
            //    console.log("close")
                // setOwner(response.data)
                // 
                
                setLoading(true)
                // console.log("owner",owner)
            }catch(e){
                // setLoading(false)
                 console.log(e)
            }
            
        }
        
        getData(token)
        
    })
    const validateDate =()=>{
        if(startDate?.length === 0  ){
            setError(true)
        } else if(endDate?.length===0){
            setError(true)
        }else{
            setError(false)
        }
        
       }
        
    const validate = Yup.object({
        // projectOwner:Yup
        // .string()
        // .required("Please Select"),
        // .oneOf([] , "Please Select"),
        projectName:Yup
        .string()
        .required("Project Name is required"),

        // startDate:Yup
        // .string()
        // .required("Required"),

        // members:Yup
        // .string()
        // .required("Please Select"),
        
    })
    const assignee = JSON.parse(member).map(m=>{
        return {value:m._id ,
                 label: m.name
            }
    })
    // console.log("assignee",assignee)
    // const [options,setOptions] = useState(assignee);
    // console.log(options)
    // const [selected, setSelected] = useState([])
    // console.log("options",options)

if(!loading){
   return <Backdrop open>
   <CircularProgress color="inherit" />
 </Backdrop>
}
else{
   
        
    return(
        <Formik
        initialValues={{
         projectName:"",
         projectOwner:"",
         startDate:"",
         endDate:"",
         members:""
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
        // onSubmit = {console.log("submit!") }
        > 
     { 
     (formik) => {
        //  console.log("formik",formik)
             return(
                 <Form >
                 <h1 className={classes.head}>Create Project</h1>
                 <div className={classes.grid}>
                     {/* project name */}
                     <div>
                       <TextField
                          label ="Project Name"
                          name = "projectName"
                          type = "text"
                          placeholder = "Project Name"
                        //   value = {name}
                        //   onChange= {e=>setName(e.target.value)}
                       />
                       </div>
 
                       {/* project owner */}
                       <div className={classes.owner}>
                     <CustomSelect
                        label="Project Owner"
                        name = "projectOwner"
                        placeholder= "Select"
                        // onChange={e=>{e.preventDefault()
                        //                 setOwner(e.target.value)
                        //             }}
                        // value={owner}
                        >
                         
                         {/* {console.log(owner)} */}
                         {JSON.parse(owners).map((value)=>{
                            //  {console.log('oneowner',value)}
                         return <option className={classes.option} key={value._id} value={value._id}>{value.name}</option>
                         })}
                     </CustomSelect>
                     </div>

                     {/* start date */}
                     <div className={classes.startDate}>
                         <label htmlFor="startDate">Start Date  <span className={classes.star}>*</span></label>
                     <DatePicker
                         selected={startDate}
                         onChange={(date) => setStartDate(date)}
                        //  selectsStart
                         type="string"
                         startDate={startDate}
                         endDate={endDate}
                         maxDate = {endDate}
                         className={classes.dateInput}
                         placeholderText ="MM/DD/YYYY"
                         name="startDate"
                     />
                   
                     {error?<p className={classes.error}>Required</p>:""}
                       {/* {console.log(error)} */}
                     </div>

                     {/* end date */}
                     <div>
                     <label htmlFor="endDateDate">End Date <span className={classes.star}>*</span></label>
                     <DatePicker
                         selected={endDate}
                         onChange={(date) => setEndDate(date)}
                         selectsEnd
                         type="string"
                         startDate={startDate}
                         endDate={endDate}
                         minDate={startDate}
                         className={classes.dateInput}
                         placeholderText ="MM/DD/YYYY"
                         name="endDate"
                     />
                     {error?<p className={classes.error}>Required</p>:<p></p>}
                     </div>
 
                     {/* members */}
                     <div >
                        <label className={classes.label} htmlFor="members">Members <span className={classes.star}>*</span></label>
                        <div className={classes.members}>
                       <MultiSelect  
                         options={assignee}
                         name="members"
                         required = "true"
                         displayValue= "value"
                         value={selected}
                         onChange={setSelected}
                         className={classes.multiInput}
                         onRemove = {(event)=>{console.log(event)}}
                        //  onSelect = {(event)=>{console.log(event)}}

                         />
                         </div>
                     </div>

                     <div></div>
 
                         <div className={classes["pro-btn"]}>
                     <button  onClick={resetData} className={classes.resetBtn} type="reset"  >Reset</button>
                      <button onSubmit={onSubmit}  onClick={validateDate}     className={classes.createBtn}  type="submit" >Create</button>
                     
                      {/* disabled={!(formik.isValid || formik.dirty)} */}
                      {/* disabled={!(formik.isValid && formik.dirty)} */}
                     
 
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


export default CreateProjectForm