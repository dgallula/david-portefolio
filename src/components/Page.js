import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';


export default function Page() {

    return (
        <div className="page-component">
            <Navbar />
            <Head />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}
