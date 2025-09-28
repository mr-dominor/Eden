import { FC } from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-purple-950 text-white py-10 px-6 md:px-16 max-w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Eden School</h2>
          <p className="text-sm leading-6">
            Nurturing young minds with excellence in education and character
            building for a brighter tomorrow.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <MapPin size={18} />
            <span>123 Learning Lane, Springfield</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Mail size={18} />
            <span>info@edenschool.edu</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="#academics" className="hover:text-white">Academics</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Eden School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
