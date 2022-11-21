import { useState } from "react";
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
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
