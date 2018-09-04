import React from 'react';

const hobbies = (props) => {
  return <section id="stats" className="callout">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12 wow bounceInLeft">
          <h3>My hobbies</h3>
          <br />
          <h4>( besides developing... <i className="fa fa-smile-o "></i> )</h4>
        </div>
        {props.hobbies.map(h => {
          return <div key={h.name} className={['col-md-3 col-sm-4 wow', h.animation].join(' ')}>
            <div className="stat">
              <div className="stat-icon text-center">
                <h2><i className={h.icon}></i></h2>
              </div>
              <h3 className="text-center">{h.text}</h3>
            </div>
          </div>
        })}
      </div>
    </div>
  </section>;
}

export default hobbies;