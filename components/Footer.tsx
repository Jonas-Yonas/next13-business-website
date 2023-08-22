import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CustomButton, Input } from ".";
import { footerLinks } from "./data/data";

const Footer = () => {
  return (
    <footer className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -mx-4">
          {footerLinks.map(({ id, title, links }) => (
            <div className="w-auto px-4" key={id}>
              <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">
                {title}
              </h2>

              <div className="mb-10 flex flex-col gap-3">
                {links.map((link, index) => (
                  <Link
                    href={`#`}
                    key={index}
                    className="text-gray-800 hover:text-gray-700"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="w-auto px-4">
            <h2 className="font-semibold text-gray-800 tracking-wide text-sm mb-3">
              Get in touch
            </h2>

            <div className="mb-10 flex flex-col gap-3 text-gray-900">
              <p>+251 911 884 404</p>
              <p>support@nexussolutions.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* social links */}
      <div className="border-t border-gray-200 py-4">
        <p className="container px-5 mx-auto text-gray-500 mt-2">
          Subscribe to our Newsletter
        </p>

        <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-2/4 lg:w-1/3 flex justify-center md:justify-start">
            <Input
              styles="w-full flex-grow md:w-40 bg-gray-100 sm:mr-4 mr-2"
              placeholder="Email address"
              type="email"
            />

            <CustomButton
              title="Subscribe"
              containerStyle={`block bg-[#7E22CE] text-white px-6 py-2.5 text-md rounded hover:bg-purple-900 focus:outline-none flex-col items-center`}
            />
          </div>

          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-500 text-xl hover:text-purple-600 hover:scale-125 ease-in-out duration-300 cursor-pointer">
              <FaFacebookF />
            </a>
            <a className="ml-3 text-gray-500 text-xl hover:text-purple-600 hover:scale-125 ease-in-out duration-300 cursor-pointer">
              <FaTwitter />
            </a>
            <a className="ml-3 text-gray-500 text-xl hover:text-purple-600 hover:scale-125 ease-in-out duration-300 cursor-pointer">
              <FiInstagram />
            </a>
            <a className="ml-3 text-gray-500 text-xl hover:text-purple-600 hover:scale-125 ease-in-out duration-300 cursor-pointer">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>

      {/* copyright section */}
      <div className="bg-[#001a36]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
          <p className="text-gray-300 text-sm text-center">
            &copy; 2023 Nexus Solutions |
            <Link
              href={`google.com`}
              className="text-[#7e22ce9d] ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @nexus-solutions
            </Link>
          </p>
          <p className="text-gray-600 text-sm text-center pt-1">
            Designed by{" "}
            <span className="text-blue-800 cursor-pointer">
              Nexus Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
