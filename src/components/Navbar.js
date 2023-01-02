import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';

export default function Navbar() {
    return (
        <div className="navbar-component">

            <div className="nav-container">
                <ScrollIntoView className='scroll-to-element' selector="#main">
                    <Link to="#main" className="">Main</Link>
                </ScrollIntoView>
                <ScrollIntoView className='scroll-to-element' selector="#projects">
                    <Link to="#projects" className="">Projects</Link>
                </ScrollIntoView>
                <ScrollIntoView className='scroll-to-element' selector="#about">
                    <Link to="#about" className="">About</Link>
                </ScrollIntoView>
                <ScrollIntoView className='scroll-to-element' selector="#contact">
                    <Link to="#contact" className="">Contact</Link>
                </ScrollIntoView>
            </div>

        </div>
    )
}


