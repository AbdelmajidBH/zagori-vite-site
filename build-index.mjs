import { readFileSync, writeFileSync } from 'node:fs';

const b64 = (f) => readFileSync(f, 'utf8').trim();
const logoHeader = b64('assets-src/logo-header.b64');
const logoHero = b64('assets-src/logo-hero.b64');
const favicon = b64('assets-src/favicon.b64');
const screen1 = b64('assets-src/screen-1.b64');
const screen2 = b64('assets-src/screen-2.b64');
const screen3 = b64('assets-src/screen-3.b64');

// ─────────────────────────────────────────────────────────────────────────
// Contenu : services repris tels quels de catalog.json (source de vérité).
// ─────────────────────────────────────────────────────────────────────────
const services = [
  { icon: '💊', fr: 'Pharmacie et médicaments', ar: 'الصيدلية والدواء',
    descFr: "Nous passons à la pharmacie de votre choix et vous livrons vos médicaments, où que vous soyez dans Agadir. Envoyez simplement la photo de votre ordonnance sur WhatsApp.",
    descAr: 'نمر على الصيدلية التي تختارها ونوصل لك دواءك أينما كنت داخل أكادير. أرسل فقط صورة الوصفة الطبية عبر واتساب.',
    exFr: ['Ordonnances', 'Sans ordonnance', 'Parapharmacie', 'Matériel médical'],
    exAr: ['الوصفات الطبية', 'بدون وصفة', 'مستحضرات التجميل', 'معدات طبية'] },
  { icon: '🍔', fr: 'Repas et restaurants', ar: 'الوجبات والمطاعم',
    descFr: "Commandez auprès de n'importe quel restaurant d'Agadir : nous allons chercher votre commande et nous vous la livrons chaude.",
    descAr: 'اطلب من أي مطعم داخل أكادير: نذهب لجلب طلبك ونوصله لك ساخناً.',
    exFr: ['Plats et grillades', 'Sandwichs et pizzas', 'Commandes de groupe', 'Livraison au bureau'],
    exAr: ['أطباق ومشويات', 'سندويتشات وبيتزا', 'طلبات جماعية', 'التوصيل للمكتب'] },
  { icon: '🥬', fr: 'Épicerie, fruits et légumes', ar: 'البقالة والخضر والفواكه',
    descFr: "Dites-nous votre liste : nous faisons le tour de l'épicerie, du marché ou du primeur, et nous vous livrons.",
    descAr: 'أرسل لنا لائحتك: نمر على البقالة أو السوق أو محل الخضر، ونوصل لك كل شيء.',
    exFr: ['Pain, lait, œufs', 'Fruits et légumes', 'Boissons', "Produits d'entretien"],
    exAr: ['خبز وحليب وبيض', 'خضر وفواكه', 'مشروبات', 'مواد التنظيف'] },
  { icon: '🛒', fr: 'Courses et achats', ar: 'المشتريات وقضاء الأغراض',
    descFr: "Grande surface, magasin ou marché : nous achetons pour vous et nous vous livrons, ticket de caisse à l'appui.",
    descAr: 'المتجر الكبير أو الدكان أو السوق: نشتري عنك ونوصل لك، مع وصل الأداء.',
    exFr: ['Grande surface', 'Achats en magasin', 'Retrait de commande', 'Ticket remis'],
    exAr: ['متجر كبير', 'شراء من المحلات', 'سحب طلب', 'تسليم الوصل'] },
  { icon: '📦', fr: 'Colis et documents', ar: 'الطرود والوثائق',
    descFr: "D'un point à un autre dans Agadir, dans l'heure : documents, clés, colis et petites marchandises.",
    descAr: 'من نقطة إلى أخرى داخل أكادير، في غضون ساعة: وثائق، مفاتيح، طرود وسلع صغيرة.',
    exFr: ['Documents', 'Clés oubliées', 'Petites marchandises', 'Course urgente'],
    exAr: ['وثائق', 'مفاتيح منسية', 'سلع صغيرة', 'مهمة مستعجلة'] },
  { icon: '🎒', fr: 'Repas des écoliers', ar: 'وجبات التلاميذ',
    descFr: "Le repas chaud de votre enfant livré directement à son école, à l'heure de la pause. Du lundi au vendredi.",
    descAr: 'وجبة طفلك الساخنة تُوصَّل مباشرة إلى مدرسته وقت الاستراحة. من الاثنين إلى الجمعة.',
    exFr: ['Repas maison', 'Repas de restaurant', "À l'école", 'Lundi-vendredi'],
    exAr: ['وجبة من البيت', 'وجبة من مطعم', 'إلى المدرسة', 'من الاثنين للجمعة'] },
];

const PHONE = '0679003001';
const WHATSAPP = '212679003001';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=ma.zagorivite.app';
const waHref = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

const playIcon = `<svg viewBox="0 0 512 512" aria-hidden="true"><path fill="#00E5FF" d="M99 21c-14 8-23 23-23 40v390c0 17 9 32 23 40l231-235z"/><path fill="#FFC107" d="M99 21l289 165-77 78z"/><path fill="#FF3D00" d="M99 491l289-165-77-78z"/><path fill="#00C853" d="M311 256l77-78-289-165c-2 1-5 3-7 4z"/></svg>`;
const playButton = `
        <a class="btn btn-play" href="${PLAY_URL}" target="_blank" rel="noopener">
          ${playIcon}
          <span class="play-text">
            <small data-fr>Disponible sur</small>
            <small data-ar>متوفر على</small>
            <strong>Google Play</strong>
          </span>
        </a>`;

const servicesHtml = services.map((s) => `
        <div class="service-card">
          <div class="service-icon">${s.icon}</div>
          <h3 data-fr>${s.fr}</h3><h3 data-ar>${s.ar}</h3>
          <p data-fr>${s.descFr}</p><p data-ar>${s.descAr}</p>
          <div class="service-examples" data-fr>${s.exFr.map((e) => `<span>${e}</span>`).join('')}</div>
          <div class="service-examples" data-ar>${s.exAr.map((e) => `<span>${e}</span>`).join('')}</div>
        </div>`).join('\n');

const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Zagori Vite — توصيل داخل أكادير | Livraison à Agadir</title>
<meta name="description" content="زاكوري فيت: جميع خدمات التوصيل داخل أكادير. اتصل أو راسل على واتساب. Zagori Vite : toutes les livraisons dans Agadir, en un appel ou un message WhatsApp." />
<link rel="icon" type="image/png" href="data:image/png;base64,${favicon}" />
<link rel="stylesheet" href="site.css" />
</head>
<body>

<header class="site-header">
  <div class="container">
    <a href="./" class="brand">
      <img src="data:image/png;base64,${logoHeader}" alt="Zagori Vite" />
      <div>
        <div class="brand-name">Zagori Vite</div>
        <div class="brand-tag" data-fr>Livraison à Agadir</div>
        <div class="brand-tag" data-ar>التوصيل داخل أكادير</div>
      </div>
    </a>
    <div class="lang-toggle">
      <button type="button" data-lang-btn="ar">عربي</button>
      <button type="button" data-lang-btn="fr">FR</button>
    </div>
  </div>
</header>

<section class="hero">
  <div class="container">
    <div>
      <h1 data-fr>Commandez en un appel</h1>
      <h1 data-ar>اطلب بمكالمة واحدة</h1>
      <p class="lead" data-fr>Pharmacie, restaurants, courses, colis et plus encore : appelez-nous ou écrivez sur WhatsApp, on s'occupe du reste, partout dans Agadir.</p>
      <p class="lead" data-ar>الصيدلية، المطاعم، المشتريات، الطرود وأكثر: اتصل بنا أو راسلنا على واتساب، ونحن نتكفل بالباقي، في جميع أنحاء أكادير.</p>
      <div class="btn-row">
        <a class="btn btn-orange" href="tel:${PHONE}"><span data-fr>Appeler</span><span data-ar>اتصل</span></a>
        <a class="btn btn-whatsapp" href="${waHref('السلام عليكم زاكوري فيت، أريد أن أضع طلباً. هذا ما أحتاجه: ')}" data-ar target="_blank" rel="noopener">واتساب</a>
        <a class="btn btn-whatsapp" href="${waHref("Bonjour Zagori Vite, je souhaite passer une commande. Voici ce qu'il me faut : ")}" data-fr target="_blank" rel="noopener">WhatsApp</a>
      </div>
      <div class="btn-row" style="margin-top:12px;">${playButton}
      </div>
      <div class="pill">
        <span>📍</span>
        <span data-fr>Partout dans Agadir · Tous les jours, 8h – 23h</span>
        <span data-ar>في جميع أنحاء أكادير · كل يوم، من 8 صباحاً إلى 11 ليلاً</span>
      </div>
    </div>
    <div class="hero-image">
      <img src="data:image/jpeg;base64,${logoHero}" alt="Zagori Vite" />
    </div>
  </div>
</section>

<section>
  <div class="container">
    <h2 class="section-title" data-fr>Nos services</h2>
    <h2 class="section-title" data-ar>خدماتنا</h2>
    <p class="section-sub" data-fr>Une application, tous vos besoins du quotidien. Chaque service vaut pour tous les commerces d'Agadir : à vous de nous dire ce qu'il vous faut.</p>
    <p class="section-sub" data-ar>تطبيق واحد، لكل احتياجاتك اليومية. كل خدمة صالحة لجميع المحلات داخل أكادير: أخبرنا فقط بما تحتاجه.</p>
    <div class="services-grid">${servicesHtml}
    </div>
  </div>
</section>

<section style="background:var(--card); border-top:1px solid var(--border); border-bottom:1px solid var(--border);">
  <div class="container">
    <h2 class="section-title" data-fr>Comment ça marche</h2>
    <h2 class="section-title" data-ar>كيف يعمل التطبيق</h2>
    <p class="section-sub" data-fr>Trois étapes, aucun compte à créer.</p>
    <p class="section-sub" data-ar>ثلاث خطوات، دون إنشاء أي حساب.</p>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <h3 data-fr>Choisissez un service</h3><h3 data-ar>اختر خدمة</h3>
        <p data-fr>Parcourez le catalogue et ouvrez celui qui vous intéresse.</p>
        <p data-ar>تصفح الكتالوج وافتح الخدمة التي تهمك.</p>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <h3 data-fr>Appelez ou WhatsApp</h3><h3 data-ar>اتصل أو راسل</h3>
        <p data-fr>Le message est déjà prêt : précisez ce qu'il vous faut.</p>
        <p data-ar>الرسالة جاهزة: حدد ما تحتاجه.</p>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <h3 data-fr>On vous livre</h3><h3 data-ar>نوصل لك</h3>
        <p data-fr>À partir de 7 DH selon la distance, où que vous soyez à Agadir.</p>
        <p data-ar>ابتداءً من 7 دراهم حسب المسافة، أينما كنت في أكادير.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <h2 class="section-title" data-fr>Aperçu de l'application</h2>
    <h2 class="section-title" data-ar>لمحة عن التطبيق</h2>
    <p class="section-sub" data-fr>Simple, rapide, en arabe et en français.</p>
    <p class="section-sub" data-ar>بسيط وسريع، بالعربية والفرنسية.</p>
    <div class="preview-row">
      <img src="data:image/jpeg;base64,${screen1}" alt="Zagori Vite" loading="lazy" />
      <img src="data:image/jpeg;base64,${screen2}" alt="Zagori Vite" loading="lazy" />
      <img src="data:image/jpeg;base64,${screen3}" alt="Zagori Vite" loading="lazy" />
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="cta">
      <h2 data-fr>Téléchargez l'application</h2>
      <h2 data-ar>حمّل التطبيق</h2>
      <p data-fr>Ou appelez-nous / écrivez sur WhatsApp : même service, sans passer par l'application.</p>
      <p data-ar>أو اتصل بنا / راسلنا على واتساب: نفس الخدمة، دون المرور عبر التطبيق.</p>
      <div class="btn-row">${playButton}
      </div>
      <div class="btn-row" style="margin-top:14px;">
        <a class="btn btn-orange" href="tel:${PHONE}"><span data-fr>Appeler</span><span data-ar>اتصل</span> · ${PHONE}</a>
        <a class="btn btn-whatsapp" href="${waHref('السلام عليكم زاكوري فيت، أريد أن أضع طلباً. هذا ما أحتاجه: ')}" data-ar target="_blank" rel="noopener">واتساب</a>
        <a class="btn btn-whatsapp" href="${waHref("Bonjour Zagori Vite, je souhaite passer une commande. Voici ce qu'il me faut : ")}" data-fr target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="foot-brand">
      <img src="data:image/png;base64,${logoHeader}" alt="Zagori Vite" />
      <span>Zagori Vite</span>
    </div>
    <div class="foot-contact">
      <div>📞 ${PHONE}</div>
      <div data-fr>Agadir, Maroc</div>
      <div data-ar>أكادير، المغرب</div>
    </div>
    <nav>
      <a href="privacy.html" data-fr>Politique de confidentialité</a>
      <a href="privacy.html" data-ar>سياسة الخصوصية</a>
    </nav>
  </div>
  <div class="copyright">© 2026 Zagori Vite</div>
</footer>

<script src="site.js"></script>
</body>
</html>
`;

writeFileSync('index.html', html);
console.log('index.html généré :', (html.length / 1024).toFixed(0), 'Ko');
