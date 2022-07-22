import styles from '../../styles/searchbar.module.css'
export default function Nav(){
    return(
        <>
        <div className={styles.content}>
            <input type="text" placeholder='search'/>
        </div>
        </>
  
    )
}