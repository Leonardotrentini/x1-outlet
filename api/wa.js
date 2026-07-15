const LINKS = [
  'https://api.whatsapp.com/message/ITVB7NLV6XO5H1?autoload=1&app_absent=0',
  'https://api.whatsapp.com/send/?phone=5511910532881&text=Ol%C3%A1%2C+vim+do+site+e+queria+comprar+no+atacado%21&type=phone_number&app_absent=0',
];

const g = globalThis;
if (typeof g.__waSeq !== 'number' || !Number.isFinite(g.__waSeq)) {
  g.__waSeq = 0;
}

module.exports = (req, res) => {
  const idx = g.__waSeq % LINKS.length;
  g.__waSeq += 1;

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('CDN-Cache-Control', 'no-store');
  res.setHeader('Vercel-CDN-Cache-Control', 'no-store');
  res.redirect(302, LINKS[idx]);
};
