import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import leaf from "../assets/green-leaf.png";
import logo from "../assets/logo.png";

function Footer() {
  // Get current path route's name
  const location = useLocation();

  // Check if it's on contact-us page/route
  const isContactPage = location.pathname === "/contact";

  return (
    <footer className="pt-24">
      {/* 3 Column Grid Section */}
      <section className="py-16 px-8 md:px-16 mx-auto gap-10 justify-between grid grid-cols-1 md:[grid-template-columns:2fr_1fr_1fr] 2xl:px-0">
        {/* Get in Touch */}
        <article>
          <h3 className="mb-5 font-bold text-xl">Get in touch</h3>
          <p className="font-[sans] text-[var(--text-secondary)] mb-10 text-base font-medium ">
            Sprintfixer - Trusted hands, at your service.
          </p>
          <div className="flex space-x-4 footer-icons">
            <NavLink to="#">
              <span
                className="cursor-pointer hover:text-shadow-green-50"
                style={{ color: "var(--primary-color)" }}
              >
                <FaFacebook size={24} />
              </span>
            </NavLink>
            <NavLink to="#">
              <span
                className="cursor-pointer"
                style={{ color: "var(--primary-color)" }}
              >
                <IoLogoInstagram size={24} />
              </span>
            </NavLink>
            <NavLink to="#">
              <span
                className="cursor-pointer"
                style={{ color: "var(--primary-color)" }}
              >
                <FaTwitter size={24} />
              </span>
            </NavLink>
          </div>
        </article>
        {/* === Company Info === */}
        <article>
          <h3 className="mb-5 font-bold text-xl">Company Info</h3>
          <ul className="space-y-2 text-[var(--text-secondary)] text-base font-medium">
            <NavLink to="">
              <li className="hover:text-gray-800 mb-2.5">About Us</li>
            </NavLink>
            <NavLink to="">
              <li className="hover:text-gray-800 mb-2.5">
                Register as an artisan
              </li>
            </NavLink>
            <NavLink>
              <li className="hover:text-gray-800 mb-2.5">We are hiring</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="hover:text-gray-800">Contact us</li>
            </NavLink>
          </ul>
        </article>
        {/* Features */}
        <article className="md:justify-self-end">
          <h3 className="mb-5 font-bold text-xl">Features</h3>
          <ul className="text-[var(--text-secondary)] text-base font-medium">
            <NavLink to="">
              <li className="hover:text-gray-800 mb-2.5">In-app wallet</li>
            </NavLink>
            <NavLink to="">
              <li className="hover:text-gray-800 mb-2.5">Marketplace Access</li>
            </NavLink>
            <NavLink to="">
              <li className="hover:text-gray-800 mb-2.5">Live Chat</li>
            </NavLink>
            <NavLink to="">
              <li className="hover:text-gray-800">Training and bootcamps</li>
            </NavLink>
          </ul>
        </article>
      </section>
      <div className="container mx-auto pt-5 px-3 2xl:px-0 relative">
        <img src={logo} className="max-w-[335px]" />
        <div className="absolute top-20 left-40 md:left-65 w-fit -z-1">
          <img src={leaf} className="object-cover w-20 h-20 max-h-[50%]" />
        </div>
      </div>
      {/* Dynamicaly render Copyright background color section */}
      <p
        className={` ${isContactPage ? "bg-[var(--accent-clr)] text-dark" : "bg-(--bg-green) text-white"} py-[17px] text-center  text-base font-medium mt-14`}
      >
        Copyright &copy; {new Date().getFullYear()}. All right reserved.
      </p>
    </footer>
  );
}

export default Footer;