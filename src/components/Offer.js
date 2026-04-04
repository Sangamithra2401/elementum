import React from 'react';
import './Offer.css';

const services = [
  {
    id: 1,
    tag: 'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    id: 2,
    tag: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    id: 3,
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

const Offer = () => {
  return (
    <section className="offer">

      {/* Top-right coral squiggle */}
      <div className="offer__squiggle">
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
          <path
            d="M10 30 Q80 -20 120 60 Q160 130 210 80"
            stroke="#f74e6e"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Avatar pill + count — inline with title */}
      <div className="offer__title-row">
        <div className="offer__title-wrap">
          <h2 className="offer__title">
            What we <span className="hl-pill-green">can</span><br />
            <span className="hl-underline-yellow">offer</span> you!
          </h2>
        </div>
      </div>

      {/* Service list */}
      <div className="offer__list">
        {services.map((svc) => (
          <div key={svc.id} className="offer__item">
            <div className="offer__item-tag">{svc.tag}</div>
            <div className="offer__item-title">{svc.title}</div>
            <div className="offer__item-arrow">⟶</div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Offer;