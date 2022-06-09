import React from "react";
import "./resourses.css";
import { ListGroup } from "react-bootstrap"

const Resourses = () =>
      <div>
      <div className="head">
       <h1>Рекомендуемые ресурсы для изучения темы</h1>
      </div>
      <div className="container">
      <div className="head">
       <h2>Литература</h2>
       </div>
       <div className="books">
       <ListGroup>
       <ListGroup.Item>Воронцов К. В. LaTeX2e в примерах</ListGroup.Item>
       <ListGroup.Item>С.М.Львовский, Набор и верстка в системе LaTeX</ListGroup.Item>
       </ListGroup>
       </div>
        <div className="head">
       <h2>Интернет-ресурсы</h2>
       </div>
       <div className="internet">

       <ListGroup>
       <ListGroup.Item action href ="https://habr.com/ru/company/ruvds/blog/574352/">Статья на тему "Осваиваем LaTeX за 30 минут"</ListGroup.Item>
       <ListGroup.Item action href ="http://mydebianblog.blogspot.com/2014/02/latex.html">Как написать статью в LaTeX</ListGroup.Item>
       <ListGroup.Item action href ="https://habr.com/ru/post/339340/">Статья про LaTeX</ListGroup.Item>
       </ListGroup>
       </div>
       <div className="head">
       <h2>Лекции</h2>
       </div>
       <div className="lectures">
       <ListGroup>
       <ListGroup.Item action href ="https://www.youtube.com/watch?v=NOslSvJs29I">Открытая лекция CS центра </ListGroup.Item>
       <ListGroup.Item action href ="https://www.youtube.com/watch?v=hSc0H143ddw">LaTeX для начинающих</ListGroup.Item>
       <ListGroup.Item action href ="https://www.youtube.com/watch?v=izYsKMl4KVE">Документы и презентации в LaTeX: О курсе #1</ListGroup.Item>
       <ListGroup.Item action href ="https://www.youtube.com/watch?v=3zgrlC6ZuD4">Документы и презентации в LaTeX: Что такое LaTeX #2</ListGroup.Item>
       <ListGroup.Item action href ="https://www.youtube.com/watch?v=-wCNhTXsrVg">Документы и презентации в LaTeX: Как работает LaTeX #3</ListGroup.Item>
       <ListGroup.Item action href ="https://www.youtube.com/watch?v=PxtWbODKPs8">Документы и презентации в LaTeX: Наш первый документ #4</ListGroup.Item>
       </ListGroup>
       </div>
       </div>
      </div>

export default Resourses;
