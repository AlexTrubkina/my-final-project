import questions from "./data_1.js";
import "./quiz_1.css";
import React, { useState } from "react";


function Test1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };
return (
  <>
        <div className="body1">
          {showScore ? (
            <div className="score-section">
              Вы набрали {score} баллов из {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Вопрос {currentQuestion + 1}</span>
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOptions) => (
                  <button
                    className="buttontest"
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                  >
                    {answerOptions.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
    </>
);
}

export default Test1;
