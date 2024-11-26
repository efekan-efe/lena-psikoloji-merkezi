//? FAQ

const faqRows = document.querySelector(".faqRows");

const faqInfo = [
  {
    id: "1",
    question: "Adana psikolog seans ücreti nedir?",
    answer: "Adana da  psikolog seans ücreti psikoloğun uzmanlığına, destek alınacak alana ( Çift terapisi,çocuk danışmanlığı,bireysel terapi,cinsel terapi) bağlı olarak farklılık göstermektedir.",
  },
  {
    id: "2",
    question: "Nasıl psikolog randevusu alabilirim?",
    answer: "Adana’da en iyi psikologlara ulaşmak için 0533 599 53 62 numara ile  Whatsapp üzerinden mesaj,sesli arama ya da diğer iletişim kanallarımız üzerinden kolaylıkla randevu alabilirsiniz.",
  },
  {
    id: "3",
    question: "Adana psikolog seans fiyatları nedir?",
    answer: "Adana psikolog seans fiyatları 800 ₺ ile 3500 ₺ arasında değişim göstermektedir. ",
  },
  {
    id: "4",
    question: "Adana’da psikolog seans fiyatlarını belirleyen kriterler nelerdir?",
    answer: `
    -Psikoloji lisans mezunu olmak (Psikolog olmak)
    -Gerekli eğitimleri almış olmak (Oyun Terapisi,Cinsel Terapi,Aile Danışmanlığı)
    -Deneyim 
    -Danışan görüşleri
    `,
  },
  {
    id: "5",
    question: "Psikologlar online terapi yapıyor mu?",
    answer: "Online terapi ile Adana’da bulunamayan, şehir dışında, yurt dışında yaşayan ya da kurumu gelme imkanı olmayan danışanlar için psikologlarımız online seans kabul etmektedir.",
  },
  {
    id: "6",
    question: "Çocuk pedagogu ne yapar?",
    answer:
      "Çocuk pedagogu günümüzde ki adı ile, çocuk psikoloğu aldığı eğitimler (Oyun terapisi,klinik gözlem ve görüşme teknikleri,resim analizi) doğrultusunda çocuğu oyun terapi odasında değerlendirir, ebeveyn danışmanlığı verir, çocukların psikolojik iyilik halini sağlamak ve korumak için destek veren uzmanlardır",
  },
  {
    id: "7",
    question: "Çocuk pedagogunun destek verdiği konular nelerdir?",
    answer: "Çocuklarda öfke problemi,yeme bozukluğu,kardeş kıskançlığı,kaygı,depresyon,fobiler,tikler,okul başarısızlığı,tuvalet eğitimi,davranış  bozukluğu vb birçok konuda destek alabilirsiniz.",
  },
  {
    id: "8",
    question: "Ergen psikoloğu ne yapar?",
    answer: "Ergen psikoloğu ergenin çocukluktan yetişkinliğe geçiş sürecinde yaşadığı fizyolojik ve psikolojik değişimlere uyum sağlamakta zorlandığı durumlarda destek alınan ruh sağlığı uzmanıdır.",
  },
  {
    id: "9",
    question: "Ergen psikoloğundan hangi konularda destek alabiliriz?",
    answer:
      "Ergenlikte yaşanan cinsel kimlik karmaşaları, sınav stresi, okul kaygısı, ergen-ebeveyn çatışmaları, akran zorbalığı, ergenlikte öfke kontrol problemleri, saldırganlık, özgüven problemi, uyku problemleri, dışlanma, sosyal kaygı, sosyal fobi, dikkat eksikliği ve depresyon gibi bir çok konuda destek alınabilir. ",
  },
  {
    id: "10",
    question: "Hangi psikolojik temelli cinsel problemler için terapi alabilirim?",
    answer: "Cinsel terapi alanında cinsel isteksizlik, vajinusmus, erken boşalma, geç boşalma, sertleşme probelmi, ağrılı cinsellik yaşama, orgazm olamama konularında cinsel terapistlerimiz danışan kabul etmektedir.",
  },
  {
    id: "11",
    question: "Cinsel terapi işe yarar mı?",
    answer: "Cinsel terapi danışanın sürece aktif katılımı, egzersizlerin düzenli ve doğru bir şekilde yapılması ile fayda sağlamaktadır. ",
  },
  {
    id: "12",
    question: "Aile danışmanı ne yapar?",
    answer:
      "Aile danışmanı çiftler arası iletişim problemlerinde, aldatma/altatılma sonrası yaşanan evlilik krizlerinde, ebeveyn olma kararı alırken ya da ebeveynlikte karşılaşılan sorunlarda partnerini daha iyi anlamada ve kendini daha net ifade edebilmesi konusunda destek olmaktadır. ",
  },
  {
    id: "13",
    question: "Evlilik öncesi çift terapsini kimler almalıdır?",
    answer: "Evlilik kararı almak isteyen ya da alan sevgililerin ya da nişanlıların sağlıklı ve mutlu ilişki için alması gereken önemli bir destektir.",
  },
  {
    id: "14",
    question: "Evlilik öncesi çift terapisi nedir?",
    answer: "Partnerlerin birbirlerini doğru bir şekilde anlamasına kendini daha iyi ifade edebilmesini kök ailelerin etkisi altında kalmadan kendi ailelerini kurmak için kararlar alabilmesini sağlayan psikolojik destek sürecidir.",
  },
  {
    id: "15",
    question: "Çift terapisine neden gidelim?",
    answer:
      "Romantik ilişkilerde sağlıklı iletişim kurabilmek kendini ifade edebilme ve partneri anlayabilme kapasitesi oldukça önemlidir. Bu da bireyselliğin ve paylaşmanın farkında olmayı gerektirir.Her alanda uygun ve uyumlu olmak mümkün değildir. Adına fedakarlık denilse de partnere uyum sağlayabilmek içgörü ve farkındalık ile mümkün olabilir. Terapi farkındalık oluşturmayı sağlar. ",
  },
  {
    id: "16",
    question: "Ebeveyn danışmanlığı ile aile danışmanlığı arasında ki fark nedir?",
    answer: "Ebeveyn danışmanlığı; ebeveyn ve çocuk arasında ki ilişkiyi düzenleyip destekleyen bir danışmanlıkken aile danışmanlığı tüm aile üyelerini kapsayan iletişimi düzenleyen bir danışmanlık hizmetidir. ",
  },
  {
    id: "17",
    question: "Psikologlar ilaç yazar mı? ",
    answer: "Psikologlar ilaç reçete etmez. ",
  },
  {
    id: "18",
    question: "Psikoloğa gitmek sicile işlenir mi?",
    answer:
      "Hayır, psikologa devam sicile işlenmez. Türkiye'de, psikolojik tedavi ve terapi süreci, kişisel sağlık bilgileri gizlidir ve kişinin izni olmadan paylaşılmaz. Psikoterapiye katılmaya, herhangi bir suç kaydına veya sicile işlenmeye neden olmaz.",
  },
  {
    id: "19",
    question: "Lena Psikoloji Merkezi’ne nasıl gelebilirim?",
    answer: "Atatürk caddesinin paralelinde vali yolu caddesi üzerindedir. ",
  },
];

faqRows.innerHTML = faqInfo
  .map((item) => {
    return `
    <div class="faqRow">
          <div class="faqQuestionContent">
            <h3 class="faqQuestion">${item.question}</h3>
            <button class="faqButton">+</button>
          </div>
          <div class="faqAnswerContent">
            <p class="faqAnswer">
              ${item.answer}
            </p>
          </div>
        </div>
    `;
  })
  .join("");
function attachFaqButtonListeners() {
  const faqButtons = document.querySelectorAll(".faqButton");
  faqButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const answerContent = e.target.parentElement.nextElementSibling;
      const isOpen = answerContent.classList.contains("open");

      if (isOpen) {
        answerContent.style.height = "0";
        answerContent.classList.remove("open");
        e.target.textContent = "+";
      } else {
        const contentHeight = answerContent.scrollHeight + "px";
        answerContent.style.height = contentHeight;
        answerContent.classList.add("open");
        e.target.textContent = "-";
      }
    });
  });
}
attachFaqButtonListeners();
