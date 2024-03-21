import React, { useRef, useState, useEffect } from 'react';
import "../styles/Navbar.css"
import { Link, BrowserRouter, Route } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const dropdownBtn = document.querySelectorAll(".dropdown-btn");
        const dropdown = document.querySelectorAll(".dropdown");
        const hamburgerBtn = document.getElementById("hamburger");
        const navMenu = document.querySelector(".menu");
        const links = document.querySelectorAll(".dropdown a");

        const setAriaExpandedFalse = () => {
            dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
        };

        const closeDropdownMenu = () => {
            dropdown.forEach((drop) => {
                drop.classList.remove("active");
                drop.addEventListener("click", (e) => e.stopPropagation());
            });
        };

        const toggleHamburger = () => {
            navMenu.classList.toggle("show");
        };

        dropdownBtn.forEach((btn) => {
            btn.addEventListener("click", function (e) {
                const dropdownIndex = e.currentTarget.dataset.dropdown;
                const dropdownElement = document.getElementById(dropdownIndex);

                dropdownElement.classList.toggle("active");
                dropdown.forEach((drop) => {
                    if (drop.id !== btn.dataset["dropdown"]) {
                        drop.classList.remove("active");
                    }
                });
                e.stopPropagation();
                btn.setAttribute(
                    "aria-expanded",
                    btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
                );
            });
        });

        links.forEach((link) =>
            link.addEventListener("click", () => {
                closeDropdownMenu();
                setAriaExpandedFalse();
                toggleHamburger();
            })
        );


        document.documentElement.addEventListener("click", () => {
            closeDropdownMenu();
            setAriaExpandedFalse();
        });


        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeDropdownMenu();
                setAriaExpandedFalse();
            }
        });

    
        hamburgerBtn.addEventListener("click", toggleHamburger);


        return () => {
            dropdownBtn.forEach(btn => btn.removeEventListener("click", toggleHamburger));
            links.forEach(link => link.removeEventListener("click", toggleHamburger));
            document.documentElement.removeEventListener("click", toggleHamburger);
            document.removeEventListener("keydown", toggleHamburger);
            hamburgerBtn.removeEventListener("click", toggleHamburger);
        };
    }, []);

    const Location = () => {
      window.location.href="/home"
    }

    var home = () => {
      window.location.href ="./homeworks.html"
    }


  return (
    
    <header id="nav-menu" aria-label="navigation bar">
      <div className="container">
        <div className="nav-start">
          <a className="logo" href="/">
            <img src="https://www.svgrepo.com/show/428083/lab.svg" width="35" height="35" alt="Inc Logo" onClick={Location}/>
          </a>
          <nav className="menu">
            <ul className="menu-bar">
              <li>
                <button className="nav-link dropdown-btn" data-dropdown="dropdown1" aria-haspopup="true" aria-expanded="false" aria-label="browse">
                  Curses
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown1" className={`dropdown ${isOpen ? 'active' : ''}`}>
                  <ul role="menu">
                    <li role="menuitem">
                      <a className="dropdown-link" href="#best-of-the-day">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/botd.svg" className="icon" />
                        <div>
                          <span className="dropdown-link-title">Curses</span>
                          <p>All your courses here</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <Link className="dropdown-link" to="/GameZone">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg" className="icon" />
                        <div>
                          <span className="dropdown-link-title">GameZone</span>
                          <p>Creaciones del salon</p>
                        </div>
                      </Link>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#subscriptions">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg" className="icon" />
                        <div>
                          <span className="dropdown-link-title">Subscriptions</span>
                          <p>your subscriptions</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#creative-feed">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg" className="icon" />
                        <div>
                          <span className="dropdown-link-title">Creative Feed</span>
                          <p>See trending creations</p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul role="menu">
                    <li className="dropdown-title">
                      <span className="dropdown-link-title">Comming</span>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#adobe-xd">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/xd.svg" />
                        Adobe XD
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#after-effect">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/ae.svg" />
                        After Effect
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#sketch">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sketch.svg" />
                        Sketch
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#indesign">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/indesign.svg" />
                        Indesign
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#figma">
                        <img src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/figma.svg" />
                        Figma
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button className="nav-link dropdown-btn" data-dropdown="dropdown2" aria-haspopup="true" aria-expanded="false" aria-label="discover">
                  Docs
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown2" className="dropdown">
                  <ul role="menu">
                    <li>
                      <span className="dropdown-link-title">Browse Categories</span>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="homeworks.html">Documentation</a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#illustrations">curses</a>
                    </li>
                  </ul>
                  <ul role="menu">
                    <li>
                      <span className="dropdown-link-title">Download App</span>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#mac-windows">MacOS & Windows</a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#linux">Linux</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><Link className='nav-link' to="/">Home</Link></li>
              <li><Link className='nav-link' to="/Homeworks">Homeworks</Link></li>
              <li><Link className='nav-link' to="/About">About</Link></li>
              <li><Link className='nav-link' to="/Calculator">Calculator</Link></li>
              <li><Link className='nav-link' to="/GameZone">GameZone</Link></li>
              <li><a href="https://9000-monospace-ai-1710623307682.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev/?monospaceUid=269012">IA CodingLab</a></li>
            </ul>
          </nav>
        </div>

        <div className="nav-end">
          <div className="right-container">
            <form className="search" role="search">
              <input type="search" name="search" placeholder="Search" />
              <i className="bx bx-search" aria-hidden="true"></i>
            </form>
            <a href="#profile">
              <img src="https://avatars.githubusercontent.com/u/134900313?v=4" width="30" height="30" alt="user image" />
            </a>
            <button className="btn btn-primary"><Link to="/*">Loggin</Link></button>
          </div>

          <button id="hamburger" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
