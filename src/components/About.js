// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Tools from './Tools';

export default function About() {

    return (
        <div className="about-component" id="about">
            <div className='about-container'>
                <div className='text-about'>
                   
                     <p>
                        Hello,
                        my name is David<span role="img" aria-label='hello'>😊</span>
                        <br />
                        I'm a Full-stack web developer (frontend oriented).
                        <br />
                        I have a great passion for the field and a desire to progress and develop.
                        <br />

                    </p>
                    <ul>
                        <li>Currently, I am a Freelancer for projects in Angular and React .</li>
                        <li>Graduated Full Stack Developer course at John Bryce.</li>
                    </ul>
                </div>
                <div className='tools-about'>
                    <Tools />
                </div>
            </div>

        </div>
    )
}


