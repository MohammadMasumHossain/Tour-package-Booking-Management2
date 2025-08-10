import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router';
import logo from "../../assets/pack&go.png";

const paymentMethods = [
  { name: "Visa", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
  { name: "MasterCard", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" },
  { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "American Express", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" },
   { name: "Bitcoin", url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" },
  { name: "Apple Pay", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Pack&Go info */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm leading-6">
            <strong className="text-lg">Pack&Go</strong><br />
            Bashundhara Residential Area, Dhaka<br />
            Email: contact@packandgo.com<br />
            Phone: 0191234567
          </p>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="text-sm space-y-2">
            <>
            <li>
              <NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/page" className="hover:underline">Privacy Policy</NavLink>
            </li>
            </>
          </ul>
        </div>

       
        {/* Payment Methods */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Payment Methods</h3>
          <div className="grid grid-cols-4 gap-3">
            {paymentMethods.map((method) => (
              <div key={method.name} className="bg-white rounded-md p-2 flex justify-center items-center border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                <img src={method.url} alt={method.name} className="h-8 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
         {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
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
          <span className="text-xs md:text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Pack&Go. All rights reserved.
          </span>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
