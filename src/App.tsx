// import logo from './logo.svg';
import './App.scss';
import { Component, Fragment } from 'react';
import SideNavigation from './components/Navigation/SideBar';

interface AppProps {

}

export class App extends Component<AppProps> {

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div className="navigation">
            <SideNavigation>

            </SideNavigation>
          </div>
          <div className="aboutme-contact-wrapper">
            <div className="about-me">
              <span className="about-me-text-area">
                {
                  "about me"
                }
              </span>
            </div>
            <div className="contact-me">
              <span className="contact-me-text-area">
                {
                  "contact"
                }
              </span>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}


export default App;
