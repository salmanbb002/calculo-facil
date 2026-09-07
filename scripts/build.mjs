#!/usr/bin/env node
// Generates every static HTML page for the site from scripts/shell.mjs +
// scripts/tools-data.mjs. Re-run any time a tool is added/changed:
//   node scripts/build.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { page, h, SITE_URL, SITE_TITLE } from './shell.mjs';
import { TOOLS } from './tools-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function write(slug, html) {
  const file = slug === '' ? 'index.html' : `${slug}.html`;
  writeFileSync(path.join(ROOT, file), html, 'utf8');
}

/* ---------------- homepage (main keypad calculator) ---------------- */
const calcWidget = `
<div id="calc">
  <div id="calcTitre">${SITE_TITLE} : Calculadora Online</div>
  <div id="calcTotal">
    <div id="calcTotalChiffre" tabindex="0" contenteditable="true" autocapitalize="off" spellcheck="false">0</div>
    <div id="calcRetenu"><span id="calcCarriedValue"></span></div>
  </div>
  <div id="calcKeys">
    <div class="calcCol">
      <div class="calcRow">
        <button class="btnCalc" data-digit="7">7</button>
        <button class="btnCalc" data-digit="8">8</button>
        <button class="btnCalc" data-digit="9">9</button>
      </div>
      <div class="calcRow">
        <button class="btnCalc" data-digit="4">4</button>
        <button class="btnCalc" data-digit="5">5</button>
        <button class="btnCalc" data-digit="6">6</button>
      </div>
      <div class="calcRow">
        <button class="btnCalc" data-digit="1">1</button>
        <button class="btnCalc" data-digit="2">2</button>
        <button class="btnCalc" data-digit="3">3</button>
      </div>
      <div class="calcRow">
        <button class="btnCalc btnCalcWide" data-digit="0">0</button>
        <button class="btnCalc" data-digit=".">.</button>
      </div>
      <button class="btnCalc btnCalcWide" id="btnThousands" style="width:auto;height:auto;font-size:13px;padding:8px 14px">Sep. milhares</button>
    </div>
    <div class="calcCol">
      <div class="calcRow">
        <button class="btnCalc" id="btnCE">CE</button>
        <button class="btnCalc" id="btnC">C</button>
      </div>
      <div class="calcRow">
        <button class="btnCalc" data-op="÷">÷</button>
        <button class="btnCalc" data-op="×">×</button>
      </div>
      <div class="calcRow">
        <button class="btnCalc" data-op="-">-</button>
        <button class="btnCalc" id="btnAdd" data-op="+">+</button>
      </div>
      <div class="calcRow">
        <button class="btnCalc" id="btnEqual">=</button>
      </div>
    </div>
  </div>
</div>
<div id="historyWrap" style="display:none">
  <div id="historyTitle">Histórico dos resultados<small>(Todas as células são editáveis)</small></div>
  <div class="table-responsive">
    <table id="historyTable">
      <thead><tr><th>Operação</th><th>Resultado</th><th>Hora</th><th>Nota</th></tr></thead>
      <tbody></tbody>
    </table>
  </div>
  <div id="historyButtons" style="text-align:center;margin-top:14px">
    <button class="btnGeneral" id="historyExportCsv" type="button">Exportar CSV</button>
    <button class="btnGeneral" id="historyExportPdf" type="button">Exportar PDF</button>
  </div>
</div>
<section id="informationCalculatrice">
  <section>
    <h1>Calculadora online — calculadora básica gratuita</h1>
    <h2>Instruções da calculadora</h2>
    <p>Esta <strong>calculadora online</strong> é gratuita e fácil de usar. O princípio desta calculadora é executar operações simples: adição, subtração, multiplicação e divisão.</p>
    <p>Ela funciona em qualquer dispositivo — computador, tablet ou celular — e pode ser usada com o mouse, o toque ou o teclado.</p>
  </section>
  <section>
    <h2>Atalhos do teclado</h2>
    <p><kbd>◀︎</kbd> ⇝ CE</p>
    <p><kbd>▶︎</kbd> ⇝ C</p>
    <p><kbd>+</kbd> ⇝ +</p>
    <p><kbd>*</kbd> ⇝ ×</p>
    <p><kbd>-</kbd> ⇝ -</p>
    <p><kbd>/</kbd> ⇝ ÷</p>
    <p><kbd>Enter</kbd> ⇝ =</p>
  </section>
  <section>
    <h2>Editar a tela</h2>
    <p>Você pode clicar diretamente no visor e digitar um novo valor. Apenas números válidos são aceitos.</p>
  </section>
  <section>
    <h2>Separador de milhares</h2>
    <p>Para melhorar a legibilidade de números grandes, mantenha pressionado o botão "Sep. milhares".</p>
  </section>
  <section>
    <h2>Histórico dos resultados</h2>
    <p>Cada operação com "=" fica registrada no histórico abaixo do teclado, com o horário. Você pode exportar esse histórico em CSV ou PDF, e cada célula da tabela é editável.</p>
  </section>
</section>`;

write('', page({
  slug: '', title: `${SITE_TITLE} — Calculadora online grátis`,
  description: 'Calculadora online gratuita para cálculos simples com operações de adição, multiplicação, divisão e subtração.',
  activeNav: 'calculatrice',
  bodyHtml: calcWidget,
  extraCss: ['/assets/css/calculator.css'],
  extraJs: ['/assets/js/calculator.js']
}));

/* ---------------- tool pages ---------------- */
for (const t of TOOLS) {
  write(t.slug, page({
    slug: t.slug, title: t.title, description: t.description,
    activeNav: t.activeNav, breadcrumb: t.breadcrumb,
    bodyHtml: t.body,
    extraCss: ['/assets/css/calculator.css'],
    inlineScript: t.script
  }));
}

/* ---------------- static / legal pages ---------------- */
const staticPages = [
  { slug: 'contato', title: `Contato — ${SITE_TITLE}`, h1: 'Contato', body: '<p>Encontrou um bug ou quer sugerir uma calculadora? Escreva para <strong>contato@calculo-facil.com</strong> (endereço de exemplo — atualize para o seu).</p>' },
  { slug: 'termos-legais', title: `Termos legais — ${SITE_TITLE}`, h1: 'Termos legais', body: '<p>Texto de termos legais a ser preenchido pelo proprietário do site.</p>' },
  { slug: 'politica-de-privacidade', title: `Política de privacidade — ${SITE_TITLE}`, h1: 'Política de privacidade', body: '<p>Texto de política de privacidade a ser preenchido pelo proprietário do site.</p>' },
  { slug: 'cookie', title: `Política de cookies — ${SITE_TITLE}`, h1: 'Política de cookies', body: '<p>Este site pode usar cookies para anúncios e estatísticas de uso. Texto a ser preenchido pelo proprietário do site.</p>' },
  { slug: 'termos-de-uso', title: `Termos de uso — ${SITE_TITLE}`, h1: 'Termos de uso', body: '<p>Texto de termos de uso a ser preenchido pelo proprietário do site.</p>' },
  { slug: 'faq', title: `Perguntas frequentes — ${SITE_TITLE}`, h1: 'Perguntas frequentes', body: '<p><strong>Esta calculadora é gratuita?</strong><br>Sim, todas as calculadoras do site são 100% gratuitas.</p><p><strong>Meus dados são salvos?</strong><br>Os cálculos acontecem inteiramente no seu navegador — nada é enviado a um servidor.</p>' }
];
for (const s of staticPages) {
  write(s.slug, page({
    slug: s.slug, title: s.title, description: s.title,
    activeNav: '', bodyHtml: h.card(s.h1, s.body)
  }));
}

/* ---------------- vercel config, robots, sitemap ---------------- */
writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify({
  cleanUrls: true,
  trailingSlash: false
}, null, 2) + '\n');

writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);

const allSlugs = ['', ...TOOLS.map(t => t.slug), ...staticPages.map(s => s.slug)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allSlugs.map(s => `  <url><loc>${SITE_URL}/${s}</loc></url>`).join('\n') +
  `\n</urlset>\n`;
writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

console.log(`Built ${1 + TOOLS.length + staticPages.length} pages (1 homepage, ${TOOLS.length} tools, ${staticPages.length} static).`);
