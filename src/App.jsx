import { useState } from 'react';

import Header from './components/header/Header';
import GameBody from './components/game-body/GameBody';
import Footer from './components/footer/Footer';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="px-4 py-6 min-h-screen bg-background-gradient flex flex-col justify-between font-main-display">
      <Header score={score} />
      <GameBody setScore={setScore} score={score} />
      <Footer />
    </div>
  );
}

export default App;
