import React, { useState, useEffect } from 'react';
import Question from './Question';
import { getQuestions } from '../api';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryScores, setCategoryScores] = useState({});
  const [categoryHighScores, setCategoryHighScores] = useState({});
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const savedScores = localStorage.getItem('categoryHighScores');
    if (savedScores) {
      setCategoryHighScores(JSON.parse(savedScores));
    }
  }, []);

  const handleRestart = () => {
    setScore(0);
    setCurrent(0);
    setQuizStarted(false);
    setCategoryScores({});
    setAnswers({});
  };

  useEffect(() => {
    if (quizStarted) {
      getQuestions(selectedCategory)
        .then((data) => {
          if (Array.isArray(data)) {
            setQuestions(data);
            setCurrent(0);
            setScore(0);
            setCategoryScores({});
            setAnswers({});
          } else {
            console.error('Invalid data format:', data);
          }
        })
        .catch((err) => console.error('Fetch error:', err));
    }
  }, [quizStarted, selectedCategory]);

  const handleAnswer = (selected) => {
    const questionId = questions[current]._id || current;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selected
    }));
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let finalScore = 0;
    let catScores = {};

    questions.forEach((q, index) => {
      const id = q._id || index;
      const selected = answers[id];
      if (selected === q.correctAnswer) {
        finalScore++;
        const cat = q.category || 'Uncategorized';
        catScores[cat] = (catScores[cat] || 0) + 1;
      }
    });

    setScore(finalScore);
    setCategoryScores(catScores);
    setCurrent(questions.length); // end quiz
  };

  useEffect(() => {
    if (current === questions.length && quizStarted) {
      const cat = selectedCategory;
      setCategoryHighScores((prev) => {
        const currentHigh = prev[cat] || 0;
        const newHigh = Math.max(currentHigh, score);
        const updated = { ...prev, [cat]: newHigh };
        localStorage.setItem('categoryHighScores', JSON.stringify(updated));
        return updated;
      });
    }
  }, [current, questions.length, quizStarted, score, selectedCategory]);

  const categoryList = ['General', 'Technology', 'Aptitude', 'History'];

  if (!quizStarted) {
    return (
      <div className="start-screen">
        <h1>Welcome to the Quiz!</h1>
        <p>Choose Category:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <button onClick={() => { setSelectedCategory('All'); setQuizStarted(true); }}>All</button>
          {categoryList.map((cat) => (
            <button key={cat} onClick={() => { setSelectedCategory(cat); setQuizStarted(true); }}>
              {cat}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="result">
        <h2>No questions available for "{selectedCategory}"</h2>
        <button className="start-button" onClick={handleRestart}>Go Back</button>
      </div>
    );
  }

  if (current >= questions.length) {
    return (
      <div className="result">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} / {questions.length}</p>

        {selectedCategory !== 'All' && (
          <p>High Score for {selectedCategory}: {categoryHighScores[selectedCategory] || 0}</p>
        )}

        {selectedCategory === 'All' && (
          <div style={{ marginTop: '1rem' }}>
            <h3>Category-wise Scores:</h3>
            <ul>
              {Object.entries(categoryScores).map(([cat, val]) => (
                <li key={cat}>{cat}: {val} correct</li>
              ))}
            </ul>
          </div>
        )}

        <button className="start-button" onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <Question
        question={questions[current]}
        onAnswer={handleAnswer}
        selected={answers[questions[current]._id || current]}
      />

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
  <button 
    onClick={handlePrevious} 
    disabled={current === 0}
    style={{ opacity: current === 0 ? 0.5 : 1 }}
  >
    Previous
  </button>

  <button 
    onClick={handleNext} 
    disabled={current === questions.length - 1}
    style={{ opacity: current === questions.length - 1 ? 0.5 : 1 }}
  >
    Next
  </button>

  {current === questions.length - 1 && (
    <button className="start-button" onClick={handleSubmit}>
      Submit
    </button>
  )}
</div>

    </div>
  );
}

export default Quiz;
