import React from 'react';

import data from '../../data/data.json';
import './about.scss';
import ProfilePic from '../../media/images/profile-pic.png';

const about = () => {
    return (
        <div className="about-container">
            <div className="about-about-container">
                <div className="about-content-container">
                    <div className="about-content">
                        <div className="about-title">
                            About Me
                        </div>
                        <div className="about-text">
                            <p>{data.aboutText}</p>
                        </div>
                        <div className="about-title">
                            Contact
                        </div>
                        <div className="about-contact-container">
                            <h3>{data.fullName}</h3>
                            <h4>{data.local}</h4>
                            <div className="gmail">
                                <img src="/assets/svg/cellphone-logo.svg" className="about-contact-icons-item" alt="Phone" />
                                <p>{data.phone}</p>
                            </div>
                            <div className="gmail">
                                <img src="/assets/svg/google-logo.svg" className="about-contact-icons-item" alt="Gmail" />
                                <p>{data.email}</p>
                            </div>
                            <div className="about-contact-icons">
                                <a href={data.linkedin} target="_blank" rel="noopener noreferrer"><img src="/assets/svg/linkedin-logo.svg" className="about-contact-icons-item" alt="LinkedIn" /></a>
                                <a href={data.github} target="_blank" rel="noopener noreferrer"><img src="/assets/svg/github-logo.svg" className="about-contact-icons-item" alt="GitHub" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="about-custom-horizontal-pipe" />
                </div>
                <div className="about-custom-vertical-pipe" />
                <img src={ProfilePic} alt="Profile" className="about-education-img" />
            </div>
            <div className="about-background">
                <div className="about-education">
                    <div className="about-education-content">
                        <div className="about-education-text">
                            {data.educationBackground.map(education => (
                                <div key={education.id}>
                                    <h3>{education.graduation}</h3>
                                    <p>{education.at} - {education.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-education-title">
                        Education
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-education-content">
                        <div className="about-education-text">
                            {data.courses.map(course => (
                                <div key={course.id}>
                                    <h3>{course.title}</h3>
                                    <p>{course.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-education-title">
                        Courses
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-education-content">
                        <div className="about-education-text">
                            {data.experiences.map(experience => (
                                <div key={experience.id}>
                                    <h3>{experience.title}</h3>
                                    <p>{experience.at} ({experience.period})</p>
                                    <p>{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-education-title">
                        Experience
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-education-content">
                        <div className="about-education-text">
                            {data.technicalSkills.map(skill => (
                                <div key={skill.id}>
                                    <h3>{skill.title}</h3>
                                    <p>{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-education-title">
                        Technical Skills
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;
