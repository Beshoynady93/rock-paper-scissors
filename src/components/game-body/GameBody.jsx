import { useState, useEffect } from 'react';

import InGame from '../in-game/InGame';
import PlayAgainBtn from '../play-again-button/PlayAgainBtn';

import Scissors from '../scissors/Scissors';
import Spock from '../spock/Spock';
import Paper from '../paper/Paper';
import Lizard from '../lizard/Lizard';
import Rock from '../rock/Rock';

// eslint-disable-next-line react/prop-types
const GameBody = ({ setScore }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPick, setUserPick] = useState('');
  const [housePick, setHousePick] = useState('');
  const [winner, setWinner] = useState('');

  const symbols = [
    <Scissors key={'scissors'} />,
    <Spock key={'spock'} />,
    <Paper key={'paper'} />,
    <Lizard key={'lizard'} />,
    <Rock key={'rock'} />,
  ];

  const getHousePick = () => {
    const randomPick = Math.floor(Math.random() * 5);
    const housePick = symbols[randomPick].key;

    setHousePick(housePick);
  };

  const userPlay = (play) => {
    setIsPlaying(true);
    setUserPick(play);
    getHousePick();
  };

  const updateScore = () => {
    winner === 'user' ? setScore((previousScore) => previousScore + 1) : '';
  };

  useEffect(() => {
    determineWinner(userPick, housePick);
    updateScore();
  }, [userPick, housePick, winner]);

  const determineWinner = (userPick, housePick) => {
    switch (userPick) {
      case 'scissors':
        if (housePick === 'spock' || housePick === 'rock') {
          setWinner('house');
        } else if (housePick === userPick) {
          setWinner('draw');
        } else setWinner('user');
        break;

      case 'spock':
        if (housePick === 'lizard' || housePick === 'paper') {
          setWinner('house');
        } else if (housePick === userPick) {
          setWinner('draw');
        } else setWinner('user');
        break;

      case 'paper':
        if (housePick === 'scissors' || housePick === 'lizard') {
          setWinner('house');
        } else if (housePick === userPick) {
          setWinner('draw');
        } else setWinner('user');
        break;

      case 'lizard':
        if (housePick === 'rock' || housePick === 'scissors') {
          setWinner('house');
        } else if (housePick === userPick) {
          setWinner('draw');
        } else setWinner('user');
        break;

      case 'rock':
        if (housePick === 'paper' || housePick === 'spock') {
          setWinner('house');
        } else if (housePick === userPick) {
          setWinner('draw');
        } else setWinner('user');
        break;

      default:
        break;
    }
  };

  const playAgain = () => {
    resetGame();
  };

  const resetGame = () => {
    setUserPick('');
    setHousePick('');
    setIsPlaying(false);

    setWinner('');
  };

  return !isPlaying ? (
    <div className="bg-pentagon-bg bg-no-repeat bg-center grid grid-cols-3 grid-rows-3 max-w-lg mx-auto">
      <Scissors
        onClickEvent={() => userPlay('scissors')}
        position={'transform -translate-y-8'}
      />
      <Spock
        onClickEvent={() => userPlay('spock')}
        position={'transform -translate-y-12 sm:-translate-x-12'}
      />
      <Paper
        onClickEvent={() => userPlay('paper')}
        position={'transform -translate-y-12 sm:translate-x-12'}
      />
      <Lizard
        onClickEvent={() => userPlay('lizard')}
        position={'transform translate-y-8'}
      />
      <Rock
        onClickEvent={() => userPlay('rock')}
        position={'transform translate-y-8'}
      />
    </div>
  ) : (
    <div className="">
      <InGame
        symbols={symbols}
        userPick={userPick}
        housePick={housePick}
        winner={winner}
      />
      <div className="md:transform md:-translate-y-36">
        <p className="w-max mx-auto mb-4 uppercase text-4xl font-bold text-white">
          {winner === 'user'
            ? 'you win'
            : winner === 'house'
            ? 'you lose'
            : 'draw'}
        </p>
        <PlayAgainBtn onClickEvent={playAgain} />
      </div>
    </div>
  );
};

export default GameBody;
