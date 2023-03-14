import Card from "../card/card";
import "./card-list.css";

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot) => (
        <Card robot={robot} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
