import React, { useState } from "react";
import {Button,
        Alert,
        Form} from "react-bootstrap";

import Test1 from "./quiz_1"



const InputQuiz = () => {
const [show, setShow] = useState(false);
const [able, setAbility] = useState(false);

const handleClick = ()=> {
  setShow(true);
  setAbility(true);
}

return (
<div>
     <h1 className="header1">Первый тест</h1>
    <Alert variant="success" className="m-5">
      <Alert.Heading>Открыть тест</Alert.Heading>
      <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Введите ФИО</Form.Label>
          <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Введите группу</Form.Label>
           <Form.Control type="text" />
           </Form.Group>
      </Form>
      {show === true ? (<Test1/>) :(<></>)}
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => handleClick()} variant="outline-success" disabled={able}>
          Начать тест
        </Button>
      </div>
    </Alert>
</div>

)}

export default InputQuiz;
