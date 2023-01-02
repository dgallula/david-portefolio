import React from 'react';
import { useEffect } from "react";

export default function Contact() {


    useEffect(() => {
        const blackIcons = document.querySelectorAll(".social-icons .icon-div a");
        const iconsDivs = document.querySelectorAll(".social-icons .icon-div");

        blackIcons.forEach((btn, index) => {
            btn.addEventListener('mouseover', () => {
                console.log("in");
                iconsDivs[index].classList.add("color");
            });
            btn.addEventListener('mouseout', () => {
                console.log("out");
                iconsDivs[index].classList.remove("color");
            });
        });
    }, [])



    return (
        <div className="contact-component" id="contact">
            <div className='contact-container'>
                <h2>Contact</h2>

                <div className='contact-flex'>
                    <div className='content-div'>
                        <p>Feel free to contact me!</p>
                        <div className='social-icons'>
                            <div className='icon-div'>
                                <a href="https://www.linkedin.com/in/gallula-david-1671b0227//" target="_blank" rel="noopener noreferrer">
                                    <img className='black-icon' src={require('../img/icons/linkedin.png')} alt="linkedin" />
                                    <img src={require('../img/icons/linkedin-c.png')} alt="linkedin" />
                                </a>
                            </div>
                            <div className='icon-div'>
                                <a href="https://github.com/dgallula" target="_blank" rel="noopener noreferrer">
                                    <img className='black-icon' src={require('../img/icons/github.png')} alt="github"/>
                                    <img src={require('../img/icons/github-c.png')} alt="github"/>
                                </a>
                            </div>
                            <div className='icon-div'>
                                <a href="mailto:dgallula@gmail.com?subject=Mail from David Site" target="_blank" rel="noopener noreferrer">
                                    <img className='black-icon' src={require('../img/icons/mail.png')} alt="mail" />
                                    <img src={require('../img/icons/mail-c.png')} alt="mail" role="presentation" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='phone-gif'>
                        <img src={require('../img/pink-calling.gif')} alt="phone" />
                    </div>
                </div>



            </div>


            <div className='footer'>
                © 2023 Copyright: David Gallula Websites
            </div>
        </div>
    )
}
