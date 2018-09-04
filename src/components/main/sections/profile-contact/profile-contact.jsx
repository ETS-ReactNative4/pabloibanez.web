import React from 'react';

const profileContact = (props) => {

  return <section id="profile-contact">
    <div className="container">
      <div className="row">
        {props.data.map(el => (
          <div key={el.name} className={['col-sm-4', 'wow', el.animation].join(' ')} >
            <div className="profile-item">
              <i className={el.icon}></i>
              <h5>{el.text}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
}

export default profileContact;