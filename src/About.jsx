import React from 'react'
import AboutImg1 from "./images/img1.svg"
import AboutImg2 from "./images/img2.svg"
import AboutBtn from "./images/button1.png"
import Icon from "./images/icon.png"
import BhLogo from "./images/text1.svg"
import Ellipse from "./images/Ellipse.svg"
import Vector from "./images/Vector 6.svg"
import Vector1 from "./images/Vector 14.svg"
import "./About.css"

const About = () => {
  return (
    <div className='overflow-x-clip'>
      <div id="aboutContainer">
    <div className='aboutContainer'>
      <div className="imgSideSection">
        <div className='imgContainer p-10'>
        <img className= "ici" alt='AboutImg' src={AboutImg1}/>
        </div>
        <img class="ellipse" alt="line" src={Ellipse} />


    <div className='AboutContent'>
      <div className='AboutText'>
        <h1 className='text-8xl'><span>ABOUT</span>
        <br />US</h1>
        </div>
        <div className='About-Text'>
        <h2 className='text-3xl pt-20 pb-12'>High Quality</h2>
          <p>The five-star Bank Hotel was reopened to visitors 
          in 2016. The building was renovated and 
          modernized to meet the expectations of the most
          demanding guests. We offer luxurious rooms, 
          numerous facilities, and exceptional service. 
          </p>
        </div>
      </div>
  </div>
    
    
      <div className='SideSection'>
      <img className='Vector' alt="Line" src={Vector1} />
      <img className="vectorLine" alt='Line' src={Vector} />
        <div className='sideImg'>
          <img alt="sideImage" src={AboutImg2}/>
        </div>
        <div className='IconImg'>
          <img alt="Icon" src={Icon} />
        </div>
        <div className="BhLogo">
          <img alt="logo" src={BhLogo} />
        </div>
        <div className='about-btn'>
            <img alt="about button" src ={AboutBtn} />
        </div>
    </div>
    </div>
      
    </div>
    </div>

  )
}

export default About
