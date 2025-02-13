import React from 'react';

const FBCPropex1 = (props) => {
    // console.log(props);
    if (props.isLoggedIn === true) {
        return (
            <div>
                <h1>Welcome {props.username}</h1>
                <ul>
                    {props.profiles.map((profile, index) => (
                        <li key={index}>{profile}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <h1>Please Login first!</h1>;
    }
};

export default FBCPropex1;
