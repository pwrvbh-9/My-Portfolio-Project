"use client";

import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from '@/components/ui/button'
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Typewriter from "@/components/Typewriter";

const Homepage = () => {
  return (
    <section className='h-full'>
      <div className='container h-full mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        {/* profile description  */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
          <Typewriter text="Frontend Developer" speed={100} />
            <h1 className='h1 mb-6'>Hi, I&apos;m <br /> <span className='text-accent'>Vaibhav Panwar</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80 capitalize'>
              I excel in Frontend Development and bring Vision to Life with modern web development practices.
            </p>
            {/* buttons social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/assets/Vaibhav-resume.pdf" download={true}>
              <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              >
              <span>Download CV</span>
              <MdOutlineFileDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
              <Social 
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage