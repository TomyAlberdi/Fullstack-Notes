import React, { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";

const FlipCard = ({data}) => {
  const [flipped, set] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {

    let timer1;
    let timer2;

    timer1 = setTimeout(() => {
      set(false)
    }, data.delay);

    timer2 = setTimeout(() => {
      set(true)
    }, data.delay + 2000);

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [data.delay])
  

  return (
    <div
      className={"FlipCard div" + data.i}
      onClick={() => set((state) => !state)}
    >
      <a.div
        className="side back"
        style={{ 
          opacity: opacity.to((o) => 1 - o), transform,
          backgroundImage: `url(${data.imageBack})`
        }}
      />
      <a.div
        className="side front"
        style={{
          opacity,
          transform,
          rotateX: "180deg",
          backgroundImage: `url(${data.imageFront})`
        }}
      />
    </div>
  );
};

export default FlipCard;
