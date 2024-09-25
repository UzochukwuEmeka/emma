import React from 'react'
import './Circle.css'
import Tilt from 'react-parallax-tilt'

const Circle = ({ img }) => {
  return (
    <Tilt
      className="circle parallax-effect"
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      perspective={500}
    >
      <img src={img} alt="img" className="img-fluid" />
    </Tilt>
  )
}

export default Circle
