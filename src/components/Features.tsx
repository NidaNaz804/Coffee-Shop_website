"use client";

import React, { useEffect } from "react";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Feature Item 1 */}
        <div className="feature-item feature-1">
          <img
            src="/feature2.jpg"
            alt="Fresh Coffee"
            className="feature-image"
          />
          <h3 className="feature-title">Fresh Beans Daily</h3>
          <p className="feature-description">
            We source and roast our beans daily for the perfect cup.
          </p>
        </div>

        {/* Feature Item 2 */}
        <div className="feature-item feature-2">
          <img
            src="/feature1.jpg"
            alt="Cozy Atmosphere"
            className="feature-image"
          />
          <h3 className="feature-title">Cozy Atmosphere</h3>
          <p className="feature-description">
            Relax in our carefully designed space.
          </p>
        </div>

        {/* Feature Item 3 */}
        <div className="feature-item feature-3">
          <img
            src="/feature3.jpg"
            alt="Expert Baristas"
            className="feature-image"
          />
          <h3 className="feature-title">Expert Baristas</h3>
          <p className="feature-description">
            Our skilled team crafts every drink with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
