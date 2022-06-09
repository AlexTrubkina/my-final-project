import React from "react";
import './templates.css';
import { Alert, Button } from 'react-bootstrap'


const Templates = () =>{


  const text = `
  \x5Cdocumentclass[a4paper,14pt]{article} % тип документа
  \x5Cusepackage[T2A]{fontenc}	% кодировка
  \x5Cusepackage[utf8]{inputenc}	% кодировка исходного текста
  \x5Cusepackage[english,russian]{babel}	% локализация и переносы
  \x5Cusepackage{hyperref}
  \x5Cusepackage{wasysym}  %Заговолок
  \x5Cauthor{ Ваше ФИО }
  \x5Ctitle{Тема № 8}
  \x5Cdate{\x2Ftoday}
  \x5Cbegin{document}
  \x5Cmaketitle
  \x5Cnewpage
  \x5Cend{document}
  `;


  return(

      <div className='body-temp'>

        <div className='text-main'>
        <h1>Шаблоны</h1>

        <Alert variant='primary'>
        <Alert.Link href='https://ru.overleaf.com/latex/templates/hse-linguistics-coursepaper-template/jktyphpbvctv'> Шаблон оформления курсовой работы</Alert.Link>
        </Alert>
        <Alert variant='primary'>
        <Alert.Link href='https://ru.overleaf.com/latex/templates/shablon-otchiota-spbpu/jzbtjhbjpfxg'> Шаблон отчета </Alert.Link>
        </Alert>
        <Alert variant='primary'>
        <Alert.Link href='https://www.overleaf.com/latex/templates/shablon-dlia-laboratornykh-rabot/sqvxbnhgxxdm'> Шаблон для лабораторной работы</Alert.Link>
        </Alert>
        <Alert variant='primary'>
        <Alert.Link href='https://ru.overleaf.com/gallery/tagged/russian'> Шаблоны текстовых документов на русском на сайте Overleaf</Alert.Link>
        </Alert>
        <Alert variant='primary'>
        <Alert.Link href='https://www.overleaf.com/latex/templates'> Все шаблоны текстовых документов на сайте Overleaf</Alert.Link>
        </Alert>
        <Alert variant='primary'>
        <Alert.Link href='https://www.overleaf.com/latex/templates'> Все шаблона на сайте Overleaf</Alert.Link>
        </Alert>
        <Alert variant='primary'>
        <Alert.Link href='https://www.overleaf.com/latex/templates'> Все шаблона на сайте Overleaf</Alert.Link>
        </Alert>
        <h2>Шаблон для текстового документа LaTeX</h2>
        </div>
        <div className="d-flex justify-content-center">
      <Alert variant="primary">
      <div className="texttocopy">
        <pre>
        {text}
        </pre>
        </div>
        <div className="d-flex justify-content-end" >
          <Button variant="outline-primary" onClick={() => navigator.clipboard.writeText(text)}>
            Копировать
          </Button>
        </div>
      </Alert>
      </div>
    </div>
  );
}

export default Templates;
