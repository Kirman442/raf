import React, { useState, useEffect } from "react";
import "../css/ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Плавная прокрутка
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button id="ToTop"
                    aria-label="To op"
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                >
                    <i className="ti-arrow-up"></i>
                </button>
            )}
            <style>
                {`
          .ti-arrow-up {
            display: flow;
          }
        `}
            </style>
        </div>
    );
};

export default ScrollToTopButton;
