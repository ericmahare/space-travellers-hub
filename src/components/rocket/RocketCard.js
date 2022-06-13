import React from 'react';
import '../../scss/RocketCard.scss'
function RocketCard({ rocket }) {
  const {rocket_id, rocket_description, rocket_name, rocket_img, reserved}  = rocket
  return(
    <section>
      <div className='rocketCard d-flex'>
        <div className='rocketImage'>
          <img src={rocket_img} alt ={rocket.rocket_name} className='rocketImage'/>
        </div>

        <div className='rocketInfo d-flex'>
          <span className='rocketTitle'>{rocket_name}</span>
          <p className='rocketDetail'>
            {rocket_description}
          </p>
            <button 
              onClick={() => rocketBooking(rocket_id)}
              type='button'
              className='rocket-btn'
          >
            Reserve Rocket
          </button>
        </div>

      </div>
    </section>
  )
}

export default RocketCard;