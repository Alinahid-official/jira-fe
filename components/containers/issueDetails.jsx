import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";
import classes from "../../styles/IssueDetails.module.css"
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function IssueDetails({projectId}){
    const [load, setLoad] = useState(false)
    const [issue, setIssue] = useState(null)
    // useEffect( () => {
    //     setLoad(true)
    //    const getIssueById = async ()=>{
    //         try{
    //             // const token = window.localStorage.getItem('userToken')
    //             const data = await issueServices.getIssueById(projectId,
    //                 { headers :{ "Access-Control-Allow-Origin" : "*",
    //                     "Content-type": "Application/json",
    //                     'Authorization' : token}})
    //             setIssues(JSON.stringify(data))
    //             console.log(data)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     getIssueList()
    //     setLoad(false)
    // })
    return(
        // <div>
        //     {issues ? JSON.parse(issues).map(issue=>{
        //         return(
        //             <li key = {issue._id}>
        //                 {issue._id}
        //             </li>
        //         )
        //     }):null}
        // </div>
        <div className={classes.issueDetails}>
           <div className={classes.sub}>
            <p> <span className={classes.color}>Project Board</span>/Issue Details</p>
           </div>
           <div className={classes.project}>
            <h1>JIRA Project</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           </div>
           <div className={classes.container}>
            <div className={classes.left}>
            <div className={classes.desc}>
                <p>Description:</p>
                <h4>Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry.Lorem Ipsum  
              has been the industry standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book.</h4>
            <hr />
            </div>
            <div className={classes.details}>
                <h2>Details</h2>
                <div className={classes.dGrid}>
                        <div className={classes.tFlex}>
                            <p>Type:</p>
                            <p> <span></span>  Bug</p>
                        </div>
                        <div className={classes.tFlex}>
                            <p>Sprint:</p>
                            <p> <span></span>  CW_21</p>
                        </div>
                        <div className={classes.tFlex}>
                            <p>Tags:</p>
                            <p className={classes.angular}>Angular</p>
                        </div>
                        <div className={classes.tFlex}>
                            <p>Priority:</p>
                            <p className={classes.high}>High</p>
                        </div>
                        <div className={classes.tFlex}>
                            <p>Story Points:</p>
                            <p> <span></span>  3</p>
                        </div>
                </div>
            </div>
            <hr />
            <div className={classes.comment}>
                <h3>Comments <span> <span><FontAwesomeIcon onClick={()=>{console.log("clicked")}} icon={faSquarePlus} /></span>  Add Comment</span> </h3>
                <div className={classes.comments}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className={classes.cFlex}>
                        <p>Posted on 31-2-22</p>
                        <p>Added by Pushpa Raj</p>
                    </div>
                </div>
                <div className={classes.comments}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className={classes.cFlex}>
                        <p>Posted on 31-2-22</p>
                        <p>Added by Pushpa Raj</p>
                    </div>
                </div>
            </div>
            </div>
            <div>

            <div className={classes.right}>
                
                <a href="">Related Issues</a>
                <a href="">Edit Issues</a>
                
            </div>
            </div>
           </div>



        </div>
    )
}