import classes from "../../styles/sidenavbar.module.css"
import Link from 'next/link'
function SideNavBar({role}){
    if(!role){
        return(
            <div className={classes.container}>
            </div>
        )
    }
    else{
        return(
            <div className={classes.container}>
                
                <h1 className={classes.title}>Tracker</h1>
                <div  className={classes.fields}>
                     
                    <Link href='/dashboard/projectBoard'><a><h1>Project Board</h1></a></Link>
                    <Link href='/dashboard/createIssue'><a> <h1 >Create Issue</h1></a></Link>
                     {role=='manager'?<Link href='/dashboard/createProject'><a> <h1 >Create Project</h1></a></Link>:null}
                     <Link href='/dashboard/projectBoard/projectDetails'><a> <h1 >Create Issue</h1></a></Link>

                    </div>
            </div>
        )
    }
    
}


export default SideNavBar;
