import React from "react";
import "./App.css";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import Watches from "./components/Watches";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Master from "./components/Master";
function App() {
  return (
    <div className="app">
      <h1>Welcome to the Store</h1>
     
      <Master/>
    </div>
  );
}

export default App;


