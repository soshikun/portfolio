import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faSchool,
    faStar,
} from '@fortawesome/free-solid-svg-icons';


function Timeline() {
    const workIcon = {
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    }
    const schoolIcon = {
        icon: <FontAwesomeIcon icon={faSchool} />,
        iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    };
    const description = `Designed, developed, managed, and deployed web applications with a focus on assisting primary school
    students further their learning and understanding of the world around them. Some projects
    include games, visual novels, and forums.`;

    const items = [
        {
            icon: schoolIcon,
            date: 'September 2019 - June 2023',
            title: 'Bachelor of Science in Informatics',
            subtitle: 'University of Washington',
            gradeOrLocation: 'GPA: 3.87',
            desc: 'Full-Stack Software Engineer, UI/UX Designer, Graphic Designer, Project Manager'
        },
        {
            icon: schoolIcon,
            date: 'September 2019 - June 2023',
            title: 'Bachelor of Arts in Geography: Data Science',
            subtitle: 'University of Washington',
            gradeOrLocation: 'GPA: 3.87',
            desc: 'Project Manager, GIS Analyst, GIS Technician, GIS Developer',
        },
        {
            icon: workIcon,
            date: 'July 2022 - Present',
            title: 'Tech Student 4',
            subtitle: 'Pacific Northwest National Laboratory',
            gradeOrLocation: 'Richland, WA',
            desc: 'Front-End Software Engineer, Graphic Designer, UI Designer',
        }
    ];

    return (
        <div>
            <VerticalTimeline>
                {items.map((t, i) => {
                    return (
                        <VerticalTimelineElement
                            key={i}
                            className='vertical-timeline-element--work'
                            date={t.date}
                            {...t.icon}
                        >
                            <>
                                <h3 className='vertical-timeline-element-title'>{t.title}</h3>
                                <h4 className='vertical-timeline-element-subtitle'>{t.subtitle}</h4>
                                <p>{t.desc}</p>
                            </>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;