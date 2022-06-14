import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissions, toggleMission } from '../../redux/mission/missionSlice';
import '../../scss/MissionCard.scss';
import styles from './MissionCard.module.css';

let fetched = false;

function MissionCard() {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(FetchMissions());
      fetched = true;
    }
  }, []);

  return (
    <table className='missionCard'>
      <tbody>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th> </th>
      </tr>
      {missionsState.map(
        ({
          mission_name: missionName,
          mission_id,
          description,
          reserved,
        }) => (
          <tr key={mission_id}>
            <td className='missionName'>{missionName}</td>
            <td>{description}</td>
            <td className='status'>
              <p
                className={styles.missionReserved}
              >
                ACTIVE MEMBER
              </p>
            </td>
            <td key={mission_id} className='status'>
              <button
                className={styles.leave}
              >Leave Mission
              </button>
            </td>
          </tr>
        ),
      )}
    </tbody>
    </table>
  );
}

export default MissionCard;