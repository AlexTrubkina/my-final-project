import React from "react";
import {Card, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import "./tasks.css"

const Tasks = () =>
     <div>
      <div className="header">
      <h1>Лабораторные работы</h1>
      </div>

      <div className="cards">

      <Card className="m-4" border='warning' style={{ width: '30rem'}}>
       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FQfCCkUdvgiOEMK4710a5RmJxQ1S3kswOw&usqp=CAU" />
       <Card.Body>
       <Card.Title>Лабораторная работа № 1</Card.Title>
        <Card.Text>
         Основы работы с LaTeX
        </Card.Text>
        <LinkContainer to="/first_task">
       <Button variant="warning"> Перейти к заданию</Button>
       </LinkContainer>
      </Card.Body>
      </Card>
      <Card border="primary" className="m-4" style={{ width: '30rem'}}>
       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FQfCCkUdvgiOEMK4710a5RmJxQ1S3kswOw&usqp=CAU" />
       <Card.Body>
       <Card.Title>Лабораторная работа № 2</Card.Title>
        <Card.Text>
         Форматирование в LaTeX
        </Card.Text>
        <LinkContainer to="/second_task">
       <Button variant="primary"> Перейти к заданию</Button>
       </LinkContainer>
      </Card.Body>
      </Card>
      <Card border="success" className="m-4" style={{ width: '30rem'}}>
       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FQfCCkUdvgiOEMK4710a5RmJxQ1S3kswOw&usqp=CAU" />
       <Card.Body>
       <Card.Title>Лабораторная работа № 3</Card.Title>
        <Card.Text>
         Создание простых формул в текстовом документе средствами LaTeX
        </Card.Text>
        <LinkContainer to="/third_task">
       <Button variant="success"> Перейти к заданию</Button>
       </LinkContainer>
      </Card.Body>
      </Card>
      <Card  border="info "className="m-4" style={{ width: '30rem'}}>
       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FQfCCkUdvgiOEMK4710a5RmJxQ1S3kswOw&usqp=CAU" />
       <Card.Body>
       <Card.Title>Лабораторная работа № 4</Card.Title>
        <Card.Text>
         Создание формул в текстовом документе средствами LaTeX
        </Card.Text>
        <LinkContainer to="/forth_task">
       <Button variant="info"> Перейти к заданию</Button>
       </LinkContainer>
      </Card.Body>
      </Card>
      <Card  border="secondary"className="m-4" style={{ width: '30rem'}}>
       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FQfCCkUdvgiOEMK4710a5RmJxQ1S3kswOw&usqp=CAU" />
       <Card.Body>
       <Card.Title>Лабораторная работа № 5</Card.Title>
        <Card.Text>
         Таблицы и матрицы
        </Card.Text>
        <LinkContainer to="/fifth_task">
       <Button variant="secondary"> Перейти к заданию</Button>
       </LinkContainer>
      </Card.Body>
      </Card>
      </div>
    </div>

export default Tasks;
