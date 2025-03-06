import { useEffect, useState } from "react";
import "./Mobiles.css";
import axios from "axios";
const Mobiles = ()=>{
    const [mobiles,setMobiles] = useState([]);
    const get_mobiles = async ()=>{
        const res = await axios.get("http://localhost:8002/Mobiles");
        const {data} = res;
        setMobiles(data);
    }
    useEffect(()=>{
        get_mobiles();
    },[]);
    
    return(
        <>
        <h1>Available Mobiles</h1>
            <div className="parent">
                {mobiles.map((element,index)=>{
                    return(
                        <div className="child">
                            
                            <img src={element.image_url}></img>
                            <h2><i className="fa fa-ruppee"></i> {element.cost}</h2>
                            <p>Qty: {element.qty}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Mobiles;
