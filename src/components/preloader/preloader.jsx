import React from 'react';

class preloader extends React.Component {

  componentDidMount() {
    window.jQuery('#preloader').delay(350).fadeOut('slow');
  }

  render() {
    return <div className="wrapper">
      <div id="preloader">
        <div id="status">
          <div className="status-mes">
            <h4>Pablo Ibanez</h4>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default preloader;