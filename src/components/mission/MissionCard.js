import React from 'react';
import '../../scss/MissionCard.scss';
import styles from './MissionCard.module.css';

function MissionCard({ mission }) {

  return (
    <table className='missionCard'>
    <tbody>
    <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th> </th>
    </tr>
    
    <tr>
        <td className='missionName'>Thaicom</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus vel tortor non volutpat. Proin at nisl dictum, fermentum enim id, porttitor nisl. Aenean euismod nulla ac nibh dictum hendrerit. Pellentesque ultrices nisl sit amet libero consectetur, vitae facilisis turpis varius. Praesent ac efficitur augue.</td>
        <td className='status'>
        <p className=''> NOT A MEMBER </p>
        </td>
        <td className='status'>
        <button> Join Mission </button>
        </td>
    </tr>

    <tr>
        <td className='missionName'>Iridium NEXT</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus vel tortor non volutpat. Proin at nisl dictum, fermentum enim id, porttitor nisl. Aenean euismod nulla ac nibh dictum hendrerit. Pellentesque ultrices nisl sit amet libero consectetur, vitae facilisis turpis varius. Praesent ac efficitur augue.</td>
        <td className='status'>
        <p className=''> ACTIVE MEMBER </p>
        </td>
        <td className='status'>
        <button> Leave Mission </button>
        </td>
    </tr>
    </tbody>
    </table>
  );
}

export default MissionCard;