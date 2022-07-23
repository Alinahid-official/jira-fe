// import {Formik,Form,Field,ErrorMessage} from "formik"
// import * as Yup from "yup"
// // import classes from "../../styles/CreateIssueForm.module.css"
// import classes from "../../styles/CreateProjectForm.module.css"
// import TextField from "./TextField";
// import CustomSelect from "./CustomSelect";
// import { useEffect,useState } from "react";
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
// import { MultiSelect } from "react-multi-select-component";
// import projectService from '../../services/project'
// import TextError from "./TextError";

// const validationSchema = Yup.object({
//     summary:Yup.string().required("Required"),
//     type:Yup.string().required("Required"),
//     project:Yup.string().required("Required"),
//     description:Yup.string().required("Required"),
//     priority:Yup.string().oneOf(["high","low","medium"],).required("Required"),
//     assignees:Yup.string().required('Required'),
//     tags:Yup.string().required("Required"),
//     sprint:Yup.string().oneOf(["1","2","3"],).required('Required'),
//     storyPoints:Yup.number().required("Required")

// })


// const CreateIssueForm = ({token})=>{
//     // const [token, setToken] = useState('')
//     const [loading,setLoading] = useState(false)
//     const [projectName,setProjectName] = useState([])
//     // const [projectId,setProjectId] = useState("")
//     // const [assignee,setAssignee] = useState("")
//     const [selected,setSelected] = useState([]);
//     const [assignee,setAssignee] = useState(JSON.stringify([]));
//     const [selectedproject,setselectedproject] = useState("");
//     // console.log(projectId)
//     // console.log("",assignee)


//   async function  getAssignees(projectId){
//         console.log(projectId)
//         try {
//             const project = await projectService.getProjectById(projectId,{
//                 headers :{ "Access-Control-Allow-Origin" : "*",
//             "Content-type": "Application/json",
//             'Authorization' : token
//         }
//             })
            

//             if(project)
//             {
//                 const a =  project.members.map(m=>{
//                     return {value:m._id ,
//                             label: m.name
//                         }
//                 })
//                 setAssignee(JSON.stringify(a));
//                 console.log(assignee)



//             }
           
                
            
            
//         } catch (e) {
//             console.log(e)
//         }
//   }
    
//     useEffect(()=>{

//         // setToken(window.localStorage.getItem('userToken'))

//         async function getData(){
//             try{
//                 const project = await projectService.getProjects({
//                     headers :{ "Access-Control-Allow-Origin" : "*",
//                 "Content-type": "Application/json",
//                 'Authorization' : token}
//                 });
//                 // console.log("name",project)
//                 if(!project){
//                     setLoading(false)
//                     return
//                 }
//                 else{
//                 setProjectName(project)
//                 setselectedproject(project[0]?._id)
//                 console.log(selectedproject);
//                 setLoading(true)
//                 console.log(project)
//                 getAssignees(project[0]?._id)
//                 console.log(assignee)

//                 // console.log("owner",owner)
//             }
//             }catch(e){
//                  console.log(e)
//             }
//         }
//         setLoading(true)
//         getData()
//         setLoading(false)
       
        
        
//     },[])

//     // const a ={
//     //         //  value:assignee.members.map(i=>i._id),
//     //         //  label:assignee.members.map(m=>m.name)
           
//     // }

    
//     // console.log("sd",a)

   

//     if(!loading){
//         return <Backdrop open>
//    <CircularProgress color="inherit" />
//  </Backdrop>
//     }
//     else{
//         return (
//             <Formik
//              initialValues={{
//                 summary:"",
//                 type:"",
//                 project:"",
//                 description:"",
//                 priority:"",
//                 assignees:"",
//                 tags:"",
//                 sprint:"",
//                 storyPoints:""
//              }}
//              validationSchema={validationSchema}
//              >
    
    
//             {
//                 formik=>{
//                     return(
//                         <Form>
//                             <h1 className={classes.head}>Create User Stories/Tasks/Bugs</h1>
//                             <div className={classes.grid}>
//                                 {/* summary */}
//                                 <div className={classes.summary}>
//                                     <TextField
//                                       label= "Summary"
//                                       name = "summary"
//                                       type = "text"
//                                       placeholder="Add Summary"
//                                     >
//                                     </TextField>
//                                     </div>

//                                       {/* type */}
//                                     <div className={classes.type}>
//                                         <CustomSelect
//                                          label="Type"
//                                          name="type"
//                                         >
//                                             <option value="">Select</option>
//                                             <option value="task">Task</option>
//                                             <option value="bug">Bug</option>
//                                             <option value="story">Story</option>
//                                         </CustomSelect>
//                                     </div>

//                                      {/* project */}
//                                      <div className={classes.project}>
//                                         <select
                                        
//                                          value ={selectedproject}
//                                          placeholder="Select"
//                                          onChange = {(event)=>{
//                                             console.log(event.target.value)
//                                             getAssignees( event.target.value)
//                                             setselectedproject(event.target.value)
//                                             console.log(selectedproject)
//                                             console.log(assignee)
//                                          }}
//                                         >
//                                            {projectName.map((v)=>{
//                               {/* // {console.log(value._id)} */}
//                          return  <option  className={classes.option}  key={v._id} value={v._id}>{v.name}</option> 
//                           })} 
//                                         </select>
//                                     </div>

//                                     {/* description */}
//                                     <div className={classes.description}>
//                                     <TextField
//                                       label= "Description"
//                                       name = "description"
//                                       type = "text"
//                                       placeholder="Write Description"
//                                     >
//                                     </TextField>
//                                     </div>
    
//                                     {/* priority */}
//                                     <div className={classes.priority}>
//                                         <CustomSelect
//                                          label="Priority"
//                                          name="priority"
//                                          placeholder="Select"
//                                         >
//                                             <option value="high">High</option>
//                                             <option value="low">Low</option>
//                                             <option value="medium">Medium</option>
    
//                                         </CustomSelect>
//                                     </div>
    
                                   

//                                     {/* assignee */}
//                                     <div className={classes.assignee}>
//                                         <label className={classes.label} htmlFor="assignees">Assignees</label>
//                                         <Field name="assignees" id="assignees">
//                                             {
//                                                 (props)=>{
//                                                     const {field,form,meta}  = props
//                                                     // console.log("field props",field)
//                                                     // console.log("meta",meta)
//                                                     return(
//                                                         <div>
//                                                              <MultiSelect
//                                                                 options={ JSON.parse(assignee)}
//                                                                 name="assignees"
//                                                                 required="true"
//                                                                 displayValue = "value"
//                                                                 value={selected}
//                                                                 onChange={setSelected}
//                                                                 className={classes.multiInput}
//                                                             onRemove = {(event)=>{console.log(event)}}>
//                                         </MultiSelect>
//                                         {meta.touched && meta.error ? <p className="error">{meta.error}</p>:null}

//                                                         </div>
//                                                     )
//                                                 }
//                                             }

//                                         </Field>
//                                         {/* <MultiSelect
//                                           options={ JSON.parse(a)}
//                                           name="assignees"
//                                           required="true"
//                                           displayValue = "value"
//                                           value={selected}
//                                           onChange={setSelected}

//                                           className={classes.multiInput}
//                                      onRemove = {(event)=>{console.log(event)}}
//                                           >
//                                         </MultiSelect> */}
//                                         {/* <ErrorMessage name="assignees" component={TextError}/> */}
//                                     </div>

//                                     {/* tags */}




//                                     {/* sprint */}
//                                     <div className={classes.sprint}>
//                                         <CustomSelect
//                                          label="Sprint"
//                                          name="sprint"
//                                         >
//                                             <option value="">Select</option>
//                                             <option value="1">Sprint 1</option>
//                                             <option value="2">Sprint 2</option>
//                                             <option value="3">Sprint 3</option>
    
//                                         </CustomSelect>
//                                     </div>

//                                     {/* story points */}
//                                     <div className={classes.storyPoints}>
//                                     <TextField
//                                       label= "Story Points"
//                                       name = "storyPoints"
//                                       type = "number"
//                                       placeholder="0,1,2...."
//                                     >
//                                     </TextField>
//                                     </div>
    
                                
//                             </div>
//                         </Form>
//                     )
//                 }
//             }    
    
//             </Formik>
//         )
//     }
    
// }


// export default CreateIssueForm;