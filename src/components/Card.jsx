import "../styles/Card.css";

const Card = (props) => {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }
  // const firstName = "Joe";
  // const lastName = "Schmoe";
  // const date = new Date();
  // const hours = date.getHours()
  // let timeOfDay;

  // (hours < 12) ? timeOfDay = "morning" : timeOfDay = "afternoon";

  // if (hours < 12) {
  //   timeOfDay = "morning";
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon";
  // } else {
  //   timeOfDay = "night";
  // }
  return (
    <div className="cardi">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.data.coverImg}`} className="card--image" />
      {/* given name doesnt matter | you can change it here but be carefull to call it correctly */}
      <div className="card--stats">
        <img
          src="https://cdn-icons.flaticon.com/png/128/4369/premium/4369505.png?token=exp=1656623882~hmac=1ae6bf564e87178c73efe4ab04070a62"
          className="card--star"
        />
        <span>{props.data.stats.rating}</span>
        <span className="gray">({props.data.stats.reviewCount}) •&nbsp;</span>
        <span className="gray">{props.data.location}</span>
      </div>
      <p>{props.data.title}</p>
      <p>
        <span className="bold">From ${props.data.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
