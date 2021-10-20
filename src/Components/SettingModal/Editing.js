import React from 'react'

const Editing = (props) => {
  return (
    <div>
       <div className={`${props.toggleTab === 3 ? "d-block" : "d-none"}`}>
          Editing here
        </div>
    </div>
  )
}

export default Editing
