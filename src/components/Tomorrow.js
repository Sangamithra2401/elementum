import React from 'react';
import './Tomorrow.css';

const Tomorrow = () => {
  return (
    <section className="tomorrow">

      {/* ── Row 1: Text left + Circle image right ── */}
      <div className="tomorrow__row1">

        <div className="tomorrow__left">
          <h2 className="t-heading">
            <span className="t-ul">Tomorrow</span> should<br />
            be better than <span className="t-ul">today</span>
          </h2>
          <p className="t-body">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="t-link">
            Read more <span className="t-line" />
          </a>
        </div>

        <div className="tomorrow__right-wrap">
          <div className="tri tri--tr" />
          <div className="circle-photo" style={{ width: 320, height: 320 }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
              alt="business meeting"
            />
          </div>
        </div>

      </div>

      {/* Coral squiggly connector */}
      <div className="tomorrow__squiggle">
        <svg width="100%" height="120" viewBox="0 0 800 120" preserveAspectRatio="none" fill="none">
          <path
            d="M400 10 Q500 10 560 60 Q620 110 700 90 Q760 75 800 80"
            stroke="#f74e6e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Row 2: Circle image left + Text right ── */}
      <div className="tomorrow__row2">

        <div className="tomorrow__left-wrap">
          <div className="tri tri--lt" />
          <div className="tri tri--lb" />
          <div className="circle-photo" style={{ width: 300, height: 300 }}>
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&q=80"
              alt="team"
            />
          </div>
        </div>

        <div className="tomorrow__progress">
          <h3 className="t-heading">
            <span className="t-box-green">See</span> how we can<br />
            help you progress
          </h3>
          <p className="t-body">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="t-link">
            Read more <span className="t-line" />
          </a>
        </div>

      </div>

    </section>
  );
};

export default Tomorrow;