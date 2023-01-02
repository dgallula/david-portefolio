import React from 'react';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";
import ProjectCard from './ProjectCard';
import projectsArr from '../json/projects.json';



export default function Projects() {

    useEffect(() => {
        //Mouseover projects cubus animation
        const projectsSlides = document.querySelectorAll(".swiper-projects .swiper-slide .project-card-component");

        projectsSlides.forEach(projectSlide => {
            projectSlide.addEventListener('mouseover', (e) => {
                projectSlide.classList.add("hover-project");
            });

            projectSlide.addEventListener('mouseout', (e) => {
                projectSlide.classList.remove("hover-project");
            });
        });

        //Open Project Popup
        const projectBtns = document.querySelectorAll(".swiper-projects .swiper-slide .project-card-component button");
        const projectsPopups = document.querySelectorAll(".projects-popups .project-popup");
        const projectsPopupsWrrapers = document.querySelectorAll(".projects-popups .popup-wrraper");
        const closePopups = document.querySelectorAll(".projects-popups .project-popup button.close-popup");

        projectBtns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                projectsPopups[index].classList.add("show");
                projectsPopupsWrrapers[index].classList.add("show");
            });
        });

        closePopups.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                //console.log(index);
                projectsPopups[index].classList.remove("show");
                projectsPopupsWrrapers[index].classList.remove("show");
            });
        });
    }, [])


    return (
        <div className="projects-component" id="projects">
            <div className='container'>
                <h2>Projects</h2>

                <div className="swiper-projects">
                    <Swiper
                        modules={[Navigation, Pagination]}

                        navigation
                        //onSlideChange={() => console.log('slide change')}
                        //onSwiper={(swiper) => console.log(swiper)}

                        breakpoints={
                            {
                                0: {
                                    spaceBetween: 90,
                                    slidesPerView: 1,
                                },
                                1024: {
                                    spaceBetween: 90,
                                    slidesPerView: 3,
                                }
                            }
                        }
                    >

                        {
                            projectsArr.map((project) => {
                                // console.log(project);
                                return (
                                    <SwiperSlide key={project.id}>
                                        <ProjectCard project_id={project.id} name={project.name} img={project.pre_img} 
                                        credit={project.credit} tools={project.tools} link={project.web_link} git={project.github} />
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                </div>

                <div className='projects-popups'>
                    {
                        projectsArr.map((project) => {

                            return (
                                <div className='popup-wrraper' key={project.id}>
                                    <div className='project-popup' id={`popup-${project.id}`} >

                                        <div className='content-div'>
                                            <h3>{project.name}</h3>
                                            <div className='tools'>

                                                <div className='tools-icnos'>
                                                    {
                                                        project.tools.map((tool) => {
                                                            return (
                                                                <div className='tool-icon' key={tool.tool}>
                                                                    <img src={require('../img/tools/' + tool.icon)} alt={tool.tool} />
                                                                </div>
                                                            );
                                                        })
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                        <div className='media-div'>
                                            <button className='close-popup'>x</button>
                                            <div className='project-video'>
                                                <video autoPlay controls muted loop>
                                                    <source src={require("../videos/" + project.pre_video)} type="video/mp4" />
                                                </video>
                                            </div>
                                            <div className='links'>
                                                {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer"><img className='github-icon' alt="github-icon" src={require('../img/guthub.png')} /> Github</a> : ""}
                                                {project.web_link ? <a href={project.web_link} target="_blank" rel="noopener noreferrer"><img className='link-icon' alt="link-icon" src={require('../img/link.png')} />Visit Website</a> : ""}
                                            </div>
                                            <div className='credit'>
                                                {project.credit}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </div>
    )
}
