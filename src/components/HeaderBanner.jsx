import "../styles/HeaderBanner.css";

const HeaderBanner = () => {
  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }

  return (
    <div className="first-container">
      <img
        src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg"
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
