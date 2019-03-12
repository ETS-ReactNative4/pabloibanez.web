import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import sections from '../../../data/sections';
import responsiveCode from '../../../util/responsiveCode';
import LanguageSelector from './language-selector/language-selector';

class navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navBarFixed: '',
      showNavBar: false
    }
    this.sections = sections.filter(s => s.navBarOrder > 0)
      .sort((a, b) => a.navBarOrder - b.navBarOrder);
  }

  componentWillMount() {
    this.updateSize();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.updateSize.bind(this));
    this._isMounted = true;
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.updateSize.bind(this));
    this._isMounted = false;
  }

  handleScroll() {
    if (this._isMounted && this.state.size !== 'xs') {
      this.navBarFixed = window.pageYOffset > 60 ? 'navbar-color' : '';
      if (this.navBarFixed !== this.state.navBarFixed) {
        this.setState({ navBarFixed: this.navBarFixed });
      }
    }
  }

  updateSize() {
    const size = responsiveCode(window.innerWidth);
    if (size !== this.state.size) {
      this.setState({ size: size });
    }
  }

  toggleNavBar() {
    const showNavBar = this.state.showNavBar;
    this.setState({ showNavBar: !showNavBar });
  }

  goToSection(section) {
    this.setState({ showNavBar: false });
    this.props.goToSection(section);
  }

  changeLanguage(lang) {
    this.setState({ showNavBar: false });
    this.props.onLanguageChange(lang);
  }

  render() {
    return <nav className={`navbar navbar-custom navbar-fixed-top ${this.state.size === 'xs' ? 'custom-collapse' : ''} ${this.props.style} ${this.state.navBarFixed || ''} `} >
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" onClick={() => this.toggleNavBar()}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Pablo Ibanez</a>
        </div>
        <div className={`collapse navbar-collapse ${this.state.showNavBar ? 'in' : null}`}>
          {this.state.size !== 'xs' ? <LanguageSelector mobileMode={false} changeLanguage={(lang) => this.props.onLanguageChange(lang)} /> : null}
          <ul className="nav navbar-nav navbar-right">
            {this.sections.map(s => {
              return <li key={s.name} className={this.props.activeSection === s.name ? 'active' : ''}><a onClick={() => this.goToSection(s.name)}><FormattedMessage id={`NAVBAR.${s.navlink}`}></FormattedMessage></a></li>
            })}
            {this.state.size === 'xs' ? <LanguageSelector mobileMode={true} changeLanguage={(lang) => this.changeLanguage(lang)} /> : null}
          </ul>
        </div>
      </div>
    </nav>
  }
}

export default navbar;