import { SkillSetModel } from "../../../store/model";
import './Skills.scss'

interface SkillsProps {
    skillset: SkillSetModel[]
}

export default function Skills(props: SkillsProps) {
    return (
        <div className={"darkmode-skillset"}>
            {
                props.skillset.map((x: SkillSetModel, index: number) => (
                    <div key={index} className="skillset-wrapper">
                        <img className="skillset-logo" src={x.logo} alt={x.name} />
                        <span className="skillset-name">{x.name}</span>
                    </div>
                ))
            }
        </div>
    )
}