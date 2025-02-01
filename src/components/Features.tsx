import React from 'react'

const Features = () => {
  return (
<section className="features-section">
  <div className="features-container">
    <div className="feature-item">
      <img
        src="/feature2.jpg"
        alt="Fresh Coffee"
        className="feature-image"
      />
      <h3 className="feature-title">Fresh Beans Daily</h3>
      <p className="feature-description">We source and roast our beans daily for the perfect cup</p>
    </div>
    <div className="feature-item">
      <img
        src="/feature1.jpg"
        alt="Cozy Atmosphere"
        className="feature-image"
      />
      <h3 className="feature-title">Cozy Atmosphere</h3>
      <p className="feature-description">Relax in our carefully designed space</p>
    </div>
    <div className="feature-item">
      <img
        src="/feature3.jpg"
        alt="Expert Baristas"
        className="feature-image"
      />
      <h3 className="feature-title">Expert Baristas</h3>
      <p className="feature-description">Our skilled team crafts every drink with precision</p>
    </div>
  </div>
</section>

  )
}

export default Features