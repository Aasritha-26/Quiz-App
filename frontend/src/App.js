import React, { useState, useEffect } from "react"; 
import './App.css';
import Quiz from "./components/Quiz";

function App() {
  const [highScore, setHighScore] = useState(0);

  // Clear localStorage high score when the app starts
  useEffect(() => {
    localStorage.setItem('highScore', 0);
    setHighScore(0);
  }, []);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
