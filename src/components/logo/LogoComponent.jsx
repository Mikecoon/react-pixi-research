import React from 'react';
import { Sprite, withPixiApp } from '@inlet/react-pixi'
import math from '../../services/math-helper'

class LogoComponent extends React.Component {

  state = {
    rotation: 0,
    scale: 1,
    hover: false,
  }

  constructor(props) {
    super(props);
    this.pointerOver = this.pointerOver.bind(this)
    this.pointerOut = this.pointerOut.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.app.ticker.add(this.tick)
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick)
  }

  tick = delta => {
    this.setState(({ rotation, scale, hover }) => ({
      rotation: rotation + 0.01 * delta,
      scale: math.lerp(scale, hover ? 1.5 : 1, delta * 0.1),
    }))
  }

  pointerOver(event){
   this.setState({ hover: true })
  }

  pointerOut (event) {
    this.setState({ hover: false })
  }

  render() {
    const { x, y } = this.props
    const { rotation, scale } = this.state

    return <Sprite
      image="./logo192.png"
      scale={[scale, scale]}
      rotation={rotation}
      x={x}
      y={y}
      anchor={[0.5, 0.5]}
      pointerover={this.pointerOver}
      pointerout={this.pointerOut}
      interactive={true}

    />
  }
}

export default withPixiApp(LogoComponent);
