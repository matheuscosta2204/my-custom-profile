import React from 'react';
import { Element } from 'react-scroll';

import ProjectCard from './project-card/project-card';
import './profile.scss';

const projects = [
    {
        title:"What is Lorem Ipsum?",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        thumbImage:"would-you-rather-thumb",
        backgroundImage:"",
        url:""
    },
    {
        title:"Why do we use it?",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        thumbImage:"mobile-flashcards-thumb",
        backgroundImage:"",
        url:""
    },
    {
        title:"Where does it come from?",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        thumbImage:"book-shelf-thumb",
        backgroundImage:"",
        url:""
    }
];

// import style from '../../style/style.json';

class Profile extends React.Component {
    render() {
        return (
            <div className="projects">
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}
            </div>
        );
    }
}

export default Profile;
