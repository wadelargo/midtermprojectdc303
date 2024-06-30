
import React from 'react';
import './App.css';
import PlayerCard from './Components/PlayerCard';

const Player1 = {
  name: 'ROGER FEDERER',
  description: 'Arguably the best Tennis player ever',
  rating: 5,
};

const Player2 = {
  name: 'RAFAEL NADAL',
  description: 'The king of clay',
  rating: 4,
};

const Player3 = {
  name: 'JANNIK SINNER',
  description: 'The rising phenom of the next generation',
  rating: 3,
};

const players = [Player1, Player2, Player3];

const App = () => {
  return (
    <div className="App">
      <h1 className="title">TOP PLAYERS</h1> 
      <div className="cards">
        {players.map((player, index) => (
          <PlayerCard 
            key={index} 
            name={player.name} 
            description={player.description} 
            rating={player.rating} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
