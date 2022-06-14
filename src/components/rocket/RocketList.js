import React, { useEffect } from 'react';
import RocketCard from './RocketCard';
import '../../scss/RocketList.scss';
import rocketImg from '../../images/rocket.jpg';
import { FetchRockets } from '../../redux/rocket/rocketSlice';
import { useDispatch, useSelector } from 'react-redux';
const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  
  // fetch api data
  useEffect(() => {
    dispatch(FetchRockets())
  }, [])
  
  const data = rockets.map(rocket => <RocketCard key={rocket.rocket_id} rocket={rocket}/>)
  return (
    <div className='rocketList'>
      {data}
    </div>
  );
};

export default Rockets;