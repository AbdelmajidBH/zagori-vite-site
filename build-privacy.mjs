import { readFileSync, writeFileSync } from 'node:fs';
const b64 = (f) => readFileSync(f, 'utf8').trim();
const logoHeader = b64('assets-src/logo-header.b64');
const favicon = b64('assets-src/favicon.b64');
const PHONE = '0679003001';
const WHATSAPP = '212679003001';

const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Zagori Vite — سياسة الخصوصية | Politique de confidentialité</title>
<link rel="icon" type="image/png" href="data:image/png;base64,${favicon}" />
<link rel="stylesheet" href="site.css" />
</head>
<body>

<header class="site-header">
  <div class="container">
    <a href="./" class="brand">
      <img src="data:image/png;base64,${logoHeader}" alt="Zagori Vite" />
      <div><div class="brand-name">Zagori Vite</div></div>
    </a>
    <div class="lang-toggle">
      <button type="button" data-lang-btn="ar">عربي</button>
      <button type="button" data-lang-btn="fr">FR</button>
    </div>
  </div>
</header>

<div class="container">
  <div class="policy">

    <div data-ar>
      <h1>سياسة الخصوصية</h1>
      <p class="updated">آخر تحديث: غشت 2026</p>

      <p>هذه سياسة الخصوصية الخاصة بتطبيق <strong>Zagori Vite (زاكوري فيت)</strong>، تطبيق لطلب خدمات التوصيل داخل مدينة أكادير، المغرب. باستخدامك للتطبيق فإنك توافق على ما ورد في هذه السياسة.</p>

      <h2>المعطيات التي لا نجمعها</h2>
      <p>التطبيق <strong>لا يطلب إنشاء حساب</strong>، ولا يطلب رقم هاتفك أو بريدك الإلكتروني أو أي معطى شخصي آخر. لا نستعمل أي أداة تتبع أو تحليل سلوك المستخدم (Analytics)، ولا نبيع ولا نشارك أي معطى مع أي جهة خارجية، لأننا ببساطة لا نجمع شيئاً.</p>

      <h2>ما يُحفظ على هاتفك فقط</h2>
      <p>يحفظ التطبيق محلياً على هاتفك، دون إرساله إلى أي خادم:</p>
      <ul>
        <li>اللغة التي اخترتها (عربية أو فرنسية)</li>
        <li>نسخة مؤقتة من قائمة الخدمات (لتشتغل التطبيق دون انترنت)</li>
      </ul>
      <p>هذه المعطيات تبقى على هاتفك ويمكن حذفها في أي وقت بحذف بيانات التطبيق من إعدادات هاتفك.</p>

      <h2>الإشهار وتتبع السلوك</h2>
      <p>لا يحتوي التطبيق على <strong>أي إشهار</strong>، ولا على أي أداة لتتبع سلوك المستخدم أو تحليل الاستعمال (Analytics)، ولا على معرّف إشهاري للجهاز. لا شركاء إشهاريين، لا بيانات تُستعمل لأغراض تسويقية.</p>

      <h2>الأذونات المستعملة</h2>
      <p>يحتاج التطبيق فقط إلى الاتصال بالإنترنت لتحميل قائمة الخدمات المحدثة. لا يطلب أي إذن آخر: لا الموقع الجغرافي، لا الكاميرا، لا جهات الاتصال، لا الميكروفون.</p>

      <h2>الاتصال وواتساب</h2>
      <p>عند الضغط على زر «اتصل» أو «واتساب»، يفتح التطبيق تطبيق الهاتف أو واتساب الخاص بك: أنت تغادر تطبيق Zagori Vite، والمحادثة التي تلي ذلك تخضع لسياسة الخصوصية الخاصة بواتساب أو بمشغل هاتفك، وليس لهذه السياسة. يمكنك الاطلاع على <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">سياسة خصوصية واتساب</a>.</p>

      <h2>الأطفال</h2>
      <p>خدمة «وجبات التلاميذ» موجهة لأولياء الأمور، وليس للأطفال أنفسهم. لا يجمع التطبيق أي معطى يخص الأطفال؛ التواصل بخصوص هذه الخدمة يتم بين ولي الأمر وزاكوري فيت عبر الهاتف أو واتساب، خارج التطبيق.</p>

      <h2>تعديلات على هذه السياسة</h2>
      <p>قد نحدّث هذه الصفحة من وقت لآخر. ننصحكم بمراجعتها بشكل دوري. الاستمرار في استعمال التطبيق بعد أي تعديل يعني موافقتكم عليه.</p>

      <h2>تواصل معنا</h2>
      <p>لأي سؤال يخص هذه السياسة أو خصوصية بياناتكم:</p>
      <ul>
        <li>📞 الهاتف: ${PHONE}</li>
        <li>💬 واتساب: <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">${PHONE}</a></li>
      </ul>

      <a class="back-link" href="./">→ العودة إلى الصفحة الرئيسية</a>
    </div>

    <div data-fr>
      <h1>Politique de confidentialité</h1>
      <p class="updated">Dernière mise à jour : août 2026</p>

      <p>Cette politique de confidentialité concerne l'application <strong>Zagori Vite</strong>, une application de mise en relation pour des services de livraison à Agadir, Maroc. En utilisant l'application, vous acceptez les termes ci-dessous.</p>

      <h2>Ce que nous ne collectons pas</h2>
      <p>L'application <strong>ne demande aucune création de compte</strong>, ni votre numéro de téléphone, ni votre adresse e-mail, ni aucune autre donnée personnelle. Nous n'utilisons aucun outil de suivi ou d'analyse du comportement (Analytics), et nous ne vendons ni ne partageons aucune donnée avec un tiers — nous n'en collectons tout simplement aucune.</p>

      <h2>Ce qui reste uniquement sur votre téléphone</h2>
      <p>L'application enregistre localement sur votre téléphone, sans jamais l'envoyer à un serveur :</p>
      <ul>
        <li>La langue que vous avez choisie (arabe ou français)</li>
        <li>Une copie temporaire de la liste des services (pour fonctionner hors ligne)</li>
      </ul>
      <p>Ces données restent sur votre appareil et peuvent être effacées à tout moment en supprimant les données de l'application depuis les réglages de votre téléphone.</p>

      <h2>Publicité et suivi</h2>
      <p>L'application ne contient <strong>aucune publicité</strong>, aucun outil de suivi ou d'analyse du comportement (Analytics), et aucun identifiant publicitaire de l'appareil. Pas de partenaire publicitaire, aucune donnée utilisée à des fins marketing.</p>

      <h2>Autorisations utilisées</h2>
      <p>L'application a seulement besoin d'un accès à Internet pour télécharger la liste actualisée des services. Elle ne demande aucune autre autorisation : ni localisation, ni appareil photo, ni contacts, ni microphone.</p>

      <h2>Appel et WhatsApp</h2>
      <p>Lorsque vous appuyez sur « Appeler » ou « WhatsApp », l'application ouvre l'application téléphone ou WhatsApp de votre appareil : vous quittez alors Zagori Vite, et la conversation qui suit relève de la politique de confidentialité de WhatsApp ou de votre opérateur, pas de la présente politique. Consultez la <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">politique de confidentialité de WhatsApp</a>.</p>

      <h2>Enfants</h2>
      <p>Le service « Repas des écoliers » s'adresse aux parents, pas aux enfants eux-mêmes. L'application ne collecte aucune donnée concernant des enfants ; les échanges relatifs à ce service se font entre le parent et Zagori Vite par téléphone ou WhatsApp, en dehors de l'application.</p>

      <h2>Modifications de cette politique</h2>
      <p>Cette page peut être mise à jour ponctuellement. Nous vous invitons à la consulter régulièrement. Continuer à utiliser l'application après une modification vaut acceptation de celle-ci.</p>

      <h2>Nous contacter</h2>
      <p>Pour toute question sur cette politique ou la confidentialité de vos données :</p>
      <ul>
        <li>📞 Téléphone : ${PHONE}</li>
        <li>💬 WhatsApp : <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">${PHONE}</a></li>
      </ul>

      <a class="back-link" href="./">→ Retour à l'accueil</a>
    </div>

  </div>
</div>

<footer>
  <div class="container">
    <div class="foot-brand">
      <img src="data:image/png;base64,${logoHeader}" alt="Zagori Vite" />
      <span>Zagori Vite</span>
    </div>
  </div>
  <div class="copyright">© 2026 Zagori Vite</div>
</footer>

<script src="site.js"></script>
</body>
</html>
`;

writeFileSync('privacy.html', html);
console.log('privacy.html généré :', (html.length / 1024).toFixed(0), 'Ko');
