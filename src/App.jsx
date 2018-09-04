import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlES from 'react-intl/locale-data/es';
import './App.css';
import Main from './components/main/main';
import Preloader from './components/preloader/preloader';
import data from './data/data';
import flattenMessages from './util/flattenMessages';

addLocaleData([...intlEN, ...intlES]);

class App extends Component {

  constructor(props) {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = 'en';
    }
    super(props);
    this.state = {
      locale: lang,
      messages: flattenMessages(require(`./i18n/${lang}.json`))
    }
  }

  dataWithImages = {
    ...data, places: data.places.map(p => {
      return { ...p, imgSrc: require(`./assets/images/${p.id}.jpg`) }
    })
  };

  changeLanguage(lang) {
    this.setState({ locale: lang, messages: flattenMessages(require(`./i18n/${lang}.json`)) });
    window.jQuery('#preloader').fadeOut('slow');
  }

  render() {
    return (
      <IntlProvider key={this.state.locale} locale={this.state.locale} messages={this.state.messages}>
        <div className="wrapper">
          <div className="bg-images">
            {this.dataWithImages.places.map(p => {
              return <img key={p.id} alt={p.id} src={p.imgSrc} />
            })}
          </div>
          <Preloader />
          <Main
            data={this.dataWithImages}
            onLanguageChange={(lang) => this.changeLanguage(lang)}
          />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
