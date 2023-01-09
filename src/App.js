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



function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path="/profile"
              element={<Profile
                state={props.state.profilePage}
              />}
            />

            <Route path="/dialogs/*"
              element={<Dialogs
                state={props.state.dialogsPage}
                addPost={props.addPost}
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
