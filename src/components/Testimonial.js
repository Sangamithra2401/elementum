import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">

      {/* ── Left scattered avatars ── */}
      <div className="testimonial__left">
        <div className="t-av t-av--sm" style={{ top: '0px', left: '30px' }}>
          <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="reviewer" />
        </div>
        <div className="t-av t-av--md" style={{ top: '90px', left: '0px' }}>
          <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="reviewer" />
        </div>
        <div className="t-av t-av--sm" style={{ top: '200px', left: '40px' }}>
          <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="reviewer" />
        </div>
      </div>

      {/* ── Center ── */}
      <div className="testimonial__center">

        <h2 className="testimonial__heading">
          <span className="t-hl-pill">What our customer</span><br />
          says <span className="t-hl-underline">About Us</span>
        </h2>

        <div className="testimonial__card">
          <span className="t-quote t-quote--open">"</span>
          <p className="testimonial__body">
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use technologies
            that the company hasn't used, which have also proved to be easy to
            use and reliable
          </p>
          <span className="t-quote t-quote--close">"</span>
        </div>

      </div>

      {/* ── Right scattered avatars ── */}
      <div className="testimonial__right">
        <div className="t-av t-av--sm" style={{ top: '0px', right: '10px' }}>
          <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="reviewer" />
        </div>
        <div className="t-av t-av--md" style={{ top: '10px', right: '80px' }}>
          <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="reviewer" />
        </div>
        <div className="t-av t-av--sm" style={{ top: '120px', right: '20px' }}>
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="reviewer" />
        </div>
        <div className="t-av t-av--lg" style={{ top: '200px', right: '0px' }}>
          <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="reviewer" />
        </div>
      </div>

    </section>
  );
};

export default Testimonial;