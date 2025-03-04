import axios from "axios";
import { useEffect, useState } from "react";
import "./Laptops.css";

const Laptops = () => {
    const [laptops, setLaptops] = useState([]);

    const getLaptops = async () => {
        try {
            const res = await axios.get("http://localhost:8000/Laptops");
            setLaptops(res.data);
        } catch (error) {
            console.error("Error fetching laptops:", error);
        }
    };

    useEffect(() => {
        getLaptops();
    }, []);

    return (
        <div className="laptops-container">
            <h2 className="laptops-title">Available Laptops</h2>
            <div className="laptop-list">
                {laptops.map((laptop) => (
                    <div key={laptop.id} className="laptop-card">
                        <img src={laptop.pimage} alt={laptop.pname} className="laptop-image" />
                        <div className="laptop-info">
                            <p className="laptop-name">{laptop.pname}</p>
                            <p className="laptop-price">Price: ${laptop.pcost}</p>
                            <p className="laptop-quantity">Quantity: {laptop.qty}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Laptops;
