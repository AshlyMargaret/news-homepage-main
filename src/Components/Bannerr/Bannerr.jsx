import React from 'react'
import NewPost from '../NewPost/NewPost'
import './Bannerr.css'

function Bannerr() {
  return (
    <div className='banner'>
       <div className="leftSide">

        <div className="bannerImage"></div>
        <div className="bannerLeftBottom">
        <div className="leftBottom">
          <h1> The Bright Future of Web 3.0? </h1>
        </div>
        <div className="rightBottom">
         <div className="rightBottom_ParagraphText">
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
         </div>
         <div className="rightBottonButton">
            <button>Read more</button>
         </div>
        </div>
        </div>
       
       </div>
       <div className="rightside">
         <div className="newTitle">
            <h1>New</h1>
         </div>
         <div className="newpostSec">
          <NewPost title="Hydrogen VS Electric Cars" para="Will hydrogen-fueled cars ever catch up to EVs?"/>
          <NewPost title="The Downsides of AI Artistry" para="What are the possible adverse effects of on-demand AI image generation?"/>
          <NewPost title="Is VC Funding Drying Up?" para=" Private funding by VC firms is down 50% YOY. We take a look at what that means.
"/>
         </div>
       </div>
    </div>
  )
}

export default Bannerr