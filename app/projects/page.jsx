"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import SliderButton from "@/components/SliderButton";

const work = [
  {
    num: "01",
    title: "Sundown's Studio",
    description: "An award winning website clone- Sundown's Studio.",
    stack: [{name: "HTML"},{name: "CSS"},{name: "JavaScript"},{name: "swiper.js"},{name: "locomotive.js"}],
    image: "/assets/work/project-one.png",
    live: "https://sundown-studio-nu.vercel.app/",
    github: "https://github.com/pwrvbh-9/Sundown-Studio"
  },
  {
    num: "02",
    title: "MovieVerse - The Movie App",
    description: "Get latest movies, web series and show updates in a single web app.",
    stack: [{name: "React.js"},{name: "redux"},{name: "SCSS"},{name: "axios"},{name: "TMDB Api"},],
    image: "/assets/work/project-two.png",
    live: "https://movieverse-lime.vercel.app/",
    github: "https://github.com/pwrvbh-9/Movieverse"
  },
  {
    num: "03",
    title: "Cynthia Ugwu - Product Designer",
    description: "A Minimalistic product designer website clone - Cynthia Ugwu.",
    stack: [{name: "HTML"},{name: "CSS"},{name: "JavaScript"},{name: "reactjs"},],
    image: "/assets/work/project-three.png",
    live: "https://cynthia-ugwu-self.vercel.app/",
    github: "https://github.com/pwrvbh-9/Cynthia-Ugwu-Clone"
  },
  {
    num: "04",
    title: "HackShield - Protect Your System",
    description: "Under our shield, you are safe.",
    stack: [{name: "HTML"},{name: "Tailwind CSS"},{name: "JavaScript"},{name: "reactjs"},],
    image: "/assets/work/project-four.png",
    live: "https://hack-shield.vercel.app/",
    github: "https://github.com/pwrvbh-9/HackShield"
  }
]

const Projects = () => {

  const [project, setProject] = useState(work[0])

  const handleSlideChange = (swiper) => {
      const currentIndex = swiper.activeIndex
      setProject(work[currentIndex])
  }

  return (
    <motion.section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    initial={{opacity: 0}}
    animate={{opacity: 1,
    transition: { duration: 0.4, ease: "easeIn"}}}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-white">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className="text-white/60 capitalize">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => (
                  <li key={index} className="capitalize text-accent text-xl">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group flex">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group flex">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
          <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[480px] mb-10"
          onSlideChange={handleSlideChange}>
            {work.map((project, index) => (
              <SwiperSlide key={index} className="w-full">
              <div className="h-[420px] relative group flex justify-center items-center bg-transparent rounded-[30px]">
                <div className="top-0 bottom-0 absolute w-full h-full z-10 rounded-[30px]">
                <div className="relative w-full h-full">
                  <Image 
                    src={project.image}
                    fill
                    className="object-fit w-[580px] rounded-[30px]"
                    alt=""
                  />
                </div>
                </div>
              </div>
              </SwiperSlide>
            ))}
            <SliderButton 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              buttonStyles="bg-accent rounded-[50%] hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects