const whatWeDoCards = document.querySelector(".whatWeDoCards");

const services = [
  {
    serviceTitle: "Bireysel Terapi",
    serviceDesc: "Psikoloji bilimi kişinin ruhsal dünyasının değişim ve gelişimini inceleyen, duygularını, düşüncelerini ve davranışlarının ve bunların bütününü oluşturan bireyi anlamaya çalışmıştır.",
    serviceImg: "/images/tum_hizmetler/bireysel-terapi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Çift Terapisi",
    serviceDesc: "Çift Danışmanlığı, romantik ilişkilerin sağlıklı ilerleyebilmesi, toplumumuz için değerli olan ‘’aile’’ alt yapısını oluşturabilmesi amacıyla fayda sağlayabilecek, destek ve psikoeğitim içerikli bir danışmanlık alanıdır. ",
    serviceImg: "/images/tum_hizmetler/cift-terapisi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Aile Danışmanlığı",
    serviceDesc: "Aile Danışmanlığı, toplumun en temel ve en küçük yapı taşı olan anne- baba ve çocukları kapsayan ve bu yapıyı bütünüyle ele alan danışmanlık türüdür.",
    serviceImg: "/images/tum_hizmetler/aile-danismanligi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Çocuk Danışmanlığı ",
    serviceDesc: "Çocuklar değişen hayat şartları, ortam değişikliği, kişiliğin gelişmesi ile birçok faklı duyguyu bir arada yaşarlar ve bu duruma her çocuğun tepkisi de farklılık göstermektedir. ",
    serviceImg: "/images/tum_hizmetler/cocuk-danismanligi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Ergen Danışmanlığı",
    serviceDesc: "Ergenlik döneminde yaşanan hızlı fiziksel ve cinsel nitelikteki değişmeler ve bu değişmelere ergenin yüklediği sosyal anlamlar onun duygularını, kendilik algısını ve birincil ilişkilerini değişikliğe uğratmaktadır. ",
    serviceImg: "/images/tum_hizmetler/ergen-psikolog.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Cinsel Terapi",
    serviceDesc: "Tanımlanmış ve tanımlanmamış cinsel işlev bozuklukları için profesyonel destek almak diğer psikolojik problemlerin yanı sıra çok daha zorlayıcı olmaktadır.",
    serviceImg: "/images/tum_hizmetler/cinsel-terapi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Obsesif Kompulsif Bozukluk (OKB)",
    serviceDesc: "Bireyin istemi dışında gelen, uygunsuz olarak yaşanan, belirgin bir kaygı yada strese neden olan yineleyici düşünceler, dürtüler olarak tanımlanır.",
    serviceImg: "/images/tum_hizmetler/obsesif-kompulsif-bozukluk-okb.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Yeme Bozuklukları",
    serviceDesc: "YAZI GELECEK",
    serviceImg: "/images/tum_hizmetler/yeme-bozukluklari.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
    serviceDesc: "Dikkat eksikliği bireyin konsantrasyonunu toplayamama, uzun süre bir işe odaklanamama, aşırı dürtüsellik ve aşırı hareketlilik ile karakterize bir sorundur. ",
    serviceImg: "/images/tum_hizmetler/dikkat-eksikligi-hiperaktivite-bozuklugu.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Kişilik Bozuklukları",
    serviceDesc: "YAZI GELECEK",
    serviceImg: "/images/tum_hizmetler/kisilik-bozuklugu.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Akıcı Konuşma Bozukluğu / Kekemelik",
    serviceDesc: "Kekemeliğin ortaya çıkışı ya da şiddeti, bireyin içinde bulunduğu ortama göre değişebilir. Psikolojik streslerin yoğun olduğu durumlarda artar.",
    serviceImg: "/images/tum_hizmetler/akici-konusma-bozuklu-kekemelik.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Anksiyete Bozukluğu",
    serviceDesc: "YAZI GELECEK",
    serviceImg: "/images/tum_hizmetler/anksiyete-bozuklugu.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Evlilik Öncesi Çift Danışmanlığı",
    serviceDesc: "YAZI GELECEK",
    serviceImg: "/images/tum_hizmetler/evlilik-oncesi-cift-danismanligi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Okula Uyum Problemleri",
    serviceDesc: "Çocuklar değişen hayat şartları, ortam değişikliği, kişiliğin gelişmesi ile birçok faklı duyguyu bir arada yaşarlar ve bu duruma her çocuğun tepkisi de farklılık göstermektedir.",
    serviceImg: "/images/tum_hizmetler/okula-uyum-problemi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Attentioner ile Dikkatimi Topluyorum Programı",
    serviceDesc: "Bu programın amacı 8-18 yaş arasında ki bireylerin yaşadığı dikkat eksikliğini azaltmak, zaman yönetimi konusunda bireyleri bilinçlendirerek bu problemlerin ortadan kalkmasını sağlamaktır.",
    serviceImg: "/images/tum_hizmetler/attentioner-ile-dikkatimi-topluyorum.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Sınav Kaygısı",
    serviceDesc: "Kaygı, tüm bireylerin hayatının belirli dönemlerinde korku verici ve tehdit altında hissedeceği bir duruma karşı verdiği ruhsal ve bedensel bir tepkidir.",
    serviceImg: "/images/tum_hizmetler/sinav-kaygisi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Toni - 4 Sözsüz Zeka Testi",
    serviceDesc: "6 yaşından itibaran tüm bireylere uygulanan bu zeka testinin bir diğer özelliği ise sözsüz ve güvenilirliğinin çok yüksek olmasıdır.",
    serviceImg: "/images/tum_hizmetler/toni-4-sossuz-zeka-testi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "D-2 Dikkat Testi",
    serviceDesc: "Bu test bilinci açık olan 9-60 yaş aralığında ki tüm bireylerin  dikkat düşeylerini, psikomotor algı ve hızlarını, sürdürülebilir dikkkatlerini, özgül bir öğrenme güçlüğü olup olmadığını ölçmeye yönelik testtir.",
    serviceImg: "/images/tum_hizmetler/d-2-dikkat-testi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Oyun Terapisi",
    serviceDesc: "2 yaşından itibaren başlayan ve 8 (özel durumlarda 9-11 yaş) yaşına kadar uygulanabilen çocuğun duygularını, düşüncelerini, söyleyemediği şeyleri ifade edebilmesi ve fark ederek ortaya çıkarabilmesi için gelişen süreçtir.",
    serviceImg: "/images/tum_hizmetler/oyun-terapisi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Online Terapi",
    serviceDesc: "YAZI GELECEK",
    serviceImg: "/images/tum_hizmetler/online-terapi.webp",
    detailPageLink: "/bireysel-terapi",
  },
  {
    serviceTitle: "Teknoloji Bağımlılığı",
    serviceDesc: "YAZI GELECEK",
    serviceImg: "/images/tum_hizmetler/teknoloji-bagimliligi.webp",
    detailPageLink: "/bireysel-terapi",
  },
];

whatWeDoCards.innerHTML = services
  .map((service) => {
    return `
  <div class="whatWeDoCard">
          <h3 class="whatWeDoCardTitle">${service.serviceTitle}</h3>
          <p class="whatWeDoCardDesc">${service.serviceDesc}</p>
          <a href=${service.detailPageLink}>  
          <div class="whatWeDoCardImgContent">
          <img src=${service.serviceImg} title=${service.serviceTitle} alt=${service.serviceTitle} class="whatWeDoCardImg" />
          </div>
          </a>
          <a class="whatWeDoCardButton" href=${service.detailPageLink}>Detaylı Bilgi &#10140;</a>
        </div>
  
  `;
  })
  .join("");
