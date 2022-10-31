import React from 'react'
import RetroImage from  '../../images/image-retro-pcs.jpg'
import './RowPost.css'

function RowPost(props) {
  return (
    <div className='rowPost'>
      <div className="postImage">
        <img src={props.img} alt="" />
      </div>
      <div className="descSec">
        <div className="descTitle">
            <h2>{props.heading}</h2>
        </div>
        <div className="descPara">
            <h5>{props.title}</h5>
            <p>{props.para}</p>
        </div>
      </div>
    </div>
  )
}

export default RowPost
