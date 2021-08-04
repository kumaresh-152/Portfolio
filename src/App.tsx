/* eslint-disable no-console */
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FaceIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import axios from 'axios';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import cpp from './images/C++.png';
import csharp from './images/csharp.png';
import css from './images/css3.png';
import git from './images/gitlogo.png';
import html5 from './images/html5.png';
import python from './images/python.png';
import react from './images/react.png';
import sass from './images/sass.png';
import typeScript from './images/Typescript.png';
import AboutMe from './pages/AboutMe/AboutMe';
import SidebarMenu from './pages/AboutMe/SidebarMenu/SidebarMenu';
import { CertificationModel, ContactModel, EducationModel, ExperienceModel, ProjectModel, Sidebar, SkillSetModel } from './store/model';

interface AppProps {
}

interface AppState {
  education: EducationModel[];
  experience: ExperienceModel[];
  certification: CertificationModel[];
  projects: ProjectModel[];
  resumeUrl: string;
}

export class App extends Component<AppProps, AppState> {

  constructor(allProps: AppProps) {
    super(allProps);
    this.state = {
      education: [],
      certification: [],
      experience: [],
      projects: [],
      resumeUrl: ''
    };
    this.onSidebarClick = this.onSidebarClick.bind(this);
  }

  fetchData() {
    axios.get('./data.json')
      .then((response) => {
        this.setState({
          education: response.data.education,
          certification: response.data.certification,
          experience: response.data.experience,
          projects: response.data.projects,
          resumeUrl: response.data.resumeUrl
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  onSidebarClick(data: string) {
    if (data === 'Resume') {
      window.open(this.state.resumeUrl, '_blank');
    }
    else {
      let node = document.getElementById(data);
      let node1 = document.getElementsByClassName('navbar')
      if (node && node1) {
        window.scrollTo({
          top: node.offsetTop - node1[0].clientHeight,
          behavior: 'smooth'
        });
      }
    }
  }

  render() {

    let SidebarMenuList: Sidebar[] = [
      { icon: <FaceIcon />, title: 'About' },
      { icon: <SchoolIcon />, title: 'Education' },
      { icon: <TrendingUpIcon />, title: 'Experience' },
      { icon: <SettingsIcon />, title: 'SkillSet' },
      { icon: <CodeIcon />, title: 'Projects' },
      { icon: <StarIcon />, title: 'Certification' },
      { icon: <MailIcon />, title: 'Contact' },
      { icon: <DescriptionIcon />, title: 'Resume' }
    ];

    let contact: ContactModel[] = [
      {
        icon: <GitHubIcon />,
        value: 'github.com/kumaresh-152',
        url: 'https://github.com/kumaresh-152',
        isLink: true
      },
      {
        icon: <MailOutlineIcon />,
        value: 'meetkumaresh.b@gmail.com',
        isLink: false
      }
      ,
      {
        icon: <PhoneAndroidIcon />,
        value: '+91-9791131490',
        isLink: false
      },
      {
        icon: <LinkedInIcon />,
        value: 'linkedin.com/in/b-kumaresh',
        url: 'https://www.linkedin.com/in/b-kumaresh',
        isLink: true
      },
    ];

    let skills: SkillSetModel[] = [
      { name: 'react', logo: react },
      { name: 'typeScript', logo: typeScript },
      { name: 'html5', logo: html5 },
      { name: 'css3', logo: css },
      { name: 'SASS', logo: sass },
      { name: 'python', logo: python },
      { name: 'C/C++', logo: cpp },
      { name: 'C#', logo: csharp },
      { name: 'Github', logo: git },
    ];

    return (
      <Container className={'App-wrapper'}>
        <SidebarMenu
          list={SidebarMenuList}
          onClick={(data: string) => { this.onSidebarClick(data); }}
        />
        <AboutMe
          education={this.state.education}
          experience={this.state.experience}
          certification={this.state.certification}
          skills={skills}
          contact={contact}
          projects={this.state.projects}
        />
      </Container>
    );
  }
}

export default App;
