import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <h2>intro</h2>
      </section>
      <section className="demostration">
        <h2>demostrac</h2>
      </section>
    </section>
  );
};

export default Welcome;
