import React from 'react';
const PropsChildren =(props)=>{
    console.log(props);
    return(
    <div>
        <h1>{props.username}</h1>
        <h2>{props.company}</h2>
        {
            props.children
        }
    </div>
    )
}
export default PropsChildren;
