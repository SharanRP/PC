import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './components/Main';
import "./index.css";
import Nav from './components/NavigationBar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#EDEDED',
    },
    secondary: {
      main: '#000',
    },
    tertiary: {
      custom: '#000',
    }
  },
  typography: {
    fontFamily: ["'Inter'", 'sans-serif'].join(',')
  }
});

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  },)

  return (
    <div className="App ">
      <Particles options={particlesOptions} init={particlesInit}  />
      <ThemeProvider theme={theme}>
       
          <Nav/>
              <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl'>
                <span className='font text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl'>
                  VJTI Pointer Calculator
                </span> 
              </h1>
              <div className='app-wrapper'>
                <Main />
              </div>
            
         
      </ThemeProvider>
    </div>
  );
}

export default App;
