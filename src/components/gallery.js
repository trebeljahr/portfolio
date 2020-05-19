import React, { useState } from "react"
import Img from "gatsby-image"
import "../css/gallery.css"
import { useEffect } from "react"

const Gallery = ({ collapse, next, previous, index, max, imageData }) => {
  useEffect(() => {
    document.removeEventListener("keydown", handleKey)
    document.removeEventListener("touchstart", touchstart)
    document.removeEventListener("touchend", touchend)
    return () => {
      document.addEventListener("keydown", handleKey)
      document.addEventListener("touchstart", touchstart)
      document.addEventListener("touchend", touchend)
    }
  }, [])

  const [x, setX] = useState(0)
  const touchstart = e => {
    setX(e.targetTouches[0].clientX)
  }
  const touchend = e => {
    if (e.changedTouches[0].clientX - x > 60) {
      previous()
    } else if (e.changedTouches[0].clientX - x < -60) {
      next()
    }
    setX(0)
  }
  const handleCollapse = () => {
    collapse()
  }

  const handleKey = e => {
    if (e.key === "Escape") {
      handleCollapse()
    }
    if (e.key === "ArrowRight" || e.key === "d") {
      next()
    }
    if (e.key === "ArrowLeft" || e.key === "a") {
      previous()
    }
  }
  return (
    <div className="slideshow-container">
      <div className="collapse-button-container">
        <i onClick={handleCollapse} className="fas fa-times"></i>
      </div>
      <div className={`gallery-button ${index === 0 ? " invisible" : ""}`}>
        <i onClick={previous} className="fas fa-angle-double-left"></i>
      </div>
      <Img
        className="gallery-image"
        imgStyle={{
          objectFit: "contain",
          margin: 0,
          padding: 0,
        }}
        fluid={imageData}
      />
      <div className={`gallery-button ${index === max ? " invisible" : ""}`}>
        <i onClick={next} className="fas fa-angle-double-right"></i>
      </div>
    </div>
  )
}

export default Gallery
