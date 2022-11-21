import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import './App.css';

//array with cards, type will be used to match them
const cardsArray = [
  {
    type: "dark",
    image: require(`./images/dark.jpg`)
  },
  {
    type: "normal",
    image: require(`./images/normal.jpg`)
  },
  {
    type: "poison",
    image: require(`./images/poison.jpg`)
  },
  {
    type: "psychic",
    image: require(`./images/psychic.jpg`)
  },
  {
    type: "rock",
    image: require(`./images/rock.jpg`)
  },
  {
    type: "steel",
    image: require(`./images/steel.jpg`)
  }
];

//shuffle array to randomly generate card placement
function shuffleDeck(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
function App() {
  const [cards, setCards] = useState(
    shuffleDeck.bind(null, cardsArray.concat(cardsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [disableCards, setDisableCards] = useState(false);
  const timeout = useRef(null);

  const disable = () => {
    setDisableCards(true);
  };
  const enable = () => {
    setDisableCards(false);
  };
  
  //checks if picked cards matches
  const checkMatch = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // card will flip back after x amount
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 1000);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  //delay after picking two cards to see if they match, user cannot click other cards
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(checkMatch, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  const checkFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };


  return (
    <div className="App">
      <header>
        <div>Memory Game</div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              disabled={disableCards}
              inactive={checkInactive(card)}
              flipped={checkFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
