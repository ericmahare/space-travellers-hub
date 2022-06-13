import React from 'react';
import RocketCard from './RocketCard';
import '../../scss/RocketList.scss';
import rocketImg from '../../images/rocket.jpg';
const Rockets = () => {
  const rockets = [
    {
      rocket_id:1,
      rocket_name:'Rocket 1',
      rocket_img: rocketImg,
      rocket_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus vel tortor non volutpat. Proin at nisl dictum, fermentum enim id, porttitor nisl. Aenean euismod nulla ac nibh dictum hendrerit. Pellentesque ultrices nisl sit amet libero consectetur, vitae facilisis turpis varius. Praesent ac efficitur augue.',
      reserved: false
    },
    {
      rocket_id:2,
      rocket_name:'Rocket 2',
      rocket_img: rocketImg,
      rocket_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus vel tortor non volutpat. Proin at nisl dictum, fermentum enim id, porttitor nisl. Aenean euismod nulla ac nibh dictum hendrerit. Pellentesque ultrices nisl sit amet libero consectetur, vitae facilisis turpis varius. Praesent ac efficitur augue.',
      reserved: false
    }
  ]

  const data = rockets.map(rocket => <RocketCard key={rocket.rocket_id} rocket={rocket}/>)
  return (
    <div className='rocketList'>
      {data}
    </div>
  );
};

export default Rockets;