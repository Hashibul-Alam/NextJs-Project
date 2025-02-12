"use client";

import Buttons from "@/common/button";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="h-[492px] flex items-center  overflow-hidden relative" style={{backgroundImage: 'url("/stars.png")'}}>
      <div className="absolute size-64 rounded-full bg-purple-500  border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[radial-gradient(50%_50%_at_16%_18%,white,rgba(184,148,255)_37%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0px_0px_50px_rgb(140,69,255)] "></div>
     <motion.div 
     style={{
      translateY: "-50%",
      translateX: "-50%"
     }}
     animate={{
      rotate: "1turn",
     }}
     transition={{
      duration: 60,
      ease: "linear",
      repeat: Infinity,
     }}
     className=" absolute size-[344px]  border-white opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
     <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute size-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute size-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
    <div className="size-2 bg-white rounded-full"></div>
    <div className=" absolute size-2 animate-ping bg-blue-400 delay-200 rounded-full"></div>
    </div>
     </motion.div>
      <motion.div
       style={{
        translateY: "-50%",
        translateX: "-50%"
       }}
       animate={{
        rotate: '-1turn',
       }}
       transition={{
        duration: 60,
        ease: "linear",
        repeat: Infinity,
       }}
       className="absolute size-[444px] border-white opacity-20 border-[1px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute size-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
   
       </motion.div>
      <motion.div
       style={{
        translateY: "-50%",
        translateX: "-50%"
       }}
       animate={{
        rotate: '1turn',
       }}
       transition={{
        duration: 90,
        ease: "linear",
        repeat: Infinity,
       }}
      className="absolute size-[544px] border-white opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute size-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      <div className="container relative mt-12">
        <h1 className="text-7xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] text-transparent bg-clip-text text-center">
          AI Boost
        </h1>

        <p className="text-lg text-white/70 font-semibold text-center  mt-3">
        I am Salman sir
        </p>
        <div className="flex justify-center mt-5">
          <Buttons>Start for free</Buttons>
        </div>
      </div>
    </section>
  );
};

export default Hero;