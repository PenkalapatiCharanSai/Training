import { useEffect, useState } from "react";
import "./Laptops.css";
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
        <h2>Available Mobiles</h2>
            <div className="parent">
                {mobiles.map((element,index)=>{
                    return(
                        <div className="child">
                            <h2>{element.name}</h2>
                            <img src={element.image_url}></img>
                            <h2>&#8377;  {element.cost}</h2>
                            <p>Qty: {element.qty}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Mobiles;
