import {Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path="/profile"
              element={<Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />}
            />

            <Route path="/dialogs/*"
              element={<Dialogs
                store={props.store}
                dispatch={props.dispatch}
              />}
            />

            <Route path="/news" element={<News />} />

            <Route path="/music" element={<Music />} />

            <Route path="/settings" element={<Settings />} />

          </Routes>
        </div>
      </div>
  );
}

export default App;
