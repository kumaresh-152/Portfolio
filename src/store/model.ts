export interface Sidebar {
    icon: JSX.Element;
    title: string;
}

export interface EducationModel {
    institution: string;
    address: string;
    degree: string;
    yearOfPassing: string;
    grade: string;
}

export interface ExperienceModel {
    role: string;
    company: string;
    address: string;
    dateOfJoining: string;
    dateOfLeaving: string;
    technology: string[];
    experience: string;
    description: string[];
}

export interface SkillSetModel {
    name: string;
    logo: string;
}

export interface ProjectModel {
    title: string;
    githubLink: string;
    liveDemoLink: string;
    description: string;
    imageLink: string;
}

export interface WebSite {
    name: string;
    link: string;
}

export interface CertificationModel {
    title: string;
    website: WebSite;
    technology: string[];
}

export interface ContactModel {
    icon: JSX.Element;
    value: string;
    url?: string;
    isLink: boolean;
}