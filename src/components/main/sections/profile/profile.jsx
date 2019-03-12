import React from 'react';
import { FormattedMessage } from 'react-intl';
import SkillBar from './skill-bar/skill-bar';
import TechsBoard from './techs-board/techs-board';

class profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTechStack: false
    };
    this.toggleTechStack = this.toggleTechStack.bind(this);
  }

  toggleTechStack() {
    this.setState(prevState => ({
      showTechStack: !prevState.showTechStack
    }));
  }

  render() {
    const basicProfile = (
      <React.Fragment>
        <div className="col-md-3 col-sm-6 hidden-xs wow bounceInLeft">
          <img className="avatar" src={require('../../../../assets/images/me.jpg')} alt="" />
        </div>
        <div className="col-md-3 col-sm-6 wow bounceInUp">
          <div className="profile-widget">
            <h3><FormattedMessage id="PROFILE.SKILLSET" /></h3>
            {this.props.profile.skillset.main.map((el, i) => {
              return <div key={'skill_' + i}>
                <h5>{el.name}</h5>
                <SkillBar
                  levels={this.props.profile.experienceLevels}
                  experience={el.experience}
                />
              </div>
            })}
          </div>
          <div className="profile-widget">
            <h3>Social Profiles</h3>
            <ul className="widget-social">
              {this.props.profile.socialProfiles.map(sp => {
                return <li key={sp.name}>
                  <a href={sp.url} target="_blank">
                    <i className={sp.icon}></i>
                  </a>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 wow bounceInRight professional-profile visible">
          <div className="additional-header additional-profile-header">
            <h3>Profesional Profile</h3><a className="view-all-skills" onClick={this.toggleTechStack}><FormattedMessage id="PROFILE.VIEW_FULL_SKILLSET" /></a>
          </div>
          {this.props.profile.profesionalProfile.map((p, i) => {
            return <p key={i} className="justify-xs">{p}</p>
          })}
        </div>
      </React.Fragment>);


    return <section id="profile" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 headline wow bounceInDown">
            <h2>Pablo Ibanez</h2>
            <p>{this.props.roles.map((r, i) => <span key={i}><FormattedMessage id={r} />{i < this.props.roles.length - 1 ? ' | ' : null}</span>)}</p>
          </div>

          {this.state.showTechStack ?
            <TechsBoard
              techs={this.props.techs}
              onShowBasicProfile={this.toggleTechStack}
            />
            : basicProfile}
        </div>
      </div>
    </section>;
  }
}

export default profile;