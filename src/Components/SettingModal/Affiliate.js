import React from 'react'

const Affiliate = (props) => {
  return (
    <div>
      <div className={`${props.toggleTab === 5 ? "d-block" : "d-none"}`}>
          Affiliate div
        </div>
    </div>
  )
}

export default Affiliate
