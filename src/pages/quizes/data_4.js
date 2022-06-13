const questions_4 = [
    {
      questionText: "С помощью какой команды можно определить, что надпись в таблице охватытвает несколько колонок?",
      answerOptions: [
        { answerText: "multicolumn", isCorrect: true },
        { answerText: "tabular", isCorrect: false },
        { answerText: "tabbing", isCorrect: false },
        { answerText: "column", isCorrect: false }
      ]
    },
    {
      questionText: "Какое окружение создает матрицу с квадратными скобками?",
      answerOptions: [
        { answerText: "pmatrix", isCorrect: false },
        { answerText: "bmatrix", isCorrect: true },
        { answerText: "vmatrix", isCorrect: false },
        { answerText: "Vmatrix", isCorrect: false }
      ]
    },
    {
      questionText: "Какое окружение создает матрицу с круглыми скобками?",
      answerOptions: [
        { answerText: "vmatrix", isCorrect: false },
        { answerText: "pmatrix", isCorrect: true },
        { answerText: "bmatrix", isCorrect: false },
        { answerText: "matrix", isCorrect: false }
      ]
    },
    {
      questionText: "Каким символом внутри окружений разделяются строки в матрице?",
      answerOptions: [
        { answerText: "\\", isCorrect: true },
        { answerText: "%", isCorrect: false },
        { answerText: "**", isCorrect: false },
        { answerText: ",,", isCorrect: false }
      ]
    },
    {
      questionText: "Только при подключении какого пакета можно пользваться окружениями: pmatrix, bmatrix?",
      answerOptions: [
        { answerText: "amsfonts", isCorrect: false },
        { answerText: "amssymb", isCorrect: false },
        { answerText: "amsmath", isCorrect: true },
        { answerText: "mathtools", isCorrect: false }
      ]
    },
    {
      questionText: "Какому окружению для создания таблиц нужно обязательно задать преамбулу?",
      answerOptions: [
        { answerText: "tabular", isCorrect: true },
        { answerText: "tab", isCorrect: false },
        { answerText: "tabbing", isCorrect: false },
        { answerText: "pmatrix", isCorrect: false }
      ]
    },
    {
      questionText: "Что означает буква r в преамбуле таблицы?",
      answerOptions: [
        { answerText: "означает колонку, выровненную по левому краю", isCorrect: false },
        { answerText: "mозначает колонку с центрированным текстом", isCorrect: false },
        { answerText: "означает колонку, выровненную по правому краю", isCorrect: true },
        { answerText: "такого параметра в преамбуле не указывается", isCorrect: false }
      ]
    },
    {
      questionText: "Что означает буква l в преамбуле таблицы?",
      answerOptions: [
        { answerText: "означает колонку, выровненную по левому краю", isCorrect: true },
        { answerText: "означает колонку, выровненную по правому краю", isCorrect: false },
        { answerText: "означает колонку с центрированным текстом", isCorrect: false },
        { answerText: "такого параметра в преамбуле не указывается", isCorrect: false }
      ]
    },
    {
      questionText: "Что означает буква с в преамбуле таблицы?",
      answerOptions: [
        { answerText: "означает колонку, выровненную по левому краю", isCorrect: false },
        { answerText: "означает колонку, выровненную по правому краю", isCorrect: false },
        { answerText: "означает колонку с центрированным текстом", isCorrect: true },
        { answerText: "такого параметра в преамбуле не указывается", isCorrect: false }
      ]
    },
    {
      questionText: "При печати таблицы с помощью какого окружения пользователь сам задает, где начинается новая колонка?",
      answerOptions: [
        { answerText: "tabbing", isCorrect: true },
        { answerText: "tabular", isCorrect: false },
        { answerText: "ни в одном окружении", isCorrect: false },
        { answerText: "пользователь всегда задает это вручную", isCorrect: false }
      ]
    },
  ];

export default questions_4;
