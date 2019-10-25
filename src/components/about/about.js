import React from 'react';

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
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;I am a Javascript Developer, graduated in Computer Science at Barão de Mauá's University since 2018. I have been working with ReactJS and React Native for the past 3 years. I also have worked with .NET Core, ExpressJS, PHP, SQL Server and Mongodb.</p>
                        </div>
                        <div className="about-title">
                            Contact
                        </div>
                        <div className="about-contact-container">
                            <h3>Matheus Heitor Sant'ana da Costa</h3>
                            <h4>São Paulo, Brazil</h4>
                            <a href="" target="_blank" className="gmail">
                                <img src="/assets/svg/cellphone-logo.svg" className="about-contact-icons-item" alt="Gmail" />
                                <p>+55 (16) 99207-4368</p>
                            </a>
                            <a href="" target="_blank" className="gmail">
                                <img src="/assets/svg/google-logo.svg" className="about-contact-icons-item" alt="Gmail" />
                                <p>matheuscosta2204@gmail.com</p>
                            </a>
                            <div className="about-contact-icons">
                                <a href="" target="_blank"><img src="/assets/svg/linkedin-logo.svg" className="about-contact-icons-item" alt="LinkedIn" /></a>
                                <a href="" target="_blank"><img src="/assets/svg/github-logo.svg" className="about-contact-icons-item" alt="GitHub" /></a>
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
                        <h3>Computer Science</h3>
                        <p>Centro Universitário Barão de Mauá - Jan 2014 / Dec 2018</p>
                    </div>
                    <div className="about-education-title">
                        Education
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-education-content">
                        <h3>NanoDegree(React Developer)</h3>
                        <p>Udacity</p>
                        
                        <h3>React - The Complete Guide (incl Hooks, React Router, Redux)</h3>
                        <p>Udemy, Maximilian Schwarzmüller</p>

                        <h3>MERN Stack Front To Back: Full Stack React, Redux & Node.js</h3>
                        <p>Udemy, Brad Traversy</p>

                        <h3>React JS Web Development - The Essentials Bootcamp</h3>
                        <p>Udemy, David Joseph Katz</p>
                    </div>
                    <div className="about-education-title">
                        Courses
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-education-content">
                        <h3>Intern​,​ Centro Universitário Barão de Mauá</h3>
                        <p>Ribeirão Preto - São Paulo (Mar/2014 – Apr/2016)</p>
                        <p>I have worked as a Full Stack Web Developer using PHP, HTML, CSS, Javascript(jQuery) and SQL Server.</p>

                        <h3>Junior Software Developer​, Centro Universitário Barão de Mauá</h3>
                        <p>Ribeirão Preto - São Paulo (May/2016 – Apr/2017)</p>
                        <p>I have worked as a PHP Full Stack Web Developer. I also have worked with processmaker converting papers workflows into systems.</p>

                        <h3>Mid Level Software Developer​, Centro Universitário Barão de Mauá</h3>
                        <p>Ribeirão Preto - São Paulo (May/2017 – Dec/2018)</p>
                        <p>I have worked as a React Native Developer and I have built APIs using .Net Core</p>

                        <h3>Junior Systems Analyst​, Centro Universitário Barão de Mauá</h3>
                        <p>Ribeirão Preto - São Paulo (Jan/2019 – Currently)</p>
                        <p>I have worked as a React Native Developer and I have built APIs using .Net Core</p>
                    </div>
                    <div className="about-education-title">
                        Experience
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-education-content">
                        <h3>Coding</h3>
                        <p>Javascript(ReactJS, React Native, ExpressJS), Redux, c#(.Net Core), PHP, SQL Server, MySQL, MongoDB</p>
                        <h3>Tools</h3>
                        <p>Git, NPM/Yarn, Trello</p>
                        <h3>Languages</h3>
                        <p>English, Advanced / Portuguese, Native</p>
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
