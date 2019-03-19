import React from 'react';
import * as Scroll from 'react-scroll';
import WOW from 'wowjs';
import sections from '../../data/sections';
import { trunkArray } from '../../util';
import Footer from './footer/footer';
import NavBar from './navbar/navbar';
import { Clients, Contact, Hobbies, Intro, Portfolio, Profile, References, Resume, Services } from './sections';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSection: '',
      sections: sections.filter(s => s.displayOrder > 0).sort((a, b) => a.displayOrder - b.displayOrder),
      style: 'light'
    }

    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  componentDidMount() {
    new WOW.WOW({
      live: false,
      mobile: false
    }).init();
  }

  goToSection(section) {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  }

  handleStyleChange(style) {
    this.setState({ style });
  }

  render() {
    return <div className="main">
      <NavBar
        style={this.state.style}
        goToSection={this.goToSection}
        onLanguageChange={this.props.onLanguageChange}
        sections={this.state.sections}
        activeSection={this.state.activeSection}
      />
      <Element name="intro">
        <Intro
          goToProfile={() => { this.goToSection('profile') }}
          roles={this.props.data.roles}
          places={this.props.data.places}
          onStyleChange={this.handleStyleChange}
        />
      </Element>
      <Element name="profile">
        <Profile
          profile={this.props.data.profile}
          roles={this.props.data.roles}
          techs={this.props.data.techs}
        />
        <Hobbies
          hobbies={this.props.data.profile.hobbies}
        />
      </Element>
      <Element name="services">
        <Services
          services={trunkArray(this.props.data.services, 3)} />
        <References
          references={this.props.data.references} />
      </Element>
      <Element name="resume">
        <Resume
          resume={this.props.data.resume}
          goToSection={this.goToSection}
        />
        <Clients
          clients={this.props.data.clients} />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact
          contact={this.props.data.contact} />
      </Element>
      <Footer />
    </div>
  }
}

export default Main;