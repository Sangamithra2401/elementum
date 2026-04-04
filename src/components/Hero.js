import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">

      {/* Left squiggly */}
      <div className="hero__squiggle">
        <svg width="32" height="160" viewBox="0 0 32 160" fill="none">
          <path
            d="M16 0 Q30 28 16 56 Q2 84 16 112 Q30 140 16 160"
            stroke="#f74e6e"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Purple teardrop top-right */}
      <div className="hero__teardrop" />

      <div className="hero__content">

        

        <h1 className="hero__title">
          The <span className="hl-underline">thinkers</span> and<br />
          doers were <span className="hl-box">changing</span><br />
          the <span className="hl-pill">status</span> Quo with
        </h1>

        <p className="hero__subtitle">
          We are a team of strategists, designers communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Scattered avatar cluster */}
        <div className="cluster">
          <div className="av av-1">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="member" />
          </div>
          <div className="av av-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="member" />
          </div>
          <div className="av av-3">
            <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="member" />
          </div>
          <div className="av av-4">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="member" />
          </div>
          <div className="av av-5">
            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="member" />
          </div>
          <div className="av av-6">
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="member" />
          </div>
          <div className="av av-7">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="member" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;