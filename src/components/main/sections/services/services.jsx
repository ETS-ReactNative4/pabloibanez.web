import React from 'react';
import { FormattedMessage } from 'react-intl';

const services = (props) => {
  return <section id="services" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 headline wow bounceInDown">
          <h2><FormattedMessage id="SERVICES.WHAT_CAN_I_DO" /></h2>
          <p><FormattedMessage id="SERVICES.MY_SERVICES" /></p>
        </div>
        <div className="col-md-12">
          {props.services.map((sr, i) => {
            return <div key={i} className="row">
              {sr.map(s => {
                return <div key={s.name} className="col-sm-4 wow bounceInLeft">
                  <div className="service">
                    <div className="icon">
                      <i className={s.icon}></i>
                    </div>
                    <h4><FormattedMessage id={s.label} /></h4>
                    <div className="text">
                      <p className="justify-xs"><FormattedMessage id={s.text} /></p>
                    </div>
                  </div>
                </div>
              })}
            </div>
          })}
        </div>
      </div>
    </div>
  </section>;
}

export default services;