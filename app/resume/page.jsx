"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs, SiRedux} from 'react-icons/si'
 
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: "About me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vaibhav panwar"
    },
    {
      fieldName: "Email",
      fieldValue: "panwarvaibhav009@gmail.com"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7073433901"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "My name is Vaibhav Panwar and I have following experiences.",
  items: [
    {
      company: "OrderEye",
      position: "Frontend Developer Intern",
      duration: "2024-Present"
    },
   {
      company: "Nexus Info",
      position: "Web Developer Intern",
      duration: "2023-2024"
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "My name is Vaibhav Panwar and I have completed following level of education.",
  items: [
    {
      institution: "Udemy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023"
    },
    {
      institution: "IIIT Kurnool, AP",
      degree: "Bachelor of Technology",
      duration: "2020-2024"
    },
    {
      institution: "Govt. Oswal Jain Sr. Sec. School, Ajmer",
      degree: "Higher Secondary",
      duration: "2018-2019"
    },
    
  ]
}

const skills = {
  title: "My Skills",
  description: "I am having experience in following frontend skills.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name:'html5'
    },
    {
      icon: <FaCss3 />,
      name:'css 3'
    },
    {
      icon: <FaJs />,
      name:'Javascript'
    },
    {
      icon: <FaReact />,
      name:'react.js'
    },
    {
      icon: <SiRedux />,
      name:'Redux Toolkit'
    },
    {
      icon: <FaFigma />,
      name:'figma'
    },
    {
      icon: <FaNodeJs />,
      name:'nodejs'
    },
    {
      icon: <FaGithub />,
      name: "github"
    },
    {
      icon: <SiTailwindcss />,
      name:'tailwind css'
    },
    {
      icon: <SiNextdotjs />,
      name:'next.js'
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { duration: 0.4, ease: "easeIn"},
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
    <div className='container mx-auto'>
      <Tabs defaultValue='education' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='experience'>Experience</TabsTrigger>
          <TabsTrigger value='skills'>Skills</TabsTrigger>
          <TabsTrigger value='about'>About Me</TabsTrigger>
        </TabsList>

        <div className='w-full min-h-[70vh]'>
        <TabsContent value='experience' className='w-full'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <h3 className='text-4xl font-bold '>{experience.title}</h3>
          <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {experience.items.map((item, index) => (
                <li className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' key={index}>
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                    <div>
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60'>{item.company}</p>
                    </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        </TabsContent>

        <TabsContent value='education' className='w-full'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <h3 className='text-4xl font-bold '>{education.title}</h3>
          <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {education.items.map((item, index) => (
                <li className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' key={index}>
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                    <div>
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60'>{item.institution}</p>
                    </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        </TabsContent>

        <TabsContent value='skills' className='w-full h-full'>
        <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 xl:gap-[30px]'>
              {skills.skillList.map((item, index) => (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl justify-center flex items-center group'>
                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                      <p className='capitalize'>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
              </ul>
        </div>
        </TabsContent>

        <TabsContent value='about' className='w-full text-center xl:text-left'>
          <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item, index) => (
                  <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                    <span className='text-white/60'>{item.fieldName}</span>
                    <span className='text-xl'>{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
          </div>
        </TabsContent>
      </div>
      </Tabs>

      
    </div>

    

    </motion.div>
  )
}

export default Resume
