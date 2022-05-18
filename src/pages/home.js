import React from "react";
import './home.css'

import {Accordion} from 'react-bootstrap'

const Home = () =>
      <div>
      <div className='begining'>

      <h1>Текстовые документы средствами LaTeX</h1>

      <img
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png"
       width="150"
       height="70"
       className="d-inline-block align-top"
       alt="Latex logo"
     />

      </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
               <Accordion.Header>Что такое TeX?</Accordion.Header>
                  <Accordion.Body>
                  TEX — это издательская система, предназначенная для набора научно-технических текстов высокого полиграфического качества.
                  Система компьютерной верстки TEX была создана выдающимся американским математиком и программистом Дональдом Кнутом в конце 70-х годов XX века;
                  издательские системы на ее базе по сию пору широко используются.<br />
                  <br />
                  Достоинства системы TeX:<br />
                  <br />
                  1) Никакая другая из существующих в настоящее время издательских систем не может сравниться с TEX’ом в полиграфическом качестве текстов с математическими формулами.<br />
                  2) Система TEX реализована на всех современных компьютерных платформах, и все эти реализации действительно работают одинаково.<br />
                  3) Благодаря этому TEX стал международным языком для обмена математическими и физическими статьями: набрав свою статью в TEX’е, математик может послать ее по электронной почте своему коллеге, даже если отправитель работает под Windows, а получатель — с UNIX’ом или, допустим, на Макинтоше.<br />
                  4) В Интернете существуют обширные «архивы препринтов», в которые каждый может послать (и из которых каждый может получить) статью; все эти статьи набраны опять-таки в TEX’е.<br />
                  5) Наконец, основные реализации TEX’а для всех платформ распространяются бесплатно.<br />
                  <br />
                  Главный из недостатков — в том, что с помощью TEX’а тяжело готовить тексты со сложным расположением материала на странице (наподобие рекламных буклетов). Для таких приложений, практически не встречающихся в научно-технической литературе, TEX не предназначен.

                  </Accordion.Body>
               </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header>Что такое LaTeX?</Accordion.Header>
             <Accordion.Body>
             LATEX — один из наиболее популярных макропакетов на базе TEXа, существенно дополняющий его возможности.
             Создаваемые с помощью LATEXа тексты могут содержать математические формулы, таблицы и графические изображения. Поддерживается автоматическая нумерация страниц, разделов, формул и пунктов перечней.
             Система сама генерирует оглавление, списки таблиц и иллюстраций, перекрёстные ссылки, сноски, колонтитулы и предметный указатель. Наконец, имеется возможность определять собственные макрокоманды и стили.

             </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>Разработчик TeX</Accordion.Header>
             <Accordion.Body>
             Дональд Эрвин Кнут  — американский учёный в области информатики. Доктор философии (1963), эмерит-профессор Стэнфордского университета, член Американского философского общества (2012), преподаватель и идеолог программирования, автор 19 монографий (в том числе ряда классических книг по программированию) и более 160 статей, разработчик нескольких известных программных технологий.
             Автор всемирно известной серии книг, посвящённой основным алгоритмам и методам вычислительной математики, а также создатель настольных издательских систем ΤΕΧ и METAFONT, предназначенных для набора и вёрстки книг научно-технической тематики (в первую очередь — физико-математических).

             </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <Accordion.Header>Разработчик LaTeX</Accordion.Header>
             <Accordion.Body>
              Лесли Лэмпорт — американский учёный в области информатики, первый лауреат премии Дейкстры. Разработчик LaTeX — популярного набора макрорасширений системы компьютерной вёрстки TeX, исследователь теории распределённых систем, темпоральной логики и вопросов синхронизации процессов во взаимодействующих системах.
              Лауреат Премии Тьюринга 2013 года.
             </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
          <Accordion.Header>Форумы</Accordion.Header>
             <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
             </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
          <Accordion.Header>Редакторы</Accordion.Header>
             <Accordion.Body>
              <ol>
              <li><a href = 'https://ru.overleaf.com/'>Overleaf</a> -  онлайн-редактор LaTeX. Позволяет нескольким пользователям редактировать один и тот же документ одновременно и просматривать изменения друг друга в режиме реального времени. Программа поддерживает практически все функции LaTeX.</li>
              <li><a href = 'https://www.xm1math.net/texmaker/download.html'>Texmaker</a> - кроссплатформенный открытый LaTeX-редактор с интерфейсом, подобным Kile. Тогда как Kile является родным приложением под KDE-платформу, Texmaker является также совместимым с Gnome.</li>
              <li><a href = 'https://kile.sourceforge.io/'>Kile</a> - текстовый редактор для LaTeX. Kile основан на стандартном для KDE редакторе Kate и работает в UNIX‐подобных операционных системах, в частности под Linux и Mac OS X. Поддерживаются автодополнения кода и текста.</li>
              <li><a href = 'http://texstudio.sourceforge.net/'>TeXstudio</a> - текстовый редактор для LaTeX. Kile основан на стандартном для KDE редакторе Kate и работает в UNIX‐подобных операционных системах, в частности под Linux и Mac OS X. Поддерживаются автодополнения кода и текста.</li>
              </ol>
             </Accordion.Body>
          </Accordion.Item>
        </Accordion>
     </div>

export default Home;
