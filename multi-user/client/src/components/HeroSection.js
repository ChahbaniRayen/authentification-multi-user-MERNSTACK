import React, { useState, useEffect } from "react";
import "../css/HeroSection.css";
import image1 from "../assets/IMG-20241130-WA0001.jpg";
import image2 from "../assets/IMG-20241130-WA0002.jpg";
import image3 from "../assets/IMG-20241130-WA0004.jpg";
import jetSkiImage from "../assets/jetski_2048x.jpg";
import quadImage from "../assets/quad.jpg";
import buggyImage from "../assets/buggy.jpg";

function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState(image1);

  const images = [image1, image2, image3];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      {/* Section pour l'équitation */}
      <section className="hero-container">
        <section
          className="hero"
          style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="text-container">
            <h2>Horseback Riding Adventures in Djerba</h2>
            <p>
              Explore the stunning landscapes of Djerba on horseback. Our
              guided tours will immerse you in the island's natural beauty and
              rich culture, creating unforgettable memories.
            </p>
            <button>Book Your Ride</button>
          </div>
        </section>
        <section className="additional-info">
          <h3>Why Choose Us?</h3>
          <p>
            Our horseback riding tours are carefully designed to offer the
            best experiences. Whether you are a beginner or an experienced
            rider, we provide a safe and enjoyable adventure that you will
            remember forever.
          </p>
          <ul>
            <li>Experienced Guides</li>
            <li>Safe and Well-Cared-For Horses</li>
            <li>Customizable Routes for Every Rider</li>
          </ul>
        </section>
      </section>

      {/* Section pour le jet-ski */}
      <section className="hero-container reverse">
        <section
          className="hero"
          style={{ backgroundImage: `url(${jetSkiImage})` }}>
          <div className="text-container">
            <h2>Jet Ski Adventures</h2>
            <p>
              Ride the waves and feel the adrenaline rush with our exciting
              jet ski tours. Experience the thrill of speed on the open water
              and explore stunning coastal views.
            </p>
            <button>Book Your Ride</button>
          </div>
        </section>
        <section className="additional-info">
          <h3>Why Choose Our Jet Ski Tours?</h3>
          <p>
            Our jet ski tours provide a perfect blend of excitement and
            adventure. Whether you want to race across the water or enjoy a
            peaceful ride, we offer something for everyone.
          </p>
          <ul>
            <li>Experienced Instructors</li>
            <li>Safe Equipment and Conditions</li>
            <li>Guided Tours of Scenic Locations</li>
          </ul>
        </section>
      </section>

      {/* Section pour Quad Ride et Buggy Ride */}
      <section className="quad-buggy-container">
        <div className="quad-buggy-image">
          <img src={quadImage} alt="Quad Ride" />
          <div className="overlay">
            <h2>Quad Adventures</h2>
            <p>
              Get ready for an exciting off-road experience through rugged
              terrains. Our quad tours will take you on an unforgettable ride
              through Djerba's scenic landscapes.
            </p>
            <button>Book Your  Ride</button>
          </div>
        </div>
        <div className="quad-buggy-image">
          <img src={buggyImage} alt="Buggy Ride" />
          <div className="overlay">
            <h2>Buggy Adventures</h2>
            <p>
              Hop into a buggy and explore the island's hidden gems. Enjoy an
              adventurous ride through Djerba's beautiful nature with our
              buggy tours.
            </p>
            <button>Book Your  Ride</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
