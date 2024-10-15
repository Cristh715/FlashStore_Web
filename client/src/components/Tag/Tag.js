import React from "react";
import './Tag.css'

const Tag = ({name, clase}) =>{
    return(
        <div className={`tag ${clase}`}>
            {name}
        </div>
    );
}

export default Tag;