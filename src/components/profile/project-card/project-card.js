import React from 'react';

import './project-card.scss';

const url = (filename) => `assets/images/${filename}.png`;

const projectCard = (props) => {
    return (
        <div className="card-container">
            <div className="card-header">
                <div className="card-thumb">
                    <img src={url(props.project.thumbImage)} className="card-image" />
                </div>
                <div className="card-title">{props.project.title}</div>
            </div>
            <div className="card-description">{props.project.description}</div>
        </div>
    );
}

export default projectCard;