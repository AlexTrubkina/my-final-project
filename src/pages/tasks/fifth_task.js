import React from "react";

import "./tasks.css";

import { Carousel } from 'react-bootstrap';

const images = [ {
  image: "https://i.ibb.co/FBMjz2M/slide1.png",
  alt:"First image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/TLcGWWX/slide2.png",
  alt:"Second image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/S73GrZz/slide3.png",
  alt:"Third image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/ydN3c9P/slide4.png",
  alt:"Forth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/k6gJZ0T/slide5.png",
  alt:"Fifth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/McPjM4N/slide6.png",
  alt:"Sixth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/1ZF6Lxr/slide7.png",
  alt:"Seventh image",
  header: "",
  text: "",
},

{
  image: "https://i.ibb.co/CQTzvHv/slide8.png",
  alt:"8 image",
  header: "",
  text: "",
},
];

const Fifth = () =>
      <div>
      <div className="header">
      <h1> Пятая лабраторная работа. Таблицы и матрицы.</h1>
      </div>
      <div className="maintext">
      <p>
      Создать текстовый документ средствами LateX, в котором будут матрицы, представленные ниже.<br/>
      </p>
      <img
      alt="formul-1"
      src="https://i.ibb.co/wSPtj57/lr5-ex1.png">
      </img>
      <img
      alt="formul-2"
      src="https://i.ibb.co/RzRSzP5/lr5-ex2.png">
      </img>

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

export default Fifth;
