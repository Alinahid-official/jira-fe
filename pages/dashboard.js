import { useContext } from "react";
import { Context } from "../context";
export default function Login(){
    const { state, dispatch } = useContext(Context);
    console.log(state)
    return(
        <div>
            {JSON.stringify(state)}
        </div>
    )
}