import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import FlipCard from "../utils/FlipCard";

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
        <p><span>Create</span>, <span>search</span>, <span>edit</span>, and <span>delete</span> notes with ease, and never lose track of <span>anything</span> again.</p>
        <div className="bottomBubble">
          <h3>
            <Link to={"/Register"}>Sign up</Link> or <Link to={"/Login"}>Log In</Link>
          </h3>
        </div>
      </section>
      <section className="demostration">
        {
          [...Array(4)].map((x,i) => 
            <FlipCard i={i} key={i} />
          )
        }
      </section>
    </section>
  );
};

export default Welcome;
