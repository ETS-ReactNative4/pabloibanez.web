import React from 'react';
import { FormattedMessage } from 'react-intl';

class LanguageSelector extends React.Component {

  constructor(props) {
    super(props);
    const lang = localStorage.getItem('lang');
    this.state = {
      showDropdown: false,
      language: this.setLanguageLabel(lang)
    };
  }

  showDropdown(value) {
    this.setState({ showDropdown: value });
  }

  changeLanguage(lang) {
    lang = lang ? lang : this.findNextLanguage();
    this.setState({ language: this.setLanguageLabel(lang) });
    localStorage.setItem('lang', lang);
    this.props.changeLanguage(lang);
  }

  setLanguageLabel(lang) {
    switch (lang) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      default:
        return 'English';
    }
  }

  findNextLanguage() {
    return localStorage.getItem('lang') === 'en' ? 'es' : 'en';
  }

  render() {
    return <React.Fragment>
      {this.props.mobileMode ? <li key={'language'}>
        <a onClick={() => this.changeLanguage()}><FormattedMessage id="NAVBAR.CHANGE_LANGUAGE"></FormattedMessage></a>
      </li> :
        <div className="language-selector"
          onMouseOver={() => this.showDropdown(true)}
          onMouseOut={() => this.showDropdown(false)}>
          <ul className="nav navbar-nav navbar-right" >
            <li>
              <a>{this.state.language}<i className="fa fa-angle-down" /></a>
              <ul className={`dropdown ${this.state.showDropdown ? '' : 'hidden'}`}>
                <li><a onClick={() => this.changeLanguage('en')}>English</a></li>
                <li><a onClick={() => this.changeLanguage('es')}>Español</a></li>
              </ul>
            </li>
          </ul>
        </div>}
    </React.Fragment>
  }

}

export default LanguageSelector;