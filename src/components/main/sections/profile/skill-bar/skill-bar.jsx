import React from 'react';

const skillBar = (props) => {

  const bars = Array.from(Array(props.levels).keys()).map((el, i) => {
    return i < props.experience ? <div key={'skill-bar-' + i} className="skill-rate-on"></div> :
      <div key={'skill-bar-' + i} className="skill-rate-off"></div>
  });

  return <div className="skill-bar">
    {bars}
  </div>
}

export default skillBar;