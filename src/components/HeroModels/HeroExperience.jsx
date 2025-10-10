import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import { HollowKnightSilksong } from './Hollow_knight_silksong'
import HeroLights from './HeroLights';

const HeroExperience = () => {
    const isTable = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={5} />

            <OrbitControls
                enablePan={false}
                enableZoom={!isTable}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights />
            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -4, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <HollowKnightSilksong scale={8} position={[0, -1, 0]} rotation={[0, 0.7, 0]} />
            </group>


        </Canvas>
    )
}

export default HeroExperience