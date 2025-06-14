const translations = {
  en: {
    nav_home: "Home",
    nav_founders: "Founderships",
    nav_partners: "Partnerships",
    nav_about: "About",
    nav_contact: "Contact",
    header_title: "MoneyLab.Finance",
    header_description: "Since 2012, we’ve been building foundational tools and platforms in crypto, blockchain, and digital finance.",
    title_founderships: "Founderships",
    title_partnerships: "Partnerships",
    title_about: "About MoneyLab",
    about_text: "MoneyLab is a venture studio building crypto-native infrastructure, startups, and digital public goods.",
    title_contact: "Contact",
    footer_brand: "MoneyLab.Finance"
  },
  fa: {
    nav_home: "خانه",
    nav_founders: "پروژه‌های بنیان‌گذاری",
    nav_partners: "همکاری‌ها",
    nav_about: "درباره",
    nav_contact: "تماس",
    header_title: "مانی‌لب",
    header_description: "از سال ۲۰۱۲، ما در حال ساخت ابزارها و پلتفرم‌های بنیادین در حوزهٔ رمز‌ارز، بلاکچین، و مالی دیجیتال بوده‌ایم.",
    title_founderships: "پروژه‌های تأسیسی",
    title_partnerships: "شرکای تجاری",
    title_about: "درباره‌ی مانی‌لب",
    about_text: "مانی‌لب یک استودیوی نوآفرینی است که زیرساخت‌های بومی رمزارز، استارتاپ‌ها و کالاهای عمومی دیجیتال را توسعه می‌دهد.",
    title_contact: "تماس با ما",
    footer_brand: "مانی‌لب"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_founders: "المشاريع التأسيسية",
    nav_partners: "الشراكات",
    nav_about: "حول",
    nav_contact: "اتصال",
    header_title: "ماني لاب",
    header_description: "منذ عام 2012، نقوم ببناء أدوات ومنصات أساسية في مجال التشفير والبلوكشين والتمويل الرقمي.",
    title_founderships: "المشاريع المؤسسة",
    title_partnerships: "الشراكات",
    title_about: "حول ماني لاب",
    about_text: "ماني لاب هو استوديو مشاريع يقوم بتطوير بنية تحتية أصلية للعملات الرقمية والشركات الناشئة والسلع العامة الرقمية.",
    title_contact: "تواصل معنا",
    footer_brand: "ماني لاب"
  }
};

const tooltips = {
  en: {
    "weseed.ir": "Seed investment platform.",
    "telebank.live": "Decentralized telecom-bank project.",
    "tardiwallet.com": "Secure crypto wallet infrastructure.",
    "steellet.com": "Smart payment wearables.",
    "rialchange.com": "Crypto rial gateway.",
    "metabank.live": "Next-gen Web3 bank.",
    "luxiv.io": "Luxury tokenized assets.",
    "hoopaad.com": "Culture-tech incubation.",
    "halalfi.ir": "Sharia-compliant DeFi.",
    "cid.chat": "Web3 private messenger."
  },
  fa: {
    "weseed.ir": "پلتفرم سرمایه‌گذاری بذری.",
    "telebank.live": "پروژه‌ی بانک-تلکام غیرمتمرکز.",
    "tardiwallet.com": "زیرساخت کیف‌پول امن رمزارز.",
    "steellet.com": "پوشیدنی‌های پرداخت هوشمند.",
    "rialchange.com": "درگاه رمزریال و تبادل ارز.",
    "metabank.live": "بانک نسل بعدی مبتنی بر وب۳.",
    "luxiv.io": "توکنیزاسیون دارایی‌های لوکس.",
    "hoopaad.com": "شتابدهنده فرهنگ و تکنولوژی.",
    "halalfi.ir": "دستگاه‌های دیفای مطابق شریعت.",
    "cid.chat": "پیام‌رسان خصوصی مبتنی بر وب۳."
  },
  ar: {
    "weseed.ir": "منصة استثمار مبكر.",
    "telebank.live": "مشروع بنك واتصالات لامركزي.",
    "tardiwallet.com": "بنية آمنة لمحفظة التشفير.",
    "steellet.com": "أجهزة قابلة للارتداء للدفع الذكي.",
    "rialchange.com": "بوابة تبادل الريال المشفر.",
    "metabank.live": "بنك ويب ٣ الجيل القادم.",
    "luxiv.io": "رمزنة الأصول الفاخرة.",
    "hoopaad.com": "حاضنة الثقافة والتكنولوجيا.",
    "halalfi.ir": "تمويل لامركزي متوافق مع الشريعة.",
    "cid.chat": "مراسلة خاصة تعتمد على Web3."
  }
};

function updateTooltips(lang) {
  const links = document.querySelectorAll("a.box");
  links.forEach(link => {
    const host = new URL(link.href).hostname.replace("www.", "");
    if (tooltips[lang] && tooltips[lang][host]) {
      link.title = tooltips[lang][host];
    }
  });
}

function changeLanguage(lang) {
  for (const key in translations[lang]) {
    const el = document.getElementById(key);
    if (el) el.innerText = translations[lang][key];
  }
  document.documentElement.lang = lang;
  document.body.dir = (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr';
  updateTooltips(lang);
}

window.onload = () => updateTooltips("en");
