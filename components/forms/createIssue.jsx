import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
// import classes from "../../styles/CreateIssueForm.module.css"
import classes from "../../styles/CreateProjectForm.module.css"
import TextField from "./TextField";
import CustomSelect from "./CustomSelect";
import { useEffect,useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { MultiSelect } from "react-multi-select-component";
import projectService from '../../services/project'

const CreateIssueForm = ({token})=>{
    // const [token, setToken] = useState('')
    const [loading,setLoading] = useState(false)
    const [projectName,setProjectName] = useState([])
    // const [projectId,setProjectId] = useState("")
    const [assignee,setAssignee] = useState("")
    const [selected,setSelected] = useState([]);
    const [a,setA] = useState(JSON.stringify([]));
    // console.log(projectId)
    // console.log("",assignee)


  async function  getAssignees(projectId){
        console.log(projectId)
        try {
            const project = await projectService.getProjectById(projectId,{
                headers :{ "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            'Authorization' : token}
            })
            // console.log(project)

                // const b =  a.map(m=>m.members)
                // setAssignee(JSON.stringify(project.members))
                // console.log("members",a)
            const a =  project.members.map(m=>{
                return {value:m._id ,
                        label: m.name
                    }
            })
                
            setA(JSON.stringify(a));
            
        } catch (e) {
            console.log(e)
        }
  }
    
    useEffect(()=>{

        // setToken(window.localStorage.getItem('userToken'))

        async function getData(){
            try{
                const project = await projectService.getProjects({
                    headers :{ "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                'Authorization' : token}
                });
                // console.log("name",project)
                if(!project){
                    setLoading(false)
                    return
                }
                setProjectName(project)
                setLoading(true)
                console.log(project)
                // console.log("owner",owner)
            
            }catch(e){
                 console.log(e)
            }
        }
        setLoading(true)
        getData()
        setLoading(false)
       
        console.log(a)
        
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
                                         onChange = {(event)=>{
                                            getAssignees( event.target.value)
                                         }}
                                        >
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