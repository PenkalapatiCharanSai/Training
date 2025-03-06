// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./Laptops.css";

// const Laptops = () => {
//     const [laptops, setLaptops] = useState([]);

//     const getLaptops = async () => {
//         try {
//             const res = await axios.get("http://localhost:8000/Laptops");
//             setLaptops(res.data);
//         } catch (error) {
//             console.error("Error fetching laptops:", error);
//         }
//     };

//     useEffect(() => {
//         getLaptops();
//     }, []);

//     return (
//         <div className="laptops-container">
//             <h2 className="laptops-title">Available Laptops</h2>
//             <div className="laptop-list">
//                 {laptops.map((laptop) => (
//                     <div key={laptop.id} className="laptop-card">
//                         <img src={laptop.pimage} alt={laptop.pname} className="laptop-image" />
//                         <div className="laptop-info">
//                             <p className="laptop-name">{laptop.pname}</p>
//                             <p className="laptop-price">Price: ${laptop.pcost}</p>
//                             <p className="laptop-quantity">Quantity: {laptop.qty}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Laptops;

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
        <h1>Available Laptops</h1>
            <div className="parent">
                {laptops.map((element,index)=>{
                    return(
                        <div className="child">
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
