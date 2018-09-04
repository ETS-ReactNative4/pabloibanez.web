import React from 'react';
import { FormattedMessage } from 'react-intl';

const portfolio = (props) => {
  return <section id="portfolio" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 headline wow bounceInDown">
          <h2><FormattedMessage id="PORTFOLIO.TITLE" /></h2>
          <p><FormattedMessage id="PORTFOLIO.SUBTITLE" /></p>
        </div>
      </div></div>
  </section>
}

export default portfolio;