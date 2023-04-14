import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = ({User,setUser}) => {

    const navigate = useNavigate()

    const [OpenMenuDesktop, setOpenMenuDesktop] = useState(false)

    const [OpenMenuMobile, setOpenMenuMobile] = useState(false)

    const openMenu = () => {
        setOpenMenuMobile(!OpenMenuMobile)
        document.body.classList.toggle('no-scroll')
    }

    const LogOut = () => {
        setUser(null) 
        navigate("/Login")
    }

    return (
        <>
            <header>
                <nav>
                    {
                        !User ?
                            <>
                                <Link to={"/Login"}>Login</Link>
                                <Link to={"/Register"}>Register</Link>
                            </>
                        :
                            <> 
                                <div className="userInfo" onClick={() => setOpenMenuDesktop(!OpenMenuDesktop)}>
                                    <div className="userIcon">{User.username.charAt(0).toUpperCase()}</div>
                                    <h3>{User.username}</h3>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <div className={"DesktopMenu " + (OpenMenuDesktop ? " open" : "")}>
                                    <section className="MenuItem">
                                        <h4>menuitem</h4>
                                    </section>
                                    <section className="MenuItem">
                                        <h4>menuitem</h4>
                                    </section>
                                    <section className="MenuItem" onClick={() => {LogOut();setOpenMenuDesktop(false)}}>
                                        <h4>Log Out</h4>
                                    </section>
                                </div>
                            </>
                    }
                </nav>
                <div className="mobileMenuButton" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="imgLogo">
                    <Link to={"/Home"}><img src="/favicon.ico" /></Link>
                </div>
            </header>
            <section className={"mobileMenu " + (OpenMenuMobile ? "open" : "")}>
                <section className="mobileMenuHeader">
                    <div className="mobileMenuClose" onClick={openMenu}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    {
                        !!User ? 
                            <div className="userInfo">
                                <div>
                                    <div className="userIcon">{User.username.charAt(0).toUpperCase()}</div>
                                    <h3>{User.username}</h3>
                                </div>
                            </div>
                        : 
                            <div className='userInfo'>
                                <h2>MENU</h2>
                            </div>
                    }
                </section>
                <section className="mobileMenuContent">
                    <section className="mobileMenuActions">
                        {
                            !User ?
                                <>
                                    <Link to={"/Login"} onClick={openMenu}>Login</Link>
                                    <Link to={"/Register"} onClick={openMenu}>Register</Link>
                                </>
                            :
                                <>
                                    <h2>actions available to users</h2>
                                </>
                        }
                    </section>
                    <section className="mobileMenuFooter">
                        {
                            !!User ?
                                <h4 onClick={() => {
                                    LogOut();
                                    openMenu();
                                }}>Log Out</h4>
                            : <></>
                        }
                        <div className="socialMedia">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Navbar