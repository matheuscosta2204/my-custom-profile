import React from 'react';

import ProjectCard from './project-card/project-card';
import './profile.scss';

const url = (filename) => `assets/images/${filename}.png`;

const projects = [
    {
        id: 1,
        title:"Would You Rather",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        thumbImage:"would-you-rather-logo",
        backgroundImage:"would-you-rather-background",
        url:"https://github.com/matheuscosta2204/would-you-rather"
    },
    {
        id: 2,
        title:"Mobile Flashcards",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        thumbImage:"flashcards-logo",
        backgroundImage:"mobile-flashcards-background",
        url:"https://github.com/matheuscosta2204/mobile-flashcards"
    },
    {
        id: 3,
        title:"My Reads",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        thumbImage:"my-reads-logo",
        backgroundImage:"my-reads-background",
        url:"https://github.com/matheuscosta2204/udacity-my-reads"
    },
];

// import style from '../../style/style.json';

class Profile extends React.Component {
    state = {
        backgroundImage: ""
    }

    changeBackground = (backgroundImage) => this.setState({ backgroundImage });

    render() {
        const projectsStyle = {
            backgroundImage: `url(${url(this.state.backgroundImage)})`
        }

        if(this.state.backgroundImage === "") {
            return (
                <div className="projects-container">
                    <div className="projects">
                        {projects.map(project => (
                            <ProjectCard project={project} key={project.id} changeBackground={this.changeBackground} />
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="projects-container" style={{ zIndex: 1, ...projectsStyle }}>
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                        <div className="projects">
                            {projects.map(project => (
                                <ProjectCard project={project} key={project.id} changeBackground={this.changeBackground} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Profile;