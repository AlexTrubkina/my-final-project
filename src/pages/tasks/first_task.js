import React from "react";
import "./tasks.css";

import { Carousel } from 'react-bootstrap';
const images = [ {
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEg8PDxIVDxUPDxUPFRUPDw8NFQ8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALQBGQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARHwQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8AAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFpQAKABKABAAgAEAAAALQApQAAAIABAAgAAAGloAlWgBQAE0Af/9k=",
  alt:"First image",
  header: "Лабораторная работа № 1. Основы работы с LaTeX",
  text: "",
},
{
  image: "https://images.ctfassets.net/nrgyaltdicpt/4LFR8b2K9KcF9ok4ToPvLG/df7967852fa4400e8496ee2db193a338/Overleaf-journal-template-richtext-example-hires.png",
  alt:"Second image",
  header: "Overleaf",
  text: "",
},
{
  image: "https://www.xm1math.net/texmaker/assets/portfolio/structure.png",
  alt:"Third image",
  header: "TeXmaker",
  text: "",
},
{
  image: "https://i.ibb.co/FhLPBdd/slide4.png",
  alt:"Forth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/YhVvDkt/slide5.png",
  alt:"Fifth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/vLCqYKS/slide6.png",
  alt:"Sixth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/9ZV7npm/slide7.png",
  alt:"Seventh image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/Lx0Sjpw/slide8.png",
  alt:"Eighth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/n6QHrWC/slide9.png",
  alt:"Ninth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/8M5PLwC/slide10.png",
  alt:"Tenth image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/RvQwGrb/slide11.png",
  alt:"Eleven image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/QmsJQQr/slide12.png",
  alt:"12 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/5Bq9RC6/slide13.png",
  alt:"13 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/tCtS6ZF/slide14.png",
  alt:"14 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/7VGKTMk/slide15.png",
  alt:"15 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/rHJh3NR/slide16.png",
  alt:"16 image",
  header: "",
  text: "",
},
{
  image: "https://i.ibb.co/cgT44Kv/slide17.png",
  alt:"17 image",
  header: "",
  text: "",
},
];


const First = () =>
      <div>
      <div className="header">
      <h1> Первая лабраторная работа. Основы работы с LaTeX.</h1>
      </div>

      <div className="maintext">

      <div className="header">
      <h2> Описание лабораторной работы</h2>
      </div>

      <h2>1.1 Выбрать редактор для работы с LaTeX.</h2>
      <p>
      <br/>
      Инструкция установки TeXmaker<br/>

      <br/>
      1. MacOS<br/><br/>

      <ul>
      <li>Скачать последнюю версию компилятора по <a href ='http://tug.org/mactex/mactex-download.html'>ссылке</a></li>
      <li>Установить редактор по <a href='http://www.xm1math.net/texmaker/download.html'>ссылке</a>. После скачивания два раза
      кликнуть на файл, в открывшемся окне перенести файл в папку Applications. Установка завершена.</li>
      <li>При первом открытии система может предупредить о непроверенном разработчике.</li>
      </ul>

      2. Windows<br/><br/>
      <ul>
      <li>Скачать последнюю версию компилятора по <a href='http://www.miktex.org/download'>ссылке</a></li>
      <li>Запускаем установку и на этапе Settings выбираем в поле Install missing packages on-the-fly «Yes»</li>
      <li>Перезагружаем компьютер.</li>
      <li>Скачать редактор по <a href='http://www.xm1math.net/texmaker/download.html'>ссылке</a> и установить программу.</li>
      </ul>

      3. Linux<br/><br/>

      <ul>
      <li>Скачать последнюю версию компилятора sudo apt-get install texlive-full</li>
      <li>Скачать редактор по <a href='http://www.xm1math.net/texmaker/download.html'>ссылке</a> и установить программу.</li>
      </ul>
      <br/>

      Инструкция работы с онлайн-редакторм overleaf<br/><br/>

      <ul>
      <li>Перейти по <a href='http://www.xm1math.net/texmaker/download.html'>ссылке</a> и зарегистрироваться.</li>
      <li>С помощью кнопки New Project создать новый шаблон и начать работу.</li>
      </ul>
      </p>



      <h2>1.2 Создать текстовый документ на выбранную тему с помощью LaTeX</h2>
      <p>
      <br/>
      <li> История создания LaTeX </li>
      <li>Создатель LaTeX</li>
      <br/>
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

export default First;
