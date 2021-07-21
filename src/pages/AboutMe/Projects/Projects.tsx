import { Component } from "react";
import { Card } from "react-bootstrap";
import { ProjectModel } from "../../../store/model";
import './Projects.scss';

interface ProjectProps {
    data: ProjectModel[];
}

class Project extends Component<ProjectProps> {

    render() {
        let projects = this.props.data.map((data: ProjectModel, index: number) => (
            <Card className={"project-cards"} key={`Project${index}`}>
                <Card.Img className={data.imageLink ? "image" : "disp-none"} variant="top" src={data.imageLink} />
                <Card.Body>
                    <Card.Title>
                        {data.title}
                    </Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <div className={"link-wrapper"}>
                        {
                            data.githubLink ?
                                <Card.Link
                                    href={data.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Card.Link> :
                                <span />
                        }
                        {
                            data.liveDemoLink ?
                                <Card.Link
                                    href={data.liveDemoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </Card.Link> :
                                <span />
                        }
                    </div>
                </Card.Body>
            </Card>
        ))

        return (
            this.props.data.length > 0 ? projects : <div className={"Loader"} />
        )
    }
}

export default Project;