import './Card.css';
import water from "./images/water.jpg";

const Card = ({ card, index, }) => {


    return (
        <div>
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