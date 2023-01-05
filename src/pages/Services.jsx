import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/Services.css";

/*
Call to api https://catfact.ninja/fact to get a 'cat fact string' then, with the 3 first words do 
a search call to api https://api.giphy.com/v1/gifs/search with the API_KEY: FpimVNooJI0i8Fk99twHUkJcqNtjgSpd
to get the gif from the object returned. To finish, place the gif to the left and the full cat fact to the 
right within the dom, vertically aligned.
*/

const GIPHY_API_KEY = "FpimVNooJI0i8Fk99twHUkJcqNtjgSpd";

const Services = () => {
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");
  const [isClicked, setIsCliked] = useState(false);

  useEffect(() => {
    // with axios
    const getStates = () => { 
      axios.get("https://catfact.ninja/fact")
      .then((res) => {setCatFact(res.data.fact);
        const threeWords = res.data.fact.split(" ", 3).join(" ");
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${threeWords}`)
          .then((res) => {setCatGif(res.data.data[0].images.original.url)})
          .catch(function (error) {console.log(error)});
      });
    };
    getStates(); // since catch does not work here this function could be omitted if not using to types

    // with axios and async
    // const getStates = async () => {
    //   const resFacts = await axios("https://catfact.ninja/fact")
    //   const dataFact = await resFacts.data.fact
    //   setCatFact(dataFact)

    //   const threeWords = dataFact.split(" ", 3).join(" ");
    //   console.log(threeWords)
    //   const resGiphy = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${threeWords}`)
    //   const dataGif = await resGiphy.data.data[0].images.original.url
    //   setCatGif(dataGif)
    // }
    // getStates().catch(console.error);

    // with async 
    // const getStates = async () => {
    //   const resFact = await fetch("https://catfact.ninja/fact");
    //   const jsonFact = await resFact.json();
    //   setCatFact(jsonFact.fact);
    //   const threeWordsArr = jsonFact.fact.split(" ", 3).join(" ");

    //   const resGif = await fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${threeWordsArr}`
    //   );
    //   const jsonGif = await resGif.json();
    //   setCatGif(jsonGif.data[0].images.original.url);
    // };
    // getStates().catch(console.error);
  }, [isClicked]);

  function handleClick() {
    setIsCliked(isClicked ? false : true);
    console.log(isClicked);
  }

  // with fetchs concatenated
  // useEffect(() => {
  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCatFact(data.fact);
  //       const threeWords = data.fact.split(" ", 3).join(" ");
  //       console.log(threeWords);
  //       fetch(
  //         `https://api.giphy.com/v1/gifs/search?q=${threeWords}&api_key=${GIPHY_API_KEY}`
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setCatGif(data.data[0].images.original.url);
  //         });
  //     });
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="component">
        <img className="img-gif" src={catGif} alt="gif" />
        <h1>{catFact}</h1>
      </div>
      <button onClick={handleClick} className="btn btn-random-fact">
        Random Fact
      </button>
    </div>
  );
};

export default Services;
