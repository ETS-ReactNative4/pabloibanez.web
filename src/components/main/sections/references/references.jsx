import React from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import sliderSettings from '../../../../util/sliderSettings';

const references = (props) => {

  const customSliderSettings = { ...sliderSettings, autoplay: false };

  return <section className="callout">
    <div className="container">
      <div className="row">
        <div className="col-md-3 wow bounceInLeft">
          <h3><FormattedMessage id="REFERENCES.TITLE" /></h3>
        </div>
        <div className="col-md-9 wow bounceInRight">
          <Slider {...customSliderSettings}>
            {props.references.map((r, i) => <div key={i}>
              <p className="reference-text">{r.text}</p>
              <div className="reference-contact">
                <img alt={r.name} className="imageFrame" src={require(`../../../../assets/images/references/${r.imgSrc}`)} />
                <div>
                  <div>
                    {r.name}
                  </div>
                  <div>
                    <FormattedMessage id={`REFERENCES.${r.role}`} />
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