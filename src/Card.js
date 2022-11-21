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
            <img src={card.image} alt="back" />
          </div>
        </div>
      );
    };
    
    export default Card;