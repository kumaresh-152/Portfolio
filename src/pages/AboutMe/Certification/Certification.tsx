import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TechnologyBadge from '../../../components/Technology/TechnologyBadge';
import { CertificationModel } from '../../../store/model';
import './Certification.scss';

interface CertificationProps {
    certificationList: CertificationModel[];
}

/*
TODO:

check for content width

mobile compatibility
 */
class Certification extends Component<CertificationProps> {
    render() {
        let tableHeaders: string[] = ['Course Title', 'Technology', 'Website'];
        return (
            <Table bordered={true} striped={true} variant={'dark'}>
                <thead>
                    <tr>
                        {
                            tableHeaders.map((x: string, index: number) => (
                                <th key={`header${{ index }}`}>{x.toLocaleUpperCase()}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.certificationList.map((x: CertificationModel, index: number) => (
                            <tr key={`body${{ index }}`}>
                                <th className="title">
                                    <a className="hyperlink" href={x.website.link} target="_blank" rel="noopener noreferrer"> {x.title}</a>
                                </th>
                                <th>
                                    <TechnologyBadge technology={x.technology} />
                                </th>
                                <th>
                                    {x.website.name}
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table >
        );
    }
}

export default Certification;