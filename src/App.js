import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import { FetchRockets } from './redux/rocket/rocketSlice';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
   
  // fetch api data
  useEffect(() => {
    dispatch(FetchRockets())
  }, [])
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="mission" element={<Mission />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;