"use client";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NextTopLoader from "nextjs-toploader";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const scrollFunc = () => {
    if(window.scrollY > 80){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  window.addEventListener("scroll", scrollFunc)

  return (
    <div className={`fixed top-0 left-0 w-full h-20  transition duration-[.2s] ${scroll && "bg-white shadow"}`}>
      <div className="max-w-screen-xl mx-auto px-5">
        <nav className="lg:flex items-center justify-between h-20">
          <div className="w-44">
            <Link href="/">
              <Image
                src="/images/DesignAGENCY.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="lg:flex items-center justify-center gap-5 text-[15px] font-medium hidden">
            <Link
              href="/"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Home
            </Link>
            <Link
              href="/team"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Team
            </Link>
            <Link
              href="/service"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Service
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Projects
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Testimonials
            </Link>

            <div className="border border-[#20B15A] px-5 h-9 flex items-center rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer">
              <Link href="/">Login</Link>
            </div>
            <div className="bg-[#20B15A] text-white px-5 h-9 flex items-center rounded-lg cursor-pointer">
              <Link href="/">Register</Link>
            </div>
          </div>

          <div
            className="flex justify-end -mt-5 lg:hidden"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>

          {isClick && (
            <div className="flex flex-col items-center justify-center gap-6 text-[15px] font-medium min-h-[91vh] ">
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Team
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Service
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Projects
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Testimonials
              </Link>

              <Link href="/">
                <div className="border border-[#20B15A] px-5 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer">
                  Login
                </div>
              </Link>
              <Link href="/">
                <div className="bg-[#20B15A] text-white px-5 py-2 rounded-lg cursor-pointer">
                  Register
                </div>
              </Link>
            </div>
          )}
        </nav>
      </div>
      <NextTopLoader
        color="#20B15A"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
    </div>
  );
};

export default Navbar;
