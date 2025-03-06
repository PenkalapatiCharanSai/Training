

import { useEffect, useState } from "react";
import "./Mobiles.css";
import axios from "axios";
const Watches = ()=>{
    const [watches,setWatches] = useState([]);
    const get_watches = async ()=>{
        const res = await axios.get("http://localhost:8002/Watches");
        const {data} = res;
        setWatches(data);
    }
    useEffect(()=>{
        get_watches();
    },[]);
    
    return(
        <>
        <h1>Available Watches</h1>
            <div className="parent">
                {watches.map((element,index)=>{
                    return(
                        <div className="child">
                            <img src={element.image}></img>
                            <h2><i className="fa fa-ruppee"></i> {element.cost}</h2>
                            <p>Qty: {element.qyt}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Watches;
