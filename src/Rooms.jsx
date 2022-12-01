import React from 'react'
import "./Rooms.css"
import Room1 from "./images/img3.svg"
import Room2 from "./images/img4.svg"
import Star8 from "./images/Star 8.png"
import BookRoom from "./images/button2.svg"
import RoomDir from "./images/buttonDir.svg"

const Rooms = () => {
  return (
    <div>
      <div className='RoomContainer'>
          <div className='RoomsIntro'>
              <div className='intro1'>
              <h1 className='text-8xl font-semi-bold'>
                ROOMS <br />
                & APARTMENTS
              </h1>
              </div>
              <div className='intro2'>
              <h1 className='uppercase'>
              All room decoration was made
              with ecological certified and 
              safe materials.
              </h1>
              </div>
          </div>

          <div className='RoomsImgContainer'>

              <div className='img1'>
              <img alt='Room' src={Room1} />
              </div>

              <div className='Room-Content'>
                    <div>
                      <button className="Star-btn mb-20">
                        <img className="mx-5" alt="Star-Icon" src={Star8} /> Since 1973
                      </button>
                      <div className='content'>
                        <h1 className='mb-10 mt-40 text-2xl'>Superior Twin</h1>
                        <p>
                        The Superior twin is perfect for those 
                        who plan to stay long. The spacious and 
                        bright room is equipped with deluxe 
                        Italian furniture and has a beautiful view 
                        to the historical part of the city. Stylish
                        interior design and comfortable beds will 
                        make your stay cozy and pleasant.
                        </p>
                      </div>
                    </div>
              </div> 

                <div className='img2'>
                  <img alt ="Room" src={Room2} />
                </div>

                <div className='BookRoom'>
                    <img alt="BookRoom" src={BookRoom} />
                </div>

          </div>
          <img className="Btn-Dir" alt='RoomDirection' src={RoomDir} />
      </div>
    </div>
  )
}

export default Rooms
