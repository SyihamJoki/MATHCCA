const homeMenu = [
    {
      title: "Materi",
      icon: require('../assets/image/ICON/book.png'), // Path ke gambar ikon
      page: "Materi"
    },
    {
      title: "Soal",
      icon: require('../assets/image/ICON/question.png'),
      page: "Soal"
    },
    {
      title: "Rapor Belajar",
      icon: require('../assets/image/ICON/report.png'),
      page: "Rapor"
    },
    {
      title: "Game",
      icon: require('../assets/image/ICON/game.png'),
      page: "ScanGames"
    },
];


const AllGamesQuestion = [
  {
    id: "2veJ4ksG0KnDbLLBzFpi",
    question: "Games 1",
    choices: [
      { id: 1, text: "A" },
      { id: 2, text: "B" },
      { id: 3, text: "C" },
      { id: 4, text: "D" },
    ],
    correctAnswerId: 2,
  },
  {
    id: "BpSnaS0SIO2REgDCFIS5",
    question: "Games 2",
    choices: [
      { id: 1, text: "A" },
      { id: 2, text: "B" },
      { id: 3, text: "C" },
      { id: 4, text: "D" },
    ],
    correctAnswerId: 2,
  },
];

export {homeMenu, AllGamesQuestion}