import React from "react";
import "./tasks.css";

import { Carousel } from 'react-bootstrap';

const images = [ {
  image: "https://i.ibb.co/vw3wvCC/slide1.png",
  alt:"First image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/ryz2npK/slide2.png",
  alt:"Second image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/k9ts8N8/slide3.png",
  alt:"Third image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/F7MV0jv/slide4.png",
  alt:"Forth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/9tz4XHW/slide5.png",
  alt:"Fifth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/XVzZnDH/slide6.png",
  alt:"Sixth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/VvDHFzR/slide7.png",
  alt:"Seventh image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/vdCkM78/slide8.png",
  alt:"8 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/nMnVLCY/slide9.png",
  alt:"9 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/sPWsvrN/slide10.png",
  alt:"10 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/fvpYFyC/slide11.png",
  alt:"11 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/QftzWkV/slide12.png",
  alt:"12 image",
  header: "",
  text: "",
},
];

const Forth = () =>
      <div>
      <div className="header">
      <h1> Четвертая лабраторная работа. Создание формул в текстовом документе средствами LaTeX.</h1>
      </div>
      <div className="maintext">
      <div className="header">
      <h2> Описание лабораторной работы</h2>
      </div>
      <p>
      Создать текстовый документ с формулами. Набрать формулы представленные ниже.<br/>
      </p>
      <img
      alt="formul"
      src="https://i.ibb.co/MZHnYnw/lr4-task.png">
      </img>


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
    <Carousel.Caption >
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

export default Forth;
