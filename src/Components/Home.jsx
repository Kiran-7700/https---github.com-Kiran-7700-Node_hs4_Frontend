import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <nav>
            <a className="navbar-brand"><h3>Brand Name</h3></a>

            <div className="navbarCollapse">
                <a>Home</a>
                <a>About</a>
                <a>Services</a>
                <a>Blog</a>
                <a>Contact</a>
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