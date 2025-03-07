import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";
const Laptops = ()=>{
    const [laptops,setLaptops] = useState([]);
    const get_laptops = async ()=>{
        const res = await axios.get("http://localhost:8002/Laptops");
        const {data} = res;
        setLaptops(data);
    }
    useEffect(()=>{
        get_laptops();
    },[]);
    
    return(
        <>
        <h2>Available Laptops</h2>
            <div className="parent">
                {laptops.map((element,index)=>{
                    return(
                        <div className="child">
                            <h2>{element.pname}</h2>
                            <img src={element.pimage}></img>
                            <h2><i className="fa fa-ruppee"></i> ${element.pcost}</h2>
                            <p>Qty: {element.qty}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Laptops;
