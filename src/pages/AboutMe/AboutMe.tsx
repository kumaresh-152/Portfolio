/* eslint-disable no-console */

import React, { Component } from 'react';
import { CertificationModel, ContactModel, EducationModel, ExperienceModel, ProjectModel, SkillSetModel } from '../../store/model';
import About from './About/About';
import './AboutMe.scss';
import Certification from './Certification/Certification';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Project from './Projects/Projects';
import Skills from './Skills/Skills';
interface AboutMeProps {
    education: EducationModel[];
    certification: CertificationModel[];
    experience: ExperienceModel[];
    skills: SkillSetModel[];
    contact: ContactModel[];
    projects: ProjectModel[];
}

class AboutMe extends Component<AboutMeProps> {

    render() {
        return (
            <div className={'AboutMe-Wrapper'}>
                <div className="About-wrapper" id="About">
                    <div className={'About-title'}>
                        <span>
                            About
                        </span>
                    </div>
                    <div className={'About-list'}>
                        <About />
                    </div>
                </div>
                <div className="Education-wrapper" id="Education">
                    <div className={'Education-title'}>
                        <span>
                            Education
                        </span>
                    </div>
                    <div className={'Education-list'}>
                        <Education
                            education={this.props.education}
                        />
                    </div>
                </div>
                <div className="Experience-wrapper" id="Experience">
                    <div className={'Experience-title'}>
                        <span>
                            Experience
                        </span>
                    </div>
                    <div className={'Experience-list'}>
                        <Experience
                            experience={this.props.experience}
                        />
                    </div>
                </div>
                <div className="SkillSet-wrapper" id="SkillSet">
                    <div className={'SkillSet-title'}>
                        <span>
                            Skills
                        </span>
                    </div>
                    <div className={'SkillSet-list'}>
                        <Skills
                            skillset={this.props.skills}
                        />
                    </div>
                </div>
                <div className="Projects-wrapper" id="Projects">
                    <div className={'Projects-title'}>
                        <span>
                            Project
                        </span>
                    </div>
                    <div className={'Projects-list'}>
                        <Project
                            data={this.props.projects}
                        />
                    </div>
                </div>
                <div className="Certification-wrapper" id="Certification">
                    <div className={'Certification-title'}>
                        <span>
                            Certification
                        </span>
                    </div>
                    <div className={'Certification-list'}>
                        <Certification
                            certificationList={this.props.certification}
                        />
                    </div>
                </div>
                <div className="Contact-wrapper" id="Contact">
                    <div className={'Contact-title'}>
                        <span>
                            Contact
                        </span>
                    </div>
                    <div className={'Contact-list'}>
                        <Contact
                            contactList={this.props.contact}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;