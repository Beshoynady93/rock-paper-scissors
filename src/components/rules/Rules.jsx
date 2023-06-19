import { useRef } from 'react';

import RulesImage from '../../assets/images/image-rules-bonus.svg';
import CloseIcon from '../../assets/images/icon-close.svg';

// eslint-disable-next-line react/prop-types
const Rules = ({ isShown, close }) => {
  const rulesRef = useRef();

  const closeRules = () => {
    // rulesRef.current.classList.remove('flex');
    // rulesRef.current.classList.add('hidden');
    close(false);
  };

  document.addEventListener('mousedown', closeRules);

  return (
    <div
      ref={rulesRef}
      className={`absolute inset-0 bg-white py-8 ${
        isShown ? 'flex' : 'hidden'
      } flex flex-col gap-28 items-center justify-center md:top-1/4 md:inset-x-1/4 md:gap-16 md:rounded-md md:px-8 md:mx-auto md:max-w-sm md:max-h-30 md:before md:before:absolute md:before:-top-[11.5rem] md:before:w-screen md:before:h-screen md:before:bg-black md:before:bg-opacity-30 md:before:-z-10`}
    >
      <div className=" md:self-start">
        <h2 className="text-dark-text uppercase text-4xl font-bold">rules</h2>
      </div>
      <div>
        <img src={RulesImage} alt="game rules" />
      </div>
      <div className="md:absolute top-10 right-7">
        <button onClick={closeRules}>
          <img src={CloseIcon} alt="close rules tap" />
        </button>
      </div>
    </div>
  );
};

export default Rules;
