import React from 'react'
import './NewPost.css'

function NewPost(props) {
  return (
    <div className='newPost'>
       <div className="newPostTitle">
        <h4>{props.title}</h4>
       </div>
       <div className="newPostPara">
        <p>{props.para}</p>
       </div>
    </div>
  )
}

export default NewPost
