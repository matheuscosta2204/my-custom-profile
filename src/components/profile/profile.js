import React from 'react';

import data from '../../data/data.json';
import './profile.scss';
import ProjectCard from './project-card/project-card';
import DownArrow from '../../media/svg/downArrow';

class Profile extends React.Component {
    state = {
        backgroundImage: ""
    }

    changeBackground = (backgroundImage) => this.setState({ backgroundImage });

    render() {
        return (
            <div className="projects-container">
                <div className="projects">
                    {data.projects.map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
                <div className="projects-down-arrow" onClick={() => this.props.scrollTo(2.9)}>
                    <DownArrow />
                </div>
            </div>
        );
    }
}

export default Profile;