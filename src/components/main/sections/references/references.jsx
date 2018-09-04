import React from 'react';
import Slider from "react-slick";
import sliderSettings from '../../../../util/sliderSettings';

const references = (props) => {
  return <section className="callout">
    <div className="container">
      <div className="row">
        <div className="col-md-3 wow bounceInLeft">
          <h3>References</h3>
        </div>
        <div className="col-md-9 wow bounceInRight">
          <Slider {...sliderSettings}>
            {props.references.map((r, i) => <div key={i}>
              <p className="reference-text">{r.text}</p>
              <div className="reference-contact">
                <img className="imageFrame" alt={r.name} src={require(`../../../../assets/images/references/${r.imgSrc}`)} />
                <div>
                  <div>
                    {r.name}
                  </div>
                  <div>
                    {r.role}
                  </div>
                </div>
              </div>
            </div>)}
          </Slider>
        </div>
      </div>
    </div>
  </section>
}

export default references;