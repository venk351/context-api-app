import React from "react";
import UserInfoContext from "../context/UserInfoContext";
import { useContext } from "react";

export default function Comment(){
    const user = useContext(UserInfoContext)
    return(
        <div>
            <p>Logged in as {user.user}</p>
            {user.isAdmin && <button>Edit Comment</button>}
        </div>
    )
}