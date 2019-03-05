import React from 'react';
import { FormattedMessage } from 'react-intl';
import swal from 'sweetalert2';

const resume = (props) => {

  const transformExperience = (exps, title) => (
    <div className="row resume-items">
      <div className="col-md-3 wow bounceInLeft">
        <h3>{title}</h3>
      </div>
      {exps.map((exp, i) =>
        <React.Fragment key={i}>
          <div className={`col-md-6 ${i > 0 ? 'col-md-offset-3' : ''} col-sm-8 resume-item wow bounceInUp`}>
            <h4>{exp.role}</h4>
            {exp.paragraphs.map((p, i) => {
              switch (p.type) {
                case 'p':
                  return <p key={i} className="justify-xs">{p.text}</p>;
                case 'a':
                  return <a key={i} target="_blank" href={p.url}>{p.url}</a>;
                case 'ul':
                  return <ul key={i} className="customlist">{p.elements.map((el, i) => <li key={i}>{el}</li>)}</ul>;
                default:
                  return null;
              }
            })}
            <hr className="hidden-xs" />
          </div>

          <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
            <h4><i className="fa fa-suitcase"></i> {exp.title}</h4>
            <i className="fa fa-calendar"></i> {exp.period}
            <br /><i className="fa fa-map-marker"></i> {exp.location}
            <hr className="visible-xs" />
          </div>
        </React.Fragment>)}
    </div>
  );

  const requestCV = () => {
    swal({
      title: 'My CV',
      text: '',
      type: 'info',
      confirmButtonText: ''
    });
  }

  return <section id="resume" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 headline wow bounceInDown">
          <h2><FormattedMessage id="RESUME.TITLE" /></h2>
          <p><FormattedMessage id="RESUME.SUBTITLE" /></p>
        </div>
      </div>
      {transformExperience(props.resume.experience, <FormattedMessage id="RESUME.EXPERIENCE" />)}
      {transformExperience(props.resume.education, <FormattedMessage id="RESUME.EDUCATION" />)}
      <div className="row">
        <div className="col-md-6 col-md-offset-3 wow bounceInUp downloadcv-container">
          <a onClick={() => requestCV()} className="btn btn-default btn-custom-2">
            <i className="fa fa-cloud-download icon-before"></i> <FormattedMessage id="RESUME.REQUESTCV_BUTTON" />
          </a>
        </div>
      </div>
    </div>
  </section>
}

export default resume;