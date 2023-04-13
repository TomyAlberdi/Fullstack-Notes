import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to={"/Login"}>Login</Link>
                    <Link to={"/Register"}>Register</Link>
                </nav>
                <div className="imgLogo">
                    <Link to={"/Home"}><img src="/favicon.ico" /></Link>
                </div>
            </header>
        </>
    )
}

export default Navbar