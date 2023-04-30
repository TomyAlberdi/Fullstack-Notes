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
      <h2>Welcome page</h2>
    </section>
  );
};

export default Welcome;
