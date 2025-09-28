"use client"
import Navlinks from "./navlinks";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { MotionDiv, MotionDivDown } from "../micro-components/motion-div";
import SideBar from "./sidebar";
const NavBar = () =>{
    const [hover,setHover] = useState(false);
    const [open,setOpen] = useState(false);
    return (
            <nav className="p-4 flex h-24 ">
            <SideBar open={open} openChange={setOpen} />
            <div className="border-b-2 py-2 flex justify-between items-center border-gray-400 w-full mx-auto">
                <div className="flex items-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                    <Image 
                    src={`/Eden-removebg-preview.png`}
                    alt="image"
                    fill
                    />
                </div>
                <div>
                    <p className="font-bold text-gray-500 font-serif">Eden <br /> School</p>
                </div>
                </div>
                <div className="hidden md:block">
                    <Navlinks />
                </div>
                <div className="hidden md:block">
                    <Button size={`sm`} style={{background:hover?("white"):"var(--color-accessible-purple)",border:`2px solid ${hover?"var(--color-accessible-purple)":"none"}`,color:hover?"var(--color-accessible-purple)":"white"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>Fee Structure</Button>
                </div>
                <div className="block md:hidden">
                    <Button size={`lg`} style={{background:hover?("white"):"var(--color-accessible-purple)",border:`2px solid ${hover?"var(--color-accessible-purple)":"none"}`,color:hover?"var(--color-accessible-purple)":"white"}}
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>{setHover(false)}} 
                    onClick={()=>setOpen(!open)}><MenuIcon /></Button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar