import React from 'react';
import { FormattedMessage } from 'react-intl';

const hobbies = (props) => {
  return <section id="stats" className="callout callout-dark callout-hobbies">
    <div className="page-triangle" />
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12 wow bounceInLeft">
          <h3><FormattedMessage id="HOBBIES.TITLE" /></h3>
          <br />
          <h4>( <FormattedMessage id="HOBBIES.BESIDES_DEVELOPING" /> <i className="fa fa-smile-o "></i> )</h4>
        </div>
        {props.hobbies.map((h, i) => {
          return <div key={i} className={['col-md-3 col-sm-4 wow', h.animation].join(' ')}>
            <div className="stat">
              <div className="stat-icon text-center">
                <h2><i className={h.icon}></i></h2>
              </div>
              <h3 className="text-center"><FormattedMessage id={`HOBBIES.${h.text}`} /></h3>
            </div>
          </div>
        })}
      </div>
    </div>
  </section>;
}

export default hobbies;