import "../styles/HeaderBanner.css";

const HeaderBanner = () => {
  return (
    <div className="first-container">
      <img
        src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg"
        alt="main-img-bg"
      />
      <div className="overlap-text">
        <p>
          We make your <b>vision</b>
        </p>
        <p>
          come to <b>life</b>
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
