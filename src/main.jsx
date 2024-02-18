import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoomProvider from './context/RoomContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ScreenSizeProvider } from './context/ScreenSizeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScreenSizeProvider>
    <RoomProvider>
      <ParallaxProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ParallaxProvider>
    </RoomProvider>
  </ScreenSizeProvider>
);