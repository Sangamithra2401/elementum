import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="newsletter">
      {/* Decorative squiggle top-left */}
      <div className="newsletter__squiggle">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <path d="M5 35 Q15 5 30 20 Q45 35 55 5" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Purple half-circle bottom right */}
      <div className="newsletter__purple-shape" />

      <div className="newsletter__box">
        <h2 className="newsletter__heading">
          Subscribe to<br />our newsletter
        </h2>
        <p className="newsletter__sub">To make your stay special and even more memorable</p>

        {submitted ? (
          <div className="newsletter__success">✓ You're subscribed!</div>
        ) : (
          <button className="newsletter__btn" onClick={() => setSubmitted(true)}>
            Subscribe Now
          </button>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
