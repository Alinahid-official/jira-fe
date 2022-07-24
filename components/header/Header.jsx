import classes from "../../styles/Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
        <div>
            <div className={classes.Hflex}>
                <div>
                    <input type="text" placeholder="Select" />
                    <span>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </span>
                </div>
                <div >
                    <p>Anjali Gupta</p>

                </div>

            </div>
        </div>
    )
}