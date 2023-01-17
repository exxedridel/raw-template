import "../styles/HeaderBanner.css";
import nightStarsLand from "../assets/night-stars-landscape1.jpg"

const HeaderBanner = () => {
  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }

  return (
    <div className="first-container">
      <img
        src={nightStarsLand}
        alt="main-img-bg"
      />
      <div className="overlap-text">
        <p>
          We bring your <b>ideas</b>
          <br />
          come to <b>life</b>
        </p>
        <button
          className="btn btn-light"
          onClick={scrollToContent}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default HeaderBanner;
