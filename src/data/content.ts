export interface Teacher {
  id: number;
  grade: string;
  title: string;
  name: string;
  tagline: string;
  photo: string;
  subject: string;
  years: string;
  bio: string;
  quote: string;
  message: string;
}
export interface Logo {
  photo: string;
}
export const LOGO: Logo[] = [
  {
    photo: "/ic.png",
  },
];
export const TEACHERS: Teacher[] = [
  {
    id: 1,
    grade: "Kelas 10",
    title: "Wali Kelas Pertama",
    name: "Mrs. Yorrie Rainalyne Rantesalu, S.Si.",
    tagline: "Awal Cerita Dimulai",
    photo: "/images/teacher-10.jpg",
    subject: "Biology",
    years: "2017 — 2018",
    bio: "Beliau menyambut 36 bocil-bocil yang gugup dan berkat upayanya, berhasil mengubah kami menjadi sebuah kelas yang tertawa kompak. Sesi perkenalan pagi, kata-kata penyemangat di sela-sela catatan, dan keyakinan bahwa setiap suara itu penting, menjadi landasan bagi segala hal yang terjadi selanjutnya.",
    quote:
      "Kelas ini bukanlah sekadar daftar nama. Kelas ini adalah janji yang kalian jaga satu sama lain.",
    message:
      "Semoga masuk perguruan tinggi favorit serta bergaullah dengan baik",
  },
  {
    id: 2,
    grade: "Kelas 11",
    title: "Wali Kelas Kedua",
    name: "Mrs. Elisa Natalina, S.Pd.",
    tagline: "Tumbuh Bersama",
    photo: "/images/teacher-11.jpg",
    subject: "Biology",
    years: "2018 — 2019",
    bio: "Beliau membimbing kami melewati tahun yang paling riuh. Kesabaran yang ia tunjukkan saat di laboratorium serta kata-kata penyemangat ala jeda pertandingan membuat kelas 11 menjadi tahun di mana orang-orang yang tadinya asing berubah menjadi sebuah tim.",
    quote: "Angkatan paling ribut, ramai, banyak macam tingkahnya.",
    message: "Belajar keras jangan putus asa! Masa depan indah di dalam Tuhan",
  },
  {
    id: 3,
    grade: "Kelas 12",
    title: "Wali Kelas Ketiga",
    name: "Mrs. Ferderika Henderika, S.Pd.",
    tagline: "The Final hapter.",
    photo: "/images/teacher-12.jpg",
    subject: "Biology",
    years: "2019 — 2020",
    bio: "Beliau mengantar kami melewati hari terakhir, foto kelas terakhir, dan bel terakhir — serta mengingatkan kami bahwa akhir hanyalah arsip dari awal-awal yang baru. Surat kelulusan yang ditulis tangan olehnya membuat seluruh kelas menangis.",
    quote: "Kelas Terkompak dan Tersolid",
    message:
      "Karaker yang baik salah satu penentu kesuksesan, untuk kelas XII IPA 1 , berdoa dan fokus pada tujuan. Yakin sukses, berjuangan, jatuh berdiri lagi, kalah mencoba lagi, gagal bangkit lagi sampai kesuksesan milik anda.",
  },
];

export interface MemoryItem {
  src: string;
  title: string;
  category: string;
  caption: string;
  tall?: boolean;
}

export const MEMORY_CATEGORIES = [
  "All",
  "Foto Kelas",
  "Event Sekolah",
  "Healing dlu",
  "Perayaan patah hati",
  "Behind The Scenes",
];

export const MEMORIES: MemoryItem[] = [
  {
    src: "/images/acara-1.jpg",
    title: "Malam yang Penuh Cerita",
    caption:
      "Sederhana, santai, dan penuh tawa—satu malam yang menyimpan banyak cerita bersama.",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/acara-2.jpg",
    title: "Bersama dalam Satu Momen",
    caption:
      "Ketika lagi ngumpul, satu foto bisa menjadi pengingat tentang kebersamaan yang pernah ada.",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/acara-3.jpg",
    title: "Senyum di Depan Rumah Denis",
    caption:
      "Momen sederhana bersama teman-teman, diabadikan sebelum semuanya kembali menjadi kenangan.",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/acara-4.jpg",
    title: "Di Antara Tawa",
    caption:
      "Tak perlu acara besar untuk menciptakan kenangan. Cukup berkumpul dan menikmati waktu bersama.",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/acara-5.jpg",
    title: "Satu Frame, Banyak Cerita",
    caption:
      "Wajah-wajah yang berbeda, tetapi berada dalam satu cerita dan satu kenangan yang sama.",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/acara-6.jpg",
    title: "Senyum Tanpa Rencana",
    caption:
      "Pose seadanya, ekspresi sesuka hati, dan momen yang justru terasa paling natural.",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/acara-7.jpg",
    title: "Ultah Pak Palimbong",
    caption:
      "Duduk bersama dan berbagi makanan. Moment diajak Pak Palimbong merayakan hari ulang tahunnya. HBD PAK",
    category: "Perayaan patah hati",
    tall: false,
  },

  {
    src: "/images/bts-1.jpg",
    title: "Pangeran Tidur",
    caption: "Aldi ketiduran",
    category: "Behind The Scenes",
    tall: false,
  },

  {
    src: "/images/bts-2.jpg",
    title: "Claudia",
    caption: "Latihan dulu y",
    category: "Behind The Scenes",
    tall: true,
  },

  {
    src: "/images/bts-3.jpg",
    title: "Di Balik Karakter Aldi",
    caption: "Make Up dlu sebelum perform",
    category: "Behind The Scenes",
    tall: true,
  },

  {
    src: "/images/bts-4.jpg",
    title: "Ekspresi Pangeran Tidur",
    caption:
      "Foto ketiduran di kelas justru menjadi bagian paling lucu untuk dikenang.",
    category: "Behind The Scenes",
    tall: true,
  },

  {
    src: "/images/class-1.jpg",
    title: "Di Dalam Kelas",
    caption: "ini lagi makan setelah acara masak-masak",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-2.jpg",
    title: "Trio Nakal",
    caption:
      "Di sela kesibukan sekolah, selalu ada waktu untuk duduk bersama dan menikmati kebersamaan bersama Trio Nakal.",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-3.jpg",
    title: "Jam Kosong",
    caption: "Kalau guru gak masuk kelas sudah pasti foto depan kelas",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-4.jpg",
    title: "Girls of Our Class",
    caption:
      "Senyum dan kebersamaan mereka menjadi salah satu bagian dari warna cerita kelas kami. HEHE",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-5.jpg",
    title: "Selfie",
    caption:
      "Bukan sekadar teman sekelas, tetapi orang-orang yang menemani sebagian perjalanan masa sekolah.",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-6.jpg",
    title: "Terlalu Dekat dengan Kamera",
    caption:
      "Gak ada aturan soal pose kalau kamera sudah berada di depan kami.",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-7.jpg",
    title: "Hari-Hari di Sekolah",
    caption: "Momen kecil di depan kelas",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-8.jpg",
    title: "The Boys",
    caption: "Sedikit serius, sedikit bercanda, dan sedikit baper.",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/class-10.jpg",
    title: "Foto Bersama",
    caption:
      "Mungkin saat itu terasa seperti hari biasa, tetapi ternyata menjadi salah satu momen yang ingin kami ingat kembali.",
    category: "Foto Kelas",
    tall: false,
  },

  {
    src: "/images/memory-trip.jpg",
    title: "Acara apa e ini?",
    caption: "Foto bersama setelah event yang developer lupa ini acara apa.",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/event-1.jpg",
    title: "Sebelum tampil",
    caption: "Foto dulu yekan sebelum tampil",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/event-3.jpg",
    title: "Antri Tampil",
    caption: "Moment para bintang menunggu bersama untuk bersinar bersama",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/event-4.jpg",
    title: "Bulbas",
    caption: "Moment rama and the boys latihan lip sync",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/event-5.jpg",
    title: "Five Monkey One Human",
    caption: "Sedikit berbeda dari biasanya, tapi tetap dengan gaya no 1",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/event-6.jpg",
    title: "Teman, Musik, dan Tawa",
    caption: "Momen santai sebelum tampil.",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/event-7.jpg",
    title: "Di Tengah Perayaan",
    caption:
      "Satu penampilan Aldi dan Claudia di tengah acara yang membuat suasana buan bahasa terasa semakin berkesan.",
    category: "Event Sekolah",
    tall: false,
  },

  {
    src: "/images/memory-classroom.jpg",
    title: "Tempat Semuanya Dimulai",
    caption:
      "Lapangan Sekolah yang mungkin terlihat biasa, tetapi pernah menjadi saksi begitu banyak cerita.",
    category: "Foto Kelas",
    tall: true,
  },

  {
    src: "/images/memory-graduation.jpg",
    title: "Sampai di Garis Akhir",
    caption:
      "Setelah bertahun-tahun bersama, akhirnya tiba juga saat untuk mengabadikan perjalanan yang telah kami lalui.",
    category: "Foto Kelas",
    tall: false,
  },
  {
    src: "/images/trip-1.jpg",
    title: "Burake",
    caption: "Diajak Bu Adriana ke burake",
    category: "Healing dlu",
    tall: false,
  },

  {
    src: "/images/trip-2.jpg",
    title: "Baru Tiba",
    caption:
      "Selalu ada waktu untuk duduk, bercanda, dan menikmati kebersamaan.",
    category: "Healing dlu",
    tall: false,
  },

  {
    src: "/images/trip-3.jpg",
    title: "Foto Lawas",
    caption: "Tidak harus sempurna untuk menjadi kenangan",
    category: "Healing dlu",
    tall: false,
  },

  {
    src: "/images/trip-4.jpg",
    title: "Perjalanan",
    caption:
      "Satu kendaraan, banyak suara, dan terlalu banyak cerita untuk dilupakan.",
    category: "Healing dlu",
    tall: false,
  },

  {
    src: "/images/trip-5.jpg",
    title: "Di Atas Burake",
    caption:
      "Berhenti sejenak untuk menikmati pemandangan, sebelum kembali melanjutkan puisi alam.",
    category: "Healing dlu",
    tall: false,
  },
];

export interface Moment {
  icon: string;
  grade: string;
  title: string;
  text: string;
}

export const MOMENTS: Moment[] = [
  {
    icon: "door",
    grade: "Kelas 10",
    title: "Hari Pertama",
    text: "Hari ketika 36 siswa memasuki ruang kelas yang sama tanpa menyadari betapa berharganya orang-orang itu nantinya.",
  },
  {
    icon: "bus",
    grade: "Grade 11",
    title: "Trip Tipis-Tipis",
    text: "Hari yang entah bagaimana justru menghasilkan lebih banyak candaan daripada foto-foto yang sebenarnya — dan playlist lagu yang masih kami nyanyikan sampai sekarang.",
  },
  {
    icon: "flame",
    grade: "Grade 11",
    title: "Festival Night",
    text: "Stage fright, borrowed costumes, and a crowd that chanted our class name like a headline.",
  },
  {
    icon: "cloud",
    grade: "Kelas 12",
    title: "Bimbel",
    text: "Bimbel sore yang masuk telinga kiri keluar telinga kanan",
  },
  {
    icon: "camera",
    grade: "Kelas 12",
    title: "Foto bersama",
    text: "Tiga puluh enam senyuman yang berusaha keras terlihat santai, padahal memang santai aja",
  },
  {
    icon: "cap",
    grade: "Kelas 12",
    title: "Graduation",
    text: "Moment dimana kami menyadari bahwa rutinitas sehari-hari kami telah diam-diam menjadi kenangan.",
  },
];

export const WALL_QUOTES = [
  {
    text: "Sibuk Sibuk Sibuk",
    by: "Trebeck · Charlie",
  },
  {
    text: "Pray Trust Wait",
    by: "Sia Ambe' · Epe'",
  },
  {
    text: "Semangat Guyss",
    by: "Dede' · Adit",
  },
  {
    text: "CAPEK E BUAT INI WEB",
    by: "Sang Developer · Gilang",
  },
  {
    text: "Stop Baku Bawa",
    by: "Anak Pindahan · Cali'",
  },
  {
    text: "Yang Sudah Boleh Pulang",
    by: "Anak Bawang · Karittok",
  },
  {
    text: "Tuo Situru' Aluk Na Pemali",
    by: "Ambe' Tondok · Epe'",
  },
];
