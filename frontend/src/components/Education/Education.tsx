import { forwardRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FadeInText from '../Shared/FadeInText/FadeInText';

import './Education.css';
import './../Experience/Experience.css';


const Education = forwardRef<HTMLElement, {}>((props, ref) => {

    return (
        <section ref={ref} className="education-box">
            <h2 className="education-heading">Education</h2>

            <Timeline position='alternate'>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2023 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        ICT Engineer, Software Development
                        <FadeInText className='timeline-text'>
                            Tampere University of Applied Sciences
                            <br/>
                                226/240 ETCs
                        </FadeInText>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2016 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Biomedical Laboratory Scientist
                        <FadeInText className='timeline-text'>
                            Tampere University of Applied Sciences
                            <br/>
                            Graduated
                        </FadeInText>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ color: 'var(--secondary)'}}>
                        2012 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        General Upper Secondary School
                        <FadeInText className='timeline-text'>
                            Järvenpään lukio
                            <br/>
                            Graduated
                        </FadeInText>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </section>
    )
});

export default Education;