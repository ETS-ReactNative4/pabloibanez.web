import React from 'react';
import { FormattedMessage } from 'react-intl';

const portfolio = (props) => {

  const githubUrl = 'https://github.com/pabloibanezcom';

  return <section id="portfolio" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 headline wow bounceInDown">
          <h2><FormattedMessage id="PORTFOLIO.TITLE" /></h2>
          <p><FormattedMessage id="PORTFOLIO.SUBTITLE" /></p>
        </div>
        <div className="col-md-12 wow bounceInDown">
          <p><FormattedMessage id="PORTFOLIO.GITHUB_LINK_1" /><a href={githubUrl} target="_blank"><FormattedMessage id="PORTFOLIO.GITHUB_LINK_2" /></a></p>
        </div>
      </div></div>
  </section>
}

export default portfolio;