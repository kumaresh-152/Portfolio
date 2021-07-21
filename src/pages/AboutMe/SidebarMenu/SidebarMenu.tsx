import { Component } from "react";
import { Sidebar } from "../../../store/model";
import './SidebarMenu.scss'


interface SidebarMenuProps {
    list: Sidebar[]
    onClick: Function;
}

class SidebarMenu extends Component<SidebarMenuProps> {

    render() {
        const { list } = this.props;
        let sideMenuList = list.map((x: Sidebar, index: number) => (
            <div
                key={`sideMenu${x.title}${index}`}
                className={"sideMenu-list-wrapper"}
                onClick={() => { this.props.onClick(x.title) }}
            >
                {x.icon}
                <span className={"sideMenu-list-title"}>
                    &nbsp;{x.title}
                </span>
            </div >
        ))

        return (
            <div className={"SideMenu-wrapper"}>
                <div className={"sideMenu-name-wrapper"}>
                    <div
                        className={"sideMenu-name"}
                        onClick={() => {
                            let node = document.getElementById("About");
                            if (node) {
                                window.scrollTo({
                                    top: node.offsetTop,
                                    behavior: "smooth"
                                });
                            }
                        }}>
                        <h2 className="name">
                            B Kumaresh
                        </h2>
                        <span className="designation">
                            Software Engineer
                        </span>
                    </div>
                </div>
                <div className={"sideMenu-lists"}>
                    {sideMenuList}
                </div>
            </div >
        )
    }
}

export default SidebarMenu;