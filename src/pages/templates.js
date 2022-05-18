import React, { useState } from "react";
import './templates.css';
import { Alert, Button } from 'react-bootstrap'


const Templates = () =>{

  const [copy, setCopy] = useState('');
  const text = `
  \x2Fdocumentclass[a4paper,14pt]{article} % тип документа
  \x2Fusepackage[T2A]{fontenc}	% кодировка
  \x2Fusepackage[utf8]{inputenc}	% кодировка исходного текста
  \x2Fusepackage[english,russian]{babel}	% локализация и переносы
  \x2Fusepackage{hyperref}
  \x2Fusepackage{wasysym}  %Заговолок
  \x2Fauthor{ Ваше ФИО }
  \x2Ftitle{Тема № 8}
  \x2Fdate{\today}
  \x2Fbegin{document}
  \x2Fmaketitle
  \x2Fnewpage
  \x2Fend{document}
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
