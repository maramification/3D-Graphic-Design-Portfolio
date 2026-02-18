import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallexBackground from '../components/ParallexBackground'
import { Astronaut } from '../components/Astronaut'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from "maath";
import Loader from '../components/Loader'


const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853})
    return (
        <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
            <HeroText/>
            <ParallexBackground/>
            <figure className='absolute inset-0'
            style ={{width: "100vw", height: "100vh" }}>
                <Canvas>
                    <Suspense fallback={<Loader/>}>
                    <Float>
                    <Astronaut scale={isMobile && 0.23}/>
                    {/* <OrbitControls/> */}
                    <Rig />
                    </Float>
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    )
}

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x/10, 1+state.mouse.y/10, 5],
            0.5,
            delta
        );
    });
}


export default Hero