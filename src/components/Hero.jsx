import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="hero--photo"
        alt="person looking at stars"
      />
      <h1 className="hero--header">About Us</h1>
      <p className="hero--text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis
        dicta. Autem, eligendi voluptate libero harum tempore et facere,
        deserunt voluptatem iure eum explicabo provident saepe distinctio.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis
        dicta. Autem, eligendi voluptate libero harum tempore et facere,
        deserunt voluptatem iure eum explicabo provident saepe distinctio.
      </p>
    </section>
  );
};

export default Hero;
