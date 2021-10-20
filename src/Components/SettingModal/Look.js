import React from 'react'

const About = (props) => {
  return (
    <div>
      <div className={`${props.toggleTab === 2 ? "d-block" : "d-none"}`}>
          Look 
        </div>
    </div>
  )
}

export default About
