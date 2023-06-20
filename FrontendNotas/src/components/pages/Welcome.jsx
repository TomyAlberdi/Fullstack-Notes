import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import FlipCard from "../utils/FlipCard";
import Images from "../utils/FlipCardsImages.json";

const Welcome = ({ User }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (User) {
      navigate("/Home");
    }
  }, []);

  return (
    <section className="Welcome">
      <section className="introduction">
        <div className="topBubble">
          <h1>Notes App</h1>
        </div>
        <p>Never lose track of <span>anything</span> again.</p>
        <i className="fa-duotone fa-notes"></i>
        <div className="bottomBubble">
          <h3>
            <Link to={"/Register"}>Sign up</Link> or <Link to={"/Login"}>Log In</Link>
          </h3>
        </div>
      </section>
      <section className="demostration">
        {
          Images.map((e,i) => 
            <FlipCard i={i+1} key={i} data={e}/>
          )
        }
      </section>
    </section>
  );
};

export default Welcome;
