import IconPaper from '../../assets/images/icon-paper.svg';

// eslint-disable-next-line react/prop-types
const Paper = ({ onClickEvent, position }) => {
  return (
    <img
      onClick={onClickEvent}
      src={IconPaper}
      alt="paper"
      className={`game-icons border-blue-500 col-start-3 row-start-2 ${position}`}
    />
  );
};

export default Paper;
