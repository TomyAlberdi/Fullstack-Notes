import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

const FlipCard = ({i}) => {

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div className={"FlipCard div"+i} onClick={() => set(state => !state)}>
      <a.div
        className="side back"
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
      </a.div>
      <a.div
        className="side front"
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
      </a.div>
    </div>
  )
}

export default FlipCard