import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from "three"

    const Scene = () => {
        let tex = useTexture("image.png")
        let cyl = useRef(null)
        const rotationSpeed = 0.2;
        useFrame ((state,delta) => {
            cyl.current.rotation.y += delta * rotationSpeed;
        })
        return (
            <>
            
            
            <mesh ref={cyl} rotation={[0,0,0]}>
                <cylinderGeometry args={[1,1,1, 60,60,true]}/>
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
              </mesh>
            </>
          )
    }

export default Scene