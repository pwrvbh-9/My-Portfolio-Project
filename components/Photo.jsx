"use client";
import {motion} from "framer-motion"
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
    <motion.div initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 0.5, duration: 0.1, ease: "easeIn"}}}>
        <motion.div className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute"
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 1, duration: 0.2, ease: "easeInOut"}}}>
            <Image 
                src="/assets/photo2.png"
                className="object-contain"
                quality={100}
                priority
                fill
                alt=""
                sizes="(max-width: 768px) 250px, 400px"
            />
        </motion.div>
        {/* circle */}
        <motion.svg className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        >
        <motion.circle 
          cx="253"
          cy="253"
          r="250"
          stroke="#C5C6C7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{strokeDasharray: "24 10 0 0"}}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo