import React from 'react';
import { FormattedMessage } from 'react-intl';

const footer = () => {

  const year = new Date().getFullYear();

  return <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="copy"><FormattedMessage id="FOOTER.MAIN" /> Pablo Ibanez - {year}</p>
        </div>
      </div>
    </div>
  </footer>;
}

export default footer;