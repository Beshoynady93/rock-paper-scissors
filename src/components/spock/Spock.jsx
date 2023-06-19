import IconSpock from '../../assets/images/icon-spock.svg';

// eslint-disable-next-line react/prop-types
const Spock = ({ onClickEvent, position }) => {
  return (
    <img
      onClick={onClickEvent}
      src={IconSpock}
      alt="spock"
      className={`game-icons border-cyan-500 col-start-1 row-start-2 ${position}`}
    />
  );
};

export default Spock;
