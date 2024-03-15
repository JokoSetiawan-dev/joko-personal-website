import { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import jsLogo from "../../assets/images/js-logo-black.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleMenuClick = () => {
    setNavOpen(false);
  };

  return (
    <div className="flex flex-row justify-between lg:px-28 items-center lg:h-20 sm:h-14 z-10 md:px-10 absolute w-full sm:px-5">
      <div>
        <Link to="/" className="cursor-pointer">
          <img src={jsLogo} alt="JavaScript Logo" className="lg:h-10 sm:h-7" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-row justify-between gap-8 sm:hidden md:flex md:text-sm lg:flex lg:text-base">
          <li>
            <Link to="#services" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold">Services</Link>
          </li>
          <li>
            <Link to="#skills" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold">Tools</Link>
          </li>
          <li>
            <Link to="#projects" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold">Works</Link>
          </li>
          <li>
            <Link to="#contacts" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className='lg:hidden md:hidden' onClick={handleNav}>
        <HiOutlineMenuAlt3 size={25}/>
      </div>
      <div ref={menuRef} className={navOpen ? 'fixed right-0 top-0 w-[50%] h-screen lg:hidden bg-[#92C7CF] transition-transform transform translate-x-0' : 'fixed left-[-100%] transition-transform transform translate-x-full'}>
        <div onClick={handleNav} className='flex justify-end pt-5 pr-5'>
          <IoMdClose size={25} color='white'/>
        </div>
        <ul className='flex flex-col items-center justify-center gap-7 py-7 text-sm text-white'>
          <li>
            <Link to="#services" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold ">Services</Link>
          </li>
          <li>
            <Link to="#skills" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold ">Tools</Link>
          </li>
          <li>
            <Link to="#projects" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold ">Works</Link>
          </li>
          <li>
            <Link to="#contacts" smooth onClick={handleMenuClick} className="cursor-pointer hover:font-bold">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
