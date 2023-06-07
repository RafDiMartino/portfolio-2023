'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Stats, Center, OrbitControls, Text3D } from '@react-three/drei'
import { Text3JS } from './Text3JS'


export const Hero3D = () => {



    return (

        <>
            <Canvas
                // orthographic
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 100,
                    // position: [ 4, 3, 6]
                    // position: [0, 0, 5]
                    position: [4, - 2, 6]
                }}
            // onCreated={created}
            >
                <color args={['black']} attach='background' />
                <OrbitControls makeDefault />

                    <Center>
                        <Text3D
                            font='./fonts/Josefin Sans Thin_Regular.json'
                            size={2}
                            height={0.2}
                            curveSegments={12}
                            bevelEnabled
                            bevelThickness={0.02}
                            bevelSize={0.02}
                            bevelOffset={0}
                            bevelSegments={5}
                            position={[15, 0, 0]}
                        // material={material}
                        >
                            asdfgasgdfdf
                            {/* <meshMatcapMaterial matcap={ matcapTexture} /> */}
                        </Text3D>
                        <Text3D
                            font='./fonts/Josefin Sans Thin_Regular.json'
                            size={2}
                            height={0.2}
                            curveSegments={12}
                            bevelEnabled
                            bevelThickness={0.02}
                            bevelSize={0.02}
                            bevelOffset={0}
                            bevelSegments={5}
                            position={[-15, 0, 0]}
                        // material={material}
                        >
                            RAF DI MARTINO
                            {/* <meshMatcapMaterial matcap={ matcapTexture} /> */}
                        </Text3D>
                        <Stats />

                    </Center>
            </Canvas>
        </>

    )
}