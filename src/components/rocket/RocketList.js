import RocketCard from './RocketCard';
import '../../scss/RocketList.scss';

import { useSelector } from 'react-redux';
const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
 
  const data = rockets.map(rocket => <RocketCard key={rocket.rocket_id} rocket={rocket}/>)
  return (
    <div className='rocketList'>
      {data}
    </div>
  );
};

export default Rockets;