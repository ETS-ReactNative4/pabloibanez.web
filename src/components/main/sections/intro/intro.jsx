import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Typist from 'react-typist';

class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      role: -1,
      place: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.place = this.props.places[this.state.place]
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.roleTimer = setInterval(() => {
      this.showNextRole();
    }, 3000);
    this.placeTimer = setInterval(() => {
      this.showNextPlace();
    }, 8000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    clearInterval(this.roleTimer);
    clearInterval(this.placeTimer);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  showNextRole() {
    const newRoleIndex = this.state.role >= this.props.roles.length - 1 ? 0 : this.state.role + 1;
    this.setState({ role: newRoleIndex });
    this.role = <h3><FormattedMessage id={this.props.roles[this.state.role]}></FormattedMessage></h3>
  }

  showNextPlace() {
    const newPlaceIndex = this.state.place >= this.props.places.length - 1 ? 0 : this.state.place + 1;
    this.setState({ place: newPlaceIndex });
    this.props.onStyleChange(this.props.places[newPlaceIndex].style);
  }

  render() {

    const citiesHtml = this.props.places.map((place, i) => {
      return <div key={place.id} className={`city ${this.state.place === i ? 'visible' : null}`} style={{ height: this.state.height, backgroundImage: `url(${place.imgSrc})` }}>
        <div className="city-info">
          <span>{place.period}  |  {place.name}</span>
        </div>
        <div className="city-bg"></div>
      </div>
    });

    return (
      <section id="intro" className="section" style={{ height: this.state.height }}>
        <div className="center-div__outer">
          <div className="center-div__middle">
            <div className="center-div__inner">
              <div className="hello">
                <FormattedMessage id="INTRO.HELLO">{msg => {
                  return <Typist
                    stdTypingDelay={15}
                    startDelay={500}
                    onTypingDone={() => this.showNextRole()}>
                    <h1>{msg}</h1>
                  </Typist>
                }}</FormattedMessage>
                <div className="role">{this.role}</div>
              </div>
              <a onClick={() => this.props.goToProfile()}>
                <div className="mouse-icon">
                  <div className="wheel"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {citiesHtml}
      </section>
    )
  }
}

export default Intro;