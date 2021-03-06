import React from "react";

import { ListGroup,
        Alert } from 'react-bootstrap';

import "./theory.css";

const Thirdt = () =>{
  const text =`
  \x5Cbegin{equation}
  \x5Csum_{i=1}^{n}a_i+b_i
  \x5Cend{equation}
  `
  return(
      <div className="m-5">
      <div className="head">
      <h1>Лекция 3. Создание формул в LaTeX</h1>
      </div>
      <div className="head">
      <h2>Создание простых формул</h2>
      </div>
      <div className="head">
      <h3>Виды формул в LaTeX</h3>
      </div>
      <p>В LaTeX есть два вида формул:</p>
      <div className="d-flex justify-content-center m-5">
      <ListGroup>
      <ListGroup.Item variant="success">выключенные</ListGroup.Item>
      <ListGroup.Item variant="info">внутри текста</ListGroup.Item>
      </ListGroup>
      </div>
      <p>
      <b>Формулы внутри текста</b> – это формулы, которые находятся непосредственно в тексте, их обозначают одним знаком доллара с двух сторон $.<br/><br/>
      <b>Выключенные формулы</b> – это формулы, которые печатаются с отступом от текста, отдельно. Они обозначаются двумя знаками доллара с обеих сторон. <br/><br/>
      Особенности создания формул в LaTeX:
      </p>
      <div className="d-flex justify-content-center m-5">
      <ListGroup>
      <ListGroup.Item variant="success">пустые скобки внутри формул не разрешаются</ListGroup.Item>
      <ListGroup.Item variant="info">пробелы внутри формул игнорируются</ListGroup.Item>
      <ListGroup.Item variant="success">знаки препинания нужно ставить вне формулы, как и пробелы</ListGroup.Item>
      <ListGroup.Item variant="info">каждая буква внутри формулы рассматривается как переменная</ListGroup.Item>
      <ListGroup.Item variant="success">для того, чтобы у скобки был нужный размер перед открывающей скобкой пишут команду \left, а перед закрывающей \right</ListGroup.Item>
      <ListGroup.Item variant="info">для того чтобы напечатать фигурную скобку используют команду \&#123;</ListGroup.Item>
      <ListGroup.Item variant="success">степени обозначаются с помощью ^, а индексы с помощью _</ListGroup.Item>
      <ListGroup.Item variant="info">если индекс или степень состоит больше чем из одного символа его берут в фигурные скобки: a^&#123;123&#125;</ListGroup.Item>
      <ListGroup.Item variant="success">штрихи в формулах обозначаются с помощью ‘, a многоточия с помощью \cdots (по центру строки), \ldots (внизу строки)</ListGroup.Item>
      </ListGroup>
      </div>
      <div className="head">
      <h3>Набор дробей, квадратных корней</h3>
      </div>
      <p>Для того чтобы набрать дробь внутри формулы существует две команды:</p>
      <ul>
      <li>\frac&#123;делимое&#125;&#123;делитель&#125; – для дробей, где делимое находится над делителем;</li>
      <li>делимое/делитель – для дробей, которые будут напечатаны в виде косой черты.</li>
      </ul>
      <p>
      Для того, чтобы набрать квадратный корень, используют команду <b>\sqrt</b>. У этой команды есть обязательный аргумент – подкоренное выражение и необязательный аргумент – показатель корня.
      </p>
      <div className="head">
      <h2>Создание сложных формул</h2>
      </div>
      <div className="head">
      <h3>Подключение математических пакетов</h3>
      </div>
      <p><b>\usepackage&#123;amsmath,amsfonts,amssymb,amsthm,mathtools&#125;</b> <br/><br/>
      Для того, чтобы работать с более сложными формулам и спецсимволами, такими как различные греческие буквы или бинарные операции, следует подключить математические пакеты.
      </p>
      <div className="head">
      <h3>Операции с пределами</h3>
      </div>
      <p>Сумма <br/><br/>
       <b>$$\sum_&#123;i=1&#125;^n n^2=\frac&#123;n(n+1)(2n+1)&#125;&#123;6&#125;$$ </b> <br/><br/>
       В фигурных скобках обозначаются пределы суммирования &#123;i=1&#125;^n. Во внутритекстовой формуле пределы будут печататься на тех же местах, что и индексы, а точнее не под и над знаком суммы, а рядом. <br/><br/>
       Интеграл <br/><br/>

       <b>$$\int_0^1x^2 dx=1/3$$</b> <br/><br/>
       Пределы интегрирования в этой формуле записаны как индексов после знака _ от 0 до 1. Для контурного интеграла используется команда \oint. Для экономии места индексы и во включенных в текст и выключенных формулах пишутся сбоку знака интеграла. Для того, чтобы пределы стояли над знаком интеграла используют команду \limits. <br/><br/>

       Предел<br/><br/>

       <b>$$\lim_&#123;n\to0&#125;\frac&#123;a^n-1&#125;&#123;n&#125;=\ln&#123;a&#125;$$</b> <br/><br/>

       Также для создания формул можно использовать окружение equation.
      </p>
      <div className="d-flex justify-content-center m-5">
      <Alert variant="success"><pre>{text}</pre></Alert>
      </div>
      <p>Оно создает выключенные формулы.</p>
      <div className="head">
      <h2>Нумерация формул</h2>
      </div>
      <p>Для удобства обычно каждую формулу в тексте нумеруют, чтобы была возможность сослаться на нее в тексте. Такую возможность предоставляет LaTeX. Для того чтобы у формулы автоматически появился номер ее нужно создать внутри окружения <b>equation</b>, не используя знаки доллара. А чтобы можно было на нее ссылаться стоит использовать уже знакомые нам команды <b>\ref</b> и <b>\lable</b> (поставить внутри окружения).<br/>
      Есть возможность и самим составить генерацию формул с помощью команды <b>\eqno</b> или <b>\leqno</b> (номер будет слева).<br/><br/>
      <b>$$ \frac&#123;7&#125;&#123;9&#125; \eqno (1) $$</b>
      </p>
      </div>
    )
};
export default Thirdt;
