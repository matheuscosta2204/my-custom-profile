import React from 'react';

import './project-card.scss';
import RightArrow from '../../../media/svg/rightArrow';
import { limitStringLenght } from '../../../helper/string';

const url = (filename) => `assets/images/${filename}.png`;

const projectCard = (props) => {
    return (
        <a 
            href={props.project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-container">
            <div className="card-header">
                <div className="card-thumb">
                    <img src={url(props.project.thumbImage)} className="card-image" alt="project-logo" />
                </div>
            </div>
            <div className="card-title">{props.project.title}</div>
            <div className="card-description">{limitStringLenght(props.project.description, 150, true)}</div>
            <div className="card-footer">
                <div className="footer-container">
                    <div style={{ width: '15px' }}>
                        <RightArrow />
                    </div>
                    <div className="item-footer">Go to</div>
                </div>
            </div>
        </a>
    );
}

export default projectCard;