import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Navlinks from "./navlinks";
const SideBar = ({open, openChange}:{open:boolean; openChange:(open:boolean) => void}) =>{
    return(
            <Sheet open={open} onOpenChange={openChange} >
                 <SheetTrigger>{open}</SheetTrigger>
                 <SheetContent className="w-[80%] sm:w-[540px] bg-accessible-lavender">
                   <SheetHeader>
                     <SheetTitle>Quick Links</SheetTitle>
                   </SheetHeader>
                   <div className="px-4" data-aos="fade-up">
                    <Navlinks />
                   </div>
                 </SheetContent>
            </Sheet>
    )
}

export default SideBar;