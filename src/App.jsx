import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import "./style.css"
import Scene from './Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const App = () => {
  return (
    <>

    <div className='heading'>
      <h1>Happy Ganesh Chaturthi</h1>
    </div>

    <Canvas camera={{fov:25}}>
      <OrbitControls enableZoom={false}/>
      <ambientLight/>
      <Scene/>
      {/* <EffectComposer>
        <Bloom
         mipmapblur 
        intensity={4.0}
        luminanceThreshold={0.50}
        luminanceSmoothing={0}
        />
        <ToneMapping adaptive/>
          
      </EffectComposer> */}
    </Canvas>
    </>
  )
}

export default App