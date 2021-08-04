import { Instagram } from "@material-ui/icons";
import { Card, Carousel } from "react-bootstrap";

interface CarouselComponentProps {
    url: string[]
}

function CarouselComponent(props: CarouselComponentProps) {
    return (
        props.url.length > 0 ?
            <Carousel slide={false} pause={'hover'} interval={null}>
                {
                    props.url.map((x: string) => (
                        <Carousel.Item>
                            <Card>
                                <Card.Img src={x} />
                            </Card>
                        </Carousel.Item>
                    ))
                }
                <Carousel.Item className="for-more-details">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <span>
                                    For more works, checkout
                                </span>
                                <span>
                                    <Instagram fontSize="large" />&nbsp;
                                    <a className="hyperlink" href="https://www.instagram.com/pointed_bristles" target="_blank" rel="noopener noreferrer">
                                        {"pointed_bristles"}
                                    </a>
                                </span>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel> :
            <span />
    )
}

export default CarouselComponent;