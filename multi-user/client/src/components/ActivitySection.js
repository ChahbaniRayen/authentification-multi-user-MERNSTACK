import React from 'react';

function ActivitySection({ title, description, image }) {
  return (
    <section>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Book Now</button>
    </section>
  );
}

export default ActivitySection;