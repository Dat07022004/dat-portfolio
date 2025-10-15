import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import { useGSAP } from '@gsap/react'
import HeroExperience from '../components/HeroModels/HeroExperience'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            }
        )
    })
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        {/* Personal Info Badge */}
                        <div className="flex flex-col gap-2 relative z-10">
                            <div className='flex flex-row gap-2'>
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 w-fit backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-white-50 text-sm md:text-base">Sinh viên năm 4 • HUTECH</span>
                                </div>
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 w-fit backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-white-50 text-sm md:text-base">CPA: 3.3</span>
                                </div>
                            </div>

                            <h2 className="text-white-100 text-xl md:text-2xl font-semibold">
                                Nguyễn Thành Đạt
                            </h2>
                        </div>

                        {/* Hero Text */}
                        <div className="hero-text">
                            <h1>
                                Biến đổi
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>thành Dự án Thực tế</h1>
                            <h1>mang lại Hiệu quả</h1>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-3 relative z-10">
                            <p className='text-white-50 md:text-xl leading-relaxed'>
                                Xin chào! 👋 Mình là Đạt, một lập trình viên đầy nhiệt huyết với niềm đam mê
                                công nghệ và sáng tạo. Mình chuyên phát triển các ứng dụng web hiện đại
                                với React, Three.js và NextJs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                                    Full-stack Developer
                                </span>
                                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                                    3D Web Enthusiast
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm">
                                    Problem Solver
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12 mt-2"
                            id="button"
                            text="Khám phá Portfolio"
                        />
                    </div>
                </header>

                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero