import IconScissors from '../../assets/images/icon-scissors.svg';

// eslint-disable-next-line react/prop-types
const Scissors = ({ onClickEvent, position }) => {
  return (
    <img
      onClick={onClickEvent}
      src={IconScissors}
      alt="scissors"
      className={`game-icons border-yellow-500 col-start-2 row-start-1 ${position}`}
    />
  );
};

export default Scissors;
