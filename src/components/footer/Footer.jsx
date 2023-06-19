import { useState } from 'react';
import Rules from '../rules/Rules';

const Footer = () => {
  const [isRulesShown, setIsRulesShown] = useState(false);

  const showRules = () => {
    if (isRulesShown) return;
    setIsRulesShown(true);
  };

  return (
    <footer className="isolate">
      <div className="grid place-items-center relative -z-20">
        <button
          onClick={showRules}
          className="uppercase border border-white text-white px-8 py-2 text-center rounded-md w-32 ml-auto mr-auto"
        >
          Rules
        </button>
      </div>
      <Rules isShown={isRulesShown} close={setIsRulesShown} />
    </footer>
  );
};

export default Footer;
