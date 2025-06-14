// import React from 'react';
// import { FaYoutube, FaFacebookF } from 'react-icons/fa';
// import { IoLogoLinkedin } from 'react-icons/io5';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-5">
//       <div className="max-w-5xl mx-auto text-center space-y-6">
        
        
//         <h1 className="text-3xl font-extrabold text-green-400 tracking-wide">
//           Pack&Go
//         </h1>

    
//         <div className="space-y-1 text-sm">
//           <p>📧 <a href="mailto:hello@pack&Go.com" className="hover:text-green-400 transition">Pack&Go.com</a></p>
//           <p>📞 +880192345678</p>
//         </div>

        

      
//         <div className="flex justify-center gap-6 mt-4">
//           {[{
//             icon: <IoLogoLinkedin />,
//             link: 'https://www.linkedin.com/in/mohammad-masum-hossain',
//             color: 'text-blue-600',
//           }, {
//             icon: <FaYoutube />,
//             link: 'https://www.youtube.com/',
//             color: 'text-red-600',
//           }, {
//             icon: <FaFacebookF />,
//             link: 'https://www.facebook.com/hm.rana.161',
//             color: 'text-blue-800',
//           }].map(({ icon, link, color }, i) => (
//             <a
//               key={i}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:${color} hover:shadow-lg hover:scale-110 transition transform duration-300`}
//               aria-label="social link"
//             >
//               <span className={`text-2xl ${color}`}>{icon}</span>
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <p className="text-xs text-gray-500 mt-6">
//          Copyright © {new Date().getFullYear()}  All rights reserved By Pack&Go co.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
{/* Social Media + Copyright (on the same line) */}
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router';
import logo from "../../assets/pack&go.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Address */}
        <div>
         
          <p className="text-sm leading-6">
            <strong className="text-lg">Pack&Go</strong><br />
            Bashundhara Residential Area, Dhaka<br />
            Email: contact@packandgo.com<br />
            Phone: 0191234567
          </p>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="text-sm space-y-2">
            <li>
              <NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:underline">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Icons + Copyright */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-between items-center text-sm text-gray-400">
            
            {/* Social Icons */}
            <div className="flex space-x-4 text-xl text-white">
              <a href="https://www.facebook.com/hm.rana.161" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/mohammad-masum-hossain" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>

            {/* Copyright */}
            <span className="ml-8 whitespace-nowrap text-xs md:text-sm text-gray-400">
             &copy; {new Date().getFullYear()} Pack&Go. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
