import classes from "../../styles/LoginForm.module.css"

import React, {useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import ButtonBox from '../box/issueDetailsBtns';
import Comment from "../box/commet";

export default function IssueDetails({userId,issueId}){
    console.log(userId,issueId)
    return(
        <>
        {/* <ButtonBox edit={true}/> */}
        <Comment userId={userId} issueId={issueId}/>
        </>
    )
}