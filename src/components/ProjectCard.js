import React from 'react';

export default function ProjectCard(props) {

    let img_name = props.img;
    let project_name = props.name;

    return (
        <div className="project-card-component">
            <img src={require('../img/' + img_name)} alt="project" />
            <div className='project-title'>
                <h3>{project_name}</h3>
                <button>Read more </button>
            </div>

            <div className='mobile-details'>
                <h4>{project_name}</h4>
                <div className='tools'>
                    <div className='tools-icnos'>
                        {
                            props.tools.map((tool) => {
                                return (
                                    <div className='tool-icon' key={tool.tool}>
                                        <img src={require('../img/tools/' + tool.icon)} alt={tool.tool} />
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
                <div className='links'>
                    {props.git ? <a href={props.git} target="_blank" rel="noopener noreferrer"><img className='github-icon' alt="github-icon" src={require('../img/guthub.png')} /> Github</a> : ""}
                    {props.link ? <a href={props.link} target="_blank" rel="noopener noreferrer"><img className='link-icon' alt='link-icon' src={require('../img/link.png')} />Visit Website</a> : ""}
                </div>
            </div>

        </div>
    )
}


