import "./card.css";

const Card = ({ robot }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${robot.id}?set=set1&size=180x180`}
        alt="{robot.name}"
      />
      <h1>{robot.name}</h1>
    </div>
  );
};

export default Card;
