import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <nav>
            <h1 className="navbar-brand">Brand Name</h1>

            <div className="navbarCollapse">
                <ul className='ul'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div >
                <input type="text" className="search" placeholder="Search here..." />
            </div>

            <div className="authorization">
                <div className="login">
                    <Link to="/login" className='link'>Login</Link>
                </div>
                <div className="signUp">
                    <Link to="/register" className='link'>Register</Link>
                </div>
            </div>

        </nav>

    )
}

export default Home