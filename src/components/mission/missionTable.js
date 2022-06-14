import React, { useEffect } from 'react';
import MissionCard from './MissionCard'
import '../../scss/MissionTable.scss';

const MissionTable = () => {
  
  return (
    <div className='rocketList'>
      <MissionCard />
    </div>
  );
};

export default MissionTable;