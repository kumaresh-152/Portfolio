import { Component } from "react";
import { EducationModel } from "../../../store/model";
import './Education.scss';

interface EducationProps {
    education: EducationModel[]
}

class Education extends Component<EducationProps>{
    render() {
        let list = this.props.education.map((x: EducationModel, index: number) => (
            <div key={`Education${x.degree}${index}`} className={`Education-wrapper`}>
                <div className={"Education-degree"}>
                    <h1>
                        {x.degree}
                    </h1>
                    <div className="Institution-wrapper">
                        <span className="content">
                            {x.institution}
                            <br />
                            {x.address}
                            <br />
                            Year of Passing:&nbsp;{x.yearOfPassing}
                        </span>
                    </div>
                </div>
            </div >
        ))
        return (
            <div className={"Education"}>
                {
                    list
                }
            </div>
        );
    }
}

export default Education;