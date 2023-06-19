import Logo from '../../assets/images/logo-bonus.svg';

// eslint-disable-next-line react/prop-types
const Header = ({ score }) => {
  return (
    <header>
      <div className="flex items-center justify-between px-2 py-4 rounded-md border-4 border-header-outline max-w-5xl mx-auto md:mb-8">
        <div>
          <img
            src={Logo}
            alt="rock paper scissors lizard spuck"
            className=" w-24"
          />
        </div>
        <div className="bg-white flex flex-col items-center justify-center rounded-md px-4 py-4">
          <p className="uppercase font-semibold text-score-text tracking-wide">
            score
          </p>
          <p className="text-dark-text text-6xl font-bold">{score}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
