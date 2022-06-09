import React from "react";
import { Table } from 'react-bootstrap'
import "./docs.css"

const Docs = () =>

     <div className="m-5">
     <div className='present'>
     <h1>Вспомогательная информация</h1>
     </div>
    <div className='present'>
    <h2>Основные команды LaTeX</h2>
     </div>
    <Table striped bordered>
    <thead>
    <tr>
    <th>№</th><th>Команда</th><th>Описание</th>
    </tr>
   </thead>
<tbody>
 <tr>
<td>1</td><td>\documentclass</td><td>описывает класс документа, статья, книга, отчет и так далее </td>
</tr>
<tr>
<td>2</td><td>\begin</td><td>указывает на начало тела документа или блока </td>
</tr>
<tr>
<td>3</td><td>\end</td><td>завершение документа или блока </td>
</tr>
<tr>
<td>4</td><td>\usepackage</td><td>загружает пакет команд LaTeX в текущий документ, нужно для настройки кодировки, шрифта и другого </td>
</tr>
<tr>
<td>5</td><td>\maketitle</td><td>создает титульный лист с названием и всем прочим </td>
</tr>
<tr>
<td>6</td><td>\tableofcontents</td><td>содержание статьи или книги</td>
</tr>
<tr>
<td>7</td><td>\chapter</td><td>создает главу </td>
</tr>
<tr>
<td>8</td><td>\section</td><td>создает раздел </td>
</tr>
<tr>
<td>9</td><td>\subsection</td><td>создает подраздел</td>
</tr>
<tr>
<td>10</td><td>\title</td><td>заголовок документа</td>
</tr>
<tr>
<td>11</td><td>\author</td><td>автор документа</td>
</tr>
<tr>
<td>12</td><td>\date</td><td>дата создания документа</td>
</tr>
</tbody>
</Table>

<div className='present'>
<h2>Выделение текта</h2>
</div>

<Table striped bordered>
<thead>
 <tr>
 <th>№</th><th>Команда</th><th>Описание</th>
 </tr>
</thead>
<tbody>
 <tr>
<td>1 </td><td>\underline</td><td>подчеркнуть слово </td>
</tr>
<tr>
<td>2 </td><td>\fbox</td><td>поместить слово в рамки </td>
</tr>
<tr>
<td>3 </td><td>\textit</td><td>набирает свой аргумент курсивом </td>
</tr>
<tr>
<td>4 </td><td>\textsl</td><td>набирает свой аргумент наклонным шрифтом </td>
</tr>
<tr>
<td>5 </td><td>\textbf</td><td>набирает свой аргумент полужирным шрифтом</td>
</tr>
<tr>
<td>6 </td><td>\texttt</td><td>набирает свой аргумент шрифтом типа пишушей машинки</td>
</tr>
<tr>
<td>7 </td><td>\textsf</td><td>чтобы получить шрифт без засечек</td>
</tr>
<tr>
<td>8 </td><td>\textup</td><td>набирает свой аргумент прямым шрифтом </td>
</tr>
<tr>
<td>9 </td><td>\bfseries</td><td>жирный текст</td>
</tr>
<tr>
<td>10 </td><td>\footnote&#123;текст&#123;[необязаельный аргумент]</td><td>сноска, в фигурных скобосках обозначают текст сноски, в квадратных скобочках номер сноски,
если же этот аргумент не указать то сноска будет пронумерована автоматически подряд</td>
</tr>
</tbody>
</Table>

<div className='present'>
<h2>Размер текста</h2>
</div>

<Table striped bordered>
<thead>
 <tr>
 <th>№</th><th>Команда</th><th>Описание</th>
 </tr>
</thead>
<tbody>
 <tr>
<td>1</td><td>\tiny</td><td>малюсенький шрифт </td>
</tr>
<tr>
<td>2</td><td>\scriptsize</td><td>очень маленький шрифт</td>
</tr>
<tr>
<td>3</td><td>\footnotesize</td><td>маленький шрифт</td>
</tr>
<tr>
<td>4</td><td>\small</td><td>мелкий шрифт</td>
</tr>
<tr>
<td>5</td><td>\normalsize</td><td>нормальный шрифт</td>
</tr>
<tr>
<td>6</td><td>\large</td><td>большой шрифт</td>
</tr>
<tr>
<td>7</td><td>\Large</td><td>очень большой шрифт</td>
</tr>
<tr>
<td>8</td><td>\LARGE</td><td>совсем большой шрифт</td>
</tr>
<tr>
<td>9</td><td>\huge</td><td>громадный шрифт</td>
</tr>
<tr>
<td>10</td><td>\Huge</td><td>самый большой шрифт</td>
</tr>
</tbody>
</Table>

<div className='present'>
<h2>Цитирование, выравнивание текста и перечни</h2>
</div>

<Table striped bordered>
<thead>
 <tr>
 <th>№</th><th>Команда</th><th>Описание</th>
 </tr>
</thead>
<tbody>
 <tr>
<td>1</td><td>\begin&#123;quote&#125; \end&#123;quote&#125;</td><td> если нужно включить в текст цитату, пример, предупреждение и т. п., то удобно воспользоваться окружением quote;</td>
</tr>
<tr>
<td>2</td><td>\begin&#123;quotation&#125; \end&#123;quotation&#125;</td><td>аналогично quote, за тем исключением, что в тексте, оформленном этим окружением, делается абзацный отступ</td>
</tr>
<tr>
<td>3</td><td>\begin&#123;flushleft&#125; \end&#123;flushleft&#125;</td><td>выравнивания по левому краю</td>
</tr>
<tr>
<td>4</td><td>\begin&#123;flushright&#125; \end&#123;flushright&#125;</td><td>выравнивания по правому краю</td>
</tr>
<tr>
<td>5</td><td>\begin&#123;center&#125; \end&#123;center&#125;</td><td>центрирование</td>
</tr>
<tr>
<td>6</td><td>\\</td><td>разбиение на строки</td>
</tr>
<tr>
<td>7</td><td>\begin&#123;itemize&#125; \end&#123;itemize&#125;</td><td>простейшие перечни</td>
</tr>
<tr>
<td>8</td><td>\begin&#123;enumerate&#125; \end&#123;enumerate&#125;</td><td>нумерованные перечни</td>
</tr>
<tr>
<td>9</td><td>\begin&#123;description&#125; \end&#123;description&#125;</td><td> перечни с заголовками</td>
</tr>
<tr>
<td>10</td><td>\item</td><td>элементы перечня вводятся этой командой внутри окружения</td>
</tr>
</tbody>
</Table>

<div className='present'>
<h2>Формулы</h2>
</div>

<Table striped bordered>
<thead>
 <tr>
 <th>№</th><th>Команда</th><th>Описание</th>
 </tr>
</thead>
<tbody>
 <tr>
<td>1</td><td>\sum_&#123;i=1&#125;^n n^2</td><td>генерирует сумму, где пределы суммирования i=1, n  </td>
</tr>
<tr>
<td>2</td><td>\frac&#123;делимое&#125;&#123;делитель&#125;</td><td>создает дробь</td>
</tr>
<tr>
<td>3</td><td>\lim_&#123;n\to\infinity&#125;</td><td>предел где n стремиться к бесконечности</td>
</tr>
<tr>
<td>4</td><td>\max</td><td>максимум</td>
</tr>
<tr>
<td>5</td><td>\min</td><td>минимум</td>
</tr>
<tr>
<td>6</td><td>\int_0^1x^2 dx=1/3</td><td>интеграл у которого пределы 0 и 1, подинтегральная функция x^2</td>
</tr>
</tbody>
</Table>
</div>

export default Docs;
