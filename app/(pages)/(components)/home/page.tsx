"use client"
import { useState } from "react"
import Image from "next/image"
import Spring from "../micro-components/spring-physics"
import { Button } from "@/components/ui/button"
export const HomePageTwo = () =>{
    const [hover,setHover] = useState(false);
    const enroll = "Enroll Now →"
    return(
        <div className=" p-2 md:px-4 md: py-6 mx-auto">
            <div className="text-center" data-aos="">
                <h1 className="text-3xl md:text-5xl font-bold font-serif ">A Journey of Knowledge and Growth</h1>
            </div>
            <div className=" flex flex-col items-center justify-between md:flex-row p-10">
                <div className="relative w-72 md:w-96 h-72 md:h-96 overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110" data-aos="">
                    <Image 
                    src={`/mine/Gemini_Generated_Image_5tmpet5tmpet5tmp.png`}
                    alt="Edu-1"
                    fill
                    className="object-cover"
                    />
                </div>
                <div className=" w-72 md:w-96 flex flex-col items-center mt-10 md:mt-0 gap-y-10 ">
                    <Button size={`sm`} style={{background:hover?("white"):"var(--color-accessible-purple)",border:`2px solid ${hover?"var(--color-accessible-purple)":"none"}`,color:hover?"var(--color-accessible-purple)":"white"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="font-bold font-serif">{enroll}</Button>
                    <p className="text-lg text-justify text-gray-500 font-mono font-semibold">Eden School is a garden,
                     where children learn like growing plants.
                     Each lesson is sunshine,
                     each question a drop of rain.
                     Together we grow,
                     toward the sky of knowledge.</p>
                </div>
                <div className=" relative h-72 md:h-96 w-72 md:w-96 overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 mt-5 md:mt-0" data-aos="">
                    <Image 
                    src={`/mine/edu-2.png`}
                    alt="Edu-1"
                    fill
                    className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

const HomePage = () =>{
    return(
        <Spring>
            <HomePageTwo />
        </Spring>
    );
}

export default HomePage