feather.replace();

const popup = document.querySelector("#about");
const btnClose = document.querySelector("#btn-close");
const contentP = document.querySelector("#content-p");
const contentH = document.querySelector("#content-h");

const btn_yibo = document.querySelector("#yibo");
const btn_iu = document.querySelector("#iu");
const btn_linghe = document.querySelector("#linghe");
const btn_yoojin = document.querySelector("#yoojin");
const btn_baekho = document.querySelector("#baekho");
const btn_haesun = document.querySelector("#haesun");
const btn_joobin = document.querySelector("#joobin");
const btn_hwang = document.querySelector("#hwang");
const btn_jiwon = document.querySelector("#jiwon");

btnClose.addEventListener("click", function () {
  popup.classList.toggle("hidden");
});

btn_yibo.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MR. YIBO AS DIREKTUR EKSEKUTIF";
  contentP.innerHTML =
    "Sebagai direktur eksekutif di agensi model bergengsi, Mr. Yibo  memimpin dengan visi yang inovatif dan pengalaman yang kaya akan  industri mode. Dengan pendekatan yang berorientasi pada keunggulan, dia  berhasil mengukuhkan posisi agensinya sebagai pemimpin dalam industri,  membangun hubungan yang kuat dengan merek-merek terkemuka dan membantu  mengembangkan karier para model yang bekerja sama dengannya.";
});

btn_iu.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MRS. IU AS DIREKTUR KREATIF";
  contentP.innerHTML =
    "Dengan kreativitas yang tanpa batas, Mrs. IU mengarahkan  langkah-langkah di agensi model dengan penuh semangat dan inovasi.  Sebagai pemimpin kreatif, dia telah membimbing timnya untuk menciptakan  konsep-konsep yang memukau, menghasilkan kampanye-kampanye yang  menginspirasi, dan membantu membangun citra merek yang ikonis.";
});

btn_linghe.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MR. LINGHE AS MANAJER KLIEN";
  contentP.innerHTML =
    "Sebagai manajer klien di agensi model, Mr. Linghe adalah  jembatan vital antara klien dan talenta. Dengan kepekaan yang luar biasa  terhadap kebutuhan klien dan pemahaman yang mendalam tentang industri,  dia telah berhasil membina hubungan yang solid dan mengamankan peluang  yang menguntungkan bagi para model yang dikelolanya.";
});

btn_yoojin.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MRS. YOO-JIN AS MANAJER ADMINISTRASI";
  contentP.innerHTML =
    "Sebagai manajer administrasi di agensi model, Mrs. Yoo - jin  menjaga roda organisasi agar berjalan lancar. Dengan keahlian  administratif yang kuat dan ketelitian yang teliti, dia memastikan bahwa  semua aspek operasional berjalan efisien. Dukungannya yang tak kenal  lelah membantu memastikan bahwa agensi beroperasi dengan lancar,  memberikan fondasi yang kokoh bagi kesuksesan para talenta dan klien.";
});

btn_baekho.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MR. BAEKHO AS KOORDINATOR PRODUKSI";
  contentP.innerHTML =
    "Sebagai koordinator produksi di agensi model. Mr. Baekho memainkan peran kunci dalam mengatur dan melaksanakan setiap detail dari sesi pemotretan dan acara mode. Dengan keahlian organisasinya yang luar biasa dan pemahaman mendalam tentang industri, dia memastikan bahwa setiap produksi berjalan dengan lancar dan sesuai dengan visi kreatif. Dedikasinya terhadap profesionalisme dan ketelitian telah membuatnya menjadi aset tak ternilai bagi agensi dan klien..";
});

btn_haesun.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MRS. HAESUN AS KOORDINATOR KASTING";
  contentP.innerHTML =
    "Sebagai koordinator kasting di agensi model, Mrs. Haesun  memainkan peran vital dalam menemukan bakat-bakat yang menonjol. Dengan  kecerdasan yang tajam dan wawasan yang mendalam tentang industri, dia  mengarahkan proses kasting dengan presisi dan kehati-hatian. Dedikasinya  untuk menemukan yang terbaik bagi klien dan memastikan representasi  yang inklusif telah menjadikannya sebagai pilar utama dalam kesuksesan  agensi.";
});

btn_joobin.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MRS. JOOBIN AS MANAJER TALENTA";
  contentP.innerHTML =
    "Mrs. Joobin, Manajer Talenta di Runways Agency, adalah seorang profesional berpengalaman dalam industri hiburan. Dikenal karena kepekaannya terhadap tren dan inovasi, ia memimpin dengan visi yang jelas, menciptakan peluang yang memperkaya portofolio agensi. Dengan kemampuan komunikasi yang kuat, ia membangun hubungan yang solid dengan klien dan bakat-bakat yang direpresentasikan, menjunjung tinggi standar profesionalisme dan kualitas.";
});

btn_hwang.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MR. HWANG AS MANAJER PEMASARAN";
  contentP.innerHTML =
    "Mr. Hwang, Manajer Pemasaran di Runways Agency, adalah profesional berpengalaman di industri mode dan kecantikan. Dengan dedikasi tinggi dalam mengembangkan strategi pemasaran inovatif, ia memimpin timnya mencapai target penjualan. Keahliannya dalam membangun hubungan dengan mitra bisnis dan memanfaatkan media sosial menjadi aset berharga dalam menghadapi pasar yang dinamis..";
});

btn_jiwon.addEventListener("click", function () {
  popup.classList.toggle("hidden");
  contentH.innerHTML = "MRS. JI-WON SOCIAL MEDIA SPECIALIST";
  contentP.innerHTML =
    "Mrs. Jiwon, spesialis media sosial di Runways Agency, menghadirkan  strategi pemasaran digital yang kreatif dan efektif untuk merek-merek  terkemuka. Dengan pengalaman luas, ia menciptakan konten menarik dan  mengelola interaksi positif dengan audiens, menjadi aset berharga bagi  klien-klien agensinya.";
});
