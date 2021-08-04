import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Sidebar } from '../../../store/model';
import './SidebarMenu.scss';
interface SidebarMenuProps {
    list: Sidebar[];
    onClick: Function;
}

class SidebarMenu extends Component<SidebarMenuProps> {

    render() {
        return (
            <Navbar expand="xl" fixed='top' >
                <Container>
                    <Navbar.Brand>
                        Kumaresh B
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                this.props.list.map((x: Sidebar, index: number) => (
                                    <Nav.Link onClick={() => { this.props.onClick(x.title); }}>
                                        {x.icon}
                                        <span className={'sideMenu-list-title'}>
                                            &nbsp;{x.title}
                                        </span>
                                    </Nav.Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default SidebarMenu;