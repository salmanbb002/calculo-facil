// Shared page shell: header, mega-nav, footer, and small HTML helper
// functions used by scripts/tools-data.mjs to build each tool's form.

export const SITE_NAME = 'calculo-facil';
export const SITE_TITLE = 'Calculadora Fácil';
export const SITE_URL = 'https://calculadorasonline.xyz';
export const CONTACT_EMAIL = 'salmanb0022@gmail.com';
export const WHATSAPP_NUMBER = '923377043287';

export const NAV = [
  {
    id: 'calculatrice', label: 'Calculadora', panel: 'navCalculatrice',
    groups: [
      { title: 'Calculadoras essenciais', links: [
        { href: '/', label: 'Calculadora online', hot: true },
        { href: '/calculadora-cientifica', label: 'Calculadora científica', hot: true },
        { href: '/calculadora-grafica', label: 'Calculadora gráfica', hot: true }
      ] },
      { title: 'Raízes', links: [
        { href: '/calculo-raiz-quadrada', label: 'Raiz quadrada (√)' },
        { href: '/calculo-raiz-cubica', label: 'Raiz cúbica (∛)' }
      ]},
      { title: 'Potências simples', links: [
        { href: '/calcular-potencia', label: 'Calculadora de potência (xⁿ)' },
        { href: '/calcular-numero-quadrado', label: 'Número ao quadrado (x²)' },
        { href: '/calculo-numero-cubo', label: 'Número ao cubo (x³)' }
      ]}
    ]
  },
  {
    id: 'math', label: 'Matemática', panel: 'navMath',
    groups: [
      { title: 'Científico', links: [
        { href: '/notacao-cientifica', label: 'Número ➜ Notação científica' },
        { href: '/converter-longitude', label: 'Longitude (DMS) ↔ Tempo (HMS)' }
      ]},
      { title: 'Números primos & álgebra', links: [
        { href: '/testar-verificar-numero-primo', label: 'Testar número primo' },
        { href: '/lista-numero-primo', label: 'Lista de números primos' },
        { href: '/maximo-divisor-comum-mdc', label: 'Máximo divisor comum (MDC)' }
      ]},
      { title: 'Resolvendo equações', links: [
        { href: '/resolver-equacao-primeiro-grau', label: 'Equação de 1º grau (ax + b = 0)' },
        { href: '/resolver-equacao-segundo-grau', label: 'Equação de 2º grau (ax² + bx + c = 0)' },
        { href: '/regra-de-tres', label: 'Regra de três (4ª proporcional)' }
      ]},
      { title: 'Funções', links: [
        { href: '/calcular-logaritmo', label: 'Logaritmo base 10 (log₁₀)' },
        { href: '/coeficiente-angular', label: 'Coeficiente angular de uma reta' }
      ]},
      { title: 'Frações', links: [
        { href: '/transformar-decimal-fracao', label: 'Decimal ➜ Fração' },
        { href: '/fracoes-irredutiveis-simplificar', label: 'Simplificar uma fração' }
      ]},
      { title: 'Radicais', links: [
        { href: '/minimo-multiplo-comum-mmc', label: 'Mínimo múltiplo comum (MMC)' },
        { href: '/simplificar-raiz-quadrada', label: 'Simplificar raiz quadrada' }
      ]}
    ]
  },
  {
    id: 'temps', label: 'Tempo', panel: 'navTemps',
    groups: [
      { title: 'Cálculos de durações', links: [
        { href: '/calculadora-horario', label: 'Calculadora de tempo', hot: true },
        { href: '/calcular-tempo-trabalho', label: 'Calcular tempo de trabalho', hot: true }
      ]},
      { title: 'Operações com durações', links: [
        { href: '/multiplicar-duracao', label: 'Multiplicação de duração', hot: true },
        { href: '/dividir-tempo-duracao', label: 'Divisão de duração', hot: true },
        { href: '/calcular-varios-horarios', label: 'Adição / Subtração de várias durações' }
      ]},
      { title: 'Conversão de tempo', links: [
        { href: '/conversao-hora-minuto-decimal', label: 'Horas ↔ Decimal', hot: true },
        { href: '/converter-tempo-duracao', label: 'Conversão de unidades de tempo' },
        { href: '/converter-timestamp-data', label: 'Timestamp ↔ Data' }
      ]},
      { title: 'Datas & calendários', links: [
        { href: '/calcular-adicao-subtracao-data', label: 'Adicionar / Subtrair datas' },
        { href: '/calcular-duracao-duas-datas', label: 'Intervalo entre duas datas' },
        { href: '/verificar-ano-bissexto', label: 'Ano bissexto ?' },
        { href: '/calcular-idade', label: 'Calcular a minha idade' }
      ]},
      { title: 'Ferramentas práticas', links: [
        { href: '/cronometro', label: 'Cronômetro' }
      ]}
    ]
  },
  {
    id: 'finance', label: 'Finanças', panel: 'navFinance',
    groups: [
      { title: 'Salário & benefícios', links: [
        { href: '/calculadora-salario-liquido', label: 'Calculadora de salário líquido', hot: true },
        { href: '/calculadora-ferias', label: 'Calculadora de férias', hot: true }
      ]},
      { title: 'IVA & percentagens', links: [
        { href: '/calcular-iva', label: 'Cálculo IVA', hot: true },
        { href: '/percentagem', label: 'Percentagens (cálculo, adição, subtração)' },
        { href: '/calcular-rateio', label: 'Rateio' },
        { href: '/calculadora-gorjeta', label: 'Calculadora de gorjeta' }
      ]},
      { title: 'Simulações & gestão', links: [
        { href: '/calcular-emprestimo-credito', label: 'Simulador de empréstimo (prestações)', hot: true },
        { href: '/calcular-custo-credito', label: 'Calcular o custo de um crédito' }
      ]},
      { title: 'Investimentos', links: [
        { href: '/juros-compostos-capitalizacao', label: 'Juros compostos (capitalização)' },
        { href: '/dobrar-capital', label: 'Dobrar o capital (tempo de rendimento)' },
        { href: '/calcular-comprar-vender-acoes', label: 'Bolsa : ganhos / perdas' },
        { href: '/converter-criptomoeda-real', label: 'Cripto ↔ Real' }
      ]}
    ]
  },
  {
    id: 'informatique', label: 'Informática', panel: 'navInformatique',
    groups: [
      { title: 'Segurança & criptografia', links: [
        { href: '/gerar-senha-sequencia-caracteres', label: 'Gerador de senha' },
        { href: '/criptografar-descriptografar-mensagem', label: 'Criptografar / Descriptografar 🔒' }
      ]},
      { title: 'Numeração & bases', links: [
        { href: '/converter-binario-hexadecimal', label: 'Decimal ↔ Binário / Hexa' },
        { href: '/somar-subtrair-hexadecimal', label: 'Operações hexadecimais' }
      ]},
      { title: 'Armazenamento & dados', links: [
        { href: '/converter-bytes', label: 'Converter bytes (KB, MB, GB, TB)' }
      ]},
      { title: 'Redes & formatos', links: [
        { href: '/converter-mascara-sub-rede', label: 'Máscara de sub-rede ↔ Binário / CIDR' },
        { href: '/calcular-faixa-enderecos-ip', label: 'Faixa de endereços IP' }
      ]},
      { title: 'Texto & strings', links: [
        { href: '/contar-caracteres', label: 'Contar os caracteres' },
        { href: '/remover-espacos-texto', label: 'Remover os espaços' },
        { href: '/converter-hexadecimal-texto', label: 'Hexadecimal ↔ Texto UTF-8' }
      ]}
    ]
  },
  {
    id: 'conversion', label: 'Conversão', panel: 'navConversion',
    groups: [
      { title: 'Distância, massa & volume', links: [
        { href: '/converter-distancia', label: 'Distância : m, km, cm, milha, polegada' },
        { href: '/converter-massa', label: 'Massa : g, kg, t, lb, oz' },
        { href: '/converter-volume', label: 'Volume : L ↔ m³' }
      ]},
      { title: 'Temperatura, energia & potência', links: [
        { href: '/converter-celsius-fahrenheit', label: 'Temperatura : °C ↔ °F' },
        { href: '/converter-potencia-motriz-cavalos-kw', label: 'Potência : kW ↔ cavalos' },
        { href: '/converter-energia', label: 'Energia : kWh, MWh, J, cal' },
        { href: '/calcular-resistencia-termica', label: 'Resistência térmica R (isolamento)' }
      ]},
      { title: 'Tempo', links: [
        { href: '/converter-tempo-duracao', label: 'Conversão de durações' }
      ]},
      { title: 'Saúde / Esporte', links: [
        { href: '/converter-passos-distancia', label: 'Passos ↔ Distância' },
        { href: '/calculadora-pace-corrida', label: 'Pace (ritmo) ↔ km/h' }
      ]}
    ]
  },
  {
    id: 'geometrie', label: 'Geometria', panel: 'navGeometrie',
    groups: [
      { title: 'Retângulo & quadrado', links: [
        { href: '/calcular-area-retangulo', label: 'Área de um retângulo' },
        { href: '/calcular-perimetro-retangulo', label: 'Perímetro de um retângulo' }
      ]},
      { title: 'Círculo', links: [
        { href: '/calcular-area-circulo', label: 'Área de um círculo' },
        { href: '/calcular-perimetro-circulo', label: 'Perímetro de um círculo' }
      ]},
      { title: 'Triângulo', links: [
        { href: '/calcular-area-triangulo', label: 'Área de um triângulo (Heron)' }
      ]}
    ]
  },
  {
    id: 'divers', label: 'Diversos', panel: 'navDivers',
    groups: [
      { title: 'Média', links: [
        { href: '/calcular-media', label: 'Calculadora de média', hot: true },
        { href: '/media-ponderada', label: 'Calculadora de média ponderada' },
        { href: '/calcular-mediana', label: 'Calculadora de mediana' }
      ]},
      { title: 'Eletricidade', links: [
        { href: '/volt-ampere-ohm-watt-calcular', label: 'Eletricidade : tensão ↔︎ corrente ↔︎ resistência ↔︎ potência', hot: true },
        { href: '/calcular-resistor-codigo-cores', label: 'Código de cores para resistores' }
      ]},
      { title: 'Saúde', links: [
        { href: '/calculo-imc', label: 'Cálculo do IMC' },
        { href: '/contador-calorias-proteinas-carboidratos-gorduras', label: 'Contador de calorias → Proteínas, carboidratos, gorduras' }
      ]}
    ]
  }
];

export function header(activeId) {
  const navBtns = NAV.map(c => `<div data-panel="${c.panel}"${c.id === activeId ? ' class="active"' : ''}>${c.label}</div>`).join('');
  const panels = NAV.map(c => {
    const groups = c.groups.map(g => {
      const links = g.links.map(l => `<div><a href="${l.href}" title="${l.label}">${l.label}</a>${l.hot ? ' ⭐️' : ''}</div>`).join('');
      return `<div class="navTitre">${g.title}</div>${links}`;
    }).join('');
    return `<div id="${c.panel}">${groups}</div>`;
  }).join('');

  return `<header>
<div id="titre_simple"><div id="titre"><a href="/">${SITE_TITLE}</a> <span>⬇︎ Clique para mostrar os menus</span></div><div id="simple">Calculadoras simples</div></div>
<div id="menu_hamburger" role="button" aria-label="Abrir o menu principal" tabindex="0"><img src="/assets/img/menu.svg" alt="Menu" width="24" height="18"></div>
<nav>${navBtns}</nav>
<div id="navDetails">${panels}</div>
</header>`;
}

export function footer() {
  return `<footer><div id="footer2">
<div><div class="titreFooter">Comunicação</div><div><a href="/contato">Contato</a></div><div><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></div><div><a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">WhatsApp: +${WHATSAPP_NUMBER}</a></div></div>
<div><div class="titreFooter">Sobre</div><div><a href="/termos-legais">Termos legais</a></div><div><a href="/politica-de-privacidade">Política de privacidade</a></div><div><a href="/cookie">Política de cookies</a></div><div><a href="/termos-de-uso">Termos de uso</a></div></div>
<div><div class="titreFooter">Top 5</div><div><a href="/calculadora-horario">Calculadora de tempo</a></div><div><a href="/">Calculadora online</a></div><div><a href="/conversao-hora-minuto-decimal">Conversor de hora decimal</a></div><div><a href="/multiplicar-duracao">Multiplicação de duração</a></div><div><a href="/calcular-media">Cálculo de média</a></div></div>
<div><div class="titreFooter">FAQ</div><div><a href="/faq">Perguntas / respostas</a></div></div>
</div>
<hr>
<div id="footer1"><div>${SITE_NAME}.com</div><div>–</div><div>Copyright © 2026</div><div>–</div><div>Todos os direitos reservados</div></div>
</footer>`;
}

export function whatsappButton() {
  return `<a id="waFloat" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="Fale com a gente no WhatsApp" title="Fale com a gente no WhatsApp">
<svg viewBox="0 0 32 32" width="30" height="30" fill="#fff"><path d="M16 .3C7.4.3.3 7.4.3 16c0 2.9.8 5.6 2.2 8L.3 31.7l7.9-2.1c2.3 1.3 5 2 7.8 2 8.6 0 15.7-7.1 15.7-15.7C31.7 7.4 24.6.3 16 .3zm0 28.7c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.4 20.8 2.6 18.4 2.6 16 2.6 8.6 8.6 2.6 16 2.6S29.4 8.6 29.4 16 23.4 29 16 29zm7.9-9.8c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.3-.9.1-1.2-.6-2.5-1.4-3.6-2.6-1-1-1.7-2.1-2.3-3.2-.2-.4 0-.6.2-.9.3-.3.6-.7.9-1 .2-.3.3-.5.1-.9-.2-.4-1-2.5-1.3-3.3-.3-.8-.6-.7-.9-.7-.2 0-.6 0-1 0-.3 0-.9.1-1.3.6-.4.5-1.7 1.6-1.7 4 0 2.3 1.7 4.6 1.9 4.9.2.3 2.7 4.1 6.5 5.6 3.8 1.5 3.8 1 4.5.9.7-.1 2.5-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z"/></svg>
</a>`;
}

export function page({ slug, title, description, activeNav, bodyHtml, extraCss = [], extraJs = [], inlineScript = '', breadcrumb, jsonLd = [] }) {
  const canonical = slug === '' ? `${SITE_URL}/` : `${SITE_URL}/${slug}`;
  const css = extraCss.map(f => `<link rel="stylesheet" href="${f}">`).join('\n');
  const js = extraJs.map(f => `<script defer src="${f}"></script>`).join('\n');
  const crumb = breadcrumb ? `<div class="breadcrumb"><a href="/">Início</a> › ${breadcrumb}</div>` : '';
  const schemas = jsonLd.map(obj => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join('\n');
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#fefefe">
<link rel="canonical" href="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap">
<link rel="stylesheet" href="/assets/css/style.css">
${css}
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta name="google-site-verification" content="4mEW2Z7UoUczoFaq9vRJuT5g_xz29R6Ygh0hwo1uLOI" />
<meta name="google-site-verification" content="0oXXyPJ95b01GOjfqOhkkEJXuicOfk7ZFKJDMYD-05Q" />
${schemas}
</head>
<body>
${header(activeNav)}
<div id="grid-container">
<main id="parties"><div id="partie2">
<div id="contactBug"><div>Um bug? Uma sugestão? <a href="/contato">Entre em contato</a> ou escreva para <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></div></div>
${crumb}
${bodyHtml}
</div></main>
</div>
${footer()}
${whatsappButton()}
<script src="/assets/js/app.js"></script>
<script src="/assets/js/engines.js"></script>
${js}
${inlineScript ? `<script>\n(function(){\n${inlineScript}\n})();\n</script>` : ''}
</body>
</html>`;
}

/* ---------- SEO content block: intro + sections + FAQ (with matching FAQPage schema) + related tools ---------- */
function flatLinks() {
  const out = [];
  for (const cat of NAV) {
    for (const g of cat.groups) {
      for (const l of g.links) out.push({ href: l.href, label: l.label, navId: cat.id, navLabel: cat.label });
    }
  }
  return out;
}
const ALL_LINKS = flatLinks();

export function relatedTools(activeNav, currentHref, count = 4) {
  const sameCat = ALL_LINKS.filter(l => l.navId === activeNav && l.href !== currentHref);
  const picks = sameCat.slice(0, count);
  if (!picks.length) return '';
  const items = picks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  return `<section class="relatedTools"><h2>Ferramentas relacionadas</h2><ul>${items}</ul></section>`;
}

export function faqBlock(faq, pageUrl) {
  if (!faq || !faq.length) return { html: '', schema: null };
  const html = `<section class="faqBlock"><h2>Perguntas frequentes</h2>${faq.map(f => `<div class="faqItem"><h3>${f.q}</h3><p>${f.a}</p></div>`).join('')}</section>`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
  return { html, schema };
}

export function seoContent({ intro = '', sections = [], faq = [] }, activeNav, currentHref) {
  const introHtml = intro ? `<section class="toolIntro"><p>${intro}</p></section>` : '';
  const sectionsHtml = sections.map(s => `<section><h2>${s.h2}</h2>${s.html}</section>`).join('');
  const { html: faqHtml, schema } = faqBlock(faq, currentHref);
  const relatedHtml = relatedTools(activeNav, currentHref);
  return {
    html: `<div class="seoContent">${introHtml}${sectionsHtml}${faqHtml}${relatedHtml}</div>`,
    jsonLd: schema ? [schema] : []
  };
}

/* ---------- small HTML helpers used by tool builders ---------- */
export const h = {
  field(label, inputHtml) { return `<div class="field"><label>${label}</label>${inputHtml}</div>`; },
  row(...fields) { return `<div class="field row">${fields.join('')}</div>`; },
  num(id, placeholder = '', value = '') { return `<input type="text" inputmode="decimal" id="${id}" placeholder="${placeholder}" value="${value}">`; },
  select(id, options) { return `<select id="${id}">${options.map(o => `<option value="${o.v}">${o.l}</option>`).join('')}</select>`; },
  date(id) { return `<input type="date" id="${id}">`; },
  time(id) { return `<input type="text" inputmode="numeric" id="${id}" placeholder="0">`; },
  btn(label = 'Calcular') { return `<div class="toolActions"><button type="button" class="btnGeneral" id="btnCalc">${label}</button></div>`; },
  result(id = 'result') { return `<div class="resultBox" id="${id}"><div class="sub">O resultado aparecerá aqui</div></div>`; },
  card(title, inner) { return `<div class="toolCard"><h1>${title}</h1>${inner}</div>`; }
};
