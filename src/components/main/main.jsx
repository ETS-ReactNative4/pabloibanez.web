import React from 'react';
import * as Scroll from 'react-scroll';
import WOW from 'wowjs';
import sections from '../../data/sections';
import { trunkArray } from '../../util';
import Footer from './footer/footer';
import NavBar from './navbar/navbar';
import { Clients, Contact, Hobbies, Intro, Portfolio, Profile, ProfileContact, References, Resume, Services } from './sections';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSection: ''
    }
    this.sections = sections.filter(s => s.displayOrder > 0)
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map(s => { return { name: s.name, ref: React.createRef() } });
  }

  componentDidMount() {
    const updatedSections = this.sections.map(s => {
      return {
        ...s,
        offsetTop: s.ref.current.offsetTop,
        offsetBottom: s.ref.current.offsetTop + s.ref.current.offsetHeight
      };
    });
    this.sections = updatedSections;
    new WOW.WOW({
      live: false,
      mobile: false
    }).init();
  }

  getSectionRef(name) {
    return this.sections.find(s => s.name === name).ref;
  }

  goToSection(section) {
    Scroll.animateScroll.scrollTo(this.sections.find(s => s.name === section).offsetTop);
  }

  updateActiveSection(offset) {
    const newActiveSession = this.sections.find(s => offset >= s.offsetTop && offset < s.offsetBottom);
    if (!newActiveSession) { return; }
  }

  render() {
    return <div className="main">
      <NavBar
        goToSection={(section) => { this.goToSection(section) }}
        onLanguageChange={(lang) => this.props.onLanguageChange(lang)}
        sections={this.sections}
        activeSection={this.state.activeSection}
      />
      <div ref={this.getSectionRef('intro')}>
        <Intro
          goToProfile={() => { this.goToSection('profile') }}
          roles={this.props.data.roles}
          places={this.props.data.places}
        />
      </div>
      <div>
        <ProfileContact
          data={this.props.data.profileContact}
        />
      </div>
      <div ref={this.getSectionRef('profile')}>
        <Profile
          profile={this.props.data.profile}
          roles={this.props.data.roles}
        />
      </div>
      <div>
        <Hobbies
          hobbies={this.props.data.profile.hobbies}
        />
      </div>
      <div ref={this.getSectionRef('services')}>
        <Services
          services={trunkArray(this.props.data.services, 3)} />
      </div>
      <div>
        <References
          references={this.props.data.references} />
      </div>
      <div ref={this.getSectionRef('resume')}>
        <Resume
          resume={this.props.data.resume} />
      </div>
      <div>
        <Clients
          clients={this.props.data.clients} />
      </div>
      <div ref={this.getSectionRef('portfolio')}>
        <Portfolio />
      </div>
      <div ref={this.getSectionRef('contact')}>
        <Contact
          contact={this.props.data.contact} />
      </div>
      <Footer />
    </div>
  }
}

export default Main;