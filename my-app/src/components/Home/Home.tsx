import '../../App.css';
import React, { useEffect, useState } from 'react';
import {
  HomeContainer,
  WordsContainer,
  Button,
  DetailsContainer,
  Details,
  RoleContainer
} from './styles.ts';

function Home() {
  const softwareProjects = [
    {
      name: 'Marine Rescue: The Sea-quel',
      background: 'mrsq-preview.gif',
      roles: ['Software Engineer', 'Project Manager', 'Graphic Designer', 'Character & Assets Artist'],
      startDate: 'Jan 3, 2023',
      endDate: 'Jun 1, 2023'
    },
    {
      name: 'Benton-Franklin Health District Food Access',
      background: 'bfhd-preview.gif',
      roles: ['Software Engineer', 'UI/UX Designer'],
      startDate: 'Mar 27, 2023',
      endDate: 'Jun 9, 2023'
    },
    {
      name: 'Trackacha',
      background: 'trackacha.png',
      roles: ['Software Engineer'],
      startDate: 'Nov 9, 2022',
      endDate: 'Dec 9, 2022'
    },
    {
      name: 'Better Educators',
      background: 'betterEducators.png',
      roles: ['Software Engineer'],
      startDate: 'Apr 4, 2022',
      endDate: 'May 31, 2022'
    },
  ];

  const designProjects = [
    {
      name: 'Marine Rescue: The Sea-quel',
      background: 'mrsq-preview.gif',
      roles: ['Software Engineer', 'Project Manager', 'Graphic Designer', 'Character & Assets Artist'],
      startDate: 'Jan 3, 2023',
      endDate: 'Jun 1, 2023'
    },
    {
      name: 'Habi Hero Mobile',
      background: 'hh-preview.gif',
      roles: ['UI/UX Designer'],
      startDate: 'Oct 3, 2021',
      endDate: 'Dec 10, 2021'
    }
  ];

  const pmProjects = [
    {
      name: 'Marine Rescue: The Sea-quel',
      background: 'mrsq-preview.gif',
      roles: ['Software Engineer', 'Project Manager', 'Graphic Designer', 'Character & Assets Artist'],
      startDate: 'Jan 3, 2023',
      endDate: 'Jun 1, 2023'
    },
  ]

  const [current, setCurrent] = useState('se'); // Type of projects (se, design, pm)
  const [details, setDetails] = useState(softwareProjects[0]); // Details of specific project
  const [projects, setProjects] = useState(softwareProjects); // Project list

  useEffect(() => {
    document.getElementById('se')?.classList.remove('selected');
    document.getElementById('designer')?.classList.remove('selected');
    document.getElementById('pm')?.classList.remove('selected');
    document.getElementById(current)?.classList.add('selected');
  }, [current]);

  function createCards() {
    return projects.map((project) => {
      return (
        <Details>
          <h3>{project.name}</h3>
          <p>{project.startDate} - {project.endDate}</p>
          <RoleContainer className='roles'>
            {createRoles(project.roles)}
          </RoleContainer>
          <img src={`./imgs/${project.background}`} alt={project.name} />
          <button>Learn More</button>
        </Details>
      )
    });
  }

  function createRoles(roles) {
    return roles.map((role) => {
      return (
        <div>{role}</div>
      )
    });
  }

  return (
    <HomeContainer>
      <DetailsContainer afterChange={(e: any) => setDetails(projects[e])} background={details.background} style={{height: `${details.roles.length > 3 ? '655px' : '600px'}`}}>
        {createCards()}
      </DetailsContainer>
      <WordsContainer>
        <Button 
          id='se'
          onClick={() => {
            setCurrent('se');
            setProjects(softwareProjects);
          }}
          className='selected'
        >
          Software Engineer
        </Button>
        <Button 
          id='designer'
          onClick={() => {
            setCurrent('designer');
            setProjects(designProjects);
          }}
        >
          UI/UX Designer
        </Button>
        <Button
          id='pm'
          onClick={() => {
            setCurrent('pm');
            setProjects(pmProjects);
          }}
        >
          Project Manager
        </Button>
      </WordsContainer>
    </HomeContainer>
  );
}

export default Home;
