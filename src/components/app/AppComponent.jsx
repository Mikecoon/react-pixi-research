import React from 'react';
import { Stage } from '@inlet/react-pixi'
import LogoComponent from "../logo/LogoComponent";
import TitleComponent from "../title/TitleComponent";
import './styles.scss'

function AppComponent() {

  const stageOptions = {
    transparent: true,
    antialias:true,
    width: 800,
    height: 600
  };

  return (
    <div className="App">
      <Stage options={stageOptions}>
        <TitleComponent x={800 / 2} y={100} text={"Wow hover the logo, dude"}/>
        <LogoComponent x={800 / 2 } y={600 / 2 }/>
      </Stage>
    </div>
  );
}

export default AppComponent;
