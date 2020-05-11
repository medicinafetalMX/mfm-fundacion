import React from "react"

const VideoFrame = props => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "2em auto",
      }}
    >
      <iframe
        width="560"
        height="315"
        src={props.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  )
}

export default VideoFrame
