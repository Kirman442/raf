import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const getMenuItems = (pathname, closeMenu) => {
    const validPaths = ["/", "/Services", "/ourservices"];
    if (validPaths.some((path) => pathname.startsWith(path))) {
        const menuItems = [
            { path: "/", label: "Главная" },
            { path: "/Services", label: "Услуги" },
            { path: "/about", label: "О компании" },
            // { path: "/ourservices", label: "Наши услуги" },
        ];
        const filteredMenuItems = menuItems.filter((item) => !(pathname === "/" && item.path === "/"));
        return (
            <>
                {filteredMenuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            className="custom-link"
                            to={item.path}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </>

        );
    }

    if (pathname === "/about") {
        return (
            <li>
                <Link className="custom-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
        );
    }

    if (pathname.startsWith("/Services")) {
        return (
            <>
                <li>
                    <Link className="custom-link" to="/" onClick={closeMenu}>Главная услуги</Link>
                </li>
                <li>
                    <Link className="custom-link" to="/about" onClick={closeMenu}>About</Link>
                </li>
            </>
        );
    }

    return null;
};

const Header = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Логика скроллинга
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // console.log(`Current Scroll: ${currentScrollY}, Last Scroll: ${lastScrollY}`);

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // console.log("Scrolling down: hiding header");
            setIsVisible(false);
        } else {
            // console.log("Scrolling up: showing header");
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // console.log("Scrolling...", window.scrollY);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close menu
    };


    return (
        <header className="header-appear"
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.3s ease",
            }}
        >
            {/* --start navigation -- */}
            <nav className="navbar navbar-default bootsnav header-light background-white nav-box-width navbar-expand-lg"> {/* navbar-top */}
                <div className="container-fluid nav-header-container">
                    {/* Mobile menu button */}
                    <div className="col accordion-menu pe-0 pe-md-3">
                        <button
                            type="button"
                            className="navbar-toggler collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-collapse-toggle-1"
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="sr-only">toggle navigation</span>
                            <span className="icon-bar navbar-menu-trigger"></span>
                            <span className="icon-bar navbar-menu-trigger"></span>
                            <span className="icon-bar navbar-menu-trigger"></span>
                        </button>

                        {/* Navi menu */}
                        {/* <div className="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1"> */}
                        <div className={`navbar-collapse collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbar-collapse-toggle-1">
                            <ul id="accordion" className="nav navbar-nav no-margin alt-font text-normal">
                                {getMenuItems(location.pathname, closeMenu)}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
