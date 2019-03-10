import React from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import sliderSettings from '../../../../util/sliderSettings';

const clients = (props) => {
  const customSliderSettings = {
    ...sliderSettings,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return <section id="clients" className="callout callout-dark callout-clients">
    <div className="page-triangle" />
    <div className="container">
      <div className="row">
        <div className="col-md-3 wow bounceInLeft">
          <h3><FormattedMessage id="CLIENTS.EXPERIENCEWITH" /></h3>
        </div>
        <div className="col-md-9 wow bounceInRight">
          <Slider {...customSliderSettings}>
            {props.clients.map((c, i) => <div key={i}>
              <img src={require(`../../../../assets/images/logo/${c.imgSrc}`)} alt={c.name} />
              <h4>{c.name}</h4>
            </div>)}
          </Slider>
        </div>
      </div>
    </div>
  </section>
}

export default clients;