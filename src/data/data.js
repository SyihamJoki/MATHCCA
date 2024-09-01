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
    questionText: "Diketahui S= {bilangan asli kurang dari 10} dan A= {2,4,6,8}. Nilai dari A^c adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "{1, 3, 5, 7, 9}" , image: null },
      { id: 2, text: "{1, 3, 5, 7, 9, 10}", image: null },
      { id: 3, text: "{2, ,4, 6, 8}", image: null },
      { id: 4, text: "{0, 1, 3, 5, 7, 9}", image: null },
    ],
    correctAnswerId: 1,
  },
  {
    id: "mTnHe4KkFPivqfaZ6j99",
    questionText: "Jika A = {x | -5 ≤ x ≤ 15,x є bilangan bulat},  maka n(A) adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "19" , image: null },
      { id: 2, text: "20", image: null },
      { id: 3, text: "21", image: null },
      { id: 4, text: "22", image: null },
    ],
    correctAnswerId: 3,
  },
  {
    id: "10AuLi4mTrxRdQxdnbfq",
    questionText: "Diketahui P = {bilangan asli kurang dari 5}, Q = {bilangan cacah kurang dari 6}, dan R = {bilangan ganjil kurang dari 6}, maka n(P – (Q ∩ R)) adalah ….",
    questionImage: null,
    choices: [
      { id: 1, text: "2", image: null },
      { id: 2, text: "4", image: null },
      { id: 3, text: "5", image: null },
      { id: 4, text: "3", image: null }
    ],
    correctAnswerId: 1
  },
  {
    id: "rpO0a7RUiWl2OXDq9kni",
    questionText: "Diketahui A = {10, 11, 12, 13}, B = {bilangan cacah antara 10 dan 15}, dan C ={x | 8 ≤ x ≤ 12, x є bilangan asli} maka A – (B ∩ C) dan A – (B ∪ C) adalah …. ",
    questionImage: null,
    choices: [
      { id: 1, text: "{10, 11, 12, 13} dan {10, 13}", image: null },
      { id: 2, text: "{10, 11, 12} dan {10, 11}", image: null },
      { id: 3, text: "{10, 13} dan { }", image: null },
      { id: 4, text: "{12, 13} dan { }", image: null }
    ],
    correctAnswerId: 3
  },
  {
    id: "dpmDbbLvSIseyVMgoEVz",
    questionText: "Diketahui B = {1, 2, 3, 4}. Banyaknya himpunan bagian dari B adalah ….",
    questionImage: null,
    choices: [
      { id: 1, text: "8", image: null },
      { id: 2, text: "4", image: null },
      { id: 3, text: "16", image: null },
      { id: 4, text: "32", image: null }
    ],
    correctAnswerId: 3
  },
  {
    id: "i3ZAUxrVAkFUiRNhZuSy",
    questionText: "Jika M= {faktor dari 15} dan N= {bilangan cacah kurang dari 7}, tentukan manakah pernyataan berikut yang benar?",
    questionImage: null,
    choices: [
      { id: 1, text: "(M∩N)={0,2,4,6,15}", image: null },
      { id: 2, text: "(M∪N)={0,1,2,3,4,5,6,15}", image: null },
      { id: 3, text: "(M∩N)={1,3,5,6}", image: null },
      { id: 4, text: "(M∪N)={0,1,1,2,2,3,3,4,4,5,5,6,6,15}", image: null }
    ],
    correctAnswerId: 2
  },
  {
    id: "2wkV6Ju0b6ycpoQt3EJJ",
    questionText: "Jika K={x | 5≤x≤11,x bilangan asli} dan L={x | 7≤x<13,x bilangan cacah}. Pernyataan berikut yang benar adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "(K ∪ L)={5,6,7,9,10,11}", image: null },
      { id: 2, text: "(K ∪ L)={7,8,9,10,11}", image: null },
      { id: 3, text: "(K ∩ L)={5,6,12}", image: null },
      { id: 4, text: "(K ∩ L)={7,8,9,10,11}", image: null }
    ],
    correctAnswerId: 4
  },
  {
    id: "M6xMyJRQNeLxibBz2EE9",
    questionText: "Perhatikan diagram Venn diatas. Himpunan yang anggota-anggotanya {4, 6, 9} disebut dengan …",
    questionImage: require('../assets/image/Games/q_8.png'),
    choices: [
      { id: 1, text: "(P ∪ Q)", image: null },
      { id: 2, text: "(P ∩ Q)", image: null },
      { id: 3, text: "P ⊂ Q", image: null },
      { id: 4, text: "P ∈ Q", image: null }
    ],
    correctAnswerId: 2
  },
  {
    id: "UOUvqvEEntk7jePqYacS",
    questionText: "Perhatikan himpunan-himpunan berikut:\nS = {1,2,3,4,5,6},\nA = {2,4,6},\nB = {2,3,5}.\nPernyataan berikut yang salah adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "(A ∩ B)^c = {1,3,4,5,6}", image: null },
      { id: 2, text: "(A ∩ B) = {2}", image: null },
      { id: 3, text: "(A ∪ B) = {2,3,4,5,6}", image: null },
      { id: 4, text: "(A ∪ B) = {1,2,3,4,5,6}", image: null }
    ],
    correctAnswerId: 4
  },
  {
    id: "Y5zfsfBCbMH91brBG1Kz",
    questionText: "Diketahui himpunan A={2,3,5,7,9,11}.\nBanyak himpunan bagian dari himpunan A adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "4", image: null },
      { id: 2, text: "16", image: null },
      { id: 3, text: "24", image: null },
      { id: 4, text: "64", image: null }
    ],
    correctAnswerId: 4
  },
  {
    id: "eRYoTsHus9C01qohiEUv",
    questionText: "Diketahui himpunan semesta S adalah himpunan bilangan cacah yang kurang dari 20. A adalah himpunan bilangan prima antara 3 dan 20. B adalah himpunan bilangan asli antara 2 dan 15. Komplemen dari A∪B adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "{0,1,2,5,7,11,13,15,16,18}", image: null },
      { id: 2, text: "{3,4,6,8,9,10,12,14,17,19}", image: null },
      { id: 3, text: "{3,4,6,8,9,10,12,14,15,17,19}", image: null },
      { id: 4, text: "{0,1,2,15,16,18}", image: null }
    ],
    correctAnswerId: 4
  },
  {
    id: "KiUX9O9KpwVPz27DhbIk",
    questionText: "Diketahui P=[x | 3<x<13,x bilangan ganjil} dan Q={x⃓ x<11,x bilangan prima}. Diagram Venn yang sesuai untuk kedua himpunan tersebut adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: null, image: require('../assets/image/Games/a_11_1.png') },
      { id: 2, text: null, image: require('../assets/image/Games/a_11_2.png') },
      { id: 3, text: null, image: require('../assets/image/Games/a_11_3.png') },
      { id: 4, text: null, image: require('../assets/image/Games/a_11_4.png') }
    ],
    correctAnswerId: 1
  },
  {
    id: "eIquf5VX9N2oTKlmQlVl",
    questionText: "Misalkan A={bilangan asli} dan B={x⃓ n=x}. Di antara nilai-nilai n berikut yang tidak memenuhi hubungan BA adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "1", image: null },
      { id: 2, text: "3", image: null },
      { id: 3, text: "9", image: null },
      { id: 4, text: "16", image: null },
    ],
    correctAnswerId: 2,
  },
  {
    id: "rO9NTs5WnuXsvbmDGxbZ",
    questionText: "Dari 50 orang terdapat 35 orang berlangganan Koran, 26 orang berlangganan majalah,\ndan 7 orang tidak berlangganan keduanya.\nBanyak orang yang hanya berlangganan tepat satu dari keduanya adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "8 orang", image: null },
      { id: 2, text: "17 orang", image: null },
      { id: 3, text: "18 orang", image: null },
      { id: 4, text: "25 orang", image: null },
    ],
    correctAnswerId: 4,
  },
  {
    id: "ivExje38EG1SM9LK44zp",
    questionText: "Perhatikan diagram Venn berikut\nHasil dari (P-Q) ∩ R^c adalah…",
    questionImage: require('../assets/image/Games/q_15.png'),
    choices: [
      { id: 1, text: "{a,b}", image: null },
      { id: 2, text: "{a,b,c}", image: null },
      { id: 3, text: "{l,m,n}", image: null },
      { id: 4, text: "{a,b,k,i}", image: null },
    ],
    correctAnswerId: 1,
  },
  {
    id: "HRio9hIovfZLiHlurlhp",
    questionText: "Dari satu kelas terdata 52 dari jumlah siswa yang menyukai matematika sekaligus fisika akan mengikuti olimpiade fisika. Empat kali dari jumlah siswa yang menyukai keduanya\nakan mengikuti olimpiade matematika. Jika jumlah seluruh siswa ada 44 orang dan siswa yang mengikuti olimpiade secara otomatis menyukai pelajaran yang dilombakan, maka banyak siswa yang hanya mengikuti olimpiade matematika (hanya menyukai matematika) adalah ⋯ orang.",
    questionImage: null,
    choices: [
      { id: 1, text: "8", image: null },
      { id: 2, text: "20", image: null },
      { id: 3, text: "24", image: null },
      { id: 4, text: "32", image: null },
    ],
    correctAnswerId: 3,
  },
  {
    id: "PH1aqSYxTkjJmGOWII4H",
    questionText: "Data kegiatan sarapan pagi 38 orang peserta didik adalah sebagai berikut. Ada 6 orang sarapan dengan roti dan nasi goreng. Ada 5 orang tidak sarapan pagi. Jika banyak peserta didik yang sarapan nasi goreng dua kali banyak peserta didik yang sarapan roti, maka banyak peserta didik yang sarapan nasi goreng saja adalah ⋯⋅",
    questionImage: null,
    choices: [
      { id: 1, text: "35 orang", image: null },
      { id: 2, text: "30 orang", image: null },
      { id: 3, text: "25 orang", image: null },
      { id: 4, text: "20 orang", image: null },
    ],
    correctAnswerId: 4,
  },
  {
    id: "dHKBhJFxPdf3kA1UBIYy",
    questionText: "Jika diketahui S= {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A= {0, 2, 3, 5, 7, 9} dan B= {1, 3, 4, 5, 7, 8, 10}. Maka pernyataan yang benar adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "(A ∪ B)^c = A^c ∪ B^c", image: null },
      { id: 2, text: "(A ∩ B)^c = A^c ∩ B^c", image: null },
      { id: 3, text: "(A ∩ B)^c = A ∪ B^c", image: null },
      { id: 4, text: "(A ∩ B)^c = A^c ∪ B^c", image: null },
    ],
    correctAnswerId: 4,
  },
  {
    id: "WCfbH63iEDAuok84x6YP",
    questionText: "Diketahui himpunan A ⊂ B dengan n(A)=11 dan n(B)=18. Dari pernyataan-pernyataan berikut, pernyataan yang salah adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "A ⊂ B,A ∩ B = A", image: null },
      { id: 2, text: "n(A ∩ B) = 11", image: null },
      { id: 3, text: "n(A ∩ B) = n(A)", image: null },
      { id: 4, text: "n(A ∩ B) = 29", image: null },
    ],
    correctAnswerId: 4,
  },
  {
    id: "NTsAu3AZMHYP72pNAzPb",
    questionText: "Dalam sebuah kelas terdapat 17 siswa gemar matematika, 15 siswa gemar fisika, 8 siswa gemar keduanya. Banyak siswa dalam kelas adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "24 orang", image: null },
      { id: 2, text: "36 orang", image: null },
      { id: 3, text: "32 orang", image: null },
      { id: 4, text: "28 orang", image: null },
    ],
    correctAnswerId: 1,
  },
  {
    id: "RxWkDmjXeoGpzGKIPU0f",
    questionText: "Dalam cerita topeng malangan, terdapat tokoh yang berkarakter baik atau protagonis\ndan disebut dengan tokoh Panji. Mereka adalah Panji Asmara Bangun, Panji Lembu Amijaya,\nPanji Lembu Amiluhur, Panji Amiseno, Panji Amisani, Panji Pambelah, Panji Panggending, Panji Pamecut, Panji Anom, Panji Amerdadu, Panji Banyaksasi, Panji Kudanawarsa, Panji Laras, Dewi Sekartaji, Dewi Ragil Kuning, Dewi Kili Suci, Dewi Tajeswara, Dewi Walangwati, Dewi Walang Semiring, Raden Gunungsari, Raden Raden Kudana Warawangsa, Raden Tunjung Seto, Raden Parang Teja, Panji Gurawangsa, Brajanata, Raden Pratajaya. Misalkan tokoh berkarakter baik atau Panji adalah himpunan A, maka pernyataan berikut yang tepat, kecuali …",
    questionImage: null,
    choices: [
      { id: 1, text: "n(A) = 26", image: null },
      { id: 2, text: "Misalkan S adalah himpunan semesta dari keseluruhan karakter tokoh topeng malangan, maka A ⊂ S", image: null },
      { id: 3, text: "Misalkan S adalah himpunan semesta dari keseluruhan karakter tokoh topeng malangan, maka A ∩ S = A", image: null },
      { id: 4, text: "A^c ≠ A", image: null },
    ],
    correctAnswerId: 3,
  },
  {
    id: "5khEYKJU8wO4pVkiO4ON",
    questionText: "Panji Asmara Bangun merupakan tokoh protagonis yang mengatur naik turunnya konflik dalam suatu cerita topeng malangan. Misalkan penggalan huruf dari tokoh tersebut adalah himpunan P, sehingga P = {p, a, n, j, i, a, s, m, a, r, a, b, a, n, g, u, n}, maka banyaknya himpunan bagian dari P adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "2^17", image: null },
      { id: 2, text: "2^15", image: null },
      { id: 3, text: "2^11", image: null },
      { id: 4, text: "2^11 - 1", image: null },
    ],
    correctAnswerId: 3,
  },
  {
    id: "IhadNmZUDYi8gQ3Geihh",
    questionText: "Perhatikan himpunan penggalan nama tokoh Panji di bawah ini!\nA = {d, e, w, i, s, e, k, a, r, t, a, j, i}\nB = {d, e, w, i, w, a, l, a, n, g, w, a, t, i}\nHimpunan yang merupakan hasil dari B-A adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "{w, a, l, a, n, g, w, a, t, i}", image: null },
      { id: 2, text: "{l, n, g}", image: null },
      { id: 3, text: "{d, e, w, i, w, a, l, a, n, g, w, a, t, i}", image: null },
      { id: 4, text: "{w, l, n, t}", image: null },
    ],
    correctAnswerId: 2,
  },
  {
    id: "9yxTTM1IZBya2OMQh6Ft",
    questionText: "Dalam cerita kelompok tokoh Panji topeng malangan, jika terdapat 12 tokoh Panji yang bermata sipit dan 17 tokoh Panji yang berhidung mancung. Dan jumlah keseluruhan tokoh Panji adalah 26, maka banyak banyaknya tokoh panji yang memiliki ciri mata sipit sekaligus hidung mancung adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "Tidak ada", image: null },
      { id: 2, text: "1", image: null },
      { id: 3, text: "2", image: null },
      { id: 4, text: "3", image: null },
    ],
    correctAnswerId: 4,
  },
  {
    id: "d3kwR1V0cPeYFlu6Oezk",
    questionText: "Jika tokoh Panji atau tokoh yang berkarakter baik dalam topeng malangan adalah himpunan A, dimana beberapa anggotanya didaftar berdasarkan kode nomor tertentu sehingga A={2,3,5,7,11,13,15,17,19,23}, maka pernyataan di bawah ini yang paling tepat adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "n(A) = 26", image: null },
      { id: 2, text: "{2,3,13,17} ⊂ A", image: null },
      { id: 3, text: "A = {x│2≤ x ≤ 23,x ∈ bilangan prima}", image: null },
      { id: 4, text: "Jawaban B dan C benar", image: null },
    ],
    correctAnswerId: 2,
  },
  {
    id: "eP5VX6YFT8XYRBe0th9Z",
    questionText: "Perhatikan himpunan penggalan nama tokoh Panji di bawah ini!\nD = {p, a, n, j, i, a, m, i, s, e, n, o}\nE = {p, a, n, j, i, a, m, i, s, a, n, i}\nBanyaknya anggota himpunan dari (E∩D)^c adalah …",
    questionImage: null,
    choices: [
      { id: 1, text: "Tidak ada", image: null },
      { id: 2, text: "{e, o}", image: null },
      { id: 3, text: "2", image: null },
      { id: 4, text: "Jawaban B dan C benar", image: null },
    ],
    correctAnswerId: 3,
  },
  {
    id: "0atmvECbRGVueuaYcvfN",
    questionText: "Untuk merayakan hari kelulusan Tono, dia mengajak kedua orang tua dan kakaknya yaitu Dinda, makan di sebuah restoran. Sesampainya di restoran mereka memesan makanan kesukaan masing-masing yang ada pada daftar menu restoran tersebut. Tono memesan ayam laos, ceker mercon, dan jus alpukat. Ayah Tono memesan ikan bakar, dan es teler. Ibu Tono memesan ayam laos, ceker mercon dan jus alpukat, Dinda memesan bakso dan jus terong belanda. Jika makanan yang dipesan keluarga Tono itu merupakan himpunan, pernyataan berikut yang benar adalah…",
    questionImage: null,
    choices: [
      { id: 1, text: "Himpunan makanan yang dipesan Tono sama dengan Ayah Tono", image: null },
      { id: 2, text: "Himpunan makanan yang dipesan Tono sama dengan Ibu Tono", image: null },
      { id: 3, text: "Himpunan makanan yang dipesan Tono sama dengan Dinda", image: null },
      { id: 4, text: "Himpunan makanan yang dipesan Tono tidak sama dengan Ibu Tono", image: null },
    ],
    correctAnswerId: 2,
  },
  {
    id: "3mzfSTOEcrv14WKLIRL9",
    questionText: "Dari empat regu cerdas cermat masing-masing mendapatkan nilai skor akhir yang sama sehingga mereka memiliki kesempatan sama untuk memenangkan suatu hadiah undian. Agar salah satu dari keempat regu dipilih secara adil menjadi pemenang, maka panitia memberikan satu dari empat pertanyaan tentang himpunan yang tersedia dalam kotak undian. Keempat pertanyaan pada kotak undian itu adalah menentukan:\n1. himpunan nama bulan berawalan dari huruf B\n2. himpunan bilangan cacah yang kurang dari 0\n3. himpunan bilangan asli yang lebih dari 4 dan kurang dari 5\n4. himpunan bangun datar yang mempunyai 3 titik sudut\nPemenangnya adalah regu yang dapat menemukan paling sedikit satu anggota himpunannya. Setelah pengundian, regu A mendapatkan pertanyaan nomor 4,regu B mendapat pertanyaan nomor 1, Regu C mendapat pertanyaan nomor 2, dan Regu D mendapat pertanyaan nomor 3. Manakah regu yang kemungkinan menjadi pemenang pada lomba cerdas cermat?",
    questionImage: null,
    choices: [
      { id: 1, text: "Regu A", image: null },
      { id: 2, text: "Regu B", image: null },
      { id: 3, text: "Regu C", image: null },
      { id: 4, text: "Regu D", image: null },
    ],
    correctAnswerId: 1,
  },
  {
    id: "X6E54sTWRUr2HOmweyAx",
    questionText: "Doni dan Siti adalah siswa kelas VIII SMP 1 Jaya Abadi. Doni menyukai mata pelajaran Matematika, IPS, Bahasa Indonesia, dan IPA. Sedangkan Siti menyukai mata pelajaran Matematika, IPS, Bahasa Inggris, dan PKn. Jika P adalah himpunan mata pelajaran yang disukai oleh Doni dan Q adalah himpunan mata pelajaran yang disukai oleh Siti, manakah pernyataan berikut yang benar?",
    questionImage: null,
    choices: [
      { id: 1, text: "P ∩ Q = {Matematika, IPS}", image: null },
      { id: 2, text: "Q = {Matematika, IPS, Bahasa Indonesia}", image: null },
      { id: 3, text: "P ≠ Q", image: null },
      { id: 4, text: "A dan B benar", image: null },
    ],
    correctAnswerId: 4,
  },
  {
    id: "5Lz0fPGv7RgVh1t6PZky",
    questionText: "Dalam suatu kelas terdapat 35 siswa. Di kelas tersebut ada 22 siswa suka makan ayam goreng, 15 siswa suka makan ceker mercon, dan 3 siswa tidak suka keduanya.Berapa siswa yang suka makan ayam goreng dan ceker mercon?",
    questionImage: null,
    choices: [
      { id: 1, text: "5", image: null },
      { id: 2, text: "7", image: null },
      { id: 3, text: "10", image: null },
      { id: 4, text: "14", image: null },
    ],
    correctAnswerId: 1,
  },
  {
    id: "vimr8HAdccV5p6wQrkUX",
    questionText: "Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Berapa banyak siswa yang tidak hobi salah satu atau keduanya dari menyanyi dan melukis?",
    questionImage: null,
    choices: [
      { id: 1, text: "Tidak ada", image: null },
      { id: 2, text: "5 siswa", image: null },
      { id: 3, text: "6 siswa", image: null },
      { id: 4, text: "7 siswa", image: null },
    ],
    correctAnswerId: 3,
  },
  {
    id: "c8k1lgtoyzrb9gH91N3O",
    questionText: "Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Berapa banyak siswa yang hobi menyanyi saja?",
    questionImage: null,
    choices: [
      { id: 1, text: "Tidak ada", image: null },
      { id: 2, text: "12 siswa", image: null },
      { id: 3, text: "15 siswa", image: null },
      { id: 4, text: "18 siswa", image: null },
    ],
    correctAnswerId: 2,
  },
  {
    id: "ai34fvnLOLt8EitbEnDn",
    questionText: "Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Berapa banyak siswa yang hobi melukis saja?",
    questionImage: null,
    choices: [
      { id: 1, text: "5 siswa", image: null },
      { id: 2, text: "10 siswa", image: null },
      { id: 3, text: "12 siswa", image: null },
      { id: 4, text: "15 siswa", image: null },
    ],
    correctAnswerId: 2,
  },
  {
      id: "D0LsrJxNRADhQTYOSRaT",
      questionText: "Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak ayam?",
      questionImage: null,
        choices: [
        { id: 1, text: "15", image: null },
        { id: 2, text: "45", image: null },
        { id: 3, text: "20", image: null },
        { id: 4, text: "45", image: null },
      ],
      correctAnswerId: 3,
  },
  {
      id: "cT3OsRRTWMsC4Ij4AtPW",
      questionText: "Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak kambing?",
      questionImage: null,
        choices: [
        { id: 1, text: "5", image: null },
        { id: 2, text: "25", image: null },
        { id: 3, text: "40", image: null },
        { id: 4, text: "55", image: null },
      ],
      correctAnswerId: 1,
  },
    {
      id: "7qJzVPz9zYWj250hKgA4",
      questionText: "Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak sapi?",
      questionImage: null,
      choices: [
        { id: 1, text: "100", image: null },
        { id: 2, text: "160", image: null },
        { id: 3, text: "25", image: null },
        { id: 4, text: "50", image: null },
      ],
      correctAnswerId: 2,
    },
    {
      id: "N3AALkubnKTewtLqKgya",
      questionText: "Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang tidak memelihara ternak ketiga-tiganya?",
      questionImage: null,
      choices: [
        { id: 1, text: "10", image: null },
        { id: 2, text: "20", image: null },
        { id: 3, text: "200", image: null },
        { id: 4, text: "80", image: null },
      ],
      correctAnswerId: 4,
    },
    {
      id: "MeAP6j8Pq2zXrstkVRLK",
      questionText: "Perhatikan Tabel diatas! Jika P adalah himpunan siswa yang hanya hobi memasak dan Q adalah himpunan siswa yang hanya hobi fotografi. Berapa siswa yang hanya hobi memasak?",
      questionImage: require('../assets/image/Games/q_38.png'),
      choices: [
        { id: 1, text: "{Lina, Fiqri, Fadel}", image: null },
        { id: 2, text: "{Nadiya, Indra, Ajeng}", image: null },
        { id: 3, text: "{Faiza, Wayan, Iis, Derry}", image: null },
        { id: 4, text: "{Ajeng, Daffa, Fadel, Wayan}", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "2rNC9A4Lb5VvCxkpzf7Z",
      questionText: "Perhatikan Tabel diatas! Jika P adalah himpunan siswa yang hanya hobi memasak dan Q adalah himpunan siswa yang hanya hobi fotografi. Berapa siswa yang hanya hobi fotografi?",
      questionImage: require('../assets/image/Games/q_39.png'),
      choices: [
        { id: 1, text: "{Lina, Fiqri, Fadel}", image: null },
        { id: 2, text: "{Nadiya, Indra, Ajeng}", image: null },
        { id: 3, text: "{Faiza, Wayan, Iis, Derry}", image: null },
        { id: 4, text: "{Iis, Derry, Nadiya, Daffa}", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "3eDlON6r4lIU50eX28ia",
      questionText: "Sebuah lembaga penelitian meneliti skincare yang dipakai usia remaja hingga dewasa. Dari hasil penelitian, tercatat 30 merek mengandung mercury, 25 merek mengandung fragrance, dan 13 merek mengandung kedua zat tersebut. Jika ada 15 merek tidak mengandung zat mercury maupun fragrance, berapa merek skincare yang diteliti oleh lembaga penelitian tersebut?",
      questionImage: null,
      choices: [
        { id: 1, text: "45 skincare", image: null },
        { id: 2, text: "30 skincare", image: null },
        { id: 3, text: "62 skincare", image: null },
        { id: 4, text: "57 skincare", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "BNOJXTf4IwOz7vTzeNYb",
      questionText: "Sekelompok siswa yang terdiri atas 50 siswa, ternyata 30 suka jus mangga, dan 25 siswa suka jus wortel, 5 siswa tidak suka kedua-duanya. Berapa banyak siswa yang suka keduanya?",
      questionImage: null,
      choices: [
        { id: 1, text: "10 siswa", image: null },
        { id: 2, text: "25 siswa", image: null },
        { id: 3, text: "35 siswa", image: null },
        { id: 4, text: "40 siswa", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "9khcnNeaRHHuS5Q7QX67",
      questionText: "Dalam sebuah kelas terdapat 50 anak. Dari jumlah tersebut, 19 anak suka martabak manis toping coklat, 21 anak suka martabak manis toping kacang, 19 anak suka martabak manis toping keju, 10 suka martabak manis toping coklat dan kacang, 7 anak suka martabak manis toping coklat dan keju, 6 anak suka martabak manis toping kacang dan keju, dan 4 anak suka ketiga-tiganya. Berapa anak yang tidak suka martabak manis satupun dari ketiga kegiatan tersebut?",
      questionImage: null,
      choices: [
        { id: 1, text: "43 anak", image: null },
        { id: 2, text: "50 anak", image: null },
        { id: 3, text: "35 anak", image: null },
        { id: 4, text: "68 anak", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "oAj2X5H4hmzP5Oqjhreb",
      questionText: "Sebuah puskesmas sedang merawat pasien sebanyak 100 orang, 50 orang menderita penyakit Diabetes, 35 orang menderita penyakit Tipes, 15 orang menderita penyakit Diabetes dan Tipes. Berapa orang pasien yang tidak menderita kedua penyakit tersebut?",
      questionImage: null,
      choices: [
        { id: 1, text: "15 pasien", image: null },
        { id: 2, text: "25 pasien", image: null },
        { id: 3, text: "30 pasien", image: null },
        { id: 4, text: "5 pasien", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "0NVQAyXnlDQEcp4ZiUnz",
      questionText: "Dalam tes seleksi SBMPTN pada tahun 2020 yang lalu, seseorang dinyatakan diterima apabila lulus tes potensi skolastik (TPS), tes kompetensi akademik (TKA), dan tes bahasa inggris sekaligus. Untuk peserta siswa yang mengikuti tes SBMPTN 2020 terdapat 100 orang peserta yang ikut tes. Pada saat pengumuman hasil tes, 20 orang hanya lulus potensi skolastik (TPS), 8 orang hanya lulus tes kompetensi akademik (TKA), 5 orang hanya lulus tes bahasa Inggris, 10 orang lulus tes potensi skolastik (TPS) dan kompetensi akademik (TKA), 7 orang lulus tes kompetensi akademik (TKA), dan tes bahasa inggris, 30 orang lulus tes potensi skolastik (TPS), dan tes bahasa inggris. Berapa siswa yang lolos seleksi SBMPTN 2020?",
      questionImage: null,
      choices: [
        { id: 1, text: "15 orang", image: null },
        { id: 2, text: "20 orang", image: null },
        { id: 3, text: "25 orang", image: null },
        { id: 4, text: "30 orang", image: null }
      ],
      correctAnswerId: 2
    },
    {
      id: "RfDO4qXKogqz0okLikB4",
      questionText: "Perhatikan Tabel diatas.\nJika A adalah himpunan yang menyukai telur gulung, B adalah himpunan siswa yang menyukai Batagor dan Siomay, dan C adalah himpunan siswa yang menyukai keduanya, maka anggota dari himpunan A – B adalah ….",
      questionImage: require('../assets/image/Games/q_45.png'),
      choices: [
        { id: 1, text: "{Daffa}", image: null },
        { id: 2, text: "{Lina, Fiqri, Nadiya, Daffa}", image: null },
        { id: 3, text: "{Iis, Ajeng, Derry, Faiza}", image: null },
        { id: 4, text: "{Lina, Iis, Ajeng, Fiqri, Derry, Nadiya, Faiza, Daffa}", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "mNrxPmzftaoIgQrDWDZD",
      questionText: "Berdasarkan gambar diagram venn diatas. Tentukan anggota himpunan dari Q ∪ R?",
      questionImage: require('../assets/image/Games/q_46.png'),
      choices: [
        { id: 1, text: "{–8, –7, –6, –5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5}", image: null },
        { id: 2, text: "{–5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5, 6, 7, 8}", image: null },
        { id: 3, text: "{–8, –7, –6, –5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5, 6, 7, 8}", image: null },
        { id: 4, text: "{–10, –9, –8, –7, –6, –5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "FbrZm2iphkgF8OTOUwZT",
      questionText: "Sebuah Lembaga penelitian, meneliti makanan ringan yang dikonsumsi anak-anak. dari hasil penelitian, tercatat 18 merek yang mengandung zat pewarna sintetis, 24 merek mengandung penyedap rasa buatan, dan 10 merek mengandung kedua zat tersebut. jika ada 9 merek tidak mengandung zat pewarna sintetik maupun penyedap rasa buatan, banyaknya merek makanan ringan yang diteliti oleh lembaga penelitian tersebut adalah",
      questionImage: null,
      choices: [
        { id: 1, text: "35", image: null },
        { id: 2, text: "50", image: null },
        { id: 3, text: "32", image: null },
        { id: 4, text: "41", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "pgzxe1dghq827xLLmPSQ",
      questionText: "Di antara 80 orang siswa di suatu SMA didapatkan data sebagai berikut: 45 siswa menyenangi lagu genre pop, 40 siswa menyenangi genre lagu jazz, 30 siswa menyenangi genre lagu rock, 18 siswa menyenangi genre lagu pop dan jazz, 15 siswa menyenangi genre lagu pop dan rock, 12 siswa menyenangi genre lagu rock dan jazz, 4 orang menyenangi ketiga genre lagu tersebut (pop, jazz, rock). Berdasarkan keterangan tersebut. Hitunglah banyak siswa yang menyenangi genre lagu jazz tetapi tidak menyenangi genre lagu pop!",
      questionImage: null,
      choices: [
        { id: 1, text: "10 siswa", image: null },
        { id: 2, text: "5 siswa", image: null },
        { id: 3, text: "8 siswa", image: null },
        { id: 4, text: "6 siswa", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "PpkQt5f9PUFhTsITiQBy",
      questionText: "Di antara 80 orang siswa di suatu SMA didapatkan data sebagai berikut: 45 siswa menyenangi lagu genre pop, 40 siswa menyenangi genre lagu jazz, 30 siswa menyenangi genre lagu rock, 18 siswa menyenangi genre lagu pop dan jazz, 15 siswa menyenangi genre lagu pop dan rock, 12 siswa menyenangi genre lagu rock dan jazz, 4 orang menyenangi ketiga genre lagu tersebut (pop, jazz, rock). Berdasarkan keterangan tersebut. Hitunglah banyak siswa yang tidak menyenangi ketiga genre lagu tersebut!",
      questionImage: null,
      choices: [
        { id: 1, text: "4 siswa", image: null },
        { id: 2, text: "10 siswa", image: null },
        { id: 3, text: "9 siswa", image: null },
        { id: 4, text: "0 siswa", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "WlDJWGcdQYgiJQRumM0l",
      questionText: "Jika ∅ merupakan himpunan kosong, maka pernyataan berikut yang kurang tepat adalah …",
      questionImage: null,
      choices: [
        { id: 1, text: "∅ ⊂ ∅", image: null },
        { id: 2, text: "∅ ⊂ {∅}", image: null },
        { id: 3, text: "∅ ∈ {∅}", image: null },
        { id: 4, text: "∅ ∈ ∅", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "C0JzwIIOXULF4mL1IyIm",
      questionText: "Jika M adalah himpunan huruf yang terdapat pada kata “CATATAN”, maka banyak himpunan bagian dari M yang tidak kosong adalah…",
      questionImage: null,
      choices: [
        { id: 1, text: "15", image: null },
        { id: 2, text: "16", image: null },
        { id: 3, text: "31", image: null },
        { id: 4, text: "127", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "lTOG18xMXWzcuB3c2gkT",
      questionText: "Data kegiatan sarapan pagi 38 siswa sebagai berikut. Terdapat 6 siswa sarapan dengan roti dan nasi goreng. Ada 5 siswa yang tidak sarapan pagi. Jika banyak siswa yang sarapan nasi goreng dua kali banyaknya siswa yang sarapan roti, maka banyaknya siswa yang sarapan nasi goreng saja adalah…",
      questionImage: null,
      choices: [
        { id: 1, text: "35 siswa", image: null },
        { id: 2, text: "30 siswa", image: null },
        { id: 3, text: "25 siswa", image: null },
        { id: 4, text: "20 siswa", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "gBXnWXTbt7D7RnMnmt1d",
      questionText: "Klana Sewandana, merupakan tokoh Sabrang (antagonis) dalam topeng malangan yang menjadi musuh dari Raden Panji. Klana digambarkan sebagai sosok yang memiliki mata besar atau mata kedhelen, hidungnya berbentuk pagotan, serta jenggotnya yang brewok. Jika K adalah himpunan huruf yang terdapat pada kata “KLANA SEWANDANA”, maka banyak himpunan bagian dari M yang tidak kosong adalah…",
      questionImage: null,
      choices: [
        { id: 1, text: "8.191", image: null },
        { id: 2, text: "256", image: null },
        { id: 3, text: "16.384", image: null },
        { id: 4, text: "255", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "uqM8AIt4BQMsVjR07LxX",
      questionText: "Dalam cerita topeng malangan, terdapat karakter tokoh antagonis yang disebut dengan tokoh Sabrang. Mereka adalah Patih Kollo Dinemprang, Patih Ngaronggo Kusuma, Klono Sewadana, Klono Garuda Lelana, Bapang Jaya Sentika, Bapang Jaya Pangangun, Klono Baron Sakeber, Lembu Gumirang, Patih Sura Dwipangga, Patih Dandang Mangkurat, Patih Gajah Mero, Patih Gajah Suba, Patih Lindu Sekti, Patih Carang Lampit, Patih Kollo Memreng, Patih Dandang Mangku Praja, Patih Kraeng Raja, Patih Gurawangsa, Patih Musing Jawa, Patih Kollo Renggut Muka, Patih Talang Segara, Wadal Werdi, Buto Terong, Betara Kollo, Kollo Tekik Sologonjo, Kollo Murko Mamang, Mahesa Suro, Wahmuka, Rohmuka, Pinggir Muka, dan Hermuka. Misalkan B adalah himpunan tokoh Sabrang, maka pernyataan di bawah ini salah, kecuali …",
      questionImage: null,
      choices: [
        { id: 1, text: "n(C) = 30", image: null },
        { id: 2, text: "{Kollo Tekik Sologonjo} ⊂ {Kollo Murko Mamang}", image: null },
        { id: 3, text: "C^c = {x│x ∈ C}", image: null },
        { id: 4, text: "Salah satu himpunan bagian dari C adalah ∅", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "hVDASUfUFdmRQJclcPPZ",
      questionText: "Jika tokoh Sabrang atau tokoh yang berkarakter jahat (antagonis) dalam topeng malangan adalah himpunan A, dimana beberapa anggotanya didaftar berdasarkan kode nomor tertentu sehingga A={30,35,40,50,54,75}, maka pernyataan di bawah ini yang paling tepat adalah …",
      questionImage: null,
      choices: [
        { id: 1, text: "n(A) = 6", image: null },
        { id: 2, text: "A={x│30 ≤ x < 76,x ∈ kelipatan 5}", image: null },
        { id: 3, text: "{ }, {30}, {54} ⊂A", image: null },
        { id: 4, text: "Jawaban A dan C benar", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "udzDRxgbnuXwXv9cONny",
      questionText: "Perhatikan himpunan dari penggalan nama tokoh Sabrang di bawah ini!\nP = {w, a, h, m, u, k, a}\nQ = {r, o, h, m, u, k, a}\nR = {p, i, n, g, g, i, r, m, u, k, a}\nHimpunan yang merupakan hasil dari P-(Q ∪ R)^c adalah",
      questionImage: null,
      choices: [
        { id: 1, text: "Himpunan P", image: null },
        { id: 2, text: "{a, h, m, u, k, a}", image: null },
        { id: 3, text: "{w}", image: null },
        { id: 4, text: "Tidak ada jawaban yang benar", image: null }
      ],
      correctAnswerId: 2
    },
    {
      id: "kb7cyq0JhTUo1L66bUuc",
      questionText: "Dalam cerita kelompok tokoh Sabrang topeng malangan, jika terdapat 20 tokoh Sabrang yang bermata besar dan 11 tokoh Sabrang yang berjenggot brewok. Dan jumlah keseluruhan tokoh Sabrang adalah 31, maka banyak banyaknya tokoh Sabrang yang memiliki ciri mata besar sekaligus jenggot brewok adalah …",
      questionImage: null,
      choices: [
        { id: 1, text: "Tidak ada", image: null },
        { id: 2, text: "5", image: null },
        { id: 3, text: "15", image: null },
        { id: 4, text: "20", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "06ZE6MKhtSkdWesqEMsh",
      questionText: "Wali kelas VII A sedang mendata makanan kesukaan dari siswanya. Sebanyak 18 anak menyukai soto, 15 siswa menyukai bakso, 7 siswa menyukai keduanya, dan 5 siswa tidak menyukai keduanya. Berapakah banyak siswa kelas VII A yang didata oleh wali kelas?",
      questionImage: null,
      choices: [
        { id: 1, text: "45", image: null },
        { id: 2, text: "31", image: null },
        { id: 3, text: "35", image: null },
        { id: 4, text: "33", image: null }
      ],
      correctAnswerId: 2
    },
    {
      id: "YiHiFDIsPsyMJ33LVyrz",
      questionText: "Diberikan himpunan A={x|x < 5,x ∈ N} dan B={1,2,3,4}. Tentukanlah hubungan antara himpunan A dan himpunan B di bawah ini yang kurang tepat!",
      questionImage: null,
      choices: [
        { id: 1, text: "n(A) = n(B)", image: null },
        { id: 2, text: "Karena A ⊂ B dan B ⊂ A, maka A = B", image: null },
        { id: 3, text: "nP(A)  =nP(B)", image: null },
        { id: 4, text: "n(P(B)) = 8", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "ITkf0zCsNQAJZ1GuV4gA",
      questionText: "Diberikan himpunan S={x|x < 21,x ∈ N}, P={1,2,7,14}, dan Q={2,3,5,7,11,13,17,19}. Tentukan (P ∩ Q)^C!",
      questionImage: null,
      choices: [
        { id: 1, text: "{3,4,5,6,8,9,10,11,12,13,15,16,17,18,19,20}", image: null },
        { id: 2, text: "{1,4,6,8,9,10,12,14,15,16,18,20}", image: null },
        { id: 3, text: "{}", image: null },
        { id: 4, text: "{1,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20}", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "LBuO5gyVwjTvaRrM3T0c",
      questionText: "Diberikan himpunan A={x|x < 5,x ∈ N} dan B={1,2,3,4}. Tentukanlah pernyataan yang paling tepat dari beberapa pernyataan berikut!",
      questionImage: null,
      choices: [
        { id: 1, text: "n(P(A)) = 8", image: null },
        { id: 2, text: "A-B = B", image: null },
        { id: 3, text: "A = B", image: null },
        { id: 4, text: "{5} ⊂ A", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "s0UQrMkHnQ6GnHwE6zld",
      questionText: "Diberikan beberapa himpunan sebagai berikut\nA={x|x ∈ N}\nB={1,2,3,4,6,12}\nC={2,3,5,7,11,13,17}\nTentukan pernyataan yang paling tepat dari beberapa pernyataan berikut!",
      questionImage: null,
      choices: [
        { id: 1, text: "Himpunan A merupakan himpunan semesta", image: null },
        { id: 2, text: "Himpunan B merupakan himpunan bagian dari himpunan C", image: null },
        { id: 3, text: "B^C = A", image: null },
        { id: 4, text: "B-C={1,2,3,4,6,12}", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "hF8fhvqN1OLELEpgooDe",
      questionText: "Kelas VII B melakukan pemilihan ketua kelas untuk pertama kalinya. Ada 2 kandidat yang mengajukan diri untuk menjadi ketua kelas. Mereka adalah Andi dan Beni. Andi mendapatkan perolehan suara 2/3 dari keseluruhan siswa, Beni mendapatkan perolehan suara 2 kali banyak suara yang diperoleh Andi dan Beni. Suara yang diperoleh Andi dan Beni adalah 8 suara. Berapakah banyak siswa yang ada di kelas VII B?",
      questionImage: null,
      choices: [
        { id: 1, text: "18 siswa", image: null },
        { id: 2, text: "20 siswa", image: null },
        { id: 3, text: "22 siswa", image: null },
        { id: 4, text: "24 siswa", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "PI6B9S7BGl0RD0Ca4LV3",
      questionText: "Kelas VII B melakukan pemilihan ketua kelas untuk pertama kalinya. Ada 2 kandidat yang mengajukan diri untuk menjadi ketua kelas. Mereka adalah Andi dan Beni. Andi mendapatkan perolehan suara 2/3 dari keseluruhan siswa, Beni mendapatkan perolehan suara 2 kali banyak suara yang diperoleh Andi dan Beni. Suara yang diperoleh Andi dan Beni adalah 8 suara. Siapakah yang terpilih menjadi ketua kelas VII B?",
      questionImage: null,
      choices: [
        { id: 1, text: "Andi, karena perolehan suara Andi lebih unggul dari perolehan suara Beni", image: null },
        { id: 2, text: "Beni, karena perolehan suara Beni lebih unggul dari perolehan suara Andi", image: null },
        { id: 3, text: "Tidak ada, karena perolehan suara keduanya sama dan akan dilakukan pemilihan ulang", image: null },
        { id: 4, text: "Keduanya, karena perolehan suara keduanya sama", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "vXxrJhMKyg5pfZxllMDH",
      questionText: "Toko Roti Lumayan menjual dua jenis roti, yaitu roti panggang dan roti kukus. 15% pembeli menyukai keduanya. 57% pembeli menyukai roti kukus dan 58% pembeli menyukai roti panggang. Penjualan roti di Toko Roti Lumayan dalam tabel di bawah ini.\nBerapakah banyak pembeli yang hanya membeli roti kukus pada bulan Maret?",
      questionImage: require('../assets/image/Games/q_65.png'),
      choices: [
        { id: 1, text: "684", image: null },
        { id: 2, text: "504", image: null },
        { id: 3, text: "696", image: null },
        { id: 4, text: "516", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "rFPu7SOflTpwQBomBr44",
      questionText: "Pada pembelajaran Bahasa Indonesia, dilakukan survei tentang genre film kesukaan para siswa yang ada di kelas VII C. Ada dua genre film yang ternyata disukai oleh siswa kelas VII C, yaitu aksi dan horor. 7/2 siswa yang menyukai keduanya ternyata menyukai genre film aksi. 6 kali siswa yang menyukai keduanya ternyata menyukai genre film horor. Jika ada 34 siswa di kelas VII C. Tentukan pernyataan yang paling tepat dari beberapa pernyataan di bawah ini",
      questionImage: null,
      choices: [
        { "id": 1, "text": "Banyak siswa yang menyukai genre aksi ada sebanyak 14 siswa", image: null },
        { "id": 2, "text": "Banyak siswa yang menyukai genre horor ada sebanyak 24 siswa", image: null },
        { "id": 3, "text": "Banyak siswa yang menyukai keduanya ada sebanyak 34 siswa", image: null },
        { "id": 4, "text": "Banyak siswa yang menyukai genre horor ada sebanyak 20 siswa", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "0kQHZhvhiJ7eMOFu7Tnl",
      questionText: "Siswa kelas VII D ada sebanyak 40 siswa. Wali kelas VII D melakukan survei terhadap sarapan pagi yang dilakukan siswa. Sebanyak 8 siswa sarapan dengan nasi dan roti. Sebanyak 4 siswa tidak sarapan pagi. Jika banyak siswa yang sarapan dengan nasi 3 kali lebih banyak dari siswa yang sarapan dengan roti. Berapakah banyak siswa yang hanya sarapan dengan nasi?",
      questionImage: null,
      choices: [
        { id: 1, text: "11 siswa", image: null },
        { id: 2, text: "33 siswa", image: null },
        { id: 3, text: "25 siswa", image: null },
        { id: 4, text: "3 siswa", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "W6TyqgZ6ohhsJShY60Cd",
      questionText: "Untuk diterima di PT Maju Mundur Sejahtera, pelamar harus mengikuti tes tertulis dan tes wawancara. Terdapat 75 pelamar yang mendaftar bekerja di PT Maju Mundur Sejahtera. 2/3 pelamar mengikuti tes tertulis dan 4/5 pelamar mengikuti tes wawancara. Berapakah banyak pelamar yang diterima bekerja di PT Maju Mundur Sejahtera?",
      questionImage: null,
      choices: [
        { id: 1, text: "35 pelamar", image: null },
        { id: 2, text: "50 pelamar", image: null },
        { id: 3, text: "60 pelamar", image: null },
        { id: 4, text: "75 pelamar", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "xJXrpdYjW5urYLKftCg6",
      questionText: "Pemilu 2019. Dalam pemilihan umum tahun 2019, terdapat dua calon presiden yang mencalonkan diri untuk bersaing agar terpilih menjadi presiden 2019-2024. Mereka adalah Bapak Jokowi dan Bapak Prabowo. Di Desa Gurah dengan total pemilih sebanyak 2500 pemilih didapatkan perolehan suara sebagai diatas.\nSetelah dilakukan penghitungan, tim pemenangan Bapak Prabowo yang ada di Desa Gurah mengajukan banding ke Bawaslu setempat karena menurut mereka terdapat 125 suara yang dianggap tidak sah seharusnya milik Bapak Prabowo. Setelah dilakukan pengecekan ulang, ternyata dugaan yang diajukan benar. Tentukan pernyataan yang paling benar dari pernyataan-pernyataan di bawah ini!",
      questionImage: require('../assets/image/Games/q_69.png'),
      choices: [
        { id: 1, text: "Bapak Jokowi unggul 50 suara dari Bapak Prabowo", image: null },
        { id: 2, text: "Terdapat 750 suara tidak sah dari 2500 total suara", image: null },
        { id: 3, text: "Perolehan suara Bapak Prabowo lebih besar daripada perolehan suara Bapak Jokowi", image: null },
        { id: 4, text: "Bapak Prabowo unggul 25 suara dari Bapak Jokowi", image: null }
      ],
      correctAnswerId: 4
    },
    {
      id: "IYwksaVokiXPaRC0Hfc9",
      questionImage: null,
      questionText: "Suatu hari seorang guru Bimbingan Konseling melakukan survei terhadap mata pelajaran yang disukai oleh siswa kelas VII. 2/5 siswa menyukai pelajaran Bahasa Indonesia, 1/3 siswa menyukai pelajaran Olahraga, 24 siswa menyukai pelajaran Matematika.\n8/15 siswa menyukai dua dari pelajaran Bahasa Indonesia, Olahraga, dan Matematika. Hanya 12 siswa yang menyukai ketiga pelajaran sekaligus.\nBerapa banyak siswa kelas VII yang ada di sekolah tersebut?",
      choices: [
          { id: 1, text: "40 siswa", image: null },
          { id: 2, text: "45 siswa", image: null },
          { id: 3, text: "50 siswa", image: null },
          { id: 4, text: "55 siswa", image: null }
      ],
      correctAnswerId: 2
    },
    {
      id: "4Q3pnS6e1Z1ungWqucyZ",
      questionImage: null,
      questionText: "Tiga orang anak bernama Agus, Candra, dan Budi. Agus menyukai makanan bubur ayam dan ayam goreng. Candra menyukai gado-gado dan karedok sedangkan Budi menyukai ayam goreng dan gado gado.\nSiapakah yang menyukai ayam goreng tapi tidak menyukai gado-gado?",
      choices: [
          { id: 1, text: "Agus", image: null },
          { id: 2, text: "Candra", image: null },
          { id: 3, text: "Budi", image: null },
          { id: 4, text: "Agus dan Budi", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "p2JmIpDWxzdc8ZefLVcR",
      questionImage: null,
      questionText: "Balai Latihan Kerja (BLK) merupakan suatu tempat untuk memperoleh keterampilan atau mendalami keterampilan yang sudah dimiliki oleh seseorang. BLK Kota Cilegon adalah salah satu BLK yang ada di Indonesia.\nTerdapat dua kursus yang paling diminati oleh pendaftar, yaitu Kejuruan Teknik Sepeda Motor dan Kejuruan Operator Komputer.\nPada tahun 2023, terdapat 44 orang yang mendaftar di BLK Cilegon. 5/2 dari pendaftar yang memilih Kejuruan Operator Komputer dan Kejuruan Teknik Sepeda Motor diterima di Kejuruan Operator Komputer. 4 kali dari jumlah pendaftar yang mendaftar di kedua kejuruan diterima di Kejuruan Teknik Sepeda Motor. Berapa banyak pendaftar yang hanya memilihi Kejuruan Teknik Sepeda Motor?",
      choices: [
          { id: 1, text: "24", image: null },
          { id: 2, text: "20", image: null },
          { id: 3, text: "32", image: null },
          { id: 4, text: "8", image: null }
      ],
      correctAnswerId: 1
    },
    {
      id: "EFmLpyoqcbxTsMqtKnkO",
      questionImage: null,
      questionText: "Dalam cerita topeng malangan, terdapat 76 tokoh dengan karakter yang berbeda-beda. Salah satunya terdapat tokoh topeng malangan yang berkarakter pembantu dan memiliki sifat setia. Mereka disebut tokoh Abdi. Anggota dari tokoh Abdi adalah Totok Kerot, Bagawan Walang Dewa, Begalan Gajah Abuh, Narada, Bilung, Demang Mones, Demang Mundu, Demang Tirtoyudo, Bambang Painem, Emban Dewool, Emban Ono Ini, Jarodeh, Prasonto. Pernyataan berikut kurang tepat, kecuali …",
      choices: [
        { id: 1, text: "Misalkan tokoh Abdi adalah himpunan C, maka n(C) = 12", image: null },
        { id: 2, text: "Misalkan tokoh Abdi adalah himpunan C dan keseluruhan tokoh topeng malangan dengan karakter berbeda-beda adalah himpunan semesta, maka C⊈S", image: null },
        { id: 3, text: "Misalkan tokoh Abdi adalah himpunan C dan keseluruhan tokoh topeng malangan dengan karakter berbeda-beda adalah himpunan semesta, maka C^c={x│x ∈S,x∉C}", image: null },
        { id: 4, text: "Misalkan tokoh Abdi adalah himpunan C dan keseluruhan tokoh topeng malangan dengan karakter berbeda-beda adalah himpunan semesta, maka C-S={x│x ∈S,}", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "u8uGoMs3XSJt5aInrMNI",
      questionImage: null,
      questionText: "Dalam cerita topeng malangan, terdapat sekumpulan topeng yang berkarakter binatang, tepatnya ada 6. Mereka adalah lembu gumirang, buto terong, celeng srenggini, laler ijo, nogo timur, dan bedes. Misalkan P = {b, u, t, o, t, e, r, o, n, g}, Q = {c, e, l, e, n, g, s, r, e, n, g, g, i, n, i}, dan R = {n, o, g, o, t, i, m, u, r}. Maka P-(Q∩R) adalah …",
      choices: [
        { id: 1, text: "{b, u, t, o, t, e, r, o, n, g}", image: null },
        { id: 2, text: "{b, u, t, o, e, r, n, g}", image: null },
        { id: 3, text: "{b, u, t, o, e}", image: null },
        { id: 4, text: "{}", image: null }
      ],
      correctAnswerId: 3
    },
    {
      id: "ZowZ4dqjgv2l6dPLdObX",
      questionImage: null,
      questionText: "Dalam cerita topeng malangan, terdapat 76 tokoh dengan karakter yang berbeda-beda. Salah satunya terdapat tokoh topeng malangan yang berkarakter pembantu dan memiliki sifat setia. Mereka disebut tokoh Abdi. Anggota dari tokoh Abdi adalah Totok Kerot, Bagawan Walang Dewa, Begalan Gajah Abuh, Narada, Bilung, Demang Mones, Demang Mundu, Demang Tirtoyudo, Bambang Painem, Emban Dewool, Emban Ono Ini, Jarodeh, Prasonto. Misalkan D adalah himpunan tokoh Abdi, maka banyaknya himpunan bagian dari D adalah…",
      choices: [
        { id: 1, text: "4.096", image: null },
        { id: 2, text: "8.192", image: null },
        { id: 3, text: "1.024", image: null },
        { id: 4, text: "{}", image: null }
      ],
      correctAnswerId: 2
    },
    {
      id: "LHPEybbJra7ffoIwslJS",
      questionImage: null,
      questionText: "Dalam cerita topeng malangan, terdapat sekumpulan topeng yang berkarakter binatang, tepatnya ada 6. Mereka adalah lembu gumirang, buto terong, celeng srenggini, laler ijo, nogo timur, dan bedes. Misalkan tiga nama tokoh tersebut dibuat himpunan, P = {b, u, t, o, t, e, r, o, n, g}, Q = {c, e, l, e, n, g, s, r, e, n, g, g, i, n, i}, dan R = {n, o, g, o, t, i, m, u, r}. Maka P ∩ R^c adalah …",
      choices: [
        { id: 1, text: "{b, e}", image: null },
        { id: 2, text: "{b, e, c}", image: null },
        { id: 3, text: "{b, e, c, l, s}", image: null },
        { id: 4, text: "{}", image: null }
      ],
      correctAnswerId: 1
    }
  
];
const dataTingkatan = {
  rendah: {
    video: [
      {
        id:"bcg5ol1XPTw", title:"Mengenal Himpunan Melalui Topeng Malangan"
      },
      {
        id:"sRuFfF_J96Q", title:"Jenis Himpunan"
      },
      {
        id:"hcq9qFJ7lQ4", title:"Operasi Himpunan"
      },
    ],
    contohSoal : [
      {
        id: 1,
        questionText: 'Diketahui\nS= {Anggota tokoh binatang}\nA= {Lembu Gumirang,Buto Terong,Celeng Srenggini}\nNilai dari A^cc adalah…',
        questionImage: null,
        choices: [
          { id: 1, text: "A^c= {Laler Ijo,Negotimur,Bedes}", image: null },
          { id: 2, text: "A^c= {Narada,Bilung,Prasaonto}", image: null },
          { id: 3, text: "A^c= {Patih Kollo Dinemprang,Patih Gajah Mero,Patih Kraeng Raja}", image: null },
          { id: 4, text: "A^c= {Panji Asmara Bangun,Panji Pamecut,Panji Anom}", image: null },
        ],
        correctAnswerId: 1,
        pembahasan: "S= {anggota tokoh binatang} = {Lembu Gumirang,Buto Terong,Celeng Srenggini,Laler Ijo,Negotimur,Bedes}\nA= {Lembu Gumirang,Buto Terong,Celeng Srenggini}\nA^c= {Laler Ijo,Negotimur,Bedes} Jawaban (A)"
      },
      {
        id: 2,
        questionText: 'Jika A = {x | -5 ≤ x ≤ 15,x є bilangan bulat}, maka n(A) adalah …',
        questionImage: null,
        choices: [
          { id: 1, text: "19", image: null },
          { id: 2, text: "20", image: null },
          { id: 3, text: "21", image: null },
          { id: 4, text: "22", image: null },
        ],
        correctAnswerId: 3,
        pembahasan: "A = {x | -5 ≤ x ≤ 15, x є bilangan bulat}\nA = {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}\nn(A) = 21 Jawaban (C)"
      },
    ],
    
    latihanSoal: [
      {
        id: 1,
        questionText: 'Jika M={faktor dari 15} dan N={bilangan cacah kurang dari 7}, tentukan manakah pernyataan tersebut yang benar?',
        questionImage: null,
        image: null,
        choices: [
          { id: 1, text: "(M ∩ N) = {0,2,4,6,15}", image: null },
          { id: 2, text: "(M ∪ N) = {0,1,2,3,4,5,6,15}", image: null },
          { id: 3, text: "(M ∩ N) = {1,3,5,6}", image: null },
          { id: 4, text: "(M ∪ N) = {0,1,1,2,2,3,3,4,4,5,5,6,6,15}", image: null },
        ],
        correctAnswerId: 2,
        pembahasan: "M={1, 3, 5, 15}\nN={0, 1, 2, 3, 4, 5, 6}\nPilihan A : (M ∩ N)={0,2,4,6,15} pernyataan tersebut salah karena seharusnya (M∩N)={1,3,5}\nPilihan B : (M ∪ N)={0,1,2,3,4,5,6,15}, pertanyaan tersebut benar\nPilihan C : (M∩N)={1,3,5,6}, pernyataan tersebut salah karena seharusnya (M∩N)={1,3,5}\nPilihan D = (M∪N)={0,1,1,2,2,3,3,4,4,5,5,6,6,15}, pernyataan tersebut salah karena untuk penulisan dari kedua himpunan yang sama hanya ditulis salah satu"
      },
      {
        id: 2,
        questionText: 'Diketahui himpunan semesta S adalah himpunan bilangan cacah yang kurang dari 20. A adalah himpunan bilangan prima antara 3 dan 20. B adalah himpunan bilangan asli antara 2 dan 15. Komplemen dari A ∪ B adalah …',
        questionImage: null,
        image: null,
        choices: [
          { id: 1, text: "{0,1,2,5,7,11,13,15,16,18}", image: null },
          { id: 2, text: "{3,4,6,8,9,10,12,14,17,19}", image: null },
          { id: 3, text: "{3,4,6,8,9,10,12,14,15,17,19}", image: null },
          { id: 4, text: "{0,1,2,15,16,18}", image: null },
        ],
        correctAnswerId: 4,
        pembahasan: "S={0,1,2,3,4,5,…,18,19}\nA={5,7,11,13,17,19}\nB={3,4,5,…,13,14}\nDengan demikian, gabungan dari A dan B dinyatakan oleh\nA ∪ B={3,4,5,…,13,14,17,19}\nIni berarti, komplemen dari A ∪ B adalah\n(A ∪ B)^C = {0,1,2,15,16,18}"
      },
      {
        id: 3,
        questionText: 'Perhatikan himpunan-himpunan berikut\nS={anggota tokoh abdi}\nA={Narada,Bilung,Prasonto}\nB={Narada,Bagawan Walang Dewa,Demang Mundu}\nPernyataan tersebut yang salah adalah…',
        questionImage: null,
        image: null,
        choices: [
          { id: 1, text: "(A ∪ B) = {Kerot, Bagawan Walang Dewa, Begawn Gajah Abuh, Narada, Bilung, Demang Mones, Demang Mundu, Demang Tritoyudo, Bambang Painem, Emban Ono Ini, Jarodeh, Prasonto}", image: null },
          { id: 2, text: "(A ∩ B)^C = {Kerot, Bagawan Walang Dewa, Begawn Gajah Abuh, Bilung, Demang Mones, Demang Mundu, Demang Tritoyudo, Bambang Painem, Emban Ono Ini, Jarodeh, Prasonto}", image: null },
          { id: 3, text: "(A ∪ B) = {Narada,Bilung,Prasonto,Bagawan Walang Dewa,Demang Mundu}", image: null },
          { id: 4, text: "(A ∩ B) = {Narada}", image: null },
        ],
        correctAnswerId: 1,
        pembahasan: "(A ∪ B) = {Kerot, Bagawan Walang Dewa, Begawn Gajah Abuh, Narada, Bilung, Demang Mones, Demang Mundu, Demang Tritoyudo, Bambang Painem, Emban Ono Ini, Jarodeh, Prasonto} pernyataan tersebut salah karena (A ∪ B)={Narada,Bilung,Prasonto,Bagawan Walang Dewa,Demang Mundu}"
      },
    ],
    asesmen: [
      {
          id: 1,
          questionText: "Dari satu kelas terdata 52 dari jumlah siswa yang menyukai matematika sekaligus fisika akan mengikuti olimpiade fisika. Empat kali dari jumlah siswa yang menyukai keduanya akan mengikuti olimpiade matematika. Jika jumlah seluruh siswa ada 44 orang dan siswa yang mengikuti olimpiade secara otomatis menyukai pelajaran yang dilombakan, maka banyak siswa yang hanya mengikuti olimpiade matematika (hanya menyukai matematika) adalah ⋯ orang.",
          questionImage: null,
          choices: [
              { id: 1, text: "8", image: null },
              { id: 2, text: "20", image: null },
              { id: 3, text: "24", image: null },
              { id: 4, text: "32", image: null },
          ],
          correctAnswerId: 3,
      },
      {
          id: 2,
          questionText: "Data kegiatan sarapan pagi 38 orang peserta didik adalah sebagai berikut. Ada 6 orang sarapan dengan roti dan nasi goreng. Ada 5 orang tidak sarapan pagi. Jika banyak peserta didik yang sarapan nasi goreng dua kali banyak peserta didik yang sarapan roti, maka banyak peserta didik yang sarapan nasi goreng saja adalah ⋯⋅",
          questionImage: null,
          choices: [
              { id: 1, text: "35", image: null },
              { id: 2, text: "30", image: null },
              { id: 3, text: "25", image: null },
              { id: 4, text: "30", image: null },
          ],
          correctAnswerId: 4,
      },
      {
          id: 3,
          questionText: "Jika diketahui S:{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A:{0, 2, 3, 5, 7, 9} dan B={1, 3, 4, 5, 7, 8, 10}. Maka pernyataan yang benar adalah …",
          questionImage: null,
          choices: [
              { id: 1, text: "(A ∪ B^C) = A^C ∪ B^C", image: null },
              { id: 2, text: "(A ∩ B)^C = A^C ∩ B^C", image: null },
              { id: 3, text: "(A ∩ B)^C =A ∪ B^C", image: null },
              { id: 4, text: "(A ∩ B) ^ C = A^C ∪ B^C", image: null },
          ],
          correctAnswerId: 4,
      },
      {
          id: 4,
          questionText: "Diketahui himpunan A ⊂ B dengan A dan B adalah tokoh sabrang pada Topeng Malangan dan n(A)=11. Dari pernyataan-pernyataan berikut, pernyataan yang salah adalah…",
          questionImage: null,
          choices: [
              { id: 1, text: "A ⊂ B, A ∩ B = A", image: null },
              { id: 2, text: "n(A ∩ B) = n(A)", image: null },
              { id: 3, text: "n(A ∩ B) = 26", image: null },
              { id: 4, text: "n(B) = 20", image: null },
          ],
          correctAnswerId: 4,
      },
      {
          id: 5,
          questionText: "Dalam sebuah kelas terdapat 17 siswa menyukai karakter tokoh binatang pada Topeng Malangan, 15 siswa menyukai tokoh abdi pada Topeng Malangan, 8 siswa menyukai keduanya. Banyak siswa dalam kelas adalah …",
          questionImage: null,
          choices: [
              { id: 1, text: "24", image: null },
              { id: 2, text: "36", image: null },
              { id: 3, text: "32", image: null },
              { id: 4, text: "28", image: null },
          ],
          correctAnswerId: 1,
      },
      {
        id: 6,
        questionText: "Diketahui himpunan A={2,3,5,7,9,11}.\nBanyak himpunan bagian dari himpunan A adalah…",
        questionImage: null,
        choices: [
          { id: 1, text: "4", image: null },
          { id: 2, text: "16", image: null },
          { id: 3, text: "24", image: null },
          { id: 4, text: "64", image: null }
        ],
        correctAnswerId: 4
      },
      {
        id: 7,
        questionText: "Diketahui himpunan semesta S adalah himpunan bilangan cacah yang kurang dari 20. A adalah himpunan bilangan prima antara 3 dan 20. B adalah himpunan bilangan asli antara 2 dan 15. Komplemen dari A∪B adalah …",
        questionImage: null,
        choices: [
          { id: 1, text: "{0,1,2,5,7,11,13,15,16,18}", image: null },
          { id: 2, text: "{3,4,6,8,9,10,12,14,17,19}", image: null },
          { id: 3, text: "{3,4,6,8,9,10,12,14,15,17,19}", image: null },
          { id: 4, text: "{0,1,2,15,16,18}", image: null }
        ],
        correctAnswerId: 4
      },
      {
        id: 8,
        questionText: "Diketahui P=[x | 3<x<13,x bilangan ganjil} dan Q={x⃓ x<11,x bilangan prima}. Diagram Venn yang sesuai untuk kedua himpunan tersebut adalah…",
        questionImage: null,
        choices: [
          { id: 1, text: null, image: require('../assets/image/Games/a_11_1.png') },
          { id: 2, text: null, image: require('../assets/image/Games/a_11_2.png') },
          { id: 3, text: null, image: require('../assets/image/Games/a_11_3.png') },
          { id: 4, text: null, image: require('../assets/image/Games/a_11_4.png') }
        ],
        correctAnswerId: 1
      },
      {
        id: 9,
        questionText: "Misalkan A={bilangan asli} dan B={x⃓ n=x}. Di antara nilai-nilai n berikut yang tidak memenuhi hubungan BA adalah …",
        questionImage: null,
        choices: [
          { id: 1, text: "1", image: null },
          { id: 2, text: "3", image: null },
          { id: 3, text: "9", image: null },
          { id: 4, text: "16", image: null },
        ],
        correctAnswerId: 2,
      },
      {
        id: 10,
        questionText: "Dari 50 orang terdapat 35 orang berlangganan Koran, 26 orang berlangganan majalah,\ndan 7 orang tidak berlangganan keduanya.\nBanyak orang yang hanya berlangganan tepat satu dari keduanya adalah…",
        questionImage: null,
        choices: [
          { id: 1, text: "8 orang", image: null },
          { id: 2, text: "17 orang", image: null },
          { id: 3, text: "18 orang", image: null },
          { id: 4, text: "25 orang", image: null },
        ],
        correctAnswerId: 4,
      },
      // {
      //   id: 10,
      //   questionText: "Perhatikan diagram Venn berikut\nHasil dari (P-Q) ∩ R^c adalah…",
      //   questionImage: require('../assets/image/Games/q_15.png'),
      //   choices: [
      //     { id: 1, text: "{a,b}", image: null },
      //     { id: 2, text: "{a,b,c}", image: null },
      //     { id: 3, text: "{l,m,n}", image: null },
      //     { id: 4, text: "{a,b,k,i}", image: null },
      //   ],
      //   correctAnswerId: 1,
      // },
    ],
  },
  sedang: {
    video: [
      {
        id:"gPO-Q-cSgCc", title:"Mengenal Himpunan Melalui Topeng Malangan"
      },
      {
        id:"oWhEuHhr2Bc", title:"Jenis Himpunan"
      },
      {
        id:"sCMoPTVYAQ0", title:"Operasi Himpunan"
      },
    ],
    contohSoal: [
      {
        id: 1,
        questionText: 'Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Tentukan jumlah banyak siswa yang tidak hobi salah satu atau keduanya dari menyanyi dan melukis.',
        questionImage: null,
        choices: [
          { id: 1, text: "7", image: null },
          { id: 2, text: "10", image: null },
          { id: 3, text: "9", image: null },
          { id: 4, text: "6", image: null },
        ],
        correctAnswerId: 4,
        pembahasan: "Banyaknya siswa yang tidak menyukai keduanya adalah banyaknya siswa seluruhnya dikurangi banyaknya gabungan siswa kedua himpunan. n(S) - n(P∪Q) = 36 – [n(P) + n(Q) – n(P ∩ Q)]\n= 36 - [ 20 + 18 - 8 ]\n= 36 - ( 38 - 8 )\n= 36 - 30\n= 6\n",
        image: null
      },
      {
        id: 2,
        questionText: 'Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Tentukan jumlah banyak siswa yang hobi menyanyi saja.',
        questionImage: null,
        choices: [
          { id: 1, text: "10", image: null },
          { id: 2, text: "11", image: null },
          { id: 3, text: "12", image: null },
          { id: 4, text: "13", image: null },
        ],
        correctAnswerId: 3,
        pembahasan: "Banyaknya siswa yang hobi menyanyi saja adalah banyaknya siswa yang hobi menyanyi dikurangi banyaknya siswa yang suka keduanya.\n𝑛(𝑃) – 𝑛(𝑃 ∩ 𝑄) = 20 − 8 = 12",
        image: null
      },
      {
        id: 3,
        questionText: 'Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Tentukan jumlah banyak siswa yang hobi melukis saja.',
        questionImage: null,
        choices: [
          { id: 1, text: "10", image: null },
          { id: 2, text: "11", image: null },
          { id: 3, text: "12", image: null },
          { id: 4, text: "13", image: null },
        ],
        correctAnswerId: 1,
        pembahasan: "Banyaknya siswa yang hanya hobi melukis adalah banyaknya siswa yang hobi melukis dikurangi banyaknya siswa yang suka keduanya \nn(Q) – n(P ∩ Q) = 18 - 8 = 10",
        image: null
      },
      {
        id: 4,
        questionText: 'Dalam sebuah pertunjukan Topeng Malangan, terdapat 40 pemain yang memerankan berbagai karakter. Diketahui bahwa 25 pemain memerankan tokoh Panji (A), 15 pemain memerankan tokoh Kedok Klana (B), dan 10 pemain memerankan kedua tokoh tersebut.\nBerapa banyak pemain yang hanya memerankan salah satu tokoh (Panji atau Kedok Klana), tetapi tidak kedua-duanya?',
        questionImage: null,
        choices: [
          { id: 1, text: "15", image: null },
          { id: 2, text: "5", image: null },
          { id: 3, text: "10", image: null },
          { id: 4, text: "20", image: null },
        ],
        correctAnswerId: 4,
        pembahasan: "Pemain yang hanya memerankan tokoh Panji (A-B)\n|A-B|=|A|-|A∩B|=25-10=5\nPemain yang hanya memerankan tokoh Panji (B-A)\n|B-A|=|B|-|A∩B|=15-10=5\nJumlah Pemain yang hanya memerankan salah satu tokoh, tetapi tidak keduanya adalah\n15+5=20",
        image: null
      },
    ],
    latihanSoal: [
      {
        id: 1,
        questionText: 'Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak ayam?',
        questionImage: null,
        choices: [
          { id: 1, text: "15", image: null },
          { id: 2, text: "45", image: null },
          { id: 3, text: "20", image: null },
          { id: 4, text: "35", image: null },
        ],
        correctAnswerId: 3,        
        pembahasan: "Banyak rumah tangga yang hanya memelihara ternak ayam. Banyak rumah tangga yang memelihara ayam n(B) + n(D) + n(E) + n(G)\n185 = n(B) + 100 + 45 + 20 \nn(B) = 185 – 165 = 20 \nMaka banyak rumah tangga yang hanya memelihara ternak ayam adalah 20 rumah tangga. Diagram Venn banyak rumah tangga yang hanya memelihara ternak ayam sebagai berikut.",
        image: require('../assets/image/LatSoal/sedang_1.png')
      },
      {
        id: 2,
        questionText: 'Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak kambing?',
        questionImage: null,
        choices: [
          { id: 1, text: "5", image: null },
          { id: 2, text: "40", image: null },
          { id: 3, text: "25", image: null },
          { id: 4, text: "55", image: null },
        ],
        correctAnswerId: 1,
        pembahasan: "Banyak rumah tangga yang hanya memelihara ternak kambing. Banyak rumah tangga yang memelihara kambing = n(A) + n(D) + n(F) + n(G)\n200 = n(A) + 100 + 75 + 20 \nn(A) = 200 – 195 = 5",
        image: require('../assets/image/LatSoal/sedang_2.png')
      },
      {
        id: 3,
        questionText: 'Setelah pertunjukan Topeng Malangan, terdapat 20 karakter dengan tiga kelompok: Panji (P), Sabrang (S), dan Abdi (A) yang sedang berkumpul di ruang istirahat. \n• 6 karakter termasuk dalam kelompok Panji.\n• 5 karakter termasuk dalam kelompok Sabrang.\n• 8 karakter termasuk dalam kelompok Abdi.\n• 2 karakter termasuk dalam kelompok Panji dan Abdi.\n• 1 karakter termasuk dalam kelompok Sabrang dan Panji.\n• 3 karakter termasuk dalam kelompok Sabrang dan Abdi.\n• 1 karakter termasuk dalam ketiga kelompok Panji, Sabrang, dan Abdi.\nTentukan banyaknya karakter yang hanya termasuk dalam kelompok Abdi dan bukan kelompok Panji atau Sabrang.',
        questionImage: null,
        choices: [
          { id: 1, text: "1", image: null },
          { id: 2, text: "2", image: null },
          { id: 3, text: "5", image: null },
          { id: 4, text: "6", image: null },
        ],
        correctAnswerId: 2,
        pembahasan: "Menghitung Karakter yang Hanya Termasuk dalam Abdi dan Bukan Panji atau Sabrang\nKarakter yang hanya termasuk dalam kelompok Abdi:\n8-2-3-1=2 karakter\nJadi, 2 karakter hanya termasuk dalam kelompok Abdi dan bukan kelompok Panji atau Sabrang.",
        image: null
      },
      {
        id: 4,
        questionText: 'Dalam suatu acara pentas seni di kota Malang, terdapat 80 orang yang mendaftar dalam berbagai bidang seni. Dari jumlah tersebut, 35 orang mendaftar sebagai penyanyi, 40 orang mendaftar sebagai penari, 15 orang mendaftar sebagai pelukis, 5 orang mendaftar sebagai penyanyi dan penari, 3 orang mendaftar sebagai penyanyi dan pelukis, dan 2 orang mendaftar sebagai penari dan pelukis. Berapa banyak orang yang mendaftar hanya sebagai penyanyi?',
        questionImage: null,
        choices: [
          { id: 1, text: "27", image: null },
          { id: 2, text: "30", image: null },
          { id: 3, text: "20", image: null },
          { id: 4, text: "25", image: null },
        ],
        correctAnswerId: 1,
        pembahasan: "Jumlah orang yang mendaftar sebagai penyanyi\nn(P) + n(S) + n(T) + n(V)\n= 35 – (5+3)\n= 35 - 8\n= 27\nMaka, 27 orang mendaftar hanya sebagai penyanyi.",
        image: null
      },
    ],
    asesmen: [
      {
          id: 1,
          questionText: "Jika A adalah himpunan yang menyukai Panji Laras, B adalah himpunan siswa yang menyukai Panji Asmara Bangun, dan C adalah himpunan siswa yang menyukai keduanya, maka anggota dari himpunan A – B adalah ….",
          questionImage: require('../assets/image/Asesmen/sedang_1.png'),
          choices: [
              { id: 1, text: "{daffa}", image: null },
              { id: 2, text: "{lina, fiqri, nadiya, daffa}", image: null },
              { id: 3, text: "{iis, ajeng, derry, faiza}", image: null },
              { id: 4, text: "{lina, iis, ajeng, fiqri, derry, nadiya, faiza, daffa}", image: null },
          ],
          correctAnswerId: 1,
      },
      {
          id: 2,
          questionText: "Berdasarkan gambar diagram venn diatas. Tentukan anggota himpunan dari Q ∪ R?",
          questionImage: require('../assets/image/Asesmen/sedang_2.png'),
          choices: [
              { id: 1, text: "{–8, –7, –6, –5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5}", image: null },
              { id: 2, text: "{–5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5, 6, 7, 8}", image: null },
              { id: 3, text: "{–8, –7, –6, –5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5, 6, 7, 8}", image: null },
              { id: 4, text: "{–10, –9, –8, –7, –6, –5, –4, –3, –2, –1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", image: null },
          ],
          correctAnswerId: 3,
      },
      {
          id: 3,
          questionText: "Sebuah Lembaga penelitian, meneliti makanan ringan yang dikonsumsi anak-anak. dari hasil penelitian, tercatat 18 merek yang mengandung zat pewarna sintetis, 24 merek mengandung penyedap rasa buatan, dan 10 merek mengandung kedua zat tersebut. jika ada 9 merek tidak mengandung zat pewarna sintetik maupun penyedap rasa buatan, banyaknya merek makanan ringan yang diteliti oleh Lembaga penelitian tersebut adalah",
          questionImage: null,
          choices: [
              { id: 1, text: "35", image: null },
              { id: 2, text: "50", image: null },
              { id: 3, text: "32", image: null },
              { id: 4, text: "41", image: null },
          ],
          correctAnswerId: 4,
      },
      {
          id: 4,
          questionText: "Di antara 80 orang siswa di suatu SMP didapatkan data sebagai berikut: 45 siswa menyenangi  lagu genre pop, 40 siswa menyenangi genre lagu jazz, 30 siswa menyenangi genre lagu rock, 18 siswa menyenangi genre lagu pop dan jazz, 15 siswa menyenangi genre lagu pop dan rock, 12 siswa menyenangi genre lagu rock dan jazz, 4 orang menyenangi ketiga genre lagu tersebut (pop, jazz, rock). Berdasarkan keterangan tersebut. Hitunglah banyak siswa yang menyenangi genre lagu jazz tetapi tidak menyenangi genre lagu pop adalah",
          questionImage: null,
          choices: [
              { id: 1, text: "10", image: null },
              { id: 2, text: "5", image: null },
              { id: 3, text: "8", image: null },
              { id: 4, text: "6", image: null },
          ],
          correctAnswerId: 3,
      },
      {
          id: 5,
          questionText: "Pada pertunjukan Topeng Malangan, terdapat 15 karakter yang dibagi dalam dua kelompok: Binatang (B) dan Sabrang (S) yang melakukan perkenalan dan menceritakan tetang Topeng Malangan. Hal tersebut, menyebabkan banyak penonton yang menyukai pada masing – masing karakter tokoh, diantaranya:\n•	8 penonton yang menyukai karakter Binatang\n•	6 penonton yang menyukai karakter Sabrang.\n•	3 penonton yang menyukai karakter keduanya (Binatang dan Sabrang).\nBerapa banyak penonton yang menyukai karakter hanya termasuk Binatang dan bukan Sabrang?",
          questionImage: null,
          choices: [
              { id: 1, text: "3", image: null },
              { id: 2, text: "5", image: null },
              { id: 3, text: "6", image: null },
              { id: 4, text: "8", image: null },
          ],
          correctAnswerId: 2,
      },
      {
        id: 6,
        questionText: "Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Berapa banyak siswa yang tidak hobi salah satu atau keduanya dari menyanyi dan melukis?",
        questionImage: null,
        choices: [
          { id: 1, text: "Tidak ada", image: null },
          { id: 2, text: "5 siswa", image: null },
          { id: 3, text: "6 siswa", image: null },
          { id: 4, text: "7 siswa", image: null },
        ],
        correctAnswerId: 3,
      },
      {
        id: 7,
        questionText: "Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Berapa banyak siswa yang hobi menyanyi saja?",
        questionImage: null,
        choices: [
          { id: 1, text: "Tidak ada", image: null },
          { id: 2, text: "12 siswa", image: null },
          { id: 3, text: "15 siswa", image: null },
          { id: 4, text: "18 siswa", image: null },
        ],
        correctAnswerId: 2,
      },
      {
        id: 8,
        questionText: "Di antara sekelompok siswa yang terdiri atas 36 orang ternyata 20 orang hobi menyanyi, 18 orang hobi melukis, dan 8 orang suka keduanya. Berapa banyak siswa yang hobi melukis saja?",
        questionImage: null,
        choices: [
          { id: 1, text: "5 siswa", image: null },
          { id: 2, text: "10 siswa", image: null },
          { id: 3, text: "12 siswa", image: null },
          { id: 4, text: "15 siswa", image: null },
        ],
        correctAnswerId: 2,
      },
      {
          id: 9,
          questionText: "Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak ayam?",
          questionImage: null,
            choices: [
            { id: 1, text: "15", image: null },
            { id: 2, text: "45", image: null },
            { id: 3, text: "20", image: null },
            { id: 4, text: "45", image: null },
          ],
          correctAnswerId: 3,
      },
      {
          id: 10,
          questionText: "Di Desa Bontoa yang terletak di Pulau Sulawesi terdapat 500 rumah tangga. Dari jumlah tersebut 185 rumah tangga memelihara ternak ayam, 200 rumah tangga memelihara ternak kambing, 200 rumah tangga memelihara ternak sapi, 100 rumah tangga memelihara ternak ayam dan ternak kambing, 75 rumah tangga memelihara ternak kambing dan ternak sapi, 45 rumah tangga memelihara ternak ayam dan ternak sapi. Jika 20 rumah tangga memelihara ketiga ternak itu, Berapa rumah tangga yang hanya memelihara ternak kambing?",
          questionImage: null,
            choices: [
            { id: 1, text: "5", image: null },
            { id: 2, text: "25", image: null },
            { id: 3, text: "40", image: null },
            { id: 4, text: "55", image: null },
          ],
          correctAnswerId: 1,
      },
    ],
  },
  tinggi: {
    video: [
      {
        id:"8L1PtJjvIHk", title:"Mengenal Himpunan Melalui Topeng Malangan"
      },
      {
        id:"RCHSfpScVUM", title:"Jenis Himpunan"
      },
      {
        id:"mfkJ6B4hfVo", title:"Operasi Himpunan"
      },
    ],
    contohSoal: [
      {
        id: 1,
        questionText: 'Wali kelas VIII A sedang mendata makanan kesukaan dari siswanya. Sebanyak 18 anak menyukai soto, 15 siswa menyukai bakso, 7 siswa menyukai keduanya, dan 5 siswa tidak menyukai keduanya. Berapakah banyak siswa kelas VII A yang didata oleh wali kelas?',
        questionImage: null,
        choices: [
          { id: 1, text: "45", image: null },
          { id: 2, text: "31", image: null },
          { id: 3, text: "35", image: null },
          { id: 4, text: "33", image: null },
        ],
        correctAnswerId: 2,        
        pembahasan: "Diketahui:\nn(A)=18\nn(B)=15\nn(A∩B)=7\nn(A∪B)^C=5\nDitanyakan: Banyak siswa kelas VII A ⇔n(A∪B)\nJawab:\nn(A∪B)-n(A∪B)^C=n(A)+n(B)-n(A∩B)\nn(A∪B)-5=18+15-7\nn(A∪B)=31",
        image: null
      },
      {
        id: 2,
        questionText: 'Diberikan himpunan A={x|x<5,x∈Tokoh Panji} dan B={ 2,3,4}. Tentukanlah semua hubungan antara himpunan A dan himpunan B dengan keterangan sebagai berikut.',
        questionImage: require('../assets/image/ContohSoal/tinggi_1.png'),
        choices: [
          { id: 1, text: "A ⊂ B ", image: null },
          { id: 2, text: "A ⊄ B", image: null },
          { id: 3, text: "(A)≠n(B)", image: null },
          { id: 4, text: "n(A)=n(B)=4", image: null },
        ],
        correctAnswerId: 1,        
        pembahasan: "	A={ 2,3,4}\nB={2,3,4}\nn(A)=3\nn(B)=3\nHimpunan B merupakan himpunan bagian dari himpunan A jika setiap anggota himpunan A juga merupakan anggota himpunan B, dilambangkan dengan A⊂B. 2,3,4∈A dan 2,3,4∈B, maka A⊂B dan B⊂A",
        image: null
      },
    ],
    latihanSoal: [
      {
        id: 1,
        questionText: 'Pada pertunjukan Topeng Malangan, terdapat tiga himpunan karakter yang dikenal dengan nama: Panji (P), Sabrang (S), dan Abdi (A). Berikut adalah cara penyajian himpunan tersebut:\nP={Panji Laras, Dewi Sekartaji, Raden Gunungsari, Panji Walangsemirang} \nS={Klono Sewadana, Bapang Jaya Sentika, Patih Kollo Dinemprang, Panji Laras} \nA={Totok Kerot, Buto Terong, Bapang Jaya Pangangun} \nPernyataan berikut yang benar mengenai jenis dan hubungan antara himpunan tersebut adalah…',
        questionImage: null,
        choices: [
          { id: 1, text: "P ⊆ S", image: null },
          { id: 2, text: "S ∩ A = ∅", image: null },
          { id: 3, text: "P ∪ A = P", image: null },
          { id: 4, text: "P ∩ S  =P", image: null },
        ],
        correctAnswerId: 2,        
        pembahasan: "	S∩A=∅\nIni berarti tidak ada elemen yang sama antara himpunan SSS dan AAA. Dari daftar elemen, jelas bahwa tidak ada elemen yang sama antara SSS dan AAA, jadi pernyataan ini benar.",
        image: null
      },
      {
        id: 2,
        questionText: 'Kelas VII B melakukan pemilihan ketua kelas untuk pertama kalinya. Ada 2 kandidat yang mengajukan diri untuk menjadi ketua kelas. Mereka adalah Andi dan Beni. Andi mendapatkan perolehan suara 2/3 dari keseluruhan siswa, Beni mendapatkan perolehan suara 2 kali banyak suara yang diperoleh Andi dan Beni. Suara yang diperoleh Andi dan Beni adalah 8 suara.\nBerapakah banyak siswa yang ada di kelas VII B?',
        questionImage: null,
        choices: [
          { id: 1, text: "18", image: null },
          { id: 2, text: "20", image: null },
          { id: 3, text: "22", image: null },
          { id: 4, text: "24", image: null },
        ],
        correctAnswerId: 4,        
        pembahasan: "n(S)=n(A)+n(B)-n(A-B)x=2/3 x+16-8\nx-2/3 x=8\n1/3 x=8\nx=24",
        image: null
      },
      {
        id: 3,
        questionText: 'Toko Roti Lumayan menjual dua jenis roti, yaitu roti panggang dan roti kukus. 15% pembeli menyukai keduanya. 57% pembeli menyukai roti kukus dan 58% pembeli menyukai roti panggang. Penjualan roti di Toko Roti Lumayan dalam tabel di bawah ini.\nBerapakah banyak pembeli yang hanya membeli roti kukus pada bulan Maret?',
        questionImage: require('../assets/image/LatSoal/tinggi_1.png'),
        choices: [
          { id: 1, text: "684 Pembeli", image: null },
          { id: 2, text: "504 Pembeli", image: null },
          { id: 3, text: "696 Pembeli", image: null },
          { id: 4, text: "516 Pembeli", image: null },
        ],
        correctAnswerId: 2,        
        pembahasan: "n(A)=684-180=504\nJadi, banyak pembeli yang hanya membeli roti kukus pada Bulan Maret ada sebanyak 504 pembeli",
        image: null
      },
    ],
    asesmen: [
      {
        id: 1,
        questionText: "	Pada pertunjukan Topeng Malangan, terdapat tiga himpunan karakter yang dikenal dengan nama: Panji (P), Sabrang (S), dan Abdi (A). Berikut adalah cara penyajian himpunan tersebut:\nP={Panji Laras, Dewi Sekartaji, Raden Gunungsari, Panji Walangsemirang}\nS={Klono Sewadana, Bapang Jaya Sentika, Patih Kollo Dinemprang, Panji Laras}\nA={Totok Kerot, Buto Terong, Bapang Jaya Pangangun}\nTentukan hasil (P∪A)∩(A-S).",
        questionImage: null,
        choices: [
            { id: 1, text: "{Panji Walangsemirang,Totok Kerot}", image: null },
            { id: 2, text: "{Panji Walangsemirang}", image: null },
            { id: 3, text: "{Dewi Sekartaji,Panji Walangsemirang}", image: null },
            { id: 4, text: "{Panji Walangsemirang,Buto Terong}", image: null },
        ],
        correctAnswerId: 2,
      },
      {
        id: 2,
        questionText: "Di suatu pusat permainan, terdapat tiga kotak misteri yang berlabelkan notasi himpunan. Kotak pertama berlabelkan A={x|x<10,x∈N}. Kotak kedua berlabelkan himpunan B adalah himpunan lima bilangan prima pertama. Kotak ketiga berlabelkan himpunan C adalah himpunan angka-angka yang merupakan faktor dari delapan.\nPertanyaan\nTentukan pernyataan yang paling tepat dari pernyataan-pernyataan berikut",
        questionImage: require('../assets/image/Asesmen/tinggi_1.jpg'),
        choices: [
            { id: 1, text: "Himpunan B merupakan himpunan bagian dari himpunan A", image: null },
            { id: 2, text: "Anggota dari A ∪ B={x|x ≤ 11, x ∈ N}", image: null },
            { id: 3, text: "Banyak anggota himpunan A dan C adalah sebanyak empat bilangan", image: null },
            { id: 4, text: "Himpunan A merupakan himpunan semesta dari dua himpunan yang lain", image: null },
        ],
        correctAnswerId: 3,
      },
      {
        id: 3,
        questionText: "Andi menyatakan bahwa himpunan C merupakan himpunan bagian dari himpunan A. Setujukah kalian dengan pernyataan Andi?",
        questionImage: null,
        choices: [
            { id: 1, text: "Setuju, karena semua anggota himpunan C ada pada himpunan A", image: null },
            { id: 2, text: "Tidak setuju, karena tidak semua anggota himpunan A ada pada himpunan C", image: null },
            { id: 3, text: "Setuju, karena semua anggota himpunan A ada pada himpunan C", image: null },
            { id: 4, text: "Tidak setuju, karena tidak semua anggota himpunan C ada pada himpunan A", image: null },
        ],
        correctAnswerId: 1,
      },
      {
        id: 4,
        questionText: "Suatu hari seorang guru Bimbingan Konseling melakukan survei terhadap mata pelajaran yang disukai oleh siswa kelas VII. 2/5 siswa menyukai pelajaran Bahasa Indonesia, 1/3 siswa menyukai pelajaran Olahraga, 24 siswa menyukai pelajaran Matematika. 8/15 siswa menyukai dua dari pelajaran Bahasa Indonesia, Olahraga, dan Matematika. Hanya 12 siswa yang menyukai ketiga pelajaran sekaligus. 4.	Berapa banyak siswa kelas VII yang ada di sekolah tersebut?",
        questionImage: null,
        choices: [
            { id: 1, text: "40", image: null },
            { id: 2, text: "45", image: null },
            { id: 3, text: "50", image: null },
            { id: 4, text: "55", image: null },
        ],
        correctAnswerId: 2,
      },
      {
        id: 5,
        questionText: "Suatu hari seorang guru Bimbingan Konseling melakukan survei terhadap mata pelajaran yang disukai oleh siswa kelas VII. 2/5 siswa menyukai pelajaran Bahasa Indonesia, 1/3 siswa menyukai pelajaran Olahraga, 24 siswa menyukai pelajaran Matematika. 8/15 siswa menyukai dua dari pelajaran Bahasa Indonesia, Olahraga, dan Matematika. Hanya 12 siswa yang menyukai ketiga pelajaran sekaligus. 	Apabila 8/15 siswa yang menyukai dua dari tiga karakter Topeng Malangan mengikuti pengaturan berikut ini\n2/3 siswa menyukai pelajaran Tokoh Panji Asmara Bangun dan Panji Lembu Amijaya\n1/4 siswa menyukai pelajaran Panji Lembu Amijaya dan Panji Laras\n1/12 siswa menyukai pelajaran Panji Asmara Bangun dan Panji Laras\nDiagram Venn yang tepat adalah",
        questionImage: null,
        choices: [
            { id: 1, text:null, image: require('../assets/image/Asesmen/tinggi_3.png') },
            { id: 2, text:null, image: require('../assets/image/Asesmen/tinggi_4.png') },
            { id: 3, text:null, image: require('../assets/image/Asesmen/tinggi_5.png') },
            { id: 4, text:null, image: require('../assets/image/Asesmen/tinggi_6.png') },
        ],
        correctAnswerId: 4,
      },
      {
        id: 6,
        questionText: "Diberikan himpunan A={x|x < 5,x ∈ N} dan B={1,2,3,4}. Tentukanlah pernyataan yang paling tepat dari beberapa pernyataan berikut!",
        questionImage: null,
        choices: [
          { id: 1, text: "n(P(A)) = 8", image: null },
          { id: 2, text: "A-B = B", image: null },
          { id: 3, text: "A = B", image: null },
          { id: 4, text: "{5} ⊂ A", image: null }
        ],
        correctAnswerId: 3
      },
      {
        id: 7,
        questionText: "Diberikan beberapa himpunan sebagai berikut\nA={x|x ∈ N}\nB={1,2,3,4,6,12}\nC={2,3,5,7,11,13,17}\nTentukan pernyataan yang paling tepat dari beberapa pernyataan berikut!",
        questionImage: null,
        choices: [
          { id: 1, text: "Himpunan A merupakan himpunan semesta", image: null },
          { id: 2, text: "Himpunan B merupakan himpunan bagian dari himpunan C", image: null },
          { id: 3, text: "B^C = A", image: null },
          { id: 4, text: "B-C={1,2,3,4,6,12}", image: null }
        ],
        correctAnswerId: 1
      },
      {
        id: 8,
        questionText: "Kelas VII B melakukan pemilihan ketua kelas untuk pertama kalinya. Ada 2 kandidat yang mengajukan diri untuk menjadi ketua kelas. Mereka adalah Andi dan Beni. Andi mendapatkan perolehan suara 2/3 dari keseluruhan siswa, Beni mendapatkan perolehan suara 2 kali banyak suara yang diperoleh Andi dan Beni. Suara yang diperoleh Andi dan Beni adalah 8 suara. Berapakah banyak siswa yang ada di kelas VII B?",
        questionImage: null,
        choices: [
          { id: 1, text: "18 siswa", image: null },
          { id: 2, text: "20 siswa", image: null },
          { id: 3, text: "22 siswa", image: null },
          { id: 4, text: "24 siswa", image: null }
        ],
        correctAnswerId: 4
      },
      {
        id: 9,
        questionText: "Kelas VII B melakukan pemilihan ketua kelas untuk pertama kalinya. Ada 2 kandidat yang mengajukan diri untuk menjadi ketua kelas. Mereka adalah Andi dan Beni. Andi mendapatkan perolehan suara 2/3 dari keseluruhan siswa, Beni mendapatkan perolehan suara 2 kali banyak suara yang diperoleh Andi dan Beni. Suara yang diperoleh Andi dan Beni adalah 8 suara. Siapakah yang terpilih menjadi ketua kelas VII B?",
        questionImage: null,
        choices: [
          { id: 1, text: "Andi, karena perolehan suara Andi lebih unggul dari perolehan suara Beni", image: null },
          { id: 2, text: "Beni, karena perolehan suara Beni lebih unggul dari perolehan suara Andi", image: null },
          { id: 3, text: "Tidak ada, karena perolehan suara keduanya sama dan akan dilakukan pemilihan ulang", image: null },
          { id: 4, text: "Keduanya, karena perolehan suara keduanya sama", image: null }
        ],
        correctAnswerId: 3
      },
      {
        id: 10,
        questionText: "Toko Roti Lumayan menjual dua jenis roti, yaitu roti panggang dan roti kukus. 15% pembeli menyukai keduanya. 57% pembeli menyukai roti kukus dan 58% pembeli menyukai roti panggang. Penjualan roti di Toko Roti Lumayan dalam tabel di bawah ini.\nBerapakah banyak pembeli yang hanya membeli roti kukus pada bulan Maret?",
        questionImage: require('../assets/image/Games/q_65.png'),
        choices: [
          { id: 1, text: "684", image: null },
          { id: 2, text: "504", image: null },
          { id: 3, text: "696", image: null },
          { id: 4, text: "516", image: null }
        ],
        correctAnswerId: 4
      },
    ],
  },
};
const pengayaan = [
  {
    id: 1,
    title: "Pemilihan Ketua Kelas",
    explain: "Kelas VII B melakukan pemilihan ketua kelas untuk pertama kalinya. Ada 2 kandidat yang mengajukan diri untuk menjadi ketua kelas. Mereka adalah Andi dan Beni. Andi mendapatkan perolehan suara 2/3 dari keseluruhan siswa, Beni mendapatkan perolehan suara 2 kali banyak suara yang diperoleh Andi dan Beni. Suara yang diperoleh Andi dan Beni adalah 8 suara.",
    questionText: "Siapakah yang terpilih menjadi ketua kelas VII B?",
    choices: [
      { id: 1, text: "Andi, karena perolehan suara Andi lebih unggul dari perolehan suara Beni" },
      { id: 2, text: "Beni, karena perolehan suara Beni lebih unggul dari perolehan suara Andi" },
      { id: 3, text: "Tidak ada, karena perolehan suara keduanya sama dan akan dilakukan pemilihan ulang" },
      { id: 4, text: "Keduanya, karena perolehan suara keduanya sama" }
    ],
    correctAnswerId: 3
  },
  {
    id: 2,
    title: "Genre Film Favorit",
    explain: "Pada pembelajaran Bahasa Indonesia, dilakukan survei tentang genre film kesukaan para siswa yang ada di kelas VII C. Ada dua genre film yang ternyata disukai oleh siswa kelas VII C, yaitu aksi dan horor. 7/2 siswa yang menyukai keduanya ternyata menyukai genre film aksi. 6 kali siswa yang menyukai keduanya ternyata menyukai genre film horor.",
    questionText: "Jika ada 34 siswa di kelas VII C. Tentukan pernyataan yang paling tepat dari beberapa pernyataan di bawah ini",
    choices: [
      { id: 1, text: "Banyak siswa yang menyukai genre aksi ada sebanyak 14 siswa" },
      { id: 2, text: "Banyak siswa yang menyukai genre horor ada sebanyak 24 siswa" },
      { id: 3, text: "Banyak siswa yang menyukai keduanya ada sebanyak 34 siswa" },
      { id: 4, text: "Banyak siswa yang menyukai genre horor ada sebanyak 20 siswa" }
    ],
    correctAnswerId: 4
  },
  {
    id: 3,
    title: "Ketertarikan pada Topeng Malangan",
    explain: "Siswa kelas VII D ada sebanyak 40 siswa. Wali kelas VII D melakukan survei terhadap ketertarikan pada Topeng Malangan bagi siswa. Sebanyak 8 siswa menyukai karakter pada tokoh panji dan abdi. Sebanyak 4 siswa tidak memiliki ketertarikan pada Topeng Malangan. Jika banyak siswa yang menyukai karakter tokoh panji 3 kali lebih banyak dari siswa yang menyukai tokoh abdi.",
    questionText: "Berapakah banyak siswa yang hanya menyukai karakter tekoh panji?",
    choices: [
      { id: 1, text: "11 siswa" },
      { id: 2, text: "33 siswa" },
      { id: 3, text: "25 siswa" },
      { id: 4, text: "3 siswa" }
    ],
    correctAnswerId: 3
  },
  {
    id: 4,
    title: "Lamaran Pekerjaan",
    explain: "Untuk diterima menjadi anggota dalam pertunjukan Topeng Malangan tahunan Kota Malang, pelamar harus mengikuti tes wawasan dan tes keahlian. Terdapat 75 pelamar yang mendaftar di pertunjukan ini. 2/3 pelamar mengikuti tes wawasan dan 4/5 pelamar mengikuti tes keahlian.",
    questionText: "Berapakah banyak pelamar yang diterima menjadi anggota dalam pertunjukan Topeng Malangan tahunan Kota Malang?",
    choices: [
      { id: 1, text: "35 pelamar" },
      { id: 2, text: "50 pelamar" },
      { id: 3, text: "60 pelamar" },
      { id: 4, text: "75 pelamar" }
    ],
    correctAnswerId: 1
  },
  {
    id: 5,
    title: "Lamaran Pekerjaan",
    explain: "Untuk diterima menjadi anggota dalam pertunjukan Topeng Malangan tahunan Kota Malang, pelamar harus mengikuti tes wawasan dan tes keahlian. Terdapat 75 pelamar yang mendaftar di pertunjukan ini. 2/3 pelamar mengikuti tes wawasan dan 4/5 pelamar mengikuti tes keahlian.",
    questionText: "Tentukan pernyataan yang paling tepat dari beberapa pernyataan di bawah ini, apabila terdapat 5 pelamar yang sudah diterima mengundurkan diri?",
    choices: [
      { id: 1, text: "Presentase pelamar yang diterima bekerja di Sanggar Topeng Malangan kurang dari 40%" },
      { id: 2, text: "Selisih pelamar yang mengikuti tes wawasan dan tes keahlian kurang lebih 15%" },
      { id: 3, text: "Pelamar yang mengikuti tes wawasan lebih banyak daripada pelamar yang mengikuti tes keahlian." },
      { id: 4, text: "Pelamar yang mengikuti tes keahlian lebih banyak daripada pelamar yang mengikuti tes wawasan." }
    ],
    correctAnswerId: 4
  },
  {
    id: 6,
    title:'Genre Film',
    explain:'Pada pembelajaran Bahasa Indonesia, dilakukan survei tentang genre film kesukaan para siswa yang ada di kelas VII C. Ada dua genre film yang ternyata disukai oleh siswa kelas VII C, yaitu aksi dan horor. 7/2 siswa yang menyukai keduanya ternyata menyukai genre film aksi. 6 kali siswa yang menyukai keduanya ternyata menyukai genre film horor. Jika ada 34 siswa di kelas VII C.',
    questionText: "Tentukan pernyataan yang paling tepat dari beberapa pernyataan di bawah ini",
    questionImage: null,
    choices: [
      { "id": 1, "text": "Banyak siswa yang menyukai genre aksi ada sebanyak 14 siswa", image: null },
      { "id": 2, "text": "Banyak siswa yang menyukai genre horor ada sebanyak 24 siswa", image: null },
      { "id": 3, "text": "Banyak siswa yang menyukai keduanya ada sebanyak 34 siswa", image: null },
      { "id": 4, "text": "Banyak siswa yang menyukai genre horor ada sebanyak 20 siswa", image: null }
    ],
    correctAnswerId: 4
  },
  {
    id: 7,
    title:'Survey Sarapan Pagi',
    explain:'Siswa kelas VII D ada sebanyak 40 siswa. Wali kelas VII D melakukan survei terhadap sarapan pagi yang dilakukan siswa. Sebanyak 8 siswa sarapan dengan nasi dan roti. Sebanyak 4 siswa tidak sarapan pagi. Jika banyak siswa yang sarapan dengan nasi 3 kali lebih banyak dari siswa yang sarapan dengan roti.',
    questionText: "Berapakah banyak siswa yang hanya sarapan dengan nasi?",
    questionImage: null,
    choices: [
      { id: 1, text: "11 siswa", image: null },
      { id: 2, text: "33 siswa", image: null },
      { id: 3, text: "25 siswa", image: null },
      { id: 4, text: "3 siswa", image: null }
    ],
    correctAnswerId: 3
  },
  {
    id: 8,
    title:'Lamaran Pekerjaan',
    explain:'Untuk diterima di PT Maju Mundur Sejahtera, pelamar harus mengikuti tes tertulis dan tes wawancara. Terdapat 75 pelamar yang mendaftar bekerja di PT Maju Mundur Sejahtera. 2/3 pelamar mengikuti tes tertulis dan 4/5 pelamar mengikuti tes wawancara.',
    questionText: "Berapakah banyak pelamar yang diterima bekerja di PT Maju Mundur Sejahtera?",
    questionImage: null,
    choices: [
      { id: 1, text: "35 pelamar", image: null },
      { id: 2, text: "50 pelamar", image: null },
      { id: 3, text: "60 pelamar", image: null },
      { id: 4, text: "75 pelamar", image: null }
    ],
    correctAnswerId: 1
  },
  {
    id: 9,
    title:'Pemilihan Presiden',
    explain:'Pemilu 2019. Dalam pemilihan umum tahun 2019, terdapat dua calon presiden yang mencalonkan diri untuk bersaing agar terpilih menjadi presiden 2019-2024. Mereka adalah Bapak Jokowi dan Bapak Prabowo. Di Desa Gurah dengan total pemilih sebanyak 2500 pemilih didapatkan perolehan suara sebagai diatas.\nSetelah dilakukan penghitungan, tim pemenangan Bapak Prabowo yang ada di Desa Gurah mengajukan banding ke Bawaslu setempat karena menurut mereka terdapat 125 suara yang dianggap tidak sah seharusnya milik Bapak Prabowo. Setelah dilakukan pengecekan ulang, ternyata dugaan yang diajukan benar.',
    questionText: "Tentukan pernyataan yang paling benar dari pernyataan-pernyataan di bawah ini!",
    questionImage: require('../assets/image/Games/q_69.png'),
    choices: [
      { id: 1, text: "Bapak Jokowi unggul 50 suara dari Bapak Prabowo", image: null },
      { id: 2, text: "Terdapat 750 suara tidak sah dari 2500 total suara", image: null },
      { id: 3, text: "Perolehan suara Bapak Prabowo lebih besar daripada perolehan suara Bapak Jokowi", image: null },
      { id: 4, text: "Bapak Prabowo unggul 25 suara dari Bapak Jokowi", image: null }
    ],
    correctAnswerId: 4
  },
  {
    id: 10,
    title:'Pelajaran Favorit',
    explain:'Suatu hari seorang guru Bimbingan Konseling melakukan survei terhadap mata pelajaran yang disukai oleh siswa kelas VII. 2/5 siswa menyukai pelajaran Bahasa Indonesia, 1/3 siswa menyukai pelajaran Olahraga, 24 siswa menyukai pelajaran Matematika.\n8/15 siswa menyukai dua dari pelajaran Bahasa Indonesia, Olahraga, dan Matematika. Hanya 12 siswa yang menyukai ketiga pelajaran sekaligus.',
    questionImage: null,
    questionText: "Berapa banyak siswa kelas VII yang ada di sekolah tersebut?",
    choices: [
        { id: 1, text: "40 siswa", image: null },
        { id: 2, text: "45 siswa", image: null },
        { id: 3, text: "50 siswa", image: null },
        { id: 4, text: "55 siswa", image: null }
    ],
    correctAnswerId: 2
  },
];

export {homeMenu, AllGamesQuestion, dataTingkatan, pengayaan}