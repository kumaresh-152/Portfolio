/* eslint-disable no-console */

import { Instagram } from "@material-ui/icons";
import React, { Component } from "react";
import { CertificationModel, ContactModel, EducationModel, ExperienceModel, ProjectModel, SkillSetModel } from "../../store/model";
import './AboutMe.scss';
import Certification from "./Certification/Certification";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Project from "./Projects/Projects";
import Skills from "./Skills/Skills";


interface AboutMeProps {
    education: EducationModel[];
    certification: CertificationModel[];
    experience: ExperienceModel[];
    skills: SkillSetModel[],
    contact: ContactModel[]
    projects: ProjectModel[]
}

class AboutMe extends Component<AboutMeProps>{

    constructor(allProps: AboutMeProps) {
        super(allProps);
    }

    render() {
        return (
            <div className={"darkMode-AboutMe-Wrapper"}>
                <div className="About-wrapper" id="About">
                    <div className={"About-title"}>
                        <span>
                            About
                        </span>
                    </div>
                    <div className={"About-list"}>
                        {/* 
                        Let's make something special.
                        That's why I’m excited to make a big impact at a high growth company.
                         */}
                        <h1>
                            I want to <span className="highlight">make things</span><br />
                            that&nbsp;<span className="underline">make a difference.</span>
                        </h1>
                        <h1 className="heading">
                            Hi there
                            <span className="wave">👋🏻</span><br />
                            I&apos;m KUMARESH, nice to meet you.
                        </h1>
                        <h2>
                            Frontend Developer, with about two year of experience in developing web applications using React,
                            TypeScript, HTML5, and SASS.
                        </h2>
                        <h3>
                            A collaborator and an active learner who seeks out opportunities and
                            challenges that brings the best from me. with interest in UI/UX design.
                            developer with a passion for thoughtful UI design,seeks out opportunities and challenges.
                            who believes that technology is the game-changer and want to be a part of the change.
                            sought out opportunities and challenges that are meaningful to me.
                        </h3>
                        <h3>
                            Outside work, I occasionally sketch.
                            <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                                <Instagram />pointed_bristles
                            </a>
                        </h3>

                    </div>
                </div>
                <div className="Education-wrapper" id="Education">
                    <div className={"Education-title"}>
                        <span>
                            Education
                        </span>
                    </div>
                    <div className={"Education-list"}>
                        <Education
                            education={this.props.education}
                        />
                    </div>
                </div>
                <div className="Experience-wrapper" id="Experience">
                    <div className={"Experience-title"}>
                        <span>
                            Experience
                        </span>
                    </div>
                    <div className={"Experience-list"}>
                        <Experience
                            experience={this.props.experience}
                        />
                    </div>
                </div>
                <div className="SkillSet-wrapper" id="SkillSet">
                    <div className={"SkillSet-title"}>
                        <span>
                            Skills
                        </span>
                    </div>
                    <div className={"SkillSet-list"}>
                        <Skills
                            skillset={this.props.skills}
                        />
                    </div>
                </div>
                <div className="Projects-wrapper" id="Projects">
                    <div className={"Projects-title"}>
                        <span>
                            Project
                        </span>
                    </div>
                    <div className={"Projects-list"}>
                        <Project
                            data={this.props.projects}
                        />
                    </div>
                </div>

                <div className="Certification-wrapper" id="Certification">
                    <div className={"Certification-title"}>
                        <span>
                            Certification
                        </span>
                    </div>
                    <div className={"Certification-list"}>
                        <Certification
                            certificationList={this.props.certification}
                        />
                    </div>
                </div>
                <div className="Contact-wrapper" id="Contact">
                    <div className={"Contact-title"}>
                        <span>
                            Contact
                        </span>
                    </div>
                    <div className={"Contact-list"}>
                        <Contact
                            contactList={this.props.contact}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;