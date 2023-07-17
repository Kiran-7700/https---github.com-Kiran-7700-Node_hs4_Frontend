import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <nav>
            <a className="navbar-brand" href='#'><h3>Brand Name</h3></a>

            <div className="navbarCollapse">
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Services</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact</a>
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
         
