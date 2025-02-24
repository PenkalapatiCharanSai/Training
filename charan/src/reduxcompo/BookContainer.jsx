import React from 'react';
import { connect } from "react-redux";
import { buyBook } from '../redux/bookex/bookAction';
const BookContainer = (props) => {
    //console.log(props);
    return (
        <div>
            <h1>Number of books : {props.books}</h1>
            <button onClick={props.dispatchBooks}>Buy Book</button>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        books:state.numOfBooks
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        dispatchBooks : ()=>dispatch(buyBook())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
