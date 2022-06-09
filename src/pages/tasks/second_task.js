import React from "react";

import "./tasks.css";

import { Carousel } from 'react-bootstrap';
const images = [ {
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEg8PDxIVDxUPDxUPFRUPDw8NFQ8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALQBGQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARHwQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8AAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFpQAKABKABAAgAEAAAALQApQAAAIABAAgAAAGloAlWgBQAE0Af/9k=",
  alt:"First image",
  header: "Лабораторная работа № 2. Форматирование в LaTeX",
  text: "",
},
{
  image: "https://i.ibb.co/sQRPmjv/slide2.png",
  alt:"Second image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/fS04TjH/slide3.png",
  alt:"Third image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/ZBnXPBf/slide4.png",
  alt:"Forth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/RhBYsjq/slide5.png",
  alt:"Fifth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/5n1RYSt/slide6.png",
  alt:"Sixth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/f8Rjffn/slide7.png",
  alt:"Seventh image",
  header: "",
  text: "",
},
];

const Second = () =>
      <div>
      <div className="header">
      <h1> Вторая лабраторная работа. Форматирование в LaTeX</h1>
      </div>

      <div className="maintext">

      <div className="header">
      <h2> Описание лабораторной работы</h2>
      </div>

      <h2>2.1 Дать ответы на вопросы и создать текстовый документ средствами LaTeX c ответами.</h2>
      <p>
      <br/>
      Список вопросов:<br/>
      <br/>
      <li>Преимущества и недостатки работы с LaTeX</li>
      <li>Для чего создавалась система?</li>
      <li>Что из себя представляет LaTeX?</li>
      <li>Какие еще сущетсвуют издательские системы на базе TeX?</li>
      <br/><br/>
      </p>
      <h2>2.2 Создать отдельно текстовый документ со своими вопросами про систему LaTeX.</h2>
      <p>
      <br/><br/>
      При оформлении документов найдите возможность использовать: <br/> <br/>

      <ul>
      <li>изменение размера шрифта;</li>
      <li>выравнивание разных фрагментов текста по левому, правому краю и по центру;</li>
      <li>сноску;</li>
      <li>маркированные и нумерованные списки;</li>
      <li>гиперссылку.</li>
      </ul>

      </p>

      <div className="header">
      <h2>Презентация к лабораторной работе</h2>
      </div>

      <Carousel variant="dark">
      {images.map(image => {
        return (
  <Carousel.Item key={image.alt}>
    <img
      className="d-block w-100"
      src={image.image}
      alt={image.alt}
    />
    <Carousel.Caption>
    <h1>{image.header}</h1>
    <br/>
    <p>
    {image.text}
    </p>
    </Carousel.Caption>
  </Carousel.Item>);
   })}

   </Carousel>

      </div>
      </div>

export default Second;
