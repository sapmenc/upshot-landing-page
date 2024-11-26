"use client"
import { Emailing } from "./Emailing";
import logo from "../assets/Upshot_main_logo.svg"
import arrow from "../assets/Down_arrows.svg"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BackgroundLines } from "components/ui/background-lines";
import { Compare } from "components/ui/compare";
import { Vortex } from "components/ui/vortex";



export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior to anchor links
    const handleHashChange = (e: HashChangeEvent) => {
      const target = document.querySelector(e.newURL.split("#")[1]);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
   <div className="bg-black w-full ">
    <div className="flex flex-col items-center justify-center bg-black w-full h-screen ">
    <BackgroundLines className="flex items-center h-screen justify-center w-full flex-col px-4">
     {/* <image */}
     <Image src={logo} alt="logo"/>
    </BackgroundLines>
    <div className="flex flex-col items-center gap-3 mb-3">
    <h2 className="text-center text-[#9E9E9E]">Launching soon</h2>
    
    <Link href="#second-part" className="cursor-pointer z-10" >
            <Image src={arrow} alt="arrow" />
          </Link></div></div>
      <div className="flex flex-col items-center justify-center w-full h-screen mt-[250px]" id="second-part" >
    <h2 className="text-6xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] py-2 ">Won't say much !</h2>
    <p className="text-lg  bg-clip-text my-3 text-transparent text-center bg-gradient-to-b from-white to-[#757575] ">Hover below</p>
      <div className=" rounded-3xl bg-[#292929] m-4 p-7 " >
      <Compare
        firstImage="https://ik.imagekit.io/qxqwvk1m1/Upshot/Coming%20Soon%20Page/Component_Left.svg?updatedAt=1732278685316"
        secondImage="https://ik.imagekit.io/qxqwvk1m1/Upshot/Coming%20Soon%20Page/Component_Right.svg?updatedAt=1732278685312"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      /></div>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black"  >
  <h2 className="text-6xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] py-2 ">The Next Big Thing</h2>
    <p className="text-lg  bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] ">Coming to power your team's productivity</p>
    </div>
    <div className="flex flex-col  bg-inherit items-center justify-center  w-full mx-auto rounded-md gap-5  overflow-hidden h-screen ">
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >

       <h2 className="text-8xl mt-4 font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] py-2 ">Join the waitlist</h2>
       <p className="text-lg text-center mt-5 text-[#9E9E9E] max-w-2xl tracking-tight">Be among the first to unlock exclusive access to Upshot's groundbreaking features! Join our waitlist today and enjoy early bird perks designed to give you a seamless head start when we launch. Don’t miss out on this game-changing opportunity!</p>
        <div className="items-center w-full mt-10">
          <Emailing/>
        </div>
      </Vortex>
    </div>
   </div>
  );
}
