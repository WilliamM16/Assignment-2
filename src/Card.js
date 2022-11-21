import water from "./images/water.jpg";
import classnames from "classnames";
import './Card.css';

const Card = ({ onClick, card, index, inactive, flipped, disabled }) => {
    const handleClick = () => {
      !flipped && !disabled && onClick(index);
    };

    return (
        <div
          className={classnames("card", {
            "flipped": flipped,
            "inactive": inactive
          })}
          onClick={handleClick}
        >
          <div className="cardBack">
            <img src={water} alt="water" />
          </div>
          <div className="cardBack">
            <img src={card.image} alt="water" />
          </div>
        </div>
      );
    };
    
    export default Card;