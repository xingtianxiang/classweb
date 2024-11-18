import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <nav
            className="navbar navbar-expand-lg d-flex justify-content-between align-items-center"
        >
            <div className="container d-flex align-items-center">
                <Link className="navbar-brand text-light" to="/" style={{ fontSize: '1.2rem' }}>
                    COMP051
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contents">
                                Contents
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/resources">
                                Resources
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
