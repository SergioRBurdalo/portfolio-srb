"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const AnimationText = ({mename,txt1,txt2,txt3}) => {

  return (
    <TypeAnimation
        sequence={[
            mename,
            2000, 
            txt1,
            1000,
            txt2,
            1000,
            txt3,
            1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '.8em', display: 'inline-block' }}
        repeat={Infinity}
        />
  )
}

export default AnimationText