import React from 'react'

const DownloadApp = (props) => {
  return (
    <div>
      <div className={`${props.toggleTab === 4 ? "d-block" : "d-none"}`}>
          App download
        </div>
    </div>
  )
}

export default DownloadApp
