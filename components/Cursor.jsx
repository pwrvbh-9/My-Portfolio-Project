"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const cursorRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        if (typeof window !== 'undefined') {
            setIsDesktop(window.innerWidth > 768);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        const mouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        if (isDesktop) {
            window.addEventListener("mousemove", mouseMove);

            return () => {
                window.removeEventListener("mousemove", mouseMove);
            };
        }
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <motion.div
            ref={cursorRef}
            className='h-[20px] w-[20px] z-50 border-solid border opacity-70 rounded-[50%] fixed border-[#C5C6C7]'
            style={{ left: 5, top: 10 }}
        />
    );
};

export default Cursor;
