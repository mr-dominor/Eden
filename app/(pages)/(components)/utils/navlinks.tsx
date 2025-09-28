"use client"

import { usePathname } from "next/navigation"
import {
  HomeIcon,
  DollarSignIcon,
  PhoneIcon,
  InfoIcon,
} from "lucide-react"
import Link from "next/link"

const navlinks = {
  home: {
    name: "Home",
    url: "/",
    icon: HomeIcon,
  },
  about: {
    name: "About",
    url: "/about",
    icon: InfoIcon,
  },
  contact: {
    name: "Contact",
    url: "/contact",
    icon: PhoneIcon,
  },
}

const Navlinks = () => {
  const pathname = usePathname()

  return (
    <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
      {Object.values(navlinks).map((l, k) => {
        const isActive = pathname === l.url
        return (
          <li key={k}>
            <Link
              href={l.url}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors 
                ${
                  isActive
                    ? "bg-[#8c52ff] text-white shadow-md"
                    : "text-gray-500 hover:text-[#8c52ff] hover:bg-gray-100"
                }`}
            >
              <l.icon className="h-4 w-4" /> 
              {l.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navlinks