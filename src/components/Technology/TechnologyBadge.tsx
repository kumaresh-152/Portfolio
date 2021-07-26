import { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import './TechnologyBadge.scss';

export interface TechnologyBadgeProps {
    technology: string[];
}
class TechnologyBadge extends Component<TechnologyBadgeProps> {
    render() {
        let technologyList: JSX.Element[] = this.props.technology.map((x: string, index: number) => (
            <Badge pill={true} key={index}>{x}</Badge>
        ));
        return (
            <div className={'TechnologyBadge-wrapper'}>
                {technologyList}
            </div>
        );
    }

}
export default TechnologyBadge;