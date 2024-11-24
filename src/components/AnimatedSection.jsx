'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import shape from '../../public/imgs/shape.png';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            const shapes = scrollContainer.querySelectorAll('.shape, .shape2, .shape3, .shape4, .shape5, .shape6, .shape7, .shape8');

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollContainer,
                    start: 'top top',
                    end: `+=${shapes.length * 100}%`,
                    scrub: true,
                    pin: true,
                    pinSpacing: true
                },
            });

            shapes.forEach((shape, index) => {
                timeline.fromTo(
                    shape,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1 },
                    index * 1
                );
            });

            return () => {
                ScrollTrigger.killAll();
            };
        }
    }, []);

    return (
        <div ref={scrollRef} className="relative w-full max-w-[1190px] flex flex-col justify-center items-center">
            <div className="shape2 absolute top-0">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[18rem] ps-[10rem]">
                    Insights as a Service
                </h1>
            </div>
            <div className="shape">
                <div className="py-[2rem] ps-[3rem] pe-[15rem]">
                    <h1 className="font-semibold text-[25px] font-roboto-condensed">
                        Data+AI Ops
                    </h1>
                    <p className="font-semibold font-roboto-condensed text-[15px] leading-[1rem]">
                        We are data enablers and help companies understand their current data
                        environment and make corrections.
                    </p>
                </div>
                <div className="font-semibold font-roboto-condensed text-[15px] text-end pe-[16rem]">
                    Learn more
                </div>
            </div>
            <div className="shape3 absolute">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[12rem] pe-[15rem] ps-[1rem] leading-[1.8rem]">
                    Data+AI strategy and architecture
                </h1>
            </div>
            <div className="shape4 absolute">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[14rem] ps-[7rem] leading-[1.8rem]">
                    Data enablement
                </h1>
            </div>
            <div className="shape5 absolute">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[3rem] ps-[5rem] pe-[2rem] leading-[1.8rem]">
                    Data+AI Change management
                </h1>
            </div>
            <div className="shape6 absolute">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[10rem] ps-[12rem] leading-[1.8rem]">
                    Business Intelligence & Analytics
                </h1>
            </div>
            <div className="shape7 absolute">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[10rem] ps-[1rem] pe-[8rem] leading-[1.8rem]">
                    Cognitive Automation
                </h1>
            </div>
            <div className="shape8 absolute">
                <h1 className="font-semibold text-[25px] font-roboto-condensed pt-[4rem] pe-[6rem] ps-[10rem] leading-[1.8rem]">
                    Enterprise + Generative AI
                </h1>
            </div>
            <Image
                className="absolute top-[50px]"
                src={shape}
                alt="shapeImage"
                width={600}
                height={600}
            />
        </div>
    );
};

export default AnimatedSection;