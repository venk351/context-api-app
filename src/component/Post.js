import React from "react";
import Comment from "./Comment";

export default function Post(){
    return(
        <div>
            <h4>Example Post title</h4>
            <p>This is the example post content.</p>
            <Comment></Comment>
        </div>
    )
}