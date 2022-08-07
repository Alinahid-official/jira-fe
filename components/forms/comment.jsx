import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import classes from "../../styles/issueDetails.module.css"
import { useEffect,useState } from "react";
import commentService from "../../services/comment";

const Comment = ({issueId,token})=>{
    console.log(issueId)
    const [text, setText]= useState(null)
    const [comments, setComments]= useState(null)
    const getComments = async ()=>{
        try{
            const res = await commentService.getComments(issueId,{
                headers :{ "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            'Authorization' : token}
            })
            console.log('comments',res)
            setComments(res)
        }
        catch(e){
            console.log(e)
        }
    }
    const addComment=async()=>{
            setText('')
            try {

                const res = await commentService.addComment({
                    issue:issueId,
                    text : text
                },{
                    headers :{ "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                'Authorization' : token}
                })
                // console.log('comments',res)
                getComments()
                
            }
            catch(e){
                console.log(e)
            }
    }
    
    useEffect(()=>{
        if(issueId){
            getComments()
        }
        
    },[])
    return(
        <>
        <div className={classes.comment}>
              <h3>Comments  <span onClick={()=>{console.log("clicked")}} ><FontAwesomeIcon icon={faSquarePlus} />  Add Comment</span> </h3>
              <div>
                <p><label htmlFor="w3review">Write a comment:</label></p>
                <textarea value={text} onChange={e=>setText(e.target.value)} rows="4" cols="50"></textarea>
                <button onClick={addComment}>post</button>
              </div>
              {comments?
              comments.map(comment=>{
                return(
                    <div key={comment._id} className={classes.comments}>
                  <p>{comment.text}</p>
                  <div className={classes.cFlex}>
                      <p>Posted on {comment.date_of_creation}</p>
                      <p>Added by {comment.user.name}</p>
                  </div>
              </div>
                )
              }):null}
              
              {/* <div className={classes.comments}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className={classes.cFlex}>
                      <p>Posted on 31-2-22</p>
                      <p>Added by Pushpa Raj</p>
                  </div>
              </div> */}
          </div>
        </>
    )
}

export default Comment;