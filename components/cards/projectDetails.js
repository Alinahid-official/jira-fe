import styles from '../../styles/projectCard.module.css'
export default function ProjectDetailsCard({project}){
    console.log(project)
    return(
        <div className={styles.project}>
            {/* <h1>Welcome to Tracker</h1> */}

           <div className={styles.left}>
                  <div className={styles.title}> JIRA PROJECT</div>
                  <div>Total Number Of Issues:08</div> 
                  <h6 className='width-75'> <hr></hr> </h6> 
            <table className="width-75">
                <tr>
                    <td>TO DO</td>
                    <td>Development</td>
                    <td>Testing</td>
                    <td>Completed</td>
                </tr>
                <tr className={styles.big}>
                    <td className={styles.yellow}>1</td>
                    <td className={styles.orange}>2</td>
                    <td className={styles.blue}>4</td>
                    <td className={styles.green}>6</td>
                </tr>
            </table>
           </div>
        </div>
        )
}