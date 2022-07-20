export default function Issue(){
    return(

        <div>
           <div className="issue">
           <h3>JIRA PROJECT </h3>
           <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry.</p>
           </div>
           <div className="issue1">
           <h4>Description: <br></br> <br></br><p>Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry.Lorem Ipsum <br></br> 
              has been the industry's standard dummy text ever since the 1500s, 
              when an unknown <br></br>printer took a galley of 
            type and scrambled it to make a type specimen book.</p></h4>
            
                  <h1> <hr></hr> </h1> 

            <button>related issue</button>
            <div className="issue2">
            <h4>Details<br></br><br></br></h4>
            <h5>Type :  <i class="ri-bug-line"></i> BUG <br></br><br></br></h5>
            <h5>Tag : <button>ANGULAR</button><br></br><br></br></h5>
            <h5>Story Point : 3 <br></br><br></br></h5>
            {/* <h4>Comments: </h4> */}
            <button>edit issue</button>
            </div>

            <div className="right">
                <h5>Sprint :  CW_21</h5>
            </div>

            
            <div className="right1">
                <h5>Priorty : <button>HIGH</button></h5>
            </div>


            <div className="row">
         <div className="coll">
         <label for="Comment">Comments: <i class="ri-add-box-fill"></i> Add Comment<br></br><br></br></label>
        </div>
         <div className="colm">
        <textarea id="Comment" name="Comment" placeholder="Write Comment here.."/>
       </div>
        </div>
           <h1><hr></hr><br></br><br></br></h1>

         <div className="btns">
            <button>Post</button>
         </div>
         <div className="btns2">
            <button>CANCLE</button>
         </div>

        <div className="commts">
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
            <div className="post">
            <h4>Posted on:  30-12-2000 </h4>
            <h4>Added by : Pushpa Raj <br></br><br></br></h4>
            </div>
            <h1><hr></hr></h1>

        </div>

        <div className="commts">
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
            <div className="post">
            <h4>Posted on:  30-12-2000 </h4>
            <h4>Added by : Pushpa Raj <br></br><br></br></h4>
            </div>
            <h1><hr></hr></h1>

        </div>

          


           
    
           

            </div>

       

    

     </div>
    )
}