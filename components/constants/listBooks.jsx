const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const formatViews = (num) => {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
  return num.toString();
};

const ListBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://covers.openlibrary.org/b/id/10523338-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(500000, 2000000)),
    review: getRandom(300, 1500).toString(),
    is_free: false,
    sinopsis: "Buku ini membahas bagaimana perubahan kecil yang konsisten dapat menghasilkan dampak besar dalam kehidupan.",
    story: "Mengikuti konsep kebiasaan atomik, pembaca diajak memahami bagaimana membentuk kebiasaan baik dan menghilangkan kebiasaan buruk melalui sistem sederhana namun efektif."
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://covers.openlibrary.org/b/id/11153271-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(400000, 1500000)),
    review: getRandom(300, 1200).toString(),
    is_free: false,
    sinopsis: "Mengupas bagaimana perilaku manusia memengaruhi keputusan finansial.",
    story: "Melalui kumpulan cerita, buku ini menjelaskan bahwa kesuksesan finansial lebih ditentukan oleh perilaku daripada pengetahuan teknis."
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://covers.openlibrary.org/b/id/8167896-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(300000, 1200000)),
    review: getRandom(200, 900).toString(),
    is_free: true,
    sinopsis: "Panduan untuk fokus mendalam di era distraksi.",
    story: "Buku ini menunjukkan pentingnya kerja fokus tanpa gangguan untuk mencapai hasil maksimal dalam dunia modern yang penuh distraksi."
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(800000, 3000000)),
    review: getRandom(800, 2000).toString(),
    is_free: false,
    sinopsis: "Perbandingan dua pola pikir tentang uang dan investasi.",
    story: "Melalui kisah dua figur ayah, buku ini mengajarkan pentingnya literasi finansial dan investasi sejak dini."
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(600000, 2000000)),
    review: getRandom(500, 1500).toString(),
    is_free: true,
    sinopsis: "Filosofi klasik tentang kesuksesan dan kekayaan.",
    story: "Berdasarkan wawancara dengan orang sukses, buku ini membahas mindset dan prinsip untuk mencapai keberhasilan."
  },
  {
    id: 6,
    title: "Start With Why",
    author: "Simon Sinek",
    image: "https://covers.openlibrary.org/b/id/8776041-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(400000, 1000000)),
    review: getRandom(300, 900).toString(),
    is_free: false,
    sinopsis: "Menjelaskan pentingnya tujuan dalam kepemimpinan.",
    story: "Pemimpin hebat memulai dari 'mengapa'. Buku ini mengajarkan bagaimana inspirasi dapat menggerakkan orang lain."
  },
  {
    id: 7,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(900000, 2500000)),
    review: getRandom(700, 1800).toString(),
    is_free: false,
    sinopsis: "Tujuh kebiasaan untuk meningkatkan efektivitas hidup.",
    story: "Buku ini memberikan kerangka kerja praktis untuk mencapai kesuksesan pribadi dan profesional."
  },
  {
    id: 8,
    title: "Zero to One",
    author: "Peter Thiel",
    image: "https://covers.openlibrary.org/b/id/8370226-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(300000, 900000)),
    review: getRandom(200, 700).toString(),
    is_free: false,
    sinopsis: "Panduan membangun startup inovatif.",
    story: "Buku ini menjelaskan bagaimana menciptakan sesuatu yang benar-benar baru, bukan hanya meniru."
  },
  {
    id: 9,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image: "https://covers.openlibrary.org/b/id/8375043-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(1000000, 3000000)),
    review: getRandom(900, 2000).toString(),
    is_free: false,
    sinopsis: "Pendekatan jujur dalam menjalani hidup.",
    story: "Buku ini mengajak pembaca untuk fokus pada hal yang benar-benar penting dan mengabaikan hal yang tidak berarti."
  },
  {
    id: 10,
    title: "Can't Hurt Me",
    author: "David Goggins",
    image: "https://covers.openlibrary.org/b/id/9259251-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(500000, 1500000)),
    review: getRandom(400, 1200).toString(),
    is_free: false,
    sinopsis: "Kisah inspiratif tentang mental toughness.",
    story: "David Goggins berbagi perjalanan hidupnya dari keterpurukan hingga menjadi simbol ketangguhan mental."
  },
  {
    id: 11,
    title: "Ikigai",
    author: "Hector Garcia",
    image: "https://covers.openlibrary.org/b/id/8235116-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(300000, 900000)),
    review: getRandom(200, 700).toString(),
    is_free: true,
    sinopsis: "Konsep Jepang tentang tujuan hidup.",
    story: "Buku ini mengeksplorasi rahasia panjang umur dan kebahagiaan dari masyarakat Jepang."
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(1500000, 4000000)),
    review: getRandom(1200, 3000).toString(),
    is_free: false,
    sinopsis: "Perjalanan spiritual mencari makna hidup.",
    story: "Mengisahkan seorang gembala yang mengikuti mimpinya untuk menemukan harta karun dan jati diri."
  },
  {
    id: 13,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(800000, 2000000)),
    review: getRandom(700, 1500).toString(),
    is_free: false,
    sinopsis: "Cara kerja dua sistem berpikir manusia.",
    story: "Buku ini menjelaskan bagaimana keputusan dibuat melalui sistem cepat dan lambat dalam otak manusia."
  },
  {
    id: 14,
    title: "Mindset",
    author: "Carol Dweck",
    image: "https://covers.openlibrary.org/b/id/8225260-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(500000, 1200000)),
    review: getRandom(400, 1000).toString(),
    is_free: true,
    sinopsis: "Growth mindset vs fixed mindset.",
    story: "Buku ini menunjukkan bagaimana pola pikir memengaruhi kesuksesan dalam berbagai aspek kehidupan."
  },
  {
    id: 15,
    title: "Make Your Bed",
    author: "William H. McRaven",
    image: "https://covers.openlibrary.org/b/id/8773271-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(300000, 800000)),
    review: getRandom(200, 600).toString(),
    is_free: true,
    sinopsis: "Pelajaran hidup sederhana dari militer.",
    story: "Buku ini berisi prinsip-prinsip kecil yang dapat membawa perubahan besar dalam hidup."
  },
  {
    id: 16,
    title: "Grit",
    author: "Angela Duckworth",
    image: "https://covers.openlibrary.org/b/id/8232400-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(400000, 1000000)),
    review: getRandom(300, 900).toString(),
    is_free: false,
    sinopsis: "Ketangguhan sebagai kunci sukses.",
    story: "Buku ini menekankan pentingnya konsistensi dan passion dalam mencapai tujuan jangka panjang."
  },
  {
    id: 17,
    title: "Outliers",
    author: "Malcolm Gladwell",
    image: "https://covers.openlibrary.org/b/id/8224151-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(500000, 1300000)),
    review: getRandom(400, 1100).toString(),
    is_free: false,
    sinopsis: "Faktor di balik kesuksesan luar biasa.",
    story: "Buku ini mengungkap bahwa kesuksesan dipengaruhi oleh peluang, latihan, dan lingkungan."
  },
  {
    id: 18,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    image: "https://covers.openlibrary.org/b/id/8231852-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(700000, 1800000)),
    review: getRandom(600, 1400).toString(),
    is_free: false,
    sinopsis: "Bagaimana kebiasaan terbentuk dan diubah.",
    story: "Buku ini menjelaskan loop kebiasaan dan bagaimana mengubahnya untuk meningkatkan hidup."
  },
  {
    id: 19,
    title: "Eat That Frog!",
    author: "Brian Tracy",
    image: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
    rating: getRandom(3, 5),
    views: formatViews(getRandom(200000, 700000)),
    review: getRandom(150, 500).toString(),
    is_free: true,
    sinopsis: "Teknik mengatasi prokrastinasi.",
    story: "Buku ini mengajarkan cara menyelesaikan tugas penting terlebih dahulu untuk meningkatkan produktivitas."
  },
  {
    id: 20,
    title: "The 4-Hour Workweek",
    author: "Timothy Ferriss",
    image: "https://covers.openlibrary.org/b/id/8231992-L.jpg",
    rating: getRandom(4, 5),
    views: formatViews(getRandom(900000, 2500000)),
    review: getRandom(700, 1600).toString(),
    is_free: false,
    sinopsis: "Gaya hidup kerja efisien dan bebas.",
    story: "Buku ini menawarkan cara mendesain hidup dengan kerja lebih sedikit namun hasil maksimal."
  }
];

export default ListBooks;