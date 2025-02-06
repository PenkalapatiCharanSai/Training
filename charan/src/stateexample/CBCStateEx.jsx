// import React, { Component } from 'react'

// class CBCStateEx extends Component {
//     constructor(){
//         super();

//         this.state={
//             university:"MRU"
//         }
//     };
//     changeName=()=>{
//         this.setState({university:"Malla Reddy Univerity"});
//     }
//     // reName=()=>{
//     //     this.setState({university:"MRU"})
//     // }
//   render() {
//     console.log(this);
//     return (
//       <div>CBCStateEx
//         <h1>{this.state.university}</h1>
//         <button onClick={this.changeName}>Change Name</button>
//       </div>
//     )
//   }
// }
// export default CBCStateEx;

//^Two Button
import React, { Component } from 'react';

class CBCStateEx extends Component {
    constructor() {
        super();

        this.state = {
            university: "MRU",
            isChanged: false 
        };
    }

    toggleName = () => {
        this.setState((prevState) => ({
            university: prevState.isChanged ? "MRU" : "Malla Reddy University",
            isChanged: !prevState.isChanged  
        }));
    };

    render() {
        return (
            <div>
                <h1>{this.state.university}</h1>
                <button onClick={this.toggleName}>
                    {this.state.isChanged ? "Revert Name" : "Change Name"}
                </button>
            </div>
        );
    }
}

export default CBCStateEx;

