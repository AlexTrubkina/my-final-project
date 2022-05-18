import React, { useState } from "react";
import {Button,
        Alert,
        Form} from "react-bootstrap";
import Questions_1 from "./data_1.js";
import "./quiz_1.css";


const InputQuizThird = () => {

  const Test3 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerButtonClick = (isCorrect) => {
      if (isCorrect === true) {
        setScore(score + 1);
      }

      const nextQuetions = currentQuestion + 1;
      if (nextQuetions < Questions_1.length) {
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
                Вы набрали {score} баллов из {Questions_1.length}
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Вопрос {currentQuestion + 1}</span>
                  </div>
                  <div className="question-text">
                    {Questions_1[currentQuestion].questionText}
                  </div>
                </div>

                <div className="answer-section">
                  {Questions_1[currentQuestion].answerOptions.map((answerOptions) => (
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

const [show, setShow] = useState(false);
const [able, setAble] = useState(true);
const [text, setText] = useState('')

const handleClick = ()=> {
  setShow(true);
  setAble(true);
}

const handleChange = () =>{
    if (text !== ''){
      setAble(false);
    }
}

return (
<div>
     <h1 className="header1">Первый тест</h1>
    <Alert variant="info" className="m-5">
      <Alert.Heading>Открыть тест</Alert.Heading>
      <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
          <Form.Label>Введите ФИО</Form.Label>
          <Form.Control type="text" name="name" onChange={ event => setText(event.target.value) }/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Введите группу</Form.Label>
           <Form.Control type="text" name="fname" onChange={ () => handleChange() }/>
           </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
      {show === true ? (<Test3/>) :(<></>)}
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => handleClick()} variant="outline-success" disabled={able}>
          Начать тест
        </Button>
      </div>
    </Alert>
</div>
)}

export default InputQuizThird;
