import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const openNav = () => {
    setNavbar(!navbar);
  };
  return (
    <Navbar>
      <header className="container mx-auto px-[10rem]   flex justify-between py-4 items-center sm:px-[1rem] sm:items-start md:px-[1rem] md:items-start ">
        <div>
          <Link
            to="/"
            className="text-secondary text-2xl font-bold logo sm:text-1xl"
          >
            Blog<span className="text-primary">Xite</span>
          </Link>
        </div>
        <div className={navbar ? "navLink" : "navClose"}>
          <li className="relative group">
            <a href="/" className="px-4 py-2">
              Home
            </a>
            <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span>
          </li>
          <li className="relative group">
            <a href="/" className="px-4 py-2">
              Articles
            </a>
            <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span>
          </li>
          <li className="relative group">
            <a href="/" className="px-4 py-2">
              About
            </a>
            <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span>
          </li>
          <li className="relative group">
            <a href="/" className="px-4 py-2">
              Pricing
            </a>
            <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span>
          </li>
          <li className="relative group">
            <a href="/" className="px-4 py-2">
              Faq
            </a>
            <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span>
          </li>
          <li className="relative group">
            <a href="/" className="px-4 py-2">
              Contact
            </a>
            <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span>
          </li>
          <li className="relative group profile">
            <a href="/" className="px-4 py-2">
              <img src="https://i.ibb.co/4pDNDk1/avatar.png" alt="" /> &nbsp;
              &nbsp;<span className="text-primary">Obilomania</span>
            </a>
            {/* <span className="text-blue-500 h-1 w-[80%] absolute transition-all duration-500 font-bold right-[0%] bottom-0  group-hover:right-[20%] opacity-0 group-hover:opacity-100 group-hover:h-[.1rem] bg-blue-500 group-hover:w-[50%] group-hover:mt-4"></span> */}
          </li>
          <Link
            to="/login"
            className="border-2 bg-white-500 border-blue-500 px-6 py-1 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border-2 bg-blue-500 border-blue-500 px-6 py-1 rounded-full text-white font-semibold hover:bg-white hover:text-primary transition-all duration-500"
          >
            Register
          </Link>

          <button className="border-2 bg-blue-500 border-blue-500 px-6 py-1 rounded-full text-white font-semibold hover:bg-white hover:text-primary transition-all duration-500">
            Logout
          </button>
        </div>
        <p className="hamburger text-secondary" onClick={openNav}>
          {navbar ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </p>
      </header>
    </Navbar>
  );
};

const Navbar = styled.div`
  background: var(--white);
  .logo {
    font-weight: bolder;
  }
  a {
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navLink {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    z-index: 10;
  }
  .navClose {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    z-index: 10;
  }
  .hamburger {
    display: none;
  }
  .profile a img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  @media screen and (max-width: 900px) {
    a {
      font-weight: 600;
      color: white;
    }
    button {
      color: white;
      border: 2px solid white;
    }
    .navLink {
      width: 100%;
      height: 93vh;
      background: #183b56;
      position: absolute;
      left: 0;
      top: 7vh;
      padding: 2rem 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 3.5rem;
      transition: 500ms all ease;
    }
    .hamburger {
      font-size: 1.4rem;
      display: flex;
      cursor: pointer;
    }
    .navClose {
      width: 100%;
      height: 93vh;
      background: #183b56;
      position: absolute;
      left: -100%;
      top: 7vh;
      padding: 2rem 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 3.5rem;
      transition: 500ms all ease;
    }
  }
  @media screen and (max-width: 600px) {
    a {
      font-weight: 600;
      color: white;
    }
    button {
      color: white;
      border: 2px solid white;
    }
    .navLink {
      width: 100%;
      height: 93vh;
      background: #183b56;
      position: absolute;
      left: 0;
      top: 7vh;
      padding: 2rem 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 3.5rem;
      transition: 500ms all ease;
    }
    .hamburger {
      font-size: 1.4rem;
      display: flex;
      cursor: pointer;
    }
    .navClose {
      width: 100%;
      height: 93vh;
      background: #183b56;
      position: absolute;
      left: -100%;
      top: 7vh;
      padding: 2rem 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 3.5rem;
      transition: 500ms all ease;
    }
  }
`;

export default Header;
