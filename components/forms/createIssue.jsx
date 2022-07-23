import Backdrop from '@mui/material/Backdrop';
import * as Yup from "yup"
import issueService from '../../services/issue'
import classes from "../../styles/CreateProjectForm.module.css"
import TextField from "./TextField";
import CustomSelect from "./CustomSelect";
import projectService from '../../services/project'
import { useEffect,useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {Formik,Form} from "formik"
import { MultiSelect } from "react-multi-select-component";


const validationSchema = Yup.object({
    summary:Yup
    .string()
    .required("Required"),
    type:Yup
    .string()
    .required("Required"),
    description:Yup.string().required("Required"),
    priority:Yup.string().oneOf(["high","low","medium"],).required("Required"),
    tags:Yup.string().oneOf(["a","b","c"],).required("Required"),
    sprint:Yup.string().oneOf(["1","2","3"],).required('Required'),
    storyPoints:Yup.number().required("Required")


})

const CreateIssueForm = ()=>{

    const [loading,setLoading] = useState(false);
    const [assignees,setAssignees] = useState(JSON.stringify([]))
    const [projects,setProjects] = useState([])
    const [selected,setSelected] = useState([])
    const [selectedProjectId,setSelectedProjectId] =useState("");
    const [token, setToken] = useState('')

    const onSubmit =async(values)=>{
        try {
            console.log("hello")
            const data = await issueService.createIssue({
                               summary:values.summary,
                               type:values.type,
                               tags:values.tags,
                               description:values.description,
                               priority:values.priority,
                               project_id:selectedProjectId,
                               story_points:values.storyPoints,
                               assignees:selected
                                 
                            },{ headers :{ "Access-Control-Allow-Origin" : "*",
                            "Content-type": "Application/json",
                            'Authorization' : token}})
                            console.log("data",data)
                            // setProject('')
                            // setAssignee('')
                            // setLoading(false)
                            
            
        } catch (err) {
            
        }
    }
    async function getAssignees(projectId){
        try {
            const projectDetails = await projectService.getProjectById(projectId,{
                headers:{"Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                'Authorization' : token
      }
            })
            if(projectDetails){
                const apiAssignees = projectDetails.members.map(m=>{
                    return {
                        value:m._id,
                        label:m.name
                    }
                })
                setAssignees(JSON.stringify(apiAssignees))
                console.log("assignees",assignees)
                
            }else{
                setLoading(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        async function getData(){
            try {
                setToken(window.localStorage.getItem('userToken'))
                const allProjects = await projectService.getProjects({
                    headers:{"Access-Control-Allow-Origin" : "*",
                    "Content-type": "Application/json",
                    'Authorization' : token}
                })

                if(!allProjects){
                    setLoading(false)
                    return
                }else{
                    setProjects(allProjects)
                    setSelectedProjectId(allProjects[0]?._id)
                    // setLoading(true)
                    getAssignees(allProjects[0]?._id)
                    console.log("",allProjects[0]?._id)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getData()
        setLoading(true)

    },[])

    if(!loading){
        return <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    }else{
        return (
            <Formik
            initialValues={{
                summary:"",
                type:"",
                description:"",
                priority:"",
                tags:"",
                sprint:"",
                storyPoints:""
            }}
            validationSchema={validationSchema}
            >
                {
                    formik=>{
                        return(
                            <Form onSubmit={onSubmit}>
                                <h1 className={classes.head}>Create User Stories/Tasks/Bugs</h1>
                                <div className={classes.grid}>
                                    {/* SUMMARY */}
                                    <div id='summary' >
                                    {/* className={classes.summary} */}
                                        <TextField
                                        label="Summary"
                                        name = "summary"
                                        type = "text"
                                        placeholder  = "Add Summary"
                                        >
                                        </TextField>
                                    </div>
                               

                                {/* type */}
                                <div className={classes.type}>
                                <CustomSelect
                                         label="Type"
                                         name="type"
                                        >
                                            <option value="">Select</option>
                                            <option value="task">Task</option>
                                            <option value="bug">Bug</option>
                                            <option value="story">Story</option>
                                        </CustomSelect>
                                </div>

                                {/* project */}
                                <div className={classes.project}>
                                    <label className={classes.label} htmlFor="project">Project</label>
                                    <select 
                                    className={classes.select}
                                    value={selectedProjectId}
                                     onChange={(event)=>{
                                        getAssignees(event.target.value)
                                        setSelectedProjectId(event.target.value)
                                     }}
                                    >
                                        {projects.map((v)=>{
                                            return <option 
                                            className={classes.option} 
                                            key={v._id} 
                                            value={v._id}>
                                                {v.name}</option>
                                        })}
                                    </select>
                                </div>

                                {/* DESCRIPTION */}
                                <div className={classes.description}>
                                    <TextField
                                    label="Description"
                                    name="description"
                                    type="text"
                                    placeholder="Write Description">
                                    </TextField>
                                </div>

                                {/* PRIORITY */}
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

                                {/* ASSIGNEE */}
                                <div className={classes.assignee}>
                                    <label htmlFor="assignees" className={classes.label}>Assignees</label>
                                    <MultiSelect
                                                                options={ JSON.parse(assignees)}
                                                                name="assignees"
                                                                required="true"
                                                                displayValue = "value"
                                                                value={selected}
                                                                onChange={setSelected}
                                                                className={classes.multiInput}
                                                            onRemove = {(event)=>{console.log(event)}}>
                                        </MultiSelect>
                                </div>

                                {/* TAGS */}
                                <div className={classes.tags}>
                                <CustomSelect
                                         label="Tags"
                                         name="tags"
                                         placeholder="Select"
                                        >
                                            <option value="a">A</option>
                                            <option value="b">B</option>
                                            <option value="c">C</option>
    
                                        </CustomSelect>
                                </div>

                                  {/* story points */}
                                  <div className={classes.storyPoints}>
                                    <TextField
                                      label= "Story Points"
                                      name = "storyPoints"
                                      type = "number"
                                      placeholder="0,1,2...."
                                    >
                                    </TextField>
                                    </div>
                                    <div>
                                        <button type='reset'>Reset</button>
                                        <button onSubmit={onSubmit} type='submit'>Create</button>
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

export default CreateIssueForm