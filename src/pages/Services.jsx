import { useEffect, useState } from "react";
import LearnReact from "../components/LearnReact";
import Navbar from "../components/Navbar";
import "../styles/Services.css";

const GIPHY_API_KEY = "FpimVNooJI0i8Fk99twHUkJcqNtjgSpd";

const Services = () => {
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
        const threeWords = data.fact.split(" ", 3).join(" ");
        console.log(threeWords)
        fetch(
          `https://api.giphy.com/v1/gifs/search?q=${threeWords}&api_key=${GIPHY_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            setCatGif(data.data[0].images.original.url);
          });
      });
  }, []);

  return (
    <div>
      <Navbar />
      <LearnReact />
      <div className="component">
        <img src={catGif} alt="gif" />
        <h1>{catFact}</h1>
      </div>
    </div>
  );
};

export default Services;
