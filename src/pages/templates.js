import React from "react";
import './templates.css';
import {Alert} from 'react-bootstrap'


const Templates = () =>
      <div className='body-temp'>
        <div className='text-main'>
        <h1>Шаблоны</h1>

        <Alert variant='secondary'>
        <Alert.Link href='https://ru.overleaf.com/latex/templates/hse-linguistics-coursepaper-template/jktyphpbvctv'> Шаблон оформления курсовой работы</Alert.Link>
        </Alert>
        <Alert variant='secondary'>
        <Alert.Link href='https://ru.overleaf.com/latex/templates/shablon-otchiota-spbpu/jzbtjhbjpfxg'> Шаблон отчета</Alert.Link>
        </Alert>
        <Alert variant='secondary'>
        <Alert.Link href='https://ru.overleaf.com/gallery/tagged/russian'> Готовые шаблоны на русском в Overleaf</Alert.Link>
        </Alert>
        <Alert variant='secondary'>
        <Alert.Link href='https://ru.overleaf.com/gallery/tagged/russian'> Готовые шаблоны на русском в Overleaf</Alert.Link>
        </Alert>
        <Alert variant='secondary'>
        <Alert.Link href='https://ru.overleaf.com/gallery/tagged/russian'> Готовые шаблоны на русском в Overleaf</Alert.Link>
        </Alert>

        <h2>Шаблон для текстового документа LaTeX</h2>
        </div>
        <div className='main-temp'>
        <p>
        \documentclass[a4paper,14pt]&#123;article&#125; % тип документа <br />
        <br />
        <br />
        \usepackage[T2A]&#123;fontenc&#125;			% кодировка <br />
        \usepackage[utf8]&#123;inputenc&#125;			% кодировка исходного текста <br />
        \usepackage[english,russian]&#123;babel&#125;	% локализация и переносы <br />
        <br />
        <br />
        \usepackage&#123;hyperref&#125; <br />
        \usepackage&#123;wasysym&#125; <br />
        <br />
        %Заговолок <br />
        \author&#123; Ваше ФИО &#125; <br />
        \title&#123;Тема № 8&#125; <br />
        \date&#123;\today&#125; <br />
        <br />
        \begin&#123;document&#125; <br />
        <br />
        \maketitle <br />
        \newpage <br />
        \end&#123;document&#125;
        </p>
        </div>



      </div>


export default Templates;
