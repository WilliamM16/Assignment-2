import water from "./images/water.jpg";
import classnames from "classnames";
import './Card.css';

const Card = ({ card, index}) => {
    return (
        <div
          className={classnames("card", {})}
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