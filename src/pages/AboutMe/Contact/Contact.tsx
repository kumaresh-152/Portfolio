import { Component } from "react";
import { ContactModel } from "../../../store/model";
import './Contact.scss';

interface ContactProps {
    contactList: ContactModel[],
}

class Contact extends Component<ContactProps> {
    render() {
        let contact = this.props.contactList.map((x: ContactModel, index: number) => (
            x.isLink ?
                <div key={index} className={'contact-wrapper'}>
                    {x.icon}
                    &nbsp;
                    <a className="hyperlink" href={x.url} target="_blank" rel="noopener noreferrer"> {x.value}</a>
                </div> :
                <div key={index} className={'contact-wrapper'}>
                    {x.icon}
                    &nbsp;
                    {x.value}
                </div>
        ))
        return (
            <div className={"Contact-Card"}>
                {contact}
            </div>
        )
    }
}

export default Contact;