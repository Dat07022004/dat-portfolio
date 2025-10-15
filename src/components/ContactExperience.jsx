import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Models/Computer-optimized'

const ContactExperience = ({ className = '' }) => {
    return (
        <div className={`w-full h-[420px] md:h-[520px] lg:h-[600px] ${className}`}>
            <Canvas camera={{ position: [0, 100, 250], fov: 35 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 50, 50]} intensity={1} />
                <Suspense fallback={null}>
                    <group scale={0.6} position={[0, -10, -2]}>
                        <Model />
                    </group>
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
            </Canvas>
        </div>
    )
}

export default ContactExperience
