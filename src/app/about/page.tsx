import Image from 'next/image';

export default function About() {
  return (
    <div className="about-section">
      <div className="max-w-7xl mx-auto">
        <div className="about-header">
          <h1>Our Story</h1>
          <p>
            Founded in 2010, Artisan Coffee House has been serving the community with carefully crafted coffee and a warm atmosphere.
          </p>
        </div>

        <div className="about-grid-1">
          <div className="about-image-container">
            <Image
              src="/about.jpg"
              alt="Coffee shop interior"
              fill
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              We believe that great coffee has the power to bring people together and create memorable moments. Our mission is to provide an exceptional coffee experience while fostering a sense of community.
            </p>
            <p>
              Every cup we serve is crafted with care, using ethically sourced beans from sustainable farms around the world. Our expert baristas are passionate about their craft and dedicated to serving you the perfect cup every time.
            </p>
          </div>
        </div>
        </div>
        </div>
  );
}
