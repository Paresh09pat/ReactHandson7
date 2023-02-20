import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="list">
                    <li className="item">
                        <Link className="link" aria-current="page" to="/Home">Home</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/Students">All Scenarios</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/AddScenario"> Add Scenario </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/AddVehicle"> Add Vehicle </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar