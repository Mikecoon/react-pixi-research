import React from 'react';
import { Text } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'

const TitleComponent = ({ text, x, y }) => {

  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: '#1071d4', // gradient
    stroke: '#000000',
    align: 'center',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 800
  })

  return <Text x={x} y={y} style={style} text={text} anchor={[0.5, 0.5]}/>
}


export default TitleComponent;
