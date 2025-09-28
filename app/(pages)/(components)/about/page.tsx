"use client"
import { SpringLeft, SpringRight,SpringDown, SpringUp } from "../micro-components/spring-physics";
import { MotionDivLeft, MotionDivRight } from "../micro-components/motion-div";
import { hoverzoom } from "../micro-components/hovers&all";
import Image from "next/image";
const Page = () =>{
    return(
        <div className="p-2 md:px-4 md:py-6 mx-auto ">
            <div className="mx-auto flex flex-col items-center justify-center lg:flex-row max-w-full">
                <div className="h-auto w-full md:w-auto z-10">
                    <SpringDown>
                    <div className={`relative bg-amber-200 lg:left-[20px] w-full md:w-[600px] h-96 md:h-[400px] overflow-hidden rounded-3xl ${hoverzoom} shadow-2xl`}>
                    <Image
                    src={`/mine/MubashshirIslam.jpg`} 
                    alt="Visionary's Photo"
                    fill
                    className="object-cover"
                    />
                </div>
                </SpringDown>
                </div>
                <SpringUp>
                    <div className="relative w-full md:w-[600px] h-96 md:h-[500px] rounded-3xl border-5 border-solid bg-accessible-purple mt-5 md:mt-0 flex flex-col  justify-center text-white p-2 md:px-10 md:py-4">
                    <h1 className={`text-3xl font-serif font-bold text-center ${hoverzoom}`}>About the Founder</h1>
                    <span className={`mt-4 text-justify p-4 ${hoverzoom}`}><span className="font-bold">Mr. Mubashshir Islam</span> — a visionary educator and a phenomenal Software Engineer — founded Eden School with the belief that education must prepare students not only for today but for the future. With his expertise in software engineering and innovation, he has experienced first-hand how technology can shape lives, and he wants the next generation to be ready for it.</span>
                </div>
                </SpringUp>
            </div>
            <div className="p-2">
                <MotionDivLeft>
                    <div className=" bg-purple-950 flex flex-col md:flex-row items-center gap-y-6 mt-5 rounded-xl p-2 md:p-4 md:max-w-4/6 mx-auto" >
                        <div className={`relative h-64 md:h-96 w-full overflow-hidden rounded-xl ${hoverzoom}`}>
                        <Image 
                        src={`/mine/pexels-max-fischer-5211443.jpg`}
                        alt="image"
                        fill
                        className="object-cover"
                        />
                        </div>
                        <div className={`text-white p-2 flex flex-col text-justify md:max-w-2/3`}>
                            <h1 className="text-2xl font-bold ">His Goal Behind Eden School</h1>
                            <p>Mr. Mubashshir Islam’s dream is to create a nurturing space where creativity, knowledge, and character go hand in hand. He envisions a school that not only teaches academic excellence but also cultivates resilience, empathy, and leadership in every student.</p>
                        </div>
                    </div>
                </MotionDivLeft>
                <MotionDivRight>
                    <div className=" bg-purple-950 flex flex-col md:flex-row items-center gap-y-6 mt-5 rounded-xl p-2 md:p-4 md:max-w-4/6 mx-auto" >
                        <div className={`relative h-64 md:h-96 w-full overflow-hidden rounded-xl ${hoverzoom}`}>
                        <Image 
                        src={`/mine/pexels-julia-m-cameron-4145075.jpg`}
                        alt="image"
                        fill
                        className="object-cover"
                        />
                        </div>
                        <div className={`text-white p-4 flex flex-col text-justify md:max-w-2/3`}>
                            <h1 className="text-2xl font-bold ">Mission</h1>
                            <p>To provide holistic education that empowers students with critical thinking, ethical values, and technological fluency—equipping them to thrive in a fast-changing world.</p>
                        </div>
                    </div>
                </MotionDivRight>
                <MotionDivLeft>
                    <div className=" bg-purple-950 flex flex-col md:flex-row items-center gap-y-6 mt-5 rounded-xl p-2 md:p-4 md:max-w-4/6 mx-auto" >
                        <div className={`relative h-64 md:h-96 w-full overflow-hidden rounded-xl ${hoverzoom}`}>
                        <Image 
                        src={`/mine/pexels-cdc-library-3992949.jpg`}
                        alt="image"
                        fill
                        className="object-cover"
                        />
                        </div>
                        <div className={`text-white p-2 flex flex-col text-justify md:max-w-2/3`}>
                            <h1 className="text-2xl font-bold ">Vision</h1>
                            <p>Mr. Mubashshir Islam’s dream is to create a nurturing space where creativity, knowledge, and character go hand in hand. He envisions a school that not only teaches academic excellence but also cultivates resilience, empathy, and leadership in every student.</p>
                        </div>
                    </div>
                </MotionDivLeft>
            </div>
        </div>
    );
}

export default Page;