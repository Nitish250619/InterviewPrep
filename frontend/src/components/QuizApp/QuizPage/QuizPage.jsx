import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizData } from '../QuizData/QuizData';
import './QuizPage.css';

const QuizPage = () => {
  const { topic, difficulty, quizIndex } = useParams();
  const navigate = useNavigate();
  const quiz = quizData[topic][difficulty][quizIndex];
  const [answers, setAnswers] = useState(new Array(quiz.questions.length).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: quiz.questions.length }, () => null));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleSubmit();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (showScore) {
      const timeout = setTimeout(() => {
        navigate('/quizes');
      }, 8000);

      return () => clearTimeout(timeout);
    }
  }, [showScore, navigate]);

  const handleOptionSelect = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedOptions.forEach((selectedOption, index) => {
      const correctOptionIndex = quiz.questions[index].options.findIndex(option => option === quiz.questions[index].answer);
      if (selectedOption === correctOptionIndex) {
        newScore += 10;
      }
    });
    setScore(newScore);
    setShowScore(true);

    // Determine message and emoji based on score
    if (newScore < (quiz.questions.length * 10) * 0.5) {
      setMessage("Betichod padhai bhi kr lia kr puri jindgi aise hi dhakke khayega kya GRAMDU");
      setEmoji("😡");
    } else if (newScore >= (quiz.questions.length * 10) * 0.5 && newScore < (quiz.questions.length * 10) * 0.85) {
      setMessage("Thodi mhenat or ladke phir baat ban jayegi hero hai tu lga rhe wish you all the best");
      setEmoji("😊");
    } else {
      setMessage("Bhete moz krdi ");
      setEmoji("😄");
    }
  };

  const renderOptions = () => {
    return (
      <div>
        <p>{quiz.questions[currentIndex].question}</p>
        {quiz.questions[currentIndex].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(idx)}
            disabled={selectedOptions[currentIndex] !== null}
            style={{
              backgroundColor:
                selectedOptions[currentIndex] === idx
                  ? option === quiz.questions[currentIndex].answer
                    ? 'green'
                    : 'red'
                  : 'white',
              color: selectedOptions[currentIndex] === idx ? 'white' : 'black',
              margin: '5px',
              padding: '10px',
            }}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ padding: '20px', marginBottom: '20px', border: '1px solid #ccc' }}>
        <h2 style={{ textAlign: 'center' }}>{quiz.title}</h2>
        <p style={{ textAlign: 'center' }}>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
        <p style={{ textAlign: 'center' }}>Question {currentIndex + 1} of {quiz.questions.length}</p>
        <div style={{ marginBottom: '20px' }}>
          {renderOptions()}
        </div>
        <div style={{ textAlign: 'center' }}>
          {currentIndex < quiz.questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              style={{ padding: '10px 20px', margin: '5px' }}
              disabled={selectedOptions[currentIndex] === null}
            >
              Next Question
            </button>
          ) : (
            <>
              <button
                onClick={handleSubmit}
                style={{ padding: '10px 20px', margin: '5px' }}
                disabled={selectedOptions[currentIndex] === null}
              >
                Submit
              </button>
              <button
                onClick={() => navigate('/quizes')}
                style={{ padding: '10px 20px', margin: '5px' }}
              >
                Exit
              </button>
            </>
          )}
        </div>
      </div>
      {showScore && (
        <div className="result-container">
          <h3 style={{ textAlign: 'center' }}>Quiz Completed!</h3>
          <p style={{ textAlign: 'center' }}>You scored {score} out of {quiz.questions.length * 10}</p>
          <p style={{ textAlign: 'center' }}>{message} {emoji}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(score / (quiz.questions.length * 10)) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
