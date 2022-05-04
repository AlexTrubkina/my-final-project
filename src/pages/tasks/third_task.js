import React from "react";
import "./tasks.css"

import { Carousel } from 'react-bootstrap';

const images = [ {
  image: "https://i.ibb.co/pKb8wqC/slide1.png",
  alt:"First image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/1rxktYY/slide2.png",
  alt:"Second image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/CtxJN77/slide3.png",
  alt:"Third image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/vXKgK6S/slide4.png",
  alt:"Forth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/1n5BYfF/slide5.png",
  alt:"Fifth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/0MYThDb/slide6.png",
  alt:"Sixth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/pw52nB4/slide7.png",
  alt:"Seventh image",
  header: "",
  text: "",
},
];

const Third = () =>
      <div>
      <div className="header">
      <h1> Третья лабраторная работа. Создание простых формул в текстовом документе средствами LaTeX.</h1>
      </div>

      <div className="maintext">

      <div className="header">
      <h2> Описание лабораторной работы</h2>
      </div>
      
      <p>
      Создать текстовый документ с формулами. Набрать формулы представленные ниже. <br/>
      <br/>
      Список формул:<br/>
      <br/>
      <li>Формулы сокращенного умножения.</li>
      <li>Формулы определения площади геометрических фигур (8 формул).</li>
      <br/>
      Документ должен содержать титульный лист, названия формул и сами формулы.
      <br/><br/>
      </p>

      <div className="header">
      <h2>Презентация к лабораторной работе</h2>
      </div>

      <Carousel variant="dark">
      {images.map(image => {
        return (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image.image}
      alt={image.alt}
    />
    <Carousel.Caption style={{top: "50%", position: "absolute"}}>
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

export default Third;
