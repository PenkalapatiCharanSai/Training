// import React from 'react';
// import './global.css'
// const FuctionalComponent = (props) => {
//     console.log(props)
//     return (
//         <div className='function'>
//             <h1>Hello, This is the FuctionalComponentnt</h1>
//             <h2>{props.college}</h2>
//             <h2>{props.city}</h2>
//             <h1></h1>
//         </div>
//     );
// };

// export default FuctionalComponent;

import React from 'react';

const FuctionalComponent = (props) => {
    let applyStyle = props.apply ? 'heding':''
    console.log(props)
    let inlineStyle = {
        color:'red',
        fontSize:'100px'
    }
    return (
        <div>
           <h1 class={`${applyStyle} font-style`}>Welcome to the REACT, {props.clg}, {props.city}</h1>
           <h2 style={inlineStyle}>Good Morning!</h2> 
        </div>
    );
};

export default FuctionalComponent;