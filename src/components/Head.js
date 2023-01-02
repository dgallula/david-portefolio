import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Tilt from 'react-tilt'

export default function Head() {

    useEffect(() => {

        const togglerHamburger = document.querySelector("#toggle-hamburger");
        const navbarComponent = document.querySelector(".navbar-component");
        const navItems = document.querySelectorAll(".nav-container .scroll-to-element");

        togglerHamburger.addEventListener('change', () => {
            navbarComponent.classList.toggle('show');
        });

        navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                togglerHamburger.checked = false;
                navbarComponent.classList.toggle('show');
            });
        });

    }, [])



    return (
        <div className="head-component" id="main">

            <input id="toggle-hamburger" type="checkbox"></input>

            <label htmlFor="toggle-hamburger" className="hamburger">
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
            </label>

            <div className="title">
                <Tilt className="Tilt" options={{ max: 15 }}  >
                    <div className="Tilt-inner">

                        <h1>David Gallula</h1>
                        <div className="wrapper">
                            <div className="typing-demo">
                                Full-stack Web Developer
                            </div>
                        </div>
                        <div className="about-text" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
                            Welcome to my Portfolio! <br />
                            Here you can see my last projects, <br />
                            and a little bit about me.
                        </div>

                    </div>
                </Tilt>
            </div>

            <div className="arrow-text">Read More</div>
            <div className="down-arrow"></div>

        </div>
    )
}

