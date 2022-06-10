import React from "react";

import { ListGroup,
        Alert } from 'react-bootstrap'

import './theory.css'

const Fortht = () =>{
  const text =`
  \x5Cbegin{tabbing}
  начало\x5Cquad\x5C=середина \x5Cquad\x5C=конец\x5C\x5C
  раз\x5C>два\x5C>три\>x5C\
  раз\x5C> два\x5C> три\x5C\x5C
  начинаем\x5C> продолжаем\> заканчиваем\x5C\x5C
  \x5Cend{tabbing}
  `
  const text1=`
  \x5Cbegin{tabular}{|l|c|}
  \x5Chline
  Тип перечня & нумерация \x5C\x5C[5pt]
  \x5Chline
  \x5Cttfamily itemize & нет\x5C\x5C
  \x5Chline
  \x5Cttfamily enumerate & есть\x5C\x5C
  \x5Chline
  \x5Cttfamily description & нет\x5C\x5C
  \x5Chline
  \x5Cend{tabular}
  `
  const text2=`
  \x5Cbegin{tabular}{|l|l|l|l|}
  \x5Chline
  \x5Cmulticolumn{2}{|c|}{\x5Ctextbf{Популярные имена}}\x5C\x5C
  \x5Chline
Мужские & Михаил & Петр & Владислав\x5C\x5C
  \x5Chline
Женские & Мария & Анастасия & Дарья\x5C\x5C
  \x5Chline
  \x5Cend{tabular}
  `
  const text3=`
  $$\x5Cbegin{pmatrix}
  a_{11} & a_{12} & a_{13}\x5C\x5C
  a_{21}& a_{22} & a_{23}\x5C\x5C
  a_{31}& a_{32} & a_{33}
  \x5Cend{pmatrix}$$
  `
  return(
      <div className="m-5">
      <div className="head">
      <h1>Лекция 4. Таблицы и матрицы</h1>
      </div>
      <div className="head">
      <h2>Создание таблиц</h2>
      </div>
      <p>Окружения, с помощью которых можно создать таблицы:</p>
      <div className="d-flex justify-content-center m-5">
      <ListGroup>
      <ListGroup.Item variant="warning">tabbing</ListGroup.Item>
      <ListGroup.Item variant="danger">tabular</ListGroup.Item>
      </ListGroup>
      </div>
      <p>Окружение <b>tabbing</b> не очень удобное из-за того, что пользователю придется вручную следить, чтобы элементы таблицы не накладывались друг на друга. При печати таблиц с помощью этого окружения пользователь сам задает места, в которых должна начаться очередная колонка. С помощью \= отмечается, где начинается новая колонка, с помощью \\ разделяются строки, с помощью \> переходим к другому столбцу в данной строке.</p>
      <div className="d-flex justify-content-center">
      <Alert variant="warning"><pre>{text}</pre></Alert>
      </div>
      <p>Окружение <b>tabular</b> задает таблицу. Окружению необходимо задать обязательный аргумент — преамбулу таблицы. Преамбула описывает сколько будет столбцов и строк в данной таблице, а также будет ли разделитель между столбцами это делается с помощью |. Она находится к фигурных скобках сразу после аргумента tabular:</p>
      <div className="d-flex justify-content-center m-5">
      <ListGroup>
      <ListGroup.Item variant="warning">l означает колонку, выровненную по левому краю</ListGroup.Item>
      <ListGroup.Item variant="danger">r означает колонку, выровненную по правому краю</ListGroup.Item>
      <ListGroup.Item variant="warning">c означает колонку с центрированным текстом</ListGroup.Item>
      </ListGroup>
      </div>
      <p>Для того чтобы разделять строки таблицы используют \\, а колонки внутри одной строки разделяются с помощью &. Для того чтобы указать что разделитель есть и между колонками используется команда \hline, которая печатается внутри окружения между строками, где должно быть разделение:</p>
      <div className="d-flex justify-content-center">
      <Alert variant="warning"><pre>{text1}</pre></Alert>
      </div>
      <p>C помощью команды \multicolumn можно определить надпись, охватывающую несколько колонок.</p>
      <div className="d-flex justify-content-center">
      <Alert variant="warning"><pre>{text2}</pre></Alert>
      </div>
      <div className="head">
      <h2>Создание матриц</h2>
      </div>
      <p>Для создания матриц использую специальные окружения. Внутри этих окружений строки в матрице разделяются \\, а символы находящиеся в разных столбцах знаками & (данными окружениями можно пользоваться только при подключении пакета <b>amsmath</b>):</p>
      <div className="d-flex justify-content-center m-5">
      <ListGroup>
      <ListGroup.Item variant="warning">pmatrix (матрица с круглыми скобками)</ListGroup.Item>
      <ListGroup.Item variant="danger">bmatrix (матрица с квадратными скобками)</ListGroup.Item>
      <ListGroup.Item variant="warning">vmatrix и Vmatrix (вертикальные и удвойные вертикальные черточки)</ListGroup.Item>
      </ListGroup>
      </div>
      <div className="d-flex justify-content-center">
      <Alert variant="warning"><pre>{text3}</pre></Alert>
      </div>
      </div>
    )
};
export default Fortht;
