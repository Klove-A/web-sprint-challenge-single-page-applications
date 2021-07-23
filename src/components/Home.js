import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="pizza-link">
            <Link to="/pizzaform" style={{textDecoration: "none", color: "#4F4F4F"}}>Pizza</Link>
        </div>
    )
}