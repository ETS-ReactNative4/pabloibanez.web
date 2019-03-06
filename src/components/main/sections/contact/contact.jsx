import React from 'react';
import { FormattedMessage } from 'react-intl';
import swal from 'sweetalert2';
import mapConfig from './map.config.json';

class Contact extends React.Component {

  componentDidMount() {
    new window.google.maps.Map(document.getElementById('contact_map'), {
      ...this.props.contact.map,
      ...mapConfig
    });
  }

  sendEmail() {
    swal({
      title: 'Mailing disabled',
      text: 'Mailing from the site is temporaly disabled. Please contact me on me@pabloibanez.com.',
      type: 'warning',
      confirmButtonText: 'Close'
    });
  }

  render() {
    return <section id="contact" className="section">
      <div id="contact_map"></div>
      <div id="contact_map_shadow"></div>
      <div className="contact_container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 headline wow bounceInLeft">
              <h2><FormattedMessage id="CONTACT.TITLE" /></h2>
              <p><FormattedMessage id="CONTACT.SUBTITLE" /></p>
            </div>
            <div className="col-md-6 wow bounceInUp contact-details">
              {/* <ul className="iconlist">
                <li><i className="fa fa-fw fa-map-marker"></i>{this.props.contact.location}</li>
                <li><i className="fa fa-fw fa-phone"></i>{this.props.contact.phone}</li>
                <li><i className="fa fa-fw fa-envelope-o"></i><a className="whiteLink" href="mailto:">{this.props.contact.email}</a></li>
                <li><i className="fa fa-fw fa-globe"></i><a className="whiteLink" href="">{this.props.contact.website}</a></li>
              </ul> */}
              <div>
                <div className="profile-item">
                  <i className="icon-envelope-o" />
                  <div>me@pabloibanez.com</div>
                </div>
              </div>
              <div>
                <div className="profile-item">
                  <i className="icon-phone" />
                  <div>+44 (0) 7931415156</div>
                </div>
              </div>
              <div>
                <div className="profile-item">
                  <i className="icon-marker" />
                  <div>Royal Docklands, London, UK</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow bounceInRight">

              <form id="contact-form">
                {this.props.contact.form.map(fe => <div key={fe.name} className="form-group">
                  <FormattedMessage id={`CONTACT.FORM.${fe.placeholder}`}>{placeholder => (
                    <fe.element rows={fe.rows} type={fe.type} className="form-control" name={`c_${fe.name}`} placeholder={placeholder} />
                  )}</FormattedMessage>
                </div>)}
                <div className="mailButtonContainer">
                  <button type="button" className="btn btn-custom-1" onClick={() => { this.sendEmail() }}>
                    <i className="fa fa-bullhorn icon-before"></i> <FormattedMessage id="CONTACT.FORM.SEND" />
                  </button>
                </div>
              </form>
              <div className="ajax-response"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

export default Contact;