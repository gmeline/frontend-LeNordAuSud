import React,{ useEffect,useState }from "react";
import axios from "axios";

function Menu(){
    const [menuItems, setMenuItems] =useState([]);

    useEffect(()=>{
        axios
            .get("http://localhost:5000/menu")
            .then((response)=>setMenuItems(response.data))
            .catch((error)=>console.error(error));
    },[]);
    
    return (
        <div style={{ padding: "20px", backgroundColor: "#F5F5DC" }}>
          <h2 style={{ color: "#333" }}>Notre Menu</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                style={{
                  background: "#FFD700",
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>{item.price}€</strong>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default Menu;