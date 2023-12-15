import React from 'react'
import ReactStars from "react-rating-stars-component";

function Star({star}) {
  return (
     <ReactStars
          count={5}
          value={star}
          size={24}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
     />
  )
}

export default Star