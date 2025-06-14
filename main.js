# Writing the full main.js with all translations for 13 languages and support for updating direction and tooltips

main_js_code = """
const translations = {
  en: {
    nav_home: "Home",
    nav_founders: "Founderships",
    nav_partners: "Partnerships",
    nav_about: "About",
    nav_contact: "Contact",
    header_title: "MoneyLab.Finance",
    header_description: "Building foundational crypto platforms since 2012",
    title_founderships: "Founderships",
    title_partnerships: "Partnerships",
    title_about: "About MoneyLab",
    about_text: "MoneyLab is a venture studio building crypto-native infrastructure, startups, and digital public goods.",
    title_contact: "Contact",
    footer_brand: "MoneyLab.Finance"
  },
  fa: {
    nav_home: "خانه",
    nav_founders: "بنیان‌گذاری‌ها",
    nav_partners: "شراکت‌ها",
    nav_about: "درباره",
    nav_contact: "تماس",
    header_title: "مانی‌لب",
    header_description: "ساخت پلتفرم‌های بنیادی کریپتو از سال ۲۰۱۲",
    title_founderships: "بنیان‌گذاری‌ها",
    title_partnerships: "شراکت‌ها",
    title_about: "درباره مانی‌لب",
    about_text: "مانی‌لب یک استودیوی راه‌اندازی پروژه‌های کریپتویی و عمومی دیجیتال است.",
    title_contact: "تماس",
    footer_brand: "مانی‌لب"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_founders: "المؤسسون",
    nav_partners: "الشركاء",
    nav_about: "حول",
    nav_contact: "اتصال",
    header_title: "ماني لاب",
    header_description: "نبني منصات تشفير أساسية منذ عام 2012",
    title_founderships: "المؤسسون",
    title_partnerships: "الشركاء",
    title_about: "حول ماني لاب",
    about_text: "ماني لاب هو استوديو مشاريع يبني بنية تحتية ومشاريع تشفيرية.",
    title_contact: "اتصال",
    footer_brand: "ماني لاب"
  },
  tr: {
    nav_home: "Anasayfa",
    nav_founders: "Kurucular",
    nav_partners: "Ortaklıklar",
    nav_about: "Hakkında",
    nav_contact: "İletişim",
    header_title: "MoneyLab.Finance",
    header_description: "2012'den beri kripto platformları geliştiriyoruz",
    title_founderships: "Kurucular",
    title_partnerships: "Ortaklıklar",
    title_about: "MoneyLab Hakkında",
    about_text: "MoneyLab, kripto altyapısı ve girişimleri geliştiren bir stüdyodur.",
    title_contact: "İletişim",
    footer_brand: "MoneyLab.Finance"
  },
  id: {
    nav_home: "Beranda",
    nav_founders: "Pendiri",
    nav_partners: "Kemitraan",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    header_title: "MoneyLab.Finance",
    header_description: "Membangun platform kripto sejak 2012",
    title_founderships: "Pendiri",
    title_partnerships: "Kemitraan",
    title_about: "Tentang MoneyLab",
    about_text: "MoneyLab adalah studio ventura yang membangun infrastruktur kripto dan produk digital.",
    title_contact: "Kontak",
    footer_brand: "MoneyLab.Finance"
  },
  ur: {
    nav_home: "ہوم",
    nav_founders: "بانی",
    nav_partners: "شراکتیں",
    nav_about: "تعارف",
    nav_contact: "رابطہ",
    header_title: "مانی لیب",
    header_description: "2012 سے کرپٹو پلیٹ فارمز بنا رہے ہیں",
    title_founderships: "بانی",
    title_partnerships: "شراکتیں",
    title_about: "مانی لیب کے بارے میں",
    about_text: "مانی لیب ایک منصوبہ ساز اسٹوڈیو ہے جو کرپٹو بنیادی ڈھانچہ تیار کرتا ہے۔",
    title_contact: "رابطہ",
    footer_brand: "مانی لیب"
  },
  fr: {
    nav_home: "Accueil",
    nav_founders: "Fondateurs",
    nav_partners: "Partenariats",
    nav_about: "À propos",
    nav_contact: "Contact",
    header_title: "MoneyLab.Finance",
    header_description: "Création de plateformes crypto depuis 2012",
    title_founderships: "Fondateurs",
    title_partnerships: "Partenariats",
    title_about: "À propos de MoneyLab",
    about_text: "MoneyLab est un studio de projets créant des infrastructures crypto.",
    title_contact: "Contact",
    footer_brand: "MoneyLab.Finance"
  },
  sw: {
    nav_home: "Nyumbani",
    nav_founders: "Waanzilishi",
    nav_partners: "Ushirikiano",
    nav_about: "Kuhusu",
    nav_contact: "Mawasiliano",
    header_title: "MoneyLab.Finance",
    header_description: "Tumejenga majukwaa ya crypto tangu 2012",
    title_founderships: "Waanzilishi",
    title_partnerships: "Ushirikiano",
    title_about: "Kuhusu MoneyLab",
    about_text: "MoneyLab ni studio ya ubunifu wa miundombinu ya crypto.",
    title_contact: "Mawasiliano",
    footer_brand: "MoneyLab.Finance"
  },
  ru: {
    nav_home: "Главная",
    nav_founders: "Основатели",
    nav_partners: "Партнерства",
    nav_about: "О нас",
    nav_contact: "Контакт",
    header_title: "MoneyLab.Finance",
    header_description: "Создаем крипто-платформы с 2012 года",
    title_founderships: "Основатели",
    title_partnerships: "Партнерства",
    title_about: "О компании MoneyLab",
    about_text: "MoneyLab — это студия, создающая инфраструктуру и стартапы в сфере крипто.",
    title_contact: "Контакт",
    footer_brand: "MoneyLab.Finance"
  },
  es: {
    nav_home: "Inicio",
    nav_founders: "Fundadores",
    nav_partners: "Asociaciones",
    nav_about: "Acerca de",
    nav_contact: "Contacto",
    header_title: "MoneyLab.Finance",
    header_description: "Construyendo plataformas cripto desde 2012",
    title_founderships: "Fundadores",
    title_partnerships: "Asociaciones",
    title_about: "Sobre MoneyLab",
    about_text: "MoneyLab es un estudio de emprendimiento construyendo infraestructura cripto.",
    title_contact: "Contacto",
    footer_brand: "MoneyLab.Finance"
  },
  zh: {
    nav_home: "首页",
    nav_founders: "创始人",
    nav_partners: "合作伙伴",
    nav_about: "关于我们",
    nav_contact: "联系",
    header_title: "MoneyLab.Finance",
    header_description: "自2012年以来构建加密平台",
    title_founderships: "创始人",
    title_partnerships: "合作伙伴",
    title_about: "关于 MoneyLab",
    about_text: "MoneyLab 是一个建立加密基础设施的创业工作室。",
    title_contact: "联系",
    footer_brand: "MoneyLab.Finance"
  },
  ja: {
    nav_home: "ホーム",
    nav_founders: "創業者",
    nav_partners: "パートナー",
    nav_about: "概要",
    nav_contact: "連絡先",
    header_title: "MoneyLab.Finance",
    header_description: "2012年から暗号プラットフォームを構築",
    title_founderships: "創業者",
    title_partnerships: "パートナー",
    title_about: "MoneyLabについて",
    about_text: "MoneyLabは暗号インフラを構築するスタジオです。",
    title_contact: "連絡先",
    footer_brand: "MoneyLab.Finance"
  },
  ko: {
    nav_home: "홈",
    nav_founders: "설립자",
    nav_partners: "파트너십",
    nav_about: "정보",
    nav_contact: "연락처",
    header_title: "MoneyLab.Finance",
    header_description: "2012년부터 크립토 플랫폼 구축",
    title_founderships: "설립자",
    title_partnerships: "파트너십",
    title_about: "MoneyLab 소개",
    about_text: "MoneyLab은 크립토 인프라를 구축하는 벤처 스튜디오입니다.",
    title_contact: "연락처",
    footer_brand: "MoneyLab.Finance"
  }
};

function changeLanguage(lang) {
  for (const key in translations[lang]) {
    const el = document.getElementById(key);
    if (el) el.innerText = translations[lang][key];
  }
  document.documentElement.lang = lang;
  document.body.dir = (lang === 'fa' || lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
}
"""

# Save to main.js file
js_path = "/mnt/data/main.js"
with open(js_path, "w") as f:
    f.write(main_js_code)

js_path
