import { Component } from 'react';
import './Card.scss';

interface CardProps {
    header: string;
    body: string
}

class Card extends Component<CardProps> {

    render() {
        return (
            <div className="Card">
                <div className="Card-Header">
                    {
                        this.props.header
                    }
                </div>
                <div className="Card-Body">
                    {
                        this.props.body
                    }
                </div>
            </div>
        )
    }
}
export default Card;
