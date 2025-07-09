import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation(); // Get current route

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]); // Run whenever pathname changes

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const styles = {
    logo: "w-[20.25rem] h-[2.5rem] object-cover",
  };
  return (
    <header className="relative">
      <nav className="container mx-auto pt-[1.1025rem] px-2 relative">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <img src={logo} alt="brand-logo" className={styles.logo} />
          {/* Navlinks */}
          <ul className="flex gap-4 items-center justify-center">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="who-we-are">
              <li>Who We Are</li>
            </NavLink>
            <NavLink to="contact">
              <li>Contact Us</li>
            </NavLink>
          </ul>
          <div>
            <button className="cursor-pointer border bg-(--bg-btn) text-background-dark py-2.5 px-4 border-none rounded-3xl justify-self-end">
              Get started
            </button>
          </div>
        </div>

        {/* Mobile layout */}
        <section className="md:hidden flex justify-between items-center px-3">
          <img
            src={logo}
            alt="brand-logo"
            className="w-[150px] h-[30px] object-contain"
          />
          <button onClick={handleToggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </section>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <section className="fixed inset-0 top-[3rem] md:hidden m-4 pb-4 bg-gray-300/40 backdrop-blur-md border border-white/30 rounded-lg shadow-lg z-30 h-[50vh] animate-slide-in">
            <ul className="flex flex-col gap-8 p-4 h-full justify-center items-center">
              <NavLink to="/">
                <li className="font-medium">Home</li>
              </NavLink>
              <NavLink to="who-we-are">
                <li className="font-medium">Who We Are</li>
              </NavLink>
              <NavLink to="contact">
                <li className="font-medium">Contact Us</li>
              </NavLink>
              <button className="cursor-pointer border bg-(--bg-btn) text-background-dark py-2.5 px-4 border-none rounded-3xl justify-self-end font-medium">
                Get started
              </button>
            </ul>
          </section>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
