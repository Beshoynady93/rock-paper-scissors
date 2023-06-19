// eslint-disable-next-line react/prop-types
const PlayAgainBtn = ({ onClickEvent }) => {
  return (
    <div className="w-44 mx-auto">
      <button
        onClick={onClickEvent}
        className="bg-white text-dark-text px-10 py-2 uppercase rounded-lg font-main-display"
      >
        play again
      </button>
    </div>
  );
};

export default PlayAgainBtn;
