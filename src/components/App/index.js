import React from 'react';
import AvatarCanvas from '../AvatarCanvas';
import AvatarComponentSelector from '../AvatarComponentSelector'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="App-Header"></div>
      
      <div className="Avatar-Canvas">
        <AvatarCanvas/>
      </div>
      
      <div className="App-Selectors">
        <AvatarComponentSelector/>
      </div>
    </div>
  );
};