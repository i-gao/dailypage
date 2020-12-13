import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav id="nav">
            <ul>
                <li>dailypage</li>
                <li><Link to="/write" className="navlink">Write</Link></li>
                <li><Link to="/read" className="navlink">Read</Link></li>
            </ul>
        </nav>
    )
}
