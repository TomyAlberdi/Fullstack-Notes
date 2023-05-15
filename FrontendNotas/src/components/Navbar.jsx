import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ User, setUser }) => {
  const navigate = useNavigate();

  const [OpenMenuDesktop, setOpenMenuDesktop] = useState(false);

  const [OpenMenuMobile, setOpenMenuMobile] = useState(false);

  const openMenu = () => {
    setOpenMenuMobile(!OpenMenuMobile);
    document.body.classList.toggle("no-scroll");
  };

  const LogOut = () => {
    setUser(null);
    navigate("/Login");
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenMenuDesktop(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <header>
        <nav>
          {!User ? (
            <>
              <Link to={"/Login"}>Login</Link>
              <Link to={"/Register"}>Register</Link>
            </>
          ) : (
            <>
              <div
                className="userInfo"
                onClick={() => setOpenMenuDesktop(!OpenMenuDesktop)}
                ref={wrapperRef}
              >
                <div className="userIcon">
                  {User.username.charAt(0).toUpperCase()}
                </div>
                <i
                  className={
                    "fa-solid " +
                    (OpenMenuDesktop ? "fa-xmark" : "fa-caret-down")
                  }
                ></i>
                <div
                  className={"DesktopMenu " + (OpenMenuDesktop ? " open" : "")}
                >
                  <section
                    className="MenuItem"
                    onClick={() => {
                      navigate("/Home");
                      setOpenMenuDesktop(false);
                    }}
                  >
                    <h4>
                      Home<i className="fa-solid fa-house"></i>
                    </h4>
                  </section>
                  <section
                    className="MenuItem"
                    onClick={() => {
                      navigate("/Profile");
                      setOpenMenuDesktop(false);
                    }}
                  >
                    <h4>
                      Profile <i className="fa-solid fa-user"></i>
                    </h4>
                  </section>
                  <section
                    className="MenuItem"
                    onClick={() => {
                      LogOut();
                      setOpenMenuDesktop(false);
                    }}
                  >
                    <h4>
                      Log Out<i className="fa-solid fa-right-from-bracket"></i>
                    </h4>
                  </section>
                </div>
              </div>
            </>
          )}
        </nav>
        <div className="mobileMenuButton" onClick={openMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="imgLogo">
          <Link to={!!User ? "/Home" : "/"}>
            <img src="/favicon.ico" />
          </Link>
        </div>
      </header>
      <section className={"mobileMenu " + (OpenMenuMobile ? "open" : "")}>
        <section className="mobileMenuHeader">
          <div className="mobileMenuClose" onClick={openMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          {!!User ? (
            <div className="userInfo">
              <div>
                <div className="userIcon">
                  {User.username.charAt(0).toUpperCase()}
                </div>
                <h3>{User.username}</h3>
              </div>
            </div>
          ) : (
            <div className="userInfo">
              <h2>MENU</h2>
            </div>
          )}
        </section>
        <section className="mobileMenuContent">
          <section className="mobileMenuActions">
            {!User ? (
              <>
                <Link to={"/Login"} onClick={openMenu}>
                  Login
                </Link>
                <Link to={"/Register"} onClick={openMenu}>
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to={"/Home"} onClick={openMenu}>
                  Home
                </Link>
                <Link to={"/Profile"} onClick={openMenu}>
                  Profile
                </Link>
              </>
            )}
          </section>
          <section className="mobileMenuFooter">
            {!!User ? (
              <h4
                onClick={() => {
                  LogOut();
                  openMenu();
                }}
              >
                Log Out
              </h4>
            ) : (
              <></>
            )}
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
  );
};

export default Navbar;
