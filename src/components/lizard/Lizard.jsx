import IconLizard from '../../assets/images/icon-lizard.svg';

// eslint-disable-next-line react/prop-types
const Lizard = ({ onClickEvent, position }) => {
  return (
    <img
      onClick={onClickEvent}
      src={IconLizard}
      alt="lizard"
      className={`game-icons border-purple-500 col-start-1 row-start-3 ${position}`}
    />
  );
};

export default Lizard;
