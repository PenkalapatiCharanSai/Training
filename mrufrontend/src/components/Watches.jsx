

import { useEffect, useState } from "react";
import "./Laptops.css";
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
        <h2>Available Watches</h2>
            <div className="parent">
                {watches.map((element,index)=>{
                    return(
                        <div className="child">
                            <h2>{element.watch1}</h2>
                            <img src={element.image}></img>
                            <h2>&#8377;  {element.cost}</h2>
                            <p>Qty: {element.qyt}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Watches;
