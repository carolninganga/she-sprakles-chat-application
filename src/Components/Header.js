import React from 'react';
import 'Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header-login-signu">
            <div className="header-limiter">
                <h1><a href="/">Coding<span></span></a></h1>
                <nav>
                    <Link to='/'> Home</Link>
                    <a href className="selected"><Link to="/">About App></Link></a>
                    <a href><Link to="/">Contact Us</Link></a>
                </nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </header>
    )
}


export default Header;