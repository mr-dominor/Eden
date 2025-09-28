"use client"
import { useState } from "react"
import Image from "next/image"
import { SpringUp,SpringDown } from "../micro-components/spring-physics"
import { Button } from "@/components/ui/button"
import { User2Icon,BookIcon,CheckCircleIcon } from "lucide-react"
import { hoverzoom } from "../micro-components/hovers&all";
import {MotionDiv,MotionDivLeft,MotionDivRight} from "../micro-components/motion-div"
import TextMorph from "../micro-components/morph"
export const HomePage = () =>{
    const [hover,setHover] = useState(false);
    const enroll = "Enroll Now →"
    const message = [
  "Eden School is a garden where children learn like growing plants.",
  "Each lesson is sunshine, each question a drop of rain.",
  "Together we grow, toward the sky of knowledge."
];

const list = {
    create:{
        img:`/mine/Creative_Thinking-removebg-preview.png`,
        name:"Creative Thinking"
    },
    career:{
        img:`/mine/career-thinking-removebg-preview.png`,
        name:"Career Planning"
    },
    public:{
        img:`/mine/PublicSpeaking-removebg-preview.png`,
        name:"Public Speaking"
    },
}

    return(
        <div className=" p-2 md:px-4 md:py-6 mx-auto">
            <div className="text-center" data-aos="">
                <h1 className="text-3xl md:text-5xl font-bold font-serif ">A Journey of Knowledge and Growth</h1>
            </div>
            <div className=" flex flex-col items-center justify-between lg:flex-row p-10">
                <SpringUp>
                    <div className={`relative w-72 md:w-96 h-72 md:h-96 overflow-hidden ${hoverzoom}`}>
                    <Image 
                    src={`/mine/Gemini_Generated_Image_5tmpet5tmpet5tmp.png`}
                    alt="Edu-1"
                    fill
                    className="object-cover"
                    />
                </div>
                </SpringUp>
                <SpringDown>
                    <div className=" w-72 md:w-96 flex flex-col items-center mt-10 md:mt-0 gap-y-10">
                    <Button size={`sm`} style={{background:hover?("white"):"var(--color-accessible-purple)",border:`2px solid ${hover?"var(--color-accessible-purple)":"none"}`,color:hover?"var(--color-accessible-purple)":"white"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="font-bold font-serif">{enroll}</Button>

                    <div className="w-full text-lg  text-gray-500 font-mono font-semibold text-center">
  <TextMorph words={message} interval={3500} />
</div>

                     <div className="w-full flex justify-between">
                        <div className={`flex flex-col text-center ${hoverzoom}`}>
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
                    <div className={` relative h-72 md:h-96 w-72 md:w-96 overflow-hidden ${hoverzoom} mt-5 md:mt-0`}>
                    <Image 
                    src={`/mine/edu-2.png`}
                    alt="Edu-1"
                    fill
                    className="object-contain"
                    />
                </div>
                </SpringUp>
            </div>
            <MotionDiv>
                <div className="mt-5 rounded-xl w-full md:w-4/6 mx-auto flex items-center justify-center bg-purple-950 p-2 overflow-y-hidden">
                <div className="shadow-[2px_0_0_-1px_rgba(255,255,255,1)] py-4 px-2 md:px-10 md:py-10 flex flex-col">
                    <h1 className="text-2xl md:text-4xl font-serif text-white">Our Programs</h1>
                    <p className="hidden md:block md:w-full text-white">Immerse yourself in our integrated programs</p>
                </div>
                <div className="mx-2 overflow-x-auto overflow-y-hidden flex">
                    {Object.values(list).map((s,k)=>{
                        return(
                            <div key={k} className="flex flex-col mx-2 hover:bg-purple-800 p-4 rounded-xl">
                                <div className={` relative w-28 h-24 shrink-0 ${hoverzoom}`}>
                                <Image
                                src={`${s.img}`} 
                                alt={`${s.name}`}
                                fill
                                />
                            </div>
                            <div>
                                <p className="mt-2 text-white font-serif text-center">{s.name}→</p>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            </MotionDiv>
            
            <div className="w-full mx-auto md:w-5/6 flex flex-col items-center md:flex-row justify-between mt-5 p-2">
            <MotionDivLeft>
                <div className="w-full flex flex-col">
                <h1 className="font-serif font-bold text-2xl md:text-3xl py-4">Traditional In-person classroom ecouraged students to</h1>
                <div className="flex flex-col gap-y-2">
                    <p className={`flex gap-x-2 ${hoverzoom}`}><CheckCircleIcon className="bg-orange-400 rounded-full text-white" />Focus for long period of hours</p>
                    <p className={`flex gap-x-2 ${hoverzoom}`}><CheckCircleIcon className="bg-orange-400 rounded-full text-white" />Engage with their peers</p>
                    <p className={`flex gap-x-2 ${hoverzoom}`}><CheckCircleIcon className="bg-orange-400 rounded-full text-white" />Understanding of complicated concepts</p>
                </div>
                
            </div>
            </MotionDivLeft>
    
            <MotionDivRight>
                 <div className={`relative w-72 mt-15 md:mt-0 md:w-[500px] h-48 md:h-96 rounded-xl overflow-hidden mx-auto ${hoverzoom}`}>
                <Image
                src={`/mine/pexels-olly-3755707.jpg`}
                alt="image"
                fill
                />
            </div>
            </MotionDivRight>
            </div>
        </div>
    )
}

export default HomePage