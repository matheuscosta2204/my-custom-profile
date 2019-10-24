import React from 'react';

import './about.scss';
import ProfilePic from '../../media/images/profile-pic.png';

const about = () => {
    return (
        <div className="about-container">
            <div className="about-education-container">
                <div className="about-education-content">
                    <div className="about-education-title">
                        About Me
                    </div>
                    {/* <div className="about-custom-horizontal-pipe" /> */}
                    <div className="about-education-text">
                        <ul>
                            <li>Graduação</li>
                            <li>Courses</li>
                        </ul>
                    </div>
                    <div className="about-education-title">
                        Professional Background
                    </div>
                    {/* <div className="about-custom-horizontal-pipe" /> */}
                    <div className="about-education-text">
                        <ul>
                            <li>Barão de Mauá</li>
                        </ul>
                    </div>
                </div>
                <div className="about-custom-vertical-pipe" />
                <div className="about-education-img">
                    <img src={ProfilePic} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default about;
