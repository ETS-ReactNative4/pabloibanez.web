import Isotope from 'isotope-layout';
import React from 'react';

class TechsBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      category: 'all'
    };

    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this.iso = new Isotope('.grid', {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
  }

  filter(category) {
    this.iso.arrange({
      filter: itemElem => {
        return category === 'all' || itemElem.classList.contains(category);
      }
    });
    this.setState({ category });
  }

  render() {
    return <div className="techs-board">
      <div className="col-md-12">
        <div>
          <h3>Full tech stack</h3>
          <a className="view-all-skills" onClick={this.props.onShowBasicProfile}><span>View basic profile</span></a>
        </div>
        <div className="filter-buttons">
          <button className={`btn btn-xs btn-default all ${this.state.category === 'all' ? 'selected' : ''}`} onClick={() => this.filter('all')}>All</button>
          <button className={`btn btn-xs btn-default all ${this.state.category === 'frontend' ? 'selected' : ''}`} onClick={() => this.filter('frontend')}>Fronted</button>
          <button className={`btn btn-xs btn-default all ${this.state.category === 'backend' ? 'selected' : ''}`} onClick={() => this.filter('backend')}>Beckend</button>
          <button className={`btn btn-xs btn-default all ${this.state.category === 'other' ? 'selected' : ''}`} onClick={() => this.filter('other')}>Other</button>
        </div>
        <div className="techs grid row">
          {this.props.techs.sort((a, b) => b.name - a.name).map(tech => <div key={tech.name} className={`tech col-md-2 grid-item ${tech.types.join(' ')}`}><h5>{tech.name}</h5></div>)}
        </div>
      </div>
    </div>
  }
}

export default TechsBoard;