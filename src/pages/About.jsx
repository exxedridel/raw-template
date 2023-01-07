import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Card from "../components/Card";
import "../styles/AboutMe.css";
import dataCard from "../dataCard.js";

const AboutMe = () => {
  const Cards = dataCard.map((data) => {
    return (
      <Card
        key={data.id}
        data={data}
        // {...data} to spread all the props and dont have to write the .data in each prop
      />
    );
  });
  return (
    <div>
      <Hero />
      <section className="card-list">{Cards}</section>
      <div className="center">
        <h1>Contact</h1>
      </div>
      <div className="contacts">
        <Contact
          img="https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&w=600"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </div>
  );
};

export default AboutMe;
