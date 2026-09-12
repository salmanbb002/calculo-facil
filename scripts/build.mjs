#!/usr/bin/env node
// Generates every static HTML page for the site from scripts/shell.mjs +
// scripts/tools-data.mjs. Re-run any time a tool is added/changed:
//   node scripts/build.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { page, h, SITE_URL, SITE_TITLE, seoContent, faqBlock } from './shell.mjs';
import { TOOLS } from './tools-data.mjs';
import { SEO_CONTENT } from './seo-content.mjs';

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
  <section>
    <h2>Mais de 70 calculadoras gratuitas em português</h2>
    <p>Além desta calculadora básica, o ${SITE_TITLE} reúne mais de 70 ferramentas gratuitas organizadas por categoria: <a href="/calculadora-cientifica">calculadora científica</a> e <a href="/calculo-raiz-quadrada">raízes</a> em Matemática, <a href="/calculadora-horario">calculadora de horas</a> e <a href="/calcular-idade">cálculo de idade</a> em Tempo, <a href="/calcular-iva">IVA</a> e <a href="/juros-compostos-capitalizacao">juros compostos</a> em Finanças, conversões de <a href="/converter-binario-hexadecimal">binário/hexadecimal</a> em Informática, <a href="/converter-distancia">unidades de medida</a> em Conversão, áreas e perímetros em Geometria, e <a href="/calculo-imc">IMC</a> ou <a href="/calcular-media">média</a> em Diversos. Todas as calculadoras são gratuitas, funcionam no navegador e não exigem cadastro.</p>
  </section>
</section>`;

const homeFaq = faqBlock([
  { q: 'O site calculo-facil é realmente gratuito?', a: 'Sim, todas as calculadoras do site são 100% gratuitas e não exigem cadastro, assinatura ou pagamento de qualquer tipo.' },
  { q: 'Preciso instalar algum aplicativo para usar as calculadoras?', a: 'Não. Todas as ferramentas funcionam diretamente no navegador, em computador, tablet ou celular, sem necessidade de instalação.' },
  { q: 'Meus cálculos e dados ficam salvos em algum servidor?', a: 'Não. Todos os cálculos acontecem inteiramente no seu navegador (client-side) — nenhum dado é enviado ou armazenado em servidores externos.' },
  { q: 'Qual a diferença entre a calculadora da página inicial e a calculadora científica?', a: 'A calculadora da página inicial faz operações básicas (soma, subtração, multiplicação, divisão); a calculadora científica, disponível em uma página separada, inclui funções avançadas como potências, raízes, logaritmos e trigonometria.' }
], '/');

write('', page({
  slug: '', title: `${SITE_TITLE} — Calculadora online grátis`,
  description: 'Calculadora online gratuita para cálculos simples com operações de adição, multiplicação, divisão e subtração.',
  activeNav: 'calculatrice',
  bodyHtml: calcWidget + homeFaq.html,
  extraCss: ['/assets/css/calculator.css'],
  extraJs: ['/assets/js/calculator.js'],
  jsonLd: homeFaq.schema ? [homeFaq.schema] : []
}));

/* ---------------- tool pages ---------------- */
let seoContentCount = 0;
for (const t of TOOLS) {
  const seo = SEO_CONTENT[t.slug];
  let extraHtml = '';
  let jsonLd = [];
  if (seo) {
    seoContentCount++;
    const rendered = seoContent(seo, t.activeNav, '/' + t.slug);
    extraHtml = rendered.html;
    jsonLd = rendered.jsonLd;
  }
  write(t.slug, page({
    slug: t.slug, title: t.title, description: t.description,
    activeNav: t.activeNav, breadcrumb: t.breadcrumb,
    bodyHtml: t.body + extraHtml,
    extraCss: ['/assets/css/calculator.css', ...(t.extraCss || [])],
    extraJs: t.extraJs || [],
    inlineScript: t.script || '',
    jsonLd
  }));
}

/* ---------------- static / legal pages ---------------- */
const CONTACT_EMAIL = 'contato@calculadorasonline.xyz';

const staticPages = [
  { slug: 'contato', title: `Contato — ${SITE_TITLE}`, h1: 'Contato',
    body: `<p>Encontrou um erro de cálculo, um bug ou quer sugerir uma nova calculadora? Adoraríamos ouvir você.</p>
<p>Escreva para <strong>${CONTACT_EMAIL}</strong> descrevendo: (1) qual calculadora, (2) os valores que você digitou e (3) o resultado esperado × o resultado obtido. Isso nos ajuda a corrigir o problema rapidamente.</p>
<p>Também pode escrever se quiser sugerir uma calculadora que ainda não existe no site — estamos sempre ampliando o catálogo de ferramentas.</p>` },
  { slug: 'termos-legais', title: `Termos legais — ${SITE_TITLE}`, h1: 'Termos legais',
    body: `<p>O ${SITE_TITLE} (${SITE_URL}) é um site de calculadoras online gratuitas, voltado ao público de língua portuguesa.</p>
<h2>Identificação</h2>
<p>Este site é operado de forma independente. Para questões legais, dúvidas ou solicitações, use a página de <a href="/contato">contato</a>.</p>
<h2>Propriedade intelectual</h2>
<p>O código, o design e os textos deste site são de propriedade do ${SITE_TITLE}, exceto quando indicado o contrário. O conteúdo pode ser referenciado e linkado livremente, mas não reproduzido integralmente em outro site sem autorização.</p>
<h2>Exatidão dos cálculos</h2>
<p>Todas as calculadoras são desenvolvidas com atenção à precisão matemática, mas são fornecidas "como estão", sem garantias. Para decisões financeiras, médicas, de engenharia ou jurídicas importantes, consulte sempre um profissional qualificado — os resultados aqui têm caráter informativo e educacional.</p>` },
  { slug: 'politica-de-privacidade', title: `Política de privacidade — ${SITE_TITLE}`, h1: 'Política de privacidade',
    body: `<p>Esta política explica como o ${SITE_TITLE} trata os dados dos visitantes.</p>
<h2>Os cálculos ficam no seu navegador</h2>
<p>Todas as calculadoras deste site funcionam inteiramente no navegador (client-side). Os números que você digita — idade, valores financeiros, medidas, senhas geradas, etc. — <strong>não são enviados nem armazenados em nenhum servidor</strong>. Ao fechar ou recarregar a página, todos os dados inseridos desaparecem.</p>
<h2>Dados de navegação</h2>
<p>Como a maioria dos sites, podemos coletar dados técnicos básicos e anônimos de visita (como páginas acessadas e tipo de dispositivo) através de ferramentas de estatística, para entender como melhorar o site. Esses dados não identificam você pessoalmente.</p>
<h2>Cookies</h2>
<p>Veja detalhes específicos sobre cookies na nossa <a href="/cookie">política de cookies</a>.</p>
<h2>Seus direitos</h2>
<p>Como não exigimos cadastro nem coletamos dados pessoais identificáveis para usar as calculadoras, não mantemos um banco de dados de usuários. Para dúvidas sobre privacidade, use a página de <a href="/contato">contato</a>.</p>` },
  { slug: 'cookie', title: `Política de cookies — ${SITE_TITLE}`, h1: 'Política de cookies',
    body: `<p>Este site pode usar cookies — pequenos arquivos de texto salvos no seu navegador — para fins estritamente técnicos e de estatística de uso anônima.</p>
<h2>Tipos de cookies que podemos usar</h2>
<p><strong>Cookies técnicos/essenciais:</strong> necessários para o funcionamento básico do site (como lembrar preferências de exibição do menu).</p>
<p><strong>Cookies de estatística:</strong> usados para entender, de forma anônima e agregada, quais páginas e calculadoras são mais acessadas, ajudando a priorizar melhorias.</p>
<p>Atualmente este site não exibe anúncios nem usa cookies de publicidade/rastreamento de terceiros. Caso isso mude no futuro, esta página será atualizada.</p>
<h2>Como gerenciar cookies</h2>
<p>Você pode bloquear ou apagar cookies diretamente nas configurações do seu navegador a qualquer momento. Bloquear cookies não impede o uso das calculadoras, que funcionam de forma independente no seu navegador.</p>` },
  { slug: 'termos-de-uso', title: `Termos de uso — ${SITE_TITLE}`, h1: 'Termos de uso',
    body: `<p>Ao usar o ${SITE_TITLE}, você concorda com os termos abaixo.</p>
<h2>Uso gratuito</h2>
<p>Todas as calculadoras são gratuitas para uso pessoal, educacional e profissional. Não é necessário criar conta ou pagar qualquer valor.</p>
<h2>O que você pode fazer</h2>
<p>Usar livremente qualquer calculadora do site, quantas vezes quiser, e compartilhar links para as páginas com outras pessoas.</p>
<h2>O que não é permitido</h2>
<p>Copiar ou republicar o código-fonte, o design ou os textos do site em outro domínio sem autorização; usar scripts automatizados para sobrecarregar o servidor; ou usar o site para fins ilegais.</p>
<h2>Limitação de responsabilidade</h2>
<p>As calculadoras são fornecidas "como estão". Embora busquemos sempre a precisão matemática, não nos responsabilizamos por decisões tomadas exclusivamente com base nos resultados apresentados aqui — especialmente em questões financeiras, médicas ou jurídicas, onde a consulta a um profissional é sempre recomendada.</p>
<h2>Alterações</h2>
<p>Estes termos podem ser atualizados periodicamente. O uso contínuo do site após uma alteração implica a aceitação dos novos termos.</p>` },
];

const faqPageItems = [
  { q: 'O site é realmente gratuito?', a: 'Sim. Todas as mais de 70 calculadoras do site são 100% gratuitas, sem necessidade de cadastro, assinatura ou pagamento.' },
  { q: 'Meus dados e cálculos são salvos em algum servidor?', a: 'Não. Todos os cálculos acontecem inteiramente no seu navegador (client-side) — nada do que você digita é enviado ou armazenado em um servidor.' },
  { q: 'Preciso instalar algum aplicativo?', a: 'Não. Todas as calculadoras funcionam direto no navegador, em computador, tablet ou celular, sem instalação.' },
  { q: 'O site funciona sem internet depois de carregado?', a: 'Como os cálculos são feitos no navegador, a maioria das calculadoras continua funcionando mesmo com conexão instável, uma vez que a página já tenha sido carregada.' },
  { q: 'Posso usar as calculadoras em dispositivos móveis?', a: 'Sim, todas as calculadoras são responsivas e funcionam perfeitamente em celulares e tablets, além de computadores.' },
  { q: 'Encontrei um erro em uma calculadora. Como reporto?', a: 'Entre em contato pela página de <a href="/contato">contato</a> descrevendo a calculadora, os valores usados e o resultado esperado.' },
  { q: 'Quantas calculadoras o site oferece?', a: 'Mais de 70 ferramentas organizadas em 7 categorias: Matemática, Tempo, Finanças, Informática, Conversão, Geometria e Diversos, além da calculadora básica da página inicial.' }
];

for (const s of staticPages) {
  write(s.slug, page({
    slug: s.slug, title: s.title, description: s.title,
    activeNav: '', bodyHtml: h.card(s.h1, s.body)
  }));
}

const faqRendered = faqBlock(faqPageItems, '/faq');
write('faq', page({
  slug: 'faq', title: `Perguntas frequentes — ${SITE_TITLE}`, description: `Perguntas frequentes sobre o ${SITE_TITLE} e suas calculadoras gratuitas.`,
  activeNav: '', bodyHtml: h.card('Perguntas frequentes', faqPageItems.map(f => `<div class="faqItem"><h2>${f.q}</h2><p>${f.a}</p></div>`).join('')),
  jsonLd: faqRendered.schema ? [faqRendered.schema] : []
}));

/* ---------------- vercel config, robots, sitemap ---------------- */
writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify({
  cleanUrls: true,
  trailingSlash: false
}, null, 2) + '\n');

writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);

const allSlugs = ['', ...TOOLS.map(t => t.slug), ...staticPages.map(s => s.slug), 'faq'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allSlugs.map(s => `  <url><loc>${SITE_URL}/${s}</loc></url>`).join('\n') +
  `\n</urlset>\n`;
writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

console.log(`Built ${1 + TOOLS.length + staticPages.length + 1} pages (1 homepage, ${TOOLS.length} tools, ${staticPages.length + 1} static). SEO content present on ${seoContentCount}/${TOOLS.length} tool pages.`);
