import React from "react";

function Question({ question, onAnswer, selected }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option)}
            style={{
              backgroundColor: selected === option ? "#b19cd9" : "white",
              fontWeight: selected === option ? "bold" : "normal",
              margin: "5px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
