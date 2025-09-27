"use client"
import { useState } from "react"
import Image from "next/image"
import { SpringUp,SpringDown } from "../micro-components/spring-physics"
import { Button } from "@/components/ui/button"
import { User2Icon,BookIcon } from "lucide-react"
import TextMorph from "../micro-components/morph"
export const HomePage = () =>{
    const [hover,setHover] = useState(false);
    const enroll = "Enroll Now →"
    const message = [
  "Eden School is a garden where children learn like growing plants.",
  "Each lesson is sunshine, each question a drop of rain.",
  "Together we grow, toward the sky of knowledge."
];

    return(
        <div className=" p-2 md:px-4 md:py-6 mx-auto">
            <div className="text-center" data-aos="">
                <h1 className="text-3xl md:text-5xl font-bold font-serif ">A Journey of Knowledge and Growth</h1>
            </div>
            <div className=" flex flex-col items-center justify-between md:flex-row p-10">
                <SpringUp>
                    <div className="relative w-72 md:w-96 h-72 md:h-96 overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <Image 
                    src={`/mine/Gemini_Generated_Image_5tmpet5tmpet5tmp.png`}
                    alt="Edu-1"
                    fill
                    className="object-cover"
                    />
                </div>
                </SpringUp>
                <SpringDown>
                    <div className=" w-72 md:w-96 flex flex-col items-center mt-10 md:mt-0 gap-y-10 ">
                    <Button size={`sm`} style={{background:hover?("white"):"var(--color-accessible-purple)",border:`2px solid ${hover?"var(--color-accessible-purple)":"none"}`,color:hover?"var(--color-accessible-purple)":"white"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="font-bold font-serif">{enroll}</Button>

                    <div className="w-full text-lg  text-gray-500 font-mono font-semibold text-center">
  <TextMorph words={message} interval={3500} />
</div>

                     <div className="w-full flex justify-between">
                        <div className="flex flex-col text-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <p className="flex items-center gap-x-2"><User2Icon className="w-12 h-12 bg-white rounded-full text-teal-500 p-0.5" /><span className="font-medium font-serif text-2xl">8.5k+</span></p>
                            <p className="py-0.5 font-serif">Students Enrolled</p>
                        </div>
                        <div className="flex flex-col text-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
                            <p className="flex items-center gap-x-2"><BookIcon className="w-12 h-12 bg-white rounded-full text-fuchsia-500 p-2" /><span className="font-medium font-serif text-2xl">50+</span></p>
                            <p className="py-0.5 font-serif">Cources</p>
                        </div>
                     </div>
                </div>
                </SpringDown>
                <SpringUp>
                    <div className=" relative h-72 md:h-96 w-72 md:w-96 overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 mt-5 md:mt-0">
                    <Image 
                    src={`/mine/edu-2.png`}
                    alt="Edu-1"
                    fill
                    className="object-contain"
                    />
                </div>
                </SpringUp>
            </div>
        </div>
    )
}



export default HomePage