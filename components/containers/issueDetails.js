import issueServices from "../../services/issue"
import React, {useEffect, useState } from "react";
import classes from "../../styles/issueDetails.module.css"
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProjectDetails({issueId, token,user}){
    
    const [load, setLoad] = useState(false)
    const [issue, setIssue] = useState(null)
    // console.log('Issue', issueId)
    useEffect( () => {
        // setLoad(true)
        console.log('issueIde',issueId)
       const getIssue = async ()=>{
            try{
                // const token = window.localStorage.getItem('userToken')
                const data = await issueServices.getIssueById(issueId,
                    { headers :{ "Access-Control-Allow-Origin" : "*",
                        "Content-type": "Application/json",
                        'Authorization' : token}})
                if(!data){
                    setLoad(true)
                    return
                }
                // setIssue(JSON.stringify(data))
                setIssue(data)
                console.log(data)
                // setLoad(false)
            }catch(e){
                console.log(e)
            }
        }
        getIssue()
        // setLoad(false)
    },[])
    return(
        !issue?<Backdrop open>
                <CircularProgress color="inherit" />
            </Backdrop>:
         <div className={classes.issueDetails}>
            <div className={classes.sub}>
            <p> <span className={classes.color}>Project Board</span>/Issue Details</p>
            </div>
            <div className={classes.project}>
                <h1>{issue.name} Project</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
         <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes.desc}>
              <p>Description:</p>
              <h4>{issue.description}</h4>
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
                          <p className={classes.high}>{issue.priority}</p>
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