import CarouselComponent from '../../../components/Carousel/Carousel';
import './About.scss';
import charlie_chaplin from '../../../images/charlie_chaplin.jpg';
import joker from '../../../images/joker.jpg';
import ganesha from '../../../images/ganesha.jpg';
import nataraja from '../../../images/nataraja.jpg';




export default function About() {
    return (
        <div className="About">
            <div className="Intro">
                <h1 className="greetings">
                    Hello World! My name is
                </h1>
                <h2 className="name">
                    Kumaresh B.
                </h2>
                <h3 className="designation">
                    Front End Developer from Chennai, India.
                </h3>
                <div className="description">
                    <h2>
                        I enjoy solving complex problems and turning them into elegant interface designs.
                    </h2>
                    <h2>
                        Creative Front End developer offering 2+years of experience providing high-impact web solutions,
                        using react, typescript HTML5 and SASS.
                    </h2>
                    <h2>
                        Skilled in designing, developing and testing web-based applications incorporating range of technologies.
                    </h2>
                    <h2>
                        Aspiring to combine broad background with strong technical skills to excel as a frontend developer.
                    </h2>
                </div>

            </div>
            <div className="Insta">
                <h2>
                    When im not coding, you can find me playing with the canvas and palattes.
                </h2>
                <CarouselComponent url={[charlie_chaplin, joker, ganesha, nataraja]} />
            </div>

        </div>

    )
}