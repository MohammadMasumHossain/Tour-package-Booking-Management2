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
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 gap-8">

        {/* Logo + Address (Left) */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <p className="text-sm leading-6">
            <strong className="text-lg">Pack&Go</strong><br />
            Bashundhara Residential Area, Dhaka<br />
            Email: contact@packandgo.com<br />
            Phone: 0191234567
          </p>
        </div>

        {/* Legal Links (Center) */}
        <div className="flex flex-col items-center md:items-center md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="text-sm space-y-2">
            <li>
              <NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacypage" className="hover:underline">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Icons + Copyright (Right) */}
        <div className="flex flex-col items-center md:items-end md:w-1/3 space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-white">
            <a
              href="https://www.facebook.com/hm.rana.161"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-masum-hossain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
          <span className="text-xs md:text-sm text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Pack&Go. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
