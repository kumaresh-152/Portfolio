/* eslint-disable no-console */
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import moment from 'moment';
import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TechnologyBadge from '../../../components/Technology/TechnologyBadge';
import { ExperienceModel } from '../../../store/model';
import './Experience.scss';

interface ExperienceProps {
    experience: ExperienceModel[];
}

class Experience extends Component<ExperienceProps> {
    render() {
        return (
            <div className={'Experience'}>
                <VerticalTimeline>
                    {
                        this.props.experience.map((x: ExperienceModel, index: number) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                iconStyle={{
                                    background: '#AE944F',
                                    color: '#fff',
                                    textAlign: 'center',
                                }}
                                icon={<span><HourglassEmptyIcon /></span>}
                            >
                                <h1 className="vertical-timeline-element-title role">
                                    {x.role}
                                </h1>
                                <h2 className="vertical-timeline-element-subtitle company">
                                    {x.company}
                                </h2>
                                <h4 className="vertical-timeline-element-subtitle address">
                                    {x.address}
                                </h4>
                                <div className={'job-description'}>
                                    {
                                        x.description.map((data: string, descriptionindex: number) => (
                                            <span key={descriptionindex}>
                                                - &nbsp;
                                                {data}
                                                <br />
                                            </span>
                                        ))
                                    }
                                </div>
                                <TechnologyBadge technology={x.technology} />
                                <div className={'date'}>
                                    {
                                        <span>
                                            {
                                                moment(x.dateOfJoining, 'YYYY/MM/DD').format('MMM-YYYY').toString()
                                            }
                                            &nbsp;
                                            -
                                            &nbsp;
                                            {
                                                x.dateOfLeaving.toLocaleLowerCase() === '' ? 'present' : moment(x.dateOfLeaving, 'YYYY/MM/DD').format('MMM-YYYY').toString()
                                            }
                                        </span>
                                    }
                                </div>
                            </VerticalTimelineElement>
                        ))
                    }
                    <VerticalTimelineElement
                        key={'nochild'}
                        className="vertical-timeline-element--no-children"
                        iconStyle={{
                            background: '#AE944F',
                            color: '#fff',
                            textAlign: 'center',
                        }}
                        icon={<span><HourglassEmptyIcon /></span>}
                    />
                </VerticalTimeline>
            </div>
        );
    }
}
export default Experience;