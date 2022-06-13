const questions_3 = [
    {
      questionText: "С помощью каких символов создаются выключенные формулы?",
      answerOptions: [
        { answerText: "$$", isCorrect: true },
        { answerText: "%%", isCorrect: false },
        { answerText: "q", isCorrect: false },
        { answerText: "[[]]", isCorrect: false }
      ]
    },
    {
      questionText: "Какая команда создает квадратный корень?",
      answerOptions: [
        { answerText: "left", isCorrect: false },
        { answerText: "right", isCorrect: false },
        { answerText: "lim", isCorrect: false },
        { answerText: "sqrt", isCorrect: true }
      ]
    },
    {
      questionText: "Какой символ обозначает степень внутри формулы?",
      answerOptions: [
        { answerText: "_", isCorrect: false },
        { answerText: "*", isCorrect: false },
        { answerText: "^", isCorrect: true },
        { answerText: "'", isCorrect: false }
      ]
    },
    {
      questionText: "Какой символ обозначает индекс внутри формулы?",
      answerOptions: [
        { answerText: "_", isCorrect: true },
        { answerText: "^", isCorrect: false },
        { answerText: "%", isCorrect: false },
        { answerText: "$", isCorrect: false }
      ]
    },
    {
      questionText: "С помощью какой команды набирают дробь?",
      answerOptions: [
        { answerText: "sqrt", isCorrect: false },
        { answerText: "frac", isCorrect: true },
        { answerText: "cdots", isCorrect: false },
        { answerText: "нет правильного ответа", isCorrect: false }
      ]
    },
    {
      questionText: "С помощью какой команды печатают знак интеграла?",
      answerOptions: [
        { answerText: "int", isCorrect: true },
        { answerText: "sum", isCorrect: false },
        { answerText: "lim", isCorrect: false },
        { answerText: "log", isCorrect: false }
      ]
    },
    {
      questionText: "С помощью какой команды печатают знак суммы?",
      answerOptions: [
        { answerText: "int", isCorrect: false },
        { answerText: "lim", isCorrect: false },
        { answerText: "log", isCorrect: false },
        { answerText: "sum", isCorrect: true }
      ]
    },
    {
      questionText: "Какие из нижеперечисленных заявлений верные:",
      answerOptions: [
        { answerText: "пустые скобки внутри формул не разрешаются", isCorrect: true },
        { answerText: "знаки препинания и пробелы нужно ставить внутри формулы", isCorrect: false },
        { answerText: "все варианты верны", isCorrect: false },
        { answerText: "все варианты неверные", isCorrect: false }
      ]
    },
    {
      questionText: "Какие из нижеперечисленных заявлений верные:",
      answerOptions: [
        { answerText: "пустые скобки внутри формул разрешаются", isCorrect: false },
        { answerText: "фигурную скобку нужно печатать #{#", isCorrect: false },
        { answerText: "все варианты верны", isCorrect: false },
        { answerText: "все варианты неверны", isCorrect: true }
      ]
    },
    {
      questionText: "В каком окружении печатают формулы?",
      answerOptions: [
        { answerText: "equation", isCorrect: true },
        { answerText: "eq", isCorrect: false },
        { answerText: "eqno", isCorrect: false },
        { answerText: "ref", isCorrect: false }
      ]
    },
  ];
export default questions_3;
