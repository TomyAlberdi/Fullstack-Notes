import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const openMenu = () => {
        let menu = document.querySelector(".mobileMenu")
        menu.classList.toggle('open')
    }

    return (
        <>
            <header>
                <nav>
                    <Link to={"/Login"}>Login</Link>
                    <Link to={"/Register"}>Register</Link>
                </nav>
                <div className="mobileMenuButton" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="imgLogo">
                    <Link to={"/Home"}><img src="/favicon.ico" /></Link>
                </div>
            </header>
            <section className="mobileMenu">
                <section className="mobileMenuHeader">
                    <div className="mobileMenuClose" onClick={openMenu}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="userInfo">
                        <div className="userIcon">icon</div>
                        <h3 className="userName">Profile</h3>
                    </div>
                </section>
                <section className="mobileMenuContent">
                    <h2>content</h2>
                </section>
            </section>
        </>
    )
}

export default Navbar