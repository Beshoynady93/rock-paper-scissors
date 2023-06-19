import IconRock from '../../assets/images/icon-rock.svg';

// eslint-disable-next-line react/prop-types
const Rock = ({ onClickEvent, position }) => {
  return (
    <img
      onClick={onClickEvent}
      src={IconRock}
      alt="rock"
      className={`${position} game-icons border-red-500 col-start-3 row-start-3`}
    />
  );
};

export default Rock;
