import React from 'react';

class CBCProEx extends React.Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
                {/* <h1>{this.props.hobbies}</h1>
                {/* <h1>{this.props.address.city}</h1>
                <h1>{this.props.address.area}</h1>
                <h1>{this.props.isMarried}</h1>
                <h1>{this.props.sendFun}</h1> */} 
                {
                    this.props.hobbies.map(hobby=>{
                        return <li>{hobby}</li>
                    })
                }
                {
                    this.props.isMarried ? <h2>Married</h2> : <h2>Not Married</h2>
                }
                <button onClick={this.props.sendFun}>Click</button>
            </div>
        );
    }
}

export default CBCProEx;


