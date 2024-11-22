"use client"
import { BackgroundLines } from "@/components/ui/background-lines";
import { Compare } from "@/components/ui/compare";
import { Vortex } from "@/components/ui/vortex";
import { Emailing } from "./Emailing";
import logo from "@/assets/Upshot_main_logo.svg"
import arrow from "@/assets/Down_arrows.svg"
import left from "@/assets/Component_Left.svg"
import right from "@/assets/Component_Right.svg"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
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
   <div className="bg-[#1B1B1B] w-full ">
    <div className="flex flex-col items-center justify-center w-full h-screen ">
    <BackgroundLines className="flex items-center h-screen justify-center w-full flex-col px-4">
     {/* <image */}
     <Image src={logo} alt="logo"/>
    </BackgroundLines>
    <div className="flex flex-col items-center gap-3 mb-3">
    <h2 className="text-center text-[#9E9E9E]">Launching soon</h2>
    
    <Link href="#second-part" className="cursor-pointer" >
            <Image src={arrow} alt="arrow" />
          </Link></div></div>
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4" >
    <h2 className="text-6xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] py-2 ">Won't say much !</h2>
    <p className="text-lg  bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] ">Hover below</p>
      <Compare
        firstImage="https://ik.imagekit.io/qxqwvk1m1/Upshot/Coming%20Soon%20Page/Component_Left.svg?updatedAt=1732278685316"
        secondImage="https://ik.imagekit.io/qxqwvk1m1/Upshot/Coming%20Soon%20Page/Component_Right.svg?updatedAt=1732278685312"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
    <div className="flex flex-col items-center justify-center w-full h-screen" id="second-part" >
  <h2 className="text-6xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] py-2 ">The Next Big Thing</h2>
    <p className="text-lg  bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] ">Coming to power your teams productivity</p>
    </div>
    <div className="flex flex-col items-center justify-center  w-full mx-auto rounded-md   overflow-hidden h-screen ">
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >

       <h2 className="text-6xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] py-2 ">Join the waitlist</h2>
       <p className="text-lg bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-[#757575] max-w-md tracking-tight">Be among the first to unlock exclusive access to Upshot's groundbreaking features! Join our waitlist today and enjoy early bird perks designed to give you a seamless head start when we launch. Don’t miss out on this game-changing opportunity!</p>
        <div className="items-center w-full mt-10">
          <Emailing/>
        </div>
      </Vortex>
    </div>
   </div>
  );
}
