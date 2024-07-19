  "use client";

  import { useRef } from "react";
  import { Button } from "@/components/ui/button"; 
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";

  import emailjs from '@emailjs/browser';

  import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

  import { motion } from "framer-motion";
  import { useState } from "react";

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+91) 7073433901"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "panwarvaibhav009@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Ajmer, Rajasthan, India"
    }
  ]




  const Contact = () => {

    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, formRef.current, {
          publicKey: process.env.PUBLIC_KEY,
        })
        .then(
          () => {
            setSuccess(true);
            e.target.reset();
          },
          (error) => {
            setError(true);
          },
        );
    };

    return (
      <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1,
      transition: { duration: 0.4, ease: "easeIn"}}}
      className="py-6"
      >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:order-none order-2 xl:w-[54%]">
            <form className="flex flex-col gap-6 p-10 rounded-xl bg-[#27272c]"
            ref={formRef} onSubmit={sendEmail}>
            <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input required={true} type="firstname" placeholder="Full Name" name="user_name"/>
            <Input required={true} type="email" placeholder="Your Email" name="user_email" />
            </div>
            <Textarea 
            required
              className="h-[200px]"
              placeholder="Your Message Here."
              name="message"
            />
            <Button size="md" className="max-w-40">Send Message</Button>
            {error && alert("Message Could Not Sent")}
            {success && alert("Message Sent Successfully.")}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    {item.icon}
                  </div>
                  
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </motion.section>
    )
  }

  export default Contact