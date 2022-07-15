import classes from "../../styles/sidenavbar.module.css"
function SideNavBar(){
    return(
        <div className={classes.container}>
                
               <div  className={classes.fields}>
                <a><h1>Project Board</h1></a>
                <a> <h1 >Create Issue</h1></a>
                <a> <h1 >Create Project</h1></a>
                </div>
                </div>
    )
}


export default SideNavBar;
