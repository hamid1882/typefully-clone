import React from 'react'

const About = (props) => {
  return (
    <div>
      <div className={`${props.toggleTab === 6 ? "d-block" : "d-none"}`}>
          About
        </div>
    </div>
  )
}

export default About
