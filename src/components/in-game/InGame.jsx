/* eslint-disable react/prop-types */
const InGame = ({ symbols, userPick, housePick, winner }) => {
  return (
    <div className="flex items-center justify-evenly md:justify-between gap-4 md:px-16 max-w-6xl md:mx-auto mb-8">
      <div className="md:transform md:scale-150">
        <div
          className={`${
            winner === 'user' ? 'game-winner' : ''
          } rounded-full w-max`}
        >
          {symbols.filter((symbol) => symbol.key === userPick)}
        </div>
        <p className="text-white mt-4 uppercase">you picked</p>
      </div>
      <div className="md:transform md:scale-150">
        <div
          className={`${
            winner === 'house' ? 'game-winner' : ''
          } rounded-full w-max`}
        >
          {symbols.filter((symbol) => symbol.key === housePick)}
        </div>
        <p className="text-white mt-4 uppercase">the house pick</p>
      </div>
    </div>
  );
};

export default InGame;
