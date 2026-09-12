import { h } from './shell.mjs';

// Every tool page: { slug, title, description, activeNav, breadcrumb, body, script }
// `body` is the HTML for the tool card (inside <div class="toolCard">).
// `script` is plain JS (string concatenation, no backticks) wired to #btnCalc.
export const TOOLS = [

/* ============ CALCULADORA (raízes / potências) ============ */
{
  slug: 'calculo-raiz-quadrada', title: 'Raiz quadrada online — Calculadora Fácil',
  description: 'Calcule a raiz quadrada de qualquer número online, grátis e com etapas.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Raiz quadrada',
  body: h.card('Calculadora de raiz quadrada (√)', h.field('Número', h.num('in1', 'Ex: 144')) + h.btn('Calcular √')  + h.result()),
  script: `
var btn=document.getElementById('btnCalc');
btn.addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)||n<0){CF.showResult(box,'Erro','Digite um número positivo',true);return;}
  var r=ENG.math.sqrt(n);
  CF.showResult(box,'√'+CF.fmt(n,0)+' = '+CF.fmt(r),'Resultado arredondado para 5 casas decimais');
});`
},
{
  slug: 'calculo-raiz-cubica', title: 'Raiz cúbica online — Calculadora Fácil',
  description: 'Calcule a raiz cúbica de qualquer número online, grátis.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Raiz cúbica',
  body: h.card('Calculadora de raiz cúbica (∛)', h.field('Número', h.num('in1', 'Ex: 27')) + h.btn('Calcular ∛') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)){CF.showResult(box,'Erro','Digite um número válido',true);return;}
  CF.showResult(box,'∛'+CF.fmt(n,0)+' = '+CF.fmt(ENG.math.cbrt(n)));
});`
},
{
  slug: 'calcular-potencia', title: 'Calculadora de potência (xⁿ) — Calculadora Fácil',
  description: 'Calcule x elevado a n online, com qualquer expoente.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Potência',
  body: h.card('Calculadora de potência (xⁿ)', h.row(h.field('Base (x)', h.num('in1','Ex: 2')), h.field('Expoente (n)', h.num('in2','Ex: 10'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var x=CF.parseNum(document.getElementById('in1').value), n=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(x)||isNaN(n)){CF.showResult(box,'Erro','Preencha os dois campos',true);return;}
  CF.showResult(box,CF.fmt(x,0)+'^'+CF.fmt(n,0)+' = '+CF.fmt(ENG.math.power(x,n)));
});`
},
{
  slug: 'calcular-numero-quadrado', title: 'Número ao quadrado (x²) — Calculadora Fácil',
  description: 'Calcule o quadrado de qualquer número online.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Número ao quadrado',
  body: h.card('Número ao quadrado (x²)', h.field('Número', h.num('in1','Ex: 12')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var x=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(x)){CF.showResult(box,'Erro','Digite um número',true);return;}
  CF.showResult(box,CF.fmt(x,0)+'² = '+CF.fmt(ENG.math.power(x,2)));
});`
},
{
  slug: 'calculo-numero-cubo', title: 'Número ao cubo (x³) — Calculadora Fácil',
  description: 'Calcule o cubo de qualquer número online.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Número ao cubo',
  body: h.card('Número ao cubo (x³)', h.field('Número', h.num('in1','Ex: 5')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var x=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(x)){CF.showResult(box,'Erro','Digite um número',true);return;}
  CF.showResult(box,CF.fmt(x,0)+'³ = '+CF.fmt(ENG.math.power(x,3)));
});`
},

/* ============ MATEMÁTICA ============ */
{
  slug: 'notacao-cientifica', title: 'Notação científica — Calculadora Fácil',
  description: 'Converta qualquer número decimal em notação científica.',
  activeNav: 'math', breadcrumb: 'Matemática › Notação científica',
  body: h.card('Número ➜ Notação científica', h.field('Número', h.num('in1','Ex: 123400')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)){CF.showResult(box,'Erro','Digite um número',true);return;}
  var r=ENG.math.scientificNotation(n);
  CF.showResult(box,CF.fmt(r.mantissa)+' × 10^'+r.exponent);
});`
},
{
  slug: 'converter-longitude', title: 'Longitude ↔ Tempo — Calculadora Fácil',
  description: 'Converta graus de longitude em tempo (horas/minutos) e vice-versa.',
  activeNav: 'math', breadcrumb: 'Matemática › Longitude ↔ Tempo',
  body: h.card('Longitude (graus) ↔ Tempo',
    h.field('Graus de longitude', h.num('in1','Ex: 45')) + h.btn('Converter para tempo') + h.result('result') +
    '<hr><br>' +
    h.row(h.field('Horas', h.num('in2','0')), h.field('Minutos', h.num('in3','0'))) + h.btn('Converter para graus') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var deg=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(deg)){CF.showResult(box,'Erro','Digite os graus',true);return;}
  var r=ENG.math.longitudeToTime(deg);
  CF.showResult(box,r.h+'h '+r.m+'min');
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var hh=CF.parseNum(document.getElementById('in2').value)||0, mm=CF.parseNum(document.getElementById('in3').value)||0;
  var box=document.getElementById('result2');
  CF.showResult(box,CF.fmt(ENG.math.timeToLongitude(hh,mm))+'°');
});`
},
{
  slug: 'testar-verificar-numero-primo', title: 'Testar número primo — Calculadora Fácil',
  description: 'Verifique se um número é primo online, instantaneamente.',
  activeNav: 'math', breadcrumb: 'Matemática › Testar número primo',
  body: h.card('Testar se um número é primo', h.field('Número', h.num('in1','Ex: 97')) + h.btn('Testar') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)){CF.showResult(box,'Erro','Digite um número inteiro',true);return;}
  var isP=ENG.math.isPrime(n);
  CF.showResult(box,isP?'É primo ✔️':'Não é primo ✖️',CF.fmt(n,0));
});`
},
{
  slug: 'lista-numero-primo', title: 'Lista de números primos — Calculadora Fácil',
  description: 'Gere a lista de todos os números primos até um limite.',
  activeNav: 'math', breadcrumb: 'Matemática › Lista de primos',
  body: h.card('Lista de números primos', h.field('Até o número', h.num('in1','Ex: 100')) + h.btn('Gerar lista') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)||n<2||n>100000){CF.showResult(box,'Erro','Digite um número entre 2 e 100000',true);return;}
  var list=ENG.math.primesUpTo(n);
  box.classList.remove('error');
  box.innerHTML='<div class="big">'+list.length+' primos encontrados</div><div class="sub" style="word-break:break-word">'+list.join(', ')+'</div>';
});`
},
{
  slug: 'maximo-divisor-comum-mdc', title: 'MDC — Máximo divisor comum — Calculadora Fácil',
  description: 'Calcule o máximo divisor comum (MDC) entre dois números.',
  activeNav: 'math', breadcrumb: 'Matemática › MDC',
  body: h.card('Máximo divisor comum (MDC)', h.row(h.field('Número A', h.num('in1','Ex: 48')), h.field('Número B', h.num('in2','Ex: 18'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in1').value), b=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(a)||isNaN(b)){CF.showResult(box,'Erro','Preencha os dois números',true);return;}
  CF.showResult(box,'MDC = '+ENG.math.gcd(a,b));
});`
},
{
  slug: 'resolver-equacao-primeiro-grau', title: 'Equação de 1º grau — Calculadora Fácil',
  description: 'Resolva equações do tipo ax + b = 0 passo a passo.',
  activeNav: 'math', breadcrumb: 'Matemática › Equação 1º grau',
  body: h.card('Equação de 1º grau (ax + b = 0)', h.row(h.field('a', h.num('in1','Ex: 2')), h.field('b', h.num('in2','Ex: -8'))) + h.btn('Resolver') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in1').value), b=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(a)||isNaN(b)){CF.showResult(box,'Erro','Preencha a e b',true);return;}
  var r=ENG.math.linearEq(a,b);
  if(r.infinite){CF.showResult(box,'Infinitas soluções');}
  else if(r.none){CF.showResult(box,'Sem solução');}
  else CF.showResult(box,'x = '+CF.fmt(r.x));
});`
},
{
  slug: 'resolver-equacao-segundo-grau', title: 'Equação de 2º grau (Bhaskara) — Calculadora Fácil',
  description: 'Resolva equações do 2º grau ax² + bx + c = 0 com a fórmula de Bhaskara.',
  activeNav: 'math', breadcrumb: 'Matemática › Equação 2º grau', hot: true,
  body: h.card('Equação de 2º grau (ax² + bx + c = 0)',
    h.row(h.field('a', h.num('in1','Ex: 1')), h.field('b', h.num('in2','Ex: -3')), h.field('c', h.num('in3','Ex: 2'))) + h.btn('Resolver') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in1').value), b=CF.parseNum(document.getElementById('in2').value), c=CF.parseNum(document.getElementById('in3').value);
  var box=document.getElementById('result');
  if(isNaN(a)||isNaN(b)||isNaN(c)){CF.showResult(box,'Erro','Preencha a, b e c',true);return;}
  var r=ENG.math.quadraticEq(a,b,c);
  if(r.complex){CF.showResult(box,'x = '+CF.fmt(r.re)+' ± '+CF.fmt(r.im)+'i','Raízes complexas (Δ < 0)');}
  else if(r.x1!==undefined){CF.showResult(box,'x₁ = '+CF.fmt(r.x1)+'  x₂ = '+CF.fmt(r.x2),'Δ = '+CF.fmt(r.discriminant));}
  else if(r.x!==undefined){CF.showResult(box,'x = '+CF.fmt(r.x),'Equação linear (a = 0)');}
  else CF.showResult(box,r.infinite?'Infinitas soluções':'Sem solução');
});`
},
{
  slug: 'regra-de-tres', title: 'Regra de três — Calculadora Fácil',
  description: 'Calcule a quarta proporcional pela regra de três simples.',
  activeNav: 'math', breadcrumb: 'Matemática › Regra de três',
  body: h.card('Regra de três (4ª proporcional)',
    '<p style="text-align:center;color:#666">A está para B, assim como C está para X</p>' +
    h.row(h.field('A', h.num('in1','Ex: 5')), h.field('B', h.num('in2','Ex: 10'))) +
    h.row(h.field('C', h.num('in3','Ex: 8')), h.field('X', '<input type="text" id="in4" value="?" disabled>')) +
    h.btn('Calcular X') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in1').value), b=CF.parseNum(document.getElementById('in2').value), c=CF.parseNum(document.getElementById('in3').value);
  var box=document.getElementById('result');
  if(isNaN(a)||isNaN(b)||isNaN(c)||a===0){CF.showResult(box,'Erro','Preencha A, B e C (A ≠ 0)',true);return;}
  CF.showResult(box,'X = '+CF.fmt(ENG.math.ruleOfThree(a,b,c)));
});`
},
{
  slug: 'calcular-logaritmo', title: 'Logaritmo base 10 — Calculadora Fácil',
  description: 'Calcule o logaritmo decimal (log₁₀) de qualquer número.',
  activeNav: 'math', breadcrumb: 'Matemática › Logaritmo',
  body: h.card('Logaritmo base 10 (log₁₀)', h.field('Número', h.num('in1','Ex: 1000')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)||n<=0){CF.showResult(box,'Erro','Digite um número maior que zero',true);return;}
  CF.showResult(box,'log₁₀('+CF.fmt(n,0)+') = '+CF.fmt(ENG.math.log10(n)));
});`
},
{
  slug: 'coeficiente-angular', title: 'Coeficiente angular de uma reta — Calculadora Fácil',
  description: 'Calcule a inclinação (coeficiente angular) de uma reta a partir de dois pontos.',
  activeNav: 'math', breadcrumb: 'Matemática › Coeficiente angular',
  body: h.card('Coeficiente angular de uma reta',
    h.row(h.field('x₁', h.num('in1','0')), h.field('y₁', h.num('in2','0'))) +
    h.row(h.field('x₂', h.num('in3','1')), h.field('y₂', h.num('in4','1'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var x1=CF.parseNum(document.getElementById('in1').value), y1=CF.parseNum(document.getElementById('in2').value);
  var x2=CF.parseNum(document.getElementById('in3').value), y2=CF.parseNum(document.getElementById('in4').value);
  var box=document.getElementById('result');
  if([x1,y1,x2,y2].some(isNaN)){CF.showResult(box,'Erro','Preencha os 4 valores',true);return;}
  var m=ENG.math.slope(x1,y1,x2,y2);
  if(m===null){CF.showResult(box,'Reta vertical','Coeficiente angular indefinido',true);return;}
  CF.showResult(box,'m = '+CF.fmt(m));
});`
},
{
  slug: 'transformar-decimal-fracao', title: 'Decimal em fração — Calculadora Fácil',
  description: 'Transforme qualquer número decimal em fração simplificada.',
  activeNav: 'math', breadcrumb: 'Matemática › Decimal ➜ Fração',
  body: h.card('Decimal ➜ Fração', h.field('Número decimal', h.num('in1','Ex: 0.75')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)){CF.showResult(box,'Erro','Digite um número decimal',true);return;}
  var r=ENG.math.decimalToFraction(n);
  CF.showResult(box,r.num+' / '+r.den);
});`
},
{
  slug: 'fracoes-irredutiveis-simplificar', title: 'Simplificar fração — Calculadora Fácil',
  description: 'Simplifique qualquer fração para a sua forma irredutível.',
  activeNav: 'math', breadcrumb: 'Matemática › Simplificar fração',
  body: h.card('Simplificar uma fração', h.row(h.field('Numerador', h.num('in1','Ex: 12')), h.field('Denominador', h.num('in2','Ex: 18'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var num=CF.parseNum(document.getElementById('in1').value), den=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(num)||isNaN(den)||den===0){CF.showResult(box,'Erro','Denominador não pode ser zero',true);return;}
  var r=ENG.math.simplifyFraction(num,den);
  CF.showResult(box,r.num+' / '+r.den);
});`
},
{
  slug: 'minimo-multiplo-comum-mmc', title: 'MMC — Mínimo múltiplo comum — Calculadora Fácil',
  description: 'Calcule o mínimo múltiplo comum (MMC) entre dois números.',
  activeNav: 'math', breadcrumb: 'Matemática › MMC',
  body: h.card('Mínimo múltiplo comum (MMC)', h.row(h.field('Número A', h.num('in1','Ex: 4')), h.field('Número B', h.num('in2','Ex: 6'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in1').value), b=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(a)||isNaN(b)){CF.showResult(box,'Erro','Preencha os dois números',true);return;}
  CF.showResult(box,'MMC = '+ENG.math.lcm(a,b));
});`
},
{
  slug: 'simplificar-raiz-quadrada', title: 'Simplificar raiz quadrada — Calculadora Fácil',
  description: 'Simplifique uma raiz quadrada em sua forma radical mais simples.',
  activeNav: 'math', breadcrumb: 'Matemática › Simplificar raiz',
  body: h.card('Simplificar raiz quadrada', h.field('Número (dentro da raiz)', h.num('in1','Ex: 72')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)||n<0){CF.showResult(box,'Erro','Digite um inteiro positivo',true);return;}
  var r=ENG.math.simplifySqrt(n);
  CF.showResult(box,(r.outside>1?r.outside:'')+'√'+r.inside,'√'+CF.fmt(n,0)+' simplificada');
});`
},

/* ============ TEMPO ============ */
{
  slug: 'calculadora-horario', title: 'Calculadora de tempo (horas, minutos, segundos) — Calculadora Fácil',
  description: 'Some ou subtraia horários (horas, minutos, segundos) online.', hot: true,
  activeNav: 'temps', breadcrumb: 'Tempo › Calculadora de tempo',
  body: h.card('Calculadora de tempo',
    '<p style="text-align:center;color:#666">Duração 1 ± Duração 2</p>' +
    h.row(h.field('h', h.time('h1')), h.field('min', h.time('m1')), h.field('seg', h.time('s1'))) +
    h.field('Operação', h.select('op', [{v:'+',l:'+ Somar'},{v:'-',l:'− Subtrair'}])) +
    h.row(h.field('h', h.time('h2')), h.field('min', h.time('m2')), h.field('seg', h.time('s2'))) +
    h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var h1=CF.parseNum(document.getElementById('h1').value)||0, m1=CF.parseNum(document.getElementById('m1').value)||0, s1=CF.parseNum(document.getElementById('s1').value)||0;
  var h2=CF.parseNum(document.getElementById('h2').value)||0, m2=CF.parseNum(document.getElementById('m2').value)||0, s2=CF.parseNum(document.getElementById('s2').value)||0;
  var op=document.getElementById('op').value;
  var sec1=ENG.time.durationToSeconds(h1,m1,s1), sec2=ENG.time.durationToSeconds(h2,m2,s2);
  var total=op==='+'?sec1+sec2:sec1-sec2;
  var r=ENG.time.secondsToDuration(total);
  var box=document.getElementById('result');
  CF.showResult(box,r.h+'h '+r.m+'min '+r.s+'s');
});`
},
{
  slug: 'calcular-tempo-trabalho', title: 'Calcular tempo de trabalho — Calculadora Fácil',
  description: 'Calcule as horas trabalhadas a partir do horário de entrada e saída.', hot: true,
  activeNav: 'temps', breadcrumb: 'Tempo › Tempo de trabalho',
  body: h.card('Calcular tempo de trabalho',
    h.row(h.field('Entrada (hh:mm)', h.time('in1')), h.field('Saída (hh:mm)', h.time('in2'))) +
    h.field('Pausa/almoço (minutos)', h.num('in3','0')) + h.btn('Calcular horas trabalhadas') + h.result()),
  script: `
function parseHM(v){var m=/^(\\d{1,2}):?(\\d{2})?$/.exec(v.trim());if(!m)return null;return parseInt(m[1],10)*60+parseInt(m[2]||'0',10);}
document.getElementById('btnCalc').addEventListener('click',function(){
  var start=parseHM(document.getElementById('in1').value), end=parseHM(document.getElementById('in2').value);
  var pause=CF.parseNum(document.getElementById('in3').value)||0;
  var box=document.getElementById('result');
  if(start===null||end===null){CF.showResult(box,'Erro','Use o formato hh:mm, ex: 08:30',true);return;}
  var mins=end-start; if(mins<0) mins+=1440; mins-=pause;
  var r=ENG.time.secondsToDuration(mins*60);
  CF.showResult(box,r.h+'h '+r.m+'min trabalhadas');
});`
},
{
  slug: 'multiplicar-duracao', title: 'Multiplicação de duração — Calculadora Fácil',
  description: 'Multiplique uma duração (h:m:s) por um número.', hot: true,
  activeNav: 'temps', breadcrumb: 'Tempo › Multiplicar duração',
  body: h.card('Multiplicação de duração',
    h.row(h.field('h', h.time('h1')), h.field('min', h.time('m1')), h.field('seg', h.time('s1'))) +
    h.field('Multiplicar por', h.num('in2','Ex: 3')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var h1=CF.parseNum(document.getElementById('h1').value)||0,m1=CF.parseNum(document.getElementById('m1').value)||0,s1=CF.parseNum(document.getElementById('s1').value)||0;
  var f=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(f)){CF.showResult(box,'Erro','Digite o fator de multiplicação',true);return;}
  var r=ENG.time.multiplyDuration(h1,m1,s1,f);
  CF.showResult(box,r.h+'h '+r.m+'min '+r.s+'s');
});`
},
{
  slug: 'dividir-tempo-duracao', title: 'Divisão de duração — Calculadora Fácil',
  description: 'Divida uma duração (h:m:s) por um número.', hot: true,
  activeNav: 'temps', breadcrumb: 'Tempo › Dividir duração',
  body: h.card('Divisão de duração',
    h.row(h.field('h', h.time('h1')), h.field('min', h.time('m1')), h.field('seg', h.time('s1'))) +
    h.field('Dividir por', h.num('in2','Ex: 3')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var h1=CF.parseNum(document.getElementById('h1').value)||0,m1=CF.parseNum(document.getElementById('m1').value)||0,s1=CF.parseNum(document.getElementById('s1').value)||0;
  var d=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(!d){CF.showResult(box,'Erro','Digite um divisor diferente de zero',true);return;}
  var r=ENG.time.divideDuration(h1,m1,s1,d);
  CF.showResult(box,r.h+'h '+r.m+'min '+r.s+'s');
});`
},
{
  slug: 'calcular-varios-horarios', title: 'Adição / Subtração de várias durações — Calculadora Fácil',
  description: 'Some e subtraia várias durações de uma vez, uma por linha.',
  activeNav: 'temps', breadcrumb: 'Tempo › Várias durações',
  body: h.card('Adição / Subtração de várias durações',
    '<div class="field"><label>Uma duração por linha, com + ou - (ex: +1:30, -0:45)</label><textarea id="in1" rows="6" style="width:100%;padding:10px;font-family:monospace;border:1px solid #a4a4a4;border-radius:6px" placeholder="+2:00\\n+1:30\\n-0:45"></textarea></div>' +
    h.btn('Somar tudo') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var lines=document.getElementById('in1').value.split('\\n').map(function(l){return l.trim();}).filter(Boolean);
  var totalSec=0, box=document.getElementById('result'), ok=true;
  lines.forEach(function(line){
    var m=/^([+-]?)(\\d{1,3}):(\\d{2})(?::(\\d{2}))?$/.exec(line);
    if(!m){ok=false;return;}
    var sign=m[1]==='-'?-1:1;
    totalSec+=sign*ENG.time.durationToSeconds(parseInt(m[2],10),parseInt(m[3],10),parseInt(m[4]||'0',10));
  });
  if(!ok||!lines.length){CF.showResult(box,'Erro','Use o formato +h:mm ou -h:mm por linha',true);return;}
  var r=ENG.time.secondsToDuration(totalSec);
  CF.showResult(box,(totalSec<0?'-':'')+Math.abs(r.h)+'h '+r.m+'min '+r.s+'s');
});`
},
{
  slug: 'conversao-hora-minuto-decimal', title: 'Horas ↔ Decimal — Calculadora Fácil',
  description: 'Converta horas:minutos em horas decimais e vice-versa.', hot: true,
  activeNav: 'temps', breadcrumb: 'Tempo › Horas ↔ Decimal',
  body: h.card('Horas ↔ Decimal',
    h.row(h.field('Horas', h.time('h1')), h.field('Minutos', h.time('m1'))) + h.btn('Converter para decimal') + h.result('result') +
    '<hr><br>' + h.field('Horas decimais', h.num('in2','Ex: 2.5')) + h.btn('Converter para h:min') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var hh=CF.parseNum(document.getElementById('h1').value)||0, mm=CF.parseNum(document.getElementById('m1').value)||0;
  CF.showResult(document.getElementById('result'), CF.fmt(ENG.time.hmsToDecimalHours(hh,mm,0))+' h');
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var dec=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result2');
  if(isNaN(dec)){CF.showResult(box,'Erro','Digite um valor decimal',true);return;}
  var r=ENG.time.decimalHoursToHms(dec);
  CF.showResult(box,r.h+'h '+r.m+'min');
});`
},
{
  slug: 'converter-tempo-duracao', title: 'Conversão de unidades de tempo — Calculadora Fácil',
  description: 'Converta entre segundos, minutos, horas, dias, semanas, meses e anos.',
  activeNav: 'temps', breadcrumb: 'Tempo › Conversão de unidades',
  body: h.card('Conversão de unidades de tempo',
    h.field('Valor', h.num('in1','Ex: 90')) +
    h.row(h.field('De', h.select('u1',[{v:'segundos',l:'Segundos'},{v:'minutos',l:'Minutos'},{v:'horas',l:'Horas'},{v:'dias',l:'Dias'},{v:'semanas',l:'Semanas'},{v:'meses',l:'Meses'},{v:'anos',l:'Anos'}])),
    h.field('Para', h.select('u2',[{v:'segundos',l:'Segundos'},{v:'minutos',l:'Minutos'},{v:'horas',l:'Horas'},{v:'dias',l:'Dias'},{v:'semanas',l:'Semanas'},{v:'meses',l:'Meses'},{v:'anos',l:'Anos'}]))) +
    h.btn() + h.result()),
  script: `
document.getElementById('u2').selectedIndex=2;
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(v)){CF.showResult(box,'Erro','Digite um valor',true);return;}
  CF.showResult(box,CF.fmt(ENG.time.convertDuration(v,document.getElementById('u1').value,document.getElementById('u2').value)));
});`
},
{
  slug: 'converter-timestamp-data', title: 'Timestamp ↔ Data — Calculadora Fácil',
  description: 'Converta um timestamp Unix em data e vice-versa.',
  activeNav: 'temps', breadcrumb: 'Tempo › Timestamp ↔ Data',
  body: h.card('Timestamp ↔ Data',
    h.field('Timestamp Unix (segundos)', h.num('in1','Ex: 1700000000')) + h.btn('Converter para data') + h.result('result') +
    '<hr><br>' + h.field('Data e hora', '<input type="datetime-local" id="in2">') + h.btn('Converter para timestamp') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var ts=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(ts)){CF.showResult(box,'Erro','Digite um timestamp válido',true);return;}
  CF.showResult(box,ENG.time.timestampToDate(ts).toLocaleString('pt-BR'));
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var v=document.getElementById('in2').value;
  var box=document.getElementById('result2');
  if(!v){CF.showResult(box,'Erro','Escolha uma data',true);return;}
  CF.showResult(box,ENG.time.dateToTimestamp(v)+'','segundos desde 1/1/1970');
});`
},
{
  slug: 'calcular-adicao-subtracao-data', title: 'Adicionar / Subtrair datas — Calculadora Fácil',
  description: 'Some ou subtraia dias a partir de uma data.',
  activeNav: 'temps', breadcrumb: 'Tempo › Adicionar/Subtrair data',
  body: h.card('Adicionar / Subtrair datas',
    h.field('Data inicial', h.date('in1')) +
    h.row(h.field('Operação', h.select('op',[{v:'+',l:'Somar dias'},{v:'-',l:'Subtrair dias'}])), h.field('Dias', h.num('in2','Ex: 30'))) +
    h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var d=document.getElementById('in1').value, n=CF.parseNum(document.getElementById('in2').value), op=document.getElementById('op').value;
  var box=document.getElementById('result');
  if(!d||isNaN(n)){CF.showResult(box,'Erro','Preencha a data e os dias',true);return;}
  var res=ENG.time.addDaysToDate(d, op==='+'?n:-n);
  CF.showResult(box,res.toLocaleDateString('pt-BR'));
});`
},
{
  slug: 'calcular-duracao-duas-datas', title: 'Intervalo entre duas datas — Calculadora Fácil',
  description: 'Calcule a duração exata entre duas datas.',
  activeNav: 'temps', breadcrumb: 'Tempo › Intervalo entre datas',
  body: h.card('Intervalo entre duas datas', h.row(h.field('Data inicial', h.date('in1')), h.field('Data final', h.date('in2'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var d1=document.getElementById('in1').value, d2=document.getElementById('in2').value;
  var box=document.getElementById('result');
  if(!d1||!d2){CF.showResult(box,'Erro','Preencha as duas datas',true);return;}
  var r=ENG.time.dateDiff(d1,d2);
  CF.showResult(box,r.years+' anos, '+r.months+' meses, '+r.days+' dias','('+r.totalDays+' dias no total)');
});`
},
{
  slug: 'verificar-ano-bissexto', title: 'Ano bissexto? — Calculadora Fácil',
  description: 'Verifique se um ano é bissexto.',
  activeNav: 'temps', breadcrumb: 'Tempo › Ano bissexto',
  body: h.card('Verificar se um ano é bissexto', h.field('Ano', h.num('in1','Ex: 2028')) + h.btn('Verificar') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var y=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(y)){CF.showResult(box,'Erro','Digite um ano',true);return;}
  CF.showResult(box,ENG.time.isLeapYear(y)?'Sim, é bissexto ✔️':'Não é bissexto ✖️',y+' tem '+(ENG.time.isLeapYear(y)?366:365)+' dias');
});`
},
{
  slug: 'calcular-idade', title: 'Calcular a minha idade — Calculadora Fácil',
  description: 'Calcule a sua idade exata a partir da data de nascimento.',
  activeNav: 'temps', breadcrumb: 'Tempo › Calcular idade',
  body: h.card('Calcular a minha idade', h.field('Data de nascimento', h.date('in1')) + h.btn('Calcular idade') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var d=document.getElementById('in1').value;
  var box=document.getElementById('result');
  if(!d){CF.showResult(box,'Erro','Escolha a data de nascimento',true);return;}
  var r=ENG.time.age(d);
  CF.showResult(box,r.years+' anos',r.months+' meses e '+r.days+' dias a mais');
});`
},
{
  slug: 'cronometro', title: 'Cronômetro online — Calculadora Fácil',
  description: 'Cronômetro online grátis com voltas.',
  activeNav: 'temps', breadcrumb: 'Tempo › Cronômetro',
  body: h.card('Cronômetro',
    '<div class="resultBox"><div class="big" id="chrono" style="font-size:48px">00:00:00.0</div></div>' +
    '<div class="toolActions"><button class="btnGeneral" id="btnStart" type="button">Iniciar</button> <button class="btnGeneral" id="btnLap" type="button">Volta</button> <button class="btnGeneral" id="btnReset" type="button">Zerar</button></div>' +
    '<ol id="laps" style="max-width:300px;margin:14px auto 0;padding-left:20px;color:#444"></ol>'),
  script: `
var running=false, startTs=0, elapsed=0, raf=null;
var disp=document.getElementById('chrono'), laps=document.getElementById('laps');
function fmt(ms){var t=Math.max(0,ms);var h=Math.floor(t/3600000);var m=Math.floor(t%3600000/60000);var s=Math.floor(t%60000/1000);var d=Math.floor(t%1000/100);
  function p(n,l){return String(n).padStart(l||2,'0');}
  return p(h)+':'+p(m)+':'+p(s)+'.'+d;}
function tick(){disp.textContent=fmt(elapsed+(running?Date.now()-startTs:0));raf=requestAnimationFrame(tick);}
tick();
document.getElementById('btnStart').addEventListener('click',function(e){
  running=!running;
  if(running){startTs=Date.now();e.target.textContent='Pausar';}
  else {elapsed+=Date.now()-startTs;e.target.textContent='Continuar';}
});
document.getElementById('btnLap').addEventListener('click',function(){
  var li=document.createElement('li');li.textContent=disp.textContent;laps.prepend(li);
});
document.getElementById('btnReset').addEventListener('click',function(){
  running=false;elapsed=0;document.getElementById('btnStart').textContent='Iniciar';laps.innerHTML='';
});`
},

/* ============ FINANÇAS ============ */
{
  slug: 'calcular-iva', title: 'Cálculo de IVA — Calculadora Fácil',
  description: 'Calcule o IVA (imposto) sobre um valor, com e sem imposto incluído.', hot: true,
  activeNav: 'finance', breadcrumb: 'Finanças › Cálculo IVA',
  body: h.card('Cálculo IVA',
    h.row(h.field('Valor', h.num('in1','Ex: 100')), h.field('Taxa (%)', h.num('in2','Ex: 23'))) +
    h.field('O valor informado', h.select('mode',[{v:'sem',l:'Não inclui IVA (somar)'},{v:'com',l:'Já inclui IVA (extrair)'}])) +
    h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value), rate=CF.parseNum(document.getElementById('in2').value), mode=document.getElementById('mode').value;
  var box=document.getElementById('result');
  if(isNaN(v)||isNaN(rate)){CF.showResult(box,'Erro','Preencha o valor e a taxa',true);return;}
  if(mode==='sem'){var r=ENG.finance.applyVat(v,rate);CF.showResult(box,CF.fmt(r.total),'IVA: '+CF.fmt(r.vat));}
  else {var r2=ENG.finance.removeVat(v,rate);CF.showResult(box,CF.fmt(r2.base),'IVA: '+CF.fmt(r2.vat));}
});`
},
{
  slug: 'percentagem', title: 'Calculadora de percentagem — Calculadora Fácil',
  description: 'Calcule percentagens: quanto é X% de Y, variação percentual e mais.',
  activeNav: 'finance', breadcrumb: 'Finanças › Percentagens',
  body: h.card('Percentagens',
    h.row(h.field('X %', h.num('in1','Ex: 20')), h.field('de Y', h.num('in2','Ex: 150'))) + h.btn('Calcular X% de Y') + h.result('result') +
    '<hr><br>' + h.row(h.field('Valor inicial', h.num('in3','100')), h.field('Valor final', h.num('in4','130'))) + h.btn('Calcular variação (%)') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var p=CF.parseNum(document.getElementById('in1').value), w=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(p)||isNaN(w)){CF.showResult(box,'Erro','Preencha os dois valores',true);return;}
  CF.showResult(box,CF.fmt(ENG.finance.percentValue(p,w)));
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in3').value), b=CF.parseNum(document.getElementById('in4').value);
  var box=document.getElementById('result2');
  if(isNaN(a)||isNaN(b)||a===0){CF.showResult(box,'Erro','Valor inicial não pode ser zero',true);return;}
  var pct=ENG.finance.percentChange(a,b);
  CF.showResult(box,(pct>=0?'+':'')+CF.fmt(pct)+' %');
});`
},
{
  slug: 'calcular-rateio', title: 'Calculadora de rateio — Calculadora Fácil',
  description: 'Divida uma conta entre várias pessoas, com gorjeta opcional.',
  activeNav: 'finance', breadcrumb: 'Finanças › Rateio',
  body: h.card('Rateio',
    h.row(h.field('Valor total', h.num('in1','Ex: 240')), h.field('Nº de pessoas', h.num('in2','Ex: 4'))) +
    h.field('Gorjeta (%)', h.num('in3','0')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var total=CF.parseNum(document.getElementById('in1').value), people=CF.parseNum(document.getElementById('in2').value), tip=CF.parseNum(document.getElementById('in3').value)||0;
  var box=document.getElementById('result');
  if(isNaN(total)||!people){CF.showResult(box,'Erro','Preencha o valor e o nº de pessoas',true);return;}
  var r=ENG.finance.splitBill(total,people,tip);
  CF.showResult(box,CF.fmt(r.perPerson)+' / pessoa','Total com gorjeta: '+CF.fmt(r.total));
});`
},
{
  slug: 'calculadora-gorjeta', title: 'Calculadora de gorjeta — Calculadora Fácil',
  description: 'Calcule a gorjeta e o valor total de uma conta.',
  activeNav: 'finance', breadcrumb: 'Finanças › Gorjeta',
  body: h.card('Calculadora de gorjeta',
    h.row(h.field('Valor da conta', h.num('in1','Ex: 80')), h.field('Gorjeta (%)', h.num('in2','10'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value), t=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(v)||isNaN(t)){CF.showResult(box,'Erro','Preencha os dois campos',true);return;}
  var r=ENG.finance.splitBill(v,1,t);
  CF.showResult(box,CF.fmt(r.total),'Gorjeta: '+CF.fmt(r.tip));
});`
},
{
  slug: 'calcular-emprestimo-credito', title: 'Simulador de empréstimo — Calculadora Fácil',
  description: 'Simule as prestações de um empréstimo com taxa de juro fixa.', hot: true,
  activeNav: 'finance', breadcrumb: 'Finanças › Simulador de empréstimo',
  body: h.card('Simulador de empréstimo (prestações)',
    h.row(h.field('Valor do empréstimo', h.num('in1','Ex: 10000')), h.field('Taxa anual (%)', h.num('in2','Ex: 8'))) +
    h.field('Prazo (meses)', h.num('in3','Ex: 24')) + h.btn('Simular') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var p=CF.parseNum(document.getElementById('in1').value), rate=CF.parseNum(document.getElementById('in2').value), months=CF.parseNum(document.getElementById('in3').value);
  var box=document.getElementById('result');
  if(isNaN(p)||isNaN(rate)||!months){CF.showResult(box,'Erro','Preencha todos os campos',true);return;}
  var r=ENG.finance.loanTotalCost(p,rate,months);
  CF.showResult(box,CF.fmt(r.installment)+' / mês','Total pago: '+CF.fmt(r.totalPaid)+' · Juros: '+CF.fmt(r.totalInterest));
});`
},
{
  slug: 'calcular-custo-credito', title: 'Custo de um crédito — Calculadora Fácil',
  description: 'Calcule o custo total de um crédito a partir da taxa e do prazo.',
  activeNav: 'finance', breadcrumb: 'Finanças › Custo do crédito',
  body: h.card('Calcular o custo de um crédito',
    h.row(h.field('Valor', h.num('in1','Ex: 5000')), h.field('Taxa anual (%)', h.num('in2','Ex: 12'))) +
    h.field('Prazo (meses)', h.num('in3','Ex: 12')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var p=CF.parseNum(document.getElementById('in1').value), rate=CF.parseNum(document.getElementById('in2').value), months=CF.parseNum(document.getElementById('in3').value);
  var box=document.getElementById('result');
  if(isNaN(p)||isNaN(rate)||!months){CF.showResult(box,'Erro','Preencha todos os campos',true);return;}
  var r=ENG.finance.loanTotalCost(p,rate,months);
  CF.showResult(box,'Custo total: '+CF.fmt(r.totalInterest),'Total a pagar: '+CF.fmt(r.totalPaid));
});`
},
{
  slug: 'juros-compostos-capitalizacao', title: 'Juros compostos — Calculadora Fácil',
  description: 'Calcule o valor futuro de um investimento com juros compostos.',
  activeNav: 'finance', breadcrumb: 'Finanças › Juros compostos',
  body: h.card('Juros compostos (capitalização)',
    h.row(h.field('Capital inicial', h.num('in1','Ex: 1000')), h.field('Taxa anual (%)', h.num('in2','Ex: 6'))) +
    h.row(h.field('Anos', h.num('in3','Ex: 10')), h.field('Capitalizações/ano', h.num('in4','12'))) +
    h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var p=CF.parseNum(document.getElementById('in1').value), rate=CF.parseNum(document.getElementById('in2').value), years=CF.parseNum(document.getElementById('in3').value), n=CF.parseNum(document.getElementById('in4').value)||12;
  var box=document.getElementById('result');
  if(isNaN(p)||isNaN(rate)||isNaN(years)){CF.showResult(box,'Erro','Preencha todos os campos',true);return;}
  var r=ENG.finance.compoundInterest(p,rate,years,n);
  CF.showResult(box,CF.fmt(r.amount),'Juros ganhos: '+CF.fmt(r.interest));
});`
},
{
  slug: 'dobrar-capital', title: 'Tempo para dobrar o capital — Calculadora Fácil',
  description: 'Calcule quanto tempo leva para dobrar um capital investido.',
  activeNav: 'finance', breadcrumb: 'Finanças › Dobrar capital',
  body: h.card('Dobrar o capital (tempo de rendimento)', h.field('Taxa de rendimento anual (%)', h.num('in1','Ex: 7')) + h.btn('Calcular') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var rate=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(rate)||rate<=0){CF.showResult(box,'Erro','Digite uma taxa positiva',true);return;}
  CF.showResult(box,CF.fmt(ENG.finance.doublingTime(rate))+' anos');
});`
},
{
  slug: 'calcular-comprar-vender-acoes', title: 'Bolsa: ganhos e perdas — Calculadora Fácil',
  description: 'Calcule o ganho ou a perda de uma operação na bolsa de valores.',
  activeNav: 'finance', breadcrumb: 'Finanças › Bolsa',
  body: h.card('Bolsa: ganhos / perdas',
    h.row(h.field('Preço de compra', h.num('in1','Ex: 20')), h.field('Preço de venda', h.num('in2','Ex: 25'))) +
    h.row(h.field('Quantidade', h.num('in3','Ex: 100')), h.field('Taxas', h.num('in4','0'))) +
    h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var buy=CF.parseNum(document.getElementById('in1').value), sell=CF.parseNum(document.getElementById('in2').value), qty=CF.parseNum(document.getElementById('in3').value), fees=CF.parseNum(document.getElementById('in4').value)||0;
  var box=document.getElementById('result');
  if(isNaN(buy)||isNaN(sell)||isNaN(qty)){CF.showResult(box,'Erro','Preencha os campos obrigatórios',true);return;}
  var r=ENG.finance.stockGainLoss(buy,sell,qty,fees);
  CF.showResult(box,(r.gain>=0?'+':'')+CF.fmt(r.gain),(r.gainPct>=0?'+':'')+CF.fmt(r.gainPct)+' %');
});`
},
{
  slug: 'converter-criptomoeda-real', title: 'Cripto ↔ Real — Calculadora Fácil',
  description: 'Converta criptomoedas em reais informando a cotação atual.',
  activeNav: 'finance', breadcrumb: 'Finanças › Cripto ↔ Real',
  body: h.card('Cripto ↔ Real',
    '<p class="bulleInfo">Informe manualmente a cotação atual da moeda para converter (este site não busca cotações ao vivo).</p>' +
    h.row(h.field('Quantidade de cripto', h.num('in1','Ex: 0.5')), h.field('Cotação (R$ por unidade)', h.num('in2','Ex: 350000'))) +
    h.btn('Converter para R$') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var amt=CF.parseNum(document.getElementById('in1').value), price=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(amt)||isNaN(price)){CF.showResult(box,'Erro','Preencha os dois campos',true);return;}
  CF.showResult(box,'R$ '+CF.fmt(ENG.finance.cryptoConvert(amt,price),2));
});`
},

/* ============ INFORMÁTICA ============ */
{
  slug: 'gerar-senha-sequencia-caracteres', title: 'Gerador de senha — Calculadora Fácil',
  description: 'Gere senhas seguras e aleatórias online.',
  activeNav: 'informatique', breadcrumb: 'Informática › Gerador de senha',
  body: h.card('Gerador de senha',
    h.field('Tamanho', h.num('in1','16')) +
    '<div class="field"><label><input type="checkbox" id="optLower" checked> minúsculas</label> <label><input type="checkbox" id="optUpper" checked> MAIÚSCULAS</label> <label><input type="checkbox" id="optDigits" checked> números</label> <label><input type="checkbox" id="optSymbols"> símbolos</label></div>' +
    h.btn('Gerar senha') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var len=CF.parseNum(document.getElementById('in1').value)||16;
  len=Math.min(Math.max(len,4),128);
  var opts={lower:optLower.checked,upper:optUpper.checked,digits:optDigits.checked,symbols:optSymbols.checked};
  var pwd=ENG.it.generatePassword(len,opts);
  var box=document.getElementById('result');
  box.classList.remove('error');
  box.innerHTML='<div class="big" style="word-break:break-all;font-size:22px">'+pwd+'</div>';
});`
},
{
  slug: 'criptografar-descriptografar-mensagem', title: 'Criptografar / Descriptografar mensagem — Calculadora Fácil',
  description: 'Cifre e decifre mensagens de texto com uma chave, usando XOR + Base64.',
  activeNav: 'informatique', breadcrumb: 'Informática › Criptografar mensagem',
  body: h.card('Criptografar / Descriptografar 🔒',
    '<p class="bulleInfo">Cifra simples (XOR + Base64) para ofuscar texto — não use para dados sensíveis.</p>' +
    h.field('Mensagem', '<textarea id="in1" rows="3" style="width:100%;padding:10px;border:1px solid #a4a4a4;border-radius:6px"></textarea>') +
    h.field('Chave', h.num('in2','Ex: minhachave')) +
    '<div class="toolActions"><button class="btnGeneral" id="btnEnc" type="button">Criptografar</button> <button class="btnGeneral" id="btnDec" type="button">Descriptografar</button></div>' +
    h.result()),
  script: `
document.getElementById('btnEnc').addEventListener('click',function(){
  var t=document.getElementById('in1').value, k=document.getElementById('in2').value||'chave';
  var box=document.getElementById('result');
  if(!t){CF.showResult(box,'Erro','Digite uma mensagem',true);return;}
  box.classList.remove('error');
  box.innerHTML='<div class="big" style="word-break:break-all;font-size:16px">'+ENG.it.encryptMessage(t,k)+'</div>';
});
document.getElementById('btnDec').addEventListener('click',function(){
  var t=document.getElementById('in1').value, k=document.getElementById('in2').value||'chave';
  var box=document.getElementById('result');
  var r=ENG.it.decryptMessage(t,k);
  if(r===null){CF.showResult(box,'Erro','Texto ou chave inválidos',true);return;}
  box.classList.remove('error');
  box.innerHTML='<div class="big" style="word-break:break-all;font-size:16px">'+r+'</div>';
});`
},
{
  slug: 'converter-binario-hexadecimal', title: 'Decimal ↔ Binário / Hexadecimal — Calculadora Fácil',
  description: 'Converta números entre decimal, binário e hexadecimal.',
  activeNav: 'informatique', breadcrumb: 'Informática › Decimal ↔ Binário/Hexa',
  body: h.card('Decimal ↔ Binário / Hexa',
    h.field('Número decimal', h.num('in1','Ex: 255')) + h.btn('Converter') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var n=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(n)||n<0){CF.showResult(box,'Erro','Digite um número inteiro positivo',true);return;}
  box.classList.remove('error');
  box.innerHTML='<div class="big">Binário: '+ENG.it.decToBin(n)+'</div><div class="sub">Hexadecimal: '+ENG.it.decToHex(n)+'</div>';
});`
},
{
  slug: 'somar-subtrair-hexadecimal', title: 'Operações hexadecimais — Calculadora Fácil',
  description: 'Some e subtraia números em hexadecimal.',
  activeNav: 'informatique', breadcrumb: 'Informática › Operações hexadecimais',
  body: h.card('Operações hexadecimais',
    h.row(h.field('Hex A', h.num('in1','Ex: 1A')), h.field('Hex B', h.num('in2','Ex: 0F'))) +
    h.field('Operação', h.select('op',[{v:'+',l:'Somar'},{v:'-',l:'Subtrair'}])) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=document.getElementById('in1').value.trim(), b=document.getElementById('in2').value.trim(), op=document.getElementById('op').value;
  var box=document.getElementById('result');
  if(!/^[0-9a-fA-F]+$/.test(a)||!/^[0-9a-fA-F]+$/.test(b)){CF.showResult(box,'Erro','Use apenas dígitos hexadecimais (0-9, A-F)',true);return;}
  CF.showResult(box,op==='+'?ENG.it.hexAdd(a,b):ENG.it.hexSub(a,b));
});`
},
{
  slug: 'converter-bytes', title: 'Converter bytes (KB, MB, GB, TB) — Calculadora Fácil',
  description: 'Converta unidades de armazenamento de dados: bytes, KB, MB, GB, TB.',
  activeNav: 'informatique', breadcrumb: 'Informática › Converter bytes',
  body: h.card('Converter bytes',
    h.field('Valor', h.num('in1','Ex: 1024')) +
    h.row(h.field('De', h.select('u1',[{v:'B',l:'Bytes'},{v:'KB',l:'KB'},{v:'MB',l:'MB'},{v:'GB',l:'GB'},{v:'TB',l:'TB'}])),
    h.field('Para', h.select('u2',[{v:'B',l:'Bytes'},{v:'KB',l:'KB'},{v:'MB',l:'MB'},{v:'GB',l:'GB'},{v:'TB',l:'TB'}]))) +
    h.btn() + h.result()),
  script: `
document.getElementById('u2').selectedIndex=2;
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(v)){CF.showResult(box,'Erro','Digite um valor',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.convert(ENG.units.bytes,v,document.getElementById('u1').value,document.getElementById('u2').value)));
});`
},
{
  slug: 'converter-mascara-sub-rede', title: 'Máscara de sub-rede ↔ CIDR — Calculadora Fácil',
  description: 'Converta uma máscara de sub-rede entre notação CIDR e binário.',
  activeNav: 'informatique', breadcrumb: 'Informática › Máscara de sub-rede',
  body: h.card('Máscara de sub-rede ↔ Binário / CIDR', h.field('CIDR (ex: 24)', h.num('in1','24')) + h.btn('Converter') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var c=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(c)||c<0||c>32){CF.showResult(box,'Erro','Digite um CIDR entre 0 e 32',true);return;}
  var info=ENG.it.subnetInfo(c);
  box.classList.remove('error');
  box.innerHTML='<div class="big">'+info.mask+'</div><div class="sub">/'+c+' · '+ENG.it.cidrToBinary(c)+' · '+info.hosts+' hosts</div>';
});`
},
{
  slug: 'calcular-faixa-enderecos-ip', title: 'Faixa de endereços IP — Calculadora Fácil',
  description: 'Calcule a faixa de endereços IP (rede, broadcast, hosts) a partir de um IP e CIDR.',
  activeNav: 'informatique', breadcrumb: 'Informática › Faixa de IP',
  body: h.card('Faixa de endereços IP',
    h.row(h.field('Endereço IP', h.num('in1','Ex: 192.168.1.10')), h.field('CIDR', h.num('in2','24'))) + h.btn('Calcular') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var ip=document.getElementById('in1').value.trim(), cidr=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(!/^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(ip)||isNaN(cidr)){CF.showResult(box,'Erro','Digite um IP e CIDR válidos',true);return;}
  var r=ENG.it.ipRange(ip,cidr);
  box.classList.remove('error');
  box.innerHTML='<div class="big">'+r.network+' – '+r.broadcast+'</div><div class="sub">Hosts: '+r.firstHost+' a '+r.lastHost+' ('+r.totalHosts+' no total)</div>';
});`
},
{
  slug: 'contar-caracteres', title: 'Contar caracteres — Calculadora Fácil',
  description: 'Conte caracteres, palavras e linhas de um texto.',
  activeNav: 'informatique', breadcrumb: 'Informática › Contar caracteres',
  body: h.card('Contar os caracteres', h.field('Texto', '<textarea id="in1" rows="6" style="width:100%;padding:10px;border:1px solid #a4a4a4;border-radius:6px"></textarea>') + h.btn('Contar') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var r=ENG.it.countChars(document.getElementById('in1').value);
  var box=document.getElementById('result');
  box.classList.remove('error');
  box.innerHTML='<div class="big">'+r.chars+' caracteres</div><div class="sub">'+r.noSpaces+' sem espaços · '+r.words+' palavras · '+r.lines+' linhas</div>';
});`
},
{
  slug: 'remover-espacos-texto', title: 'Remover espaços de um texto — Calculadora Fácil',
  description: 'Remova espaços extras, no início/fim ou todos os espaços de um texto.',
  activeNav: 'informatique', breadcrumb: 'Informática › Remover espaços',
  body: h.card('Remover os espaços',
    h.field('Texto', '<textarea id="in1" rows="6" style="width:100%;padding:10px;border:1px solid #a4a4a4;border-radius:6px"></textarea>') +
    h.field('Modo', h.select('mode',[{v:'trim',l:'Apenas início/fim'},{v:'collapse',l:'Reduzir espaços duplos'},{v:'all',l:'Remover todos os espaços'}])) +
    h.btn('Processar') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var out=ENG.it.removeSpaces(document.getElementById('in1').value,document.getElementById('mode').value);
  var box=document.getElementById('result');
  box.classList.remove('error');
  box.innerHTML='<div class="big" style="word-break:break-word;font-size:16px">'+(out||'(vazio)')+'</div>';
});`
},
{
  slug: 'converter-hexadecimal-texto', title: 'Hexadecimal ↔ Texto UTF-8 — Calculadora Fácil',
  description: 'Converta texto em hexadecimal e hexadecimal em texto (UTF-8).',
  activeNav: 'informatique', breadcrumb: 'Informática › Hexadecimal ↔ Texto',
  body: h.card('Hexadecimal ↔ Texto UTF-8',
    h.field('Texto', h.num('in1','Ex: Olá')) + h.btn('Texto ➜ Hex') + h.result('result') +
    '<hr><br>' + h.field('Hexadecimal', h.num('in2','Ex: 4F6C61')) + h.btn('Hex ➜ Texto') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var box=document.getElementById('result');
  box.classList.remove('error');
  box.innerHTML='<div class="big" style="word-break:break-all">'+ENG.it.textToHex(document.getElementById('in1').value)+'</div>';
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var box=document.getElementById('result2');
  try{ box.classList.remove('error'); box.innerHTML='<div class="big">'+ENG.it.hexToText(document.getElementById('in2').value)+'</div>'; }
  catch(e){ CF.showResult(box,'Erro','Hexadecimal inválido',true); }
});`
},

/* ============ CONVERSÃO ============ */
{
  slug: 'converter-distancia', title: 'Conversor de distância — Calculadora Fácil',
  description: 'Converta unidades de distância: metros, km, milhas, polegadas e mais.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Distância',
  body: h.card('Distância',
    h.field('Valor', h.num('in1','Ex: 5')) +
    h.row(h.field('De', h.select('u1',[{v:'m',l:'Metros'},{v:'km',l:'Quilômetros'},{v:'cm',l:'Centímetros'},{v:'mm',l:'Milímetros'},{v:'mi',l:'Milhas'},{v:'yd',l:'Jardas'},{v:'ft',l:'Pés'},{v:'in',l:'Polegadas'}])),
    h.field('Para', h.select('u2',[{v:'m',l:'Metros'},{v:'km',l:'Quilômetros'},{v:'cm',l:'Centímetros'},{v:'mm',l:'Milímetros'},{v:'mi',l:'Milhas'},{v:'yd',l:'Jardas'},{v:'ft',l:'Pés'},{v:'in',l:'Polegadas'}]))) +
    h.btn() + h.result()),
  script: `
document.getElementById('u1').value='km';document.getElementById('u2').value='mi';
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(v)){CF.showResult(box,'Erro','Digite um valor',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.convert(ENG.units.distance,v,document.getElementById('u1').value,document.getElementById('u2').value)));
});`
},
{
  slug: 'converter-massa', title: 'Conversor de massa — Calculadora Fácil',
  description: 'Converta unidades de massa: gramas, quilos, toneladas, libras e onças.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Massa',
  body: h.card('Massa',
    h.field('Valor', h.num('in1','Ex: 70')) +
    h.row(h.field('De', h.select('u1',[{v:'g',l:'Gramas'},{v:'kg',l:'Quilos'},{v:'mg',l:'Miligramas'},{v:'t',l:'Toneladas'},{v:'lb',l:'Libras'},{v:'oz',l:'Onças'}])),
    h.field('Para', h.select('u2',[{v:'g',l:'Gramas'},{v:'kg',l:'Quilos'},{v:'mg',l:'Miligramas'},{v:'t',l:'Toneladas'},{v:'lb',l:'Libras'},{v:'oz',l:'Onças'}]))) +
    h.btn() + h.result()),
  script: `
document.getElementById('u1').value='kg';document.getElementById('u2').value='lb';
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(v)){CF.showResult(box,'Erro','Digite um valor',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.convert(ENG.units.mass,v,document.getElementById('u1').value,document.getElementById('u2').value)));
});`
},
{
  slug: 'converter-volume', title: 'Conversor de volume — Calculadora Fácil',
  description: 'Converta unidades de volume: litros e metros cúbicos.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Volume',
  body: h.card('Volume : L ↔ m³',
    h.field('Valor', h.num('in1','Ex: 1500')) +
    h.row(h.field('De', h.select('u1',[{v:'L',l:'Litros'},{v:'mL',l:'Mililitros'},{v:'m³',l:'Metros cúbicos'},{v:'gal (US)',l:'Galões (US)'},{v:'pint (US)',l:'Pints (US)'}])),
    h.field('Para', h.select('u2',[{v:'L',l:'Litros'},{v:'mL',l:'Mililitros'},{v:'m³',l:'Metros cúbicos'},{v:'gal (US)',l:'Galões (US)'},{v:'pint (US)',l:'Pints (US)'}]))) +
    h.btn() + h.result()),
  script: `
document.getElementById('u2').value='m³';
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(v)){CF.showResult(box,'Erro','Digite um valor',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.convert(ENG.units.volume,v,document.getElementById('u1').value,document.getElementById('u2').value)));
});`
},
{
  slug: 'converter-celsius-fahrenheit', title: 'Celsius ↔ Fahrenheit — Calculadora Fácil',
  description: 'Converta temperatura entre Celsius e Fahrenheit.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Temperatura',
  body: h.card('Temperatura : °C ↔ °F',
    h.field('Celsius', h.num('in1','Ex: 25')) + h.btn('Converter para °F') + h.result('result') +
    '<hr><br>' + h.field('Fahrenheit', h.num('in2','Ex: 77')) + h.btn('Converter para °C') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var c=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(c)){CF.showResult(box,'Erro','Digite a temperatura em °C',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.celsiusToFahrenheit(c))+' °F');
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var f=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result2');
  if(isNaN(f)){CF.showResult(box,'Erro','Digite a temperatura em °F',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.fahrenheitToCelsius(f))+' °C');
});`
},
{
  slug: 'converter-potencia-motriz-cavalos-kw', title: 'Potência: kW ↔ cavalos — Calculadora Fácil',
  description: 'Converta potência entre quilowatts (kW) e cavalos-vapor (CV).',
  activeNav: 'conversion', breadcrumb: 'Conversão › Potência',
  body: h.card('Potência : kW ↔ cavalos',
    h.field('kW', h.num('in1','Ex: 75')) + h.btn('Converter para CV') + h.result('result') +
    '<hr><br>' + h.field('CV', h.num('in2','Ex: 100')) + h.btn('Converter para kW') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var kw=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(kw)){CF.showResult(box,'Erro','Digite a potência em kW',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.kwToCv(kw))+' CV');
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var cv=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result2');
  if(isNaN(cv)){CF.showResult(box,'Erro','Digite a potência em CV',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.cvToKw(cv))+' kW');
});`
},
{
  slug: 'converter-energia', title: 'Conversor de energia — Calculadora Fácil',
  description: 'Converta unidades de energia: kWh, MWh, joules e calorias.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Energia',
  body: h.card('Energia : kWh, MWh, J, cal',
    h.field('Valor', h.num('in1','Ex: 3.6')) +
    h.row(h.field('De', h.select('u1',[{v:'J',l:'Joules'},{v:'kJ',l:'Quilojoules'},{v:'cal',l:'Calorias'},{v:'kcal',l:'Kilocalorias'},{v:'Wh',l:'Watt-hora'},{v:'kWh',l:'kWh'},{v:'MWh',l:'MWh'}])),
    h.field('Para', h.select('u2',[{v:'J',l:'Joules'},{v:'kJ',l:'Quilojoules'},{v:'cal',l:'Calorias'},{v:'kcal',l:'Kilocalorias'},{v:'Wh',l:'Watt-hora'},{v:'kWh',l:'kWh'},{v:'MWh',l:'MWh'}]))) +
    h.btn() + h.result()),
  script: `
document.getElementById('u1').value='kWh';document.getElementById('u2').value='MWh';
document.getElementById('btnCalc').addEventListener('click',function(){
  var v=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(v)){CF.showResult(box,'Erro','Digite um valor',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.convert(ENG.units.energy,v,document.getElementById('u1').value,document.getElementById('u2').value)));
});`
},
{
  slug: 'calcular-resistencia-termica', title: 'Resistência térmica (isolamento) — Calculadora Fácil',
  description: 'Calcule a resistência térmica R de um material isolante.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Resistência térmica',
  body: h.card('Resistência térmica R (isolamento)',
    h.row(h.field('Espessura (cm)', h.num('in1','Ex: 10')), h.field('Condutividade λ (W/m·K)', h.num('in2','Ex: 0.04'))) +
    h.btn('Calcular R') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var e=CF.parseNum(document.getElementById('in1').value), lambda=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(e)||isNaN(lambda)||lambda<=0){CF.showResult(box,'Erro','Preencha espessura e condutividade (λ > 0)',true);return;}
  CF.showResult(box,'R = '+CF.fmt(ENG.units.thermalResistance(e/100,lambda))+' m²·K/W');
});`
},
{
  slug: 'converter-passos-distancia', title: 'Passos ↔ Distância — Calculadora Fácil',
  description: 'Converta número de passos em distância percorrida.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Passos ↔ Distância',
  body: h.card('Passos ↔ Distância',
    h.row(h.field('Nº de passos', h.num('in1','Ex: 8000')), h.field('Tamanho do passo (cm)', h.num('in2','75'))) +
    h.btn('Calcular distância') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var steps=CF.parseNum(document.getElementById('in1').value), stride=CF.parseNum(document.getElementById('in2').value)||75;
  var box=document.getElementById('result');
  if(isNaN(steps)){CF.showResult(box,'Erro','Digite o número de passos',true);return;}
  var m=ENG.units.stepsToDistance(steps,stride/100);
  CF.showResult(box,CF.fmt(m/1000)+' km',CF.fmt(m)+' metros');
});`
},
{
  slug: 'calculadora-pace-corrida', title: 'Pace (ritmo de corrida) ↔ km/h — Calculadora Fácil',
  description: 'Converta o pace de corrida (min/km) em velocidade (km/h) e vice-versa.',
  activeNav: 'conversion', breadcrumb: 'Conversão › Pace de corrida',
  body: h.card('Pace (ritmo) ↔ km/h',
    h.row(h.field('min/km', h.num('in1','Ex: 5')), h.field('seg', h.num('in2','30'))) + h.btn('Converter para km/h') + h.result('result') +
    '<hr><br>' + h.field('km/h', h.num('in3','Ex: 11')) + h.btn('Converter para pace') + h.result('result2')),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var m=CF.parseNum(document.getElementById('in1').value)||0, s=CF.parseNum(document.getElementById('in2').value)||0;
  var box=document.getElementById('result');
  if(!m&&!s){CF.showResult(box,'Erro','Digite o pace',true);return;}
  CF.showResult(box,CF.fmt(ENG.units.paceToSpeed(m,s))+' km/h');
});
document.querySelectorAll('.toolActions')[1].querySelector('button').addEventListener('click',function(){
  var kmh=CF.parseNum(document.getElementById('in3').value);
  var box=document.getElementById('result2');
  if(isNaN(kmh)||kmh<=0){CF.showResult(box,'Erro','Digite uma velocidade positiva',true);return;}
  var r=ENG.units.speedToPace(kmh);
  CF.showResult(box,r.min+' min '+String(r.sec).padStart(2,'0')+' s / km');
});`
},

/* ============ GEOMETRIA ============ */
{
  slug: 'calcular-area-retangulo', title: 'Área de um retângulo — Calculadora Fácil',
  description: 'Calcule a área de um retângulo ou quadrado.',
  activeNav: 'geometrie', breadcrumb: 'Geometria › Área do retângulo',
  body: h.card('Área de um retângulo', h.row(h.field('Largura', h.num('in1','Ex: 4')), h.field('Altura', h.num('in2','Ex: 3'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var w=CF.parseNum(document.getElementById('in1').value), ht=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(w)||isNaN(ht)){CF.showResult(box,'Erro','Preencha largura e altura',true);return;}
  CF.showResult(box,CF.fmt(ENG.geometry.rectArea(w,ht))+' un²');
});`
},
{
  slug: 'calcular-perimetro-retangulo', title: 'Perímetro de um retângulo — Calculadora Fácil',
  description: 'Calcule o perímetro de um retângulo ou quadrado.',
  activeNav: 'geometrie', breadcrumb: 'Geometria › Perímetro do retângulo',
  body: h.card('Perímetro de um retângulo', h.row(h.field('Largura', h.num('in1','Ex: 4')), h.field('Altura', h.num('in2','Ex: 3'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var w=CF.parseNum(document.getElementById('in1').value), ht=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(w)||isNaN(ht)){CF.showResult(box,'Erro','Preencha largura e altura',true);return;}
  CF.showResult(box,CF.fmt(ENG.geometry.rectPerimeter(w,ht))+' un');
});`
},
{
  slug: 'calcular-area-circulo', title: 'Área de um círculo — Calculadora Fácil',
  description: 'Calcule a área de um círculo a partir do raio.',
  activeNav: 'geometrie', breadcrumb: 'Geometria › Área do círculo',
  body: h.card('Área de um círculo', h.field('Raio', h.num('in1','Ex: 5')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var r=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(r)||r<0){CF.showResult(box,'Erro','Digite um raio positivo',true);return;}
  CF.showResult(box,CF.fmt(ENG.geometry.circleArea(r))+' un²');
});`
},
{
  slug: 'calcular-perimetro-circulo', title: 'Perímetro de um círculo — Calculadora Fácil',
  description: 'Calcule o perímetro (circunferência) de um círculo a partir do raio.',
  activeNav: 'geometrie', breadcrumb: 'Geometria › Perímetro do círculo',
  body: h.card('Perímetro de um círculo', h.field('Raio', h.num('in1','Ex: 5')) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var r=CF.parseNum(document.getElementById('in1').value);
  var box=document.getElementById('result');
  if(isNaN(r)||r<0){CF.showResult(box,'Erro','Digite um raio positivo',true);return;}
  CF.showResult(box,CF.fmt(ENG.geometry.circlePerimeter(r))+' un');
});`
},
{
  slug: 'calcular-area-triangulo', title: 'Área de um triângulo (Heron) — Calculadora Fácil',
  description: 'Calcule a área de um triângulo a partir dos três lados, usando a fórmula de Heron.',
  activeNav: 'geometrie', breadcrumb: 'Geometria › Área do triângulo',
  body: h.card('Área de um triângulo (Heron)', h.row(h.field('Lado a', h.num('in1','3')), h.field('Lado b', h.num('in2','4')), h.field('Lado c', h.num('in3','5'))) + h.btn() + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var a=CF.parseNum(document.getElementById('in1').value), b=CF.parseNum(document.getElementById('in2').value), c=CF.parseNum(document.getElementById('in3').value);
  var box=document.getElementById('result');
  if([a,b,c].some(isNaN)){CF.showResult(box,'Erro','Preencha os três lados',true);return;}
  var area=ENG.geometry.triangleAreaHeron(a,b,c);
  if(isNaN(area)){CF.showResult(box,'Erro','Esses lados não formam um triângulo válido',true);return;}
  CF.showResult(box,CF.fmt(area)+' un²');
});`
},

/* ============ DIVERSOS ============ */
{
  slug: 'calcular-media', title: 'Calculadora de média — Calculadora Fácil',
  description: 'Calcule a média aritmética de uma lista de números.', hot: true,
  activeNav: 'divers', breadcrumb: 'Diversos › Média',
  body: h.card('Calculadora de média',
    h.field('Números (separados por vírgula ou espaço)', '<textarea id="in1" rows="3" style="width:100%;padding:10px;border:1px solid #a4a4a4;border-radius:6px" placeholder="8, 7.5, 9, 6"></textarea>') +
    h.btn('Calcular média') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var nums=document.getElementById('in1').value.split(/[,\\s]+/).filter(Boolean).map(CF.parseNum).filter(function(n){return !isNaN(n);});
  var box=document.getElementById('result');
  if(!nums.length){CF.showResult(box,'Erro','Digite ao menos um número',true);return;}
  CF.showResult(box,CF.fmt(ENG.misc.average(nums)),nums.length+' valores');
});`
},
{
  slug: 'media-ponderada', title: 'Calculadora de média ponderada — Calculadora Fácil',
  description: 'Calcule a média ponderada de valores com pesos diferentes.',
  activeNav: 'divers', breadcrumb: 'Diversos › Média ponderada',
  body: h.card('Calculadora de média ponderada',
    h.field('Pares valor:peso, um por linha', '<textarea id="in1" rows="5" style="width:100%;padding:10px;font-family:monospace;border:1px solid #a4a4a4;border-radius:6px" placeholder="8:2\\n7:3\\n9:5"></textarea>') +
    h.btn('Calcular') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var lines=document.getElementById('in1').value.split('\\n').map(function(l){return l.trim();}).filter(Boolean);
  var box=document.getElementById('result');
  var pairs=[], ok=true;
  lines.forEach(function(l){var parts=l.split(':');if(parts.length!==2){ok=false;return;}var v=CF.parseNum(parts[0]),w=CF.parseNum(parts[1]);if(isNaN(v)||isNaN(w)){ok=false;return;}pairs.push([v,w]);});
  if(!ok||!pairs.length){CF.showResult(box,'Erro','Use o formato valor:peso por linha',true);return;}
  CF.showResult(box,CF.fmt(ENG.misc.weightedAverage(pairs)));
});`
},
{
  slug: 'calcular-mediana', title: 'Calculadora de mediana — Calculadora Fácil',
  description: 'Calcule a mediana de uma lista de números.',
  activeNav: 'divers', breadcrumb: 'Diversos › Mediana',
  body: h.card('Calculadora de mediana',
    h.field('Números (separados por vírgula ou espaço)', '<textarea id="in1" rows="3" style="width:100%;padding:10px;border:1px solid #a4a4a4;border-radius:6px" placeholder="8, 7.5, 9, 6"></textarea>') +
    h.btn('Calcular mediana') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var nums=document.getElementById('in1').value.split(/[,\\s]+/).filter(Boolean).map(CF.parseNum).filter(function(n){return !isNaN(n);});
  var box=document.getElementById('result');
  if(!nums.length){CF.showResult(box,'Erro','Digite ao menos um número',true);return;}
  CF.showResult(box,CF.fmt(ENG.misc.median(nums)),nums.length+' valores');
});`
},
{
  slug: 'volt-ampere-ohm-watt-calcular', title: 'Eletricidade: V, I, R, P — Calculadora Fácil',
  description: 'Calcule tensão, corrente, resistência e potência com a Lei de Ohm.', hot: true,
  activeNav: 'divers', breadcrumb: 'Diversos › Eletricidade',
  body: h.card('Eletricidade : tensão ↔ corrente ↔ resistência ↔ potência',
    '<p class="bulleInfo">Preencha 2 dos 4 campos e deixe os outros vazios.</p>' +
    h.row(h.field('Tensão V (volts)', h.num('in1','')), h.field('Corrente I (amperes)', h.num('in2',''))) +
    h.row(h.field('Resistência R (ohms)', h.num('in3','')), h.field('Potência P (watts)', h.num('in4',''))) +
    h.btn('Calcular') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var known={};
  var v=CF.parseNum(document.getElementById('in1').value), i=CF.parseNum(document.getElementById('in2').value), r=CF.parseNum(document.getElementById('in3').value), p=CF.parseNum(document.getElementById('in4').value);
  if(!isNaN(v))known.v=v; if(!isNaN(i))known.i=i; if(!isNaN(r))known.r=r; if(!isNaN(p))known.p=p;
  var box=document.getElementById('result');
  if(Object.keys(known).length<2){CF.showResult(box,'Erro','Preencha ao menos 2 campos',true);return;}
  var res=ENG.misc.ohmsLaw(known);
  box.classList.remove('error');
  box.innerHTML='<div class="big">V='+CF.fmt(res.v)+'V  I='+CF.fmt(res.i)+'A</div><div class="sub">R='+CF.fmt(res.r)+'Ω  P='+CF.fmt(res.p)+'W</div>';
});`
},
{
  slug: 'calcular-resistor-codigo-cores', title: 'Código de cores para resistores — Calculadora Fácil',
  description: 'Calcule o valor de um resistor pelo código de cores (4 faixas).',
  activeNav: 'divers', breadcrumb: 'Diversos › Código de cores',
  body: h.card('Código de cores para resistores',
    h.row(h.field('1ª faixa', h.select('b1',ENG_COLOR_OPTS())), h.field('2ª faixa', h.select('b2',ENG_COLOR_OPTS()))) +
    h.row(h.field('Multiplicador', h.select('b3',ENG_MULT_OPTS())), h.field('', '')) +
    h.btn('Calcular valor') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var b1=parseInt(document.getElementById('b1').value,10), b2=parseInt(document.getElementById('b2').value,10), exp=parseInt(document.getElementById('b3').value,10);
  var val=(b1*10+b2)*Math.pow(10,exp);
  var box=document.getElementById('result');
  box.classList.remove('error');
  var unit=val>=1e6?CF.fmt(val/1e6)+' MΩ':val>=1000?CF.fmt(val/1000)+' kΩ':CF.fmt(val)+' Ω';
  box.innerHTML='<div class="big">'+unit+'</div>';
});`
},
{
  slug: 'calculo-imc', title: 'Cálculo do IMC — Calculadora Fácil',
  description: 'Calcule o seu Índice de Massa Corporal (IMC) online.',
  activeNav: 'divers', breadcrumb: 'Diversos › IMC',
  body: h.card('Cálculo do IMC', h.row(h.field('Peso (kg)', h.num('in1','Ex: 70')), h.field('Altura (m)', h.num('in2','Ex: 1.75'))) + h.btn('Calcular IMC') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var w=CF.parseNum(document.getElementById('in1').value), ht=CF.parseNum(document.getElementById('in2').value);
  var box=document.getElementById('result');
  if(isNaN(w)||isNaN(ht)||ht<=0){CF.showResult(box,'Erro','Preencha peso e altura corretamente',true);return;}
  var bmi=ENG.misc.bmi(w,ht);
  CF.showResult(box,CF.fmt(bmi,1),ENG.misc.bmiCategory(bmi));
});`
},
{
  slug: 'contador-calorias-proteinas-carboidratos-gorduras', title: 'Contador de calorias — Calculadora Fácil',
  description: 'Calcule as calorias totais a partir de proteínas, carboidratos e gorduras.',
  activeNav: 'divers', breadcrumb: 'Diversos › Contador de calorias',
  body: h.card('Contador de calorias → Proteínas, carboidratos, gorduras',
    h.row(h.field('Proteínas (g)', h.num('in1','0')), h.field('Carboidratos (g)', h.num('in2','0')), h.field('Gorduras (g)', h.num('in3','0'))) +
    h.btn('Calcular calorias') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var p=CF.parseNum(document.getElementById('in1').value)||0, c=CF.parseNum(document.getElementById('in2').value)||0, f=CF.parseNum(document.getElementById('in3').value)||0;
  var box=document.getElementById('result');
  CF.showResult(box,CF.fmt(ENG.misc.macroCalories(p,c,f))+' kcal');
});`
},

/* ============ CALCULADORA (ferramentas avançadas) ============ */
{
  slug: 'calculadora-cientifica', title: 'Calculadora Científica Online — Calculadora Fácil',
  description: 'Calculadora científica online gratuita com seno, cosseno, tangente, logaritmo, raiz, potência, fatorial e mais.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Calculadora científica',
  body: `<div class="toolCard sciCalc">
<h1>Calculadora Científica Online</h1>
<div class="sciDisplayWrap">
  <input type="text" id="sciDisplay" class="sciDisplay" value="0" autocomplete="off" inputmode="text">
  <div class="sciModeRow"><button type="button" id="sciModeToggle" class="sciModeBtn">DEG</button></div>
</div>
<div class="sciKeys">
  <button type="button" data-ins="sin(">sin</button>
  <button type="button" data-ins="cos(">cos</button>
  <button type="button" data-ins="tan(">tan</button>
  <button type="button" data-ins="log(">log</button>
  <button type="button" data-ins="ln(">ln</button>
  <button type="button" id="sciDel">⌫</button>

  <button type="button" data-ins="(">(</button>
  <button type="button" data-ins=")">)</button>
  <button type="button" data-ins="sqrt(">√</button>
  <button type="button" data-ins="^">^</button>
  <button type="button" data-ins="!">!</button>
  <button type="button" id="sciAC">AC</button>

  <button type="button" data-ins="7">7</button>
  <button type="button" data-ins="8">8</button>
  <button type="button" data-ins="9">9</button>
  <button type="button" class="sciOp" data-ins="÷">÷</button>
  <button type="button" data-ins="pi">π</button>
  <button type="button" data-ins="e">e</button>

  <button type="button" data-ins="4">4</button>
  <button type="button" data-ins="5">5</button>
  <button type="button" data-ins="6">6</button>
  <button type="button" class="sciOp" data-ins="×">×</button>
  <button type="button" data-ins="exp(">eˣ</button>
  <button type="button" data-ins="^2">x²</button>

  <button type="button" data-ins="1">1</button>
  <button type="button" data-ins="2">2</button>
  <button type="button" data-ins="3">3</button>
  <button type="button" class="sciOp" data-ins="-">-</button>
  <button type="button" data-ins="ans">Ans</button>
  <button type="button" data-ins="%">%</button>

  <button type="button" data-ins="0">0</button>
  <button type="button" data-ins=".">.</button>
  <button type="button" class="sciOp" data-ins="+">+</button>
  <button type="button" id="sciEq">=</button>
</div>
<div class="resultBox" id="sciResult"><div class="sub">O resultado aparecerá aqui</div></div>
</div>`,
  extraJs: ['/assets/js/scientific.js']
},
{
  slug: 'calculadora-grafica', title: 'Calculadora Gráfica Online — Calculadora Fácil',
  description: 'Plote gráficos de funções matemáticas online, de forma gratuita e instantânea.',
  activeNav: 'calculatrice', breadcrumb: 'Calculadora › Calculadora gráfica',
  body: `<div class="toolCard graphCalc">
<h1>Calculadora Gráfica Online</h1>
<div class="field"><label>Função f(x)</label><input type="text" id="graphFn" value="sin(x)" autocomplete="off"></div>
<div class="field row">
  <div class="field"><label>x mínimo</label><input type="text" id="graphXMin" value="-10"></div>
  <div class="field"><label>x máximo</label><input type="text" id="graphXMax" value="10"></div>
</div>
<div class="toolActions"><button type="button" class="btnGeneral" id="graphPlot">Plotar gráfico</button></div>
<div id="graphCanvasWrap"><canvas id="graphCanvas" width="640" height="420"></canvas></div>
<div class="resultBox" id="graphResult"><div class="sub">O resultado aparecerá aqui</div></div>
</div>`,
  extraJs: ['/assets/js/graphing.js']
},

/* ============ FINANÇAS (salário e benefícios) ============ */
{
  slug: 'calculadora-salario-liquido', title: 'Calculadora de Salário Líquido — Calculadora Fácil',
  description: 'Calcule o salário líquido a partir do salário bruto, descontando INSS e IRRF.',
  activeNav: 'finance', breadcrumb: 'Finanças › Salário líquido',
  body: h.card('Calculadora de Salário Líquido',
    h.field('Salário bruto (R$)', h.num('in1', 'Ex: 3000')) +
    h.field('Número de dependentes', h.num('in2', '0')) +
    h.btn('Calcular salário líquido') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var gross=CF.parseNum(document.getElementById('in1').value);
  var dep=CF.parseNum(document.getElementById('in2').value)||0;
  var box=document.getElementById('result');
  if(isNaN(gross)||gross<=0){CF.showResult(box,'Erro','Digite um salário bruto válido',true);return;}
  var r=ENG.payroll.netSalary(gross,dep);
  box.classList.remove('error');
  box.innerHTML='<div class="big">'+CF.money(r.net)+'</div>'+
    '<table style="margin:14px auto 0;max-width:320px;text-align:left;font-size:14px;width:100%">'+
    '<tr><td>Salário bruto</td><td style="text-align:right">'+CF.money(r.gross)+'</td></tr>'+
    '<tr><td>(−) INSS</td><td style="text-align:right">'+CF.money(r.inss)+'</td></tr>'+
    '<tr><td>(−) IRRF</td><td style="text-align:right">'+CF.money(r.irrf)+'</td></tr>'+
    '<tr style="font-weight:700;border-top:1px solid #ccc"><td>(=) Salário líquido</td><td style="text-align:right">'+CF.money(r.net)+'</td></tr>'+
    '</table>';
});`
},
{
  slug: 'calculadora-ferias', title: 'Calculadora de Férias — Calculadora Fácil',
  description: 'Calcule o valor líquido das suas férias, com o terço constitucional e descontos de INSS/IRRF.',
  activeNav: 'finance', breadcrumb: 'Finanças › Férias',
  body: h.card('Calculadora de Férias',
    h.field('Salário mensal (R$)', h.num('in1', 'Ex: 3000')) +
    h.row(h.field('Dias de férias', h.num('in2', '30')), h.field('Dias vendidos (abono)', h.num('in3', '0'))) +
    h.field('Número de dependentes', h.num('in4', '0')) +
    h.btn('Calcular férias') + h.result()),
  script: `
document.getElementById('btnCalc').addEventListener('click',function(){
  var salary=CF.parseNum(document.getElementById('in1').value);
  var days=CF.parseNum(document.getElementById('in2').value)||30;
  var sell=CF.parseNum(document.getElementById('in3').value)||0;
  var dep=CF.parseNum(document.getElementById('in4').value)||0;
  var box=document.getElementById('result');
  if(isNaN(salary)||salary<=0){CF.showResult(box,'Erro','Digite um salário válido',true);return;}
  if(days<1||days>30){CF.showResult(box,'Erro','Dias de férias deve ser entre 1 e 30',true);return;}
  var r=ENG.payroll.vacationPay(salary,days,sell,dep);
  box.classList.remove('error');
  box.innerHTML='<div class="big">'+CF.money(r.totalReceivable)+'</div>'+
    '<table style="margin:14px auto 0;max-width:340px;text-align:left;font-size:14px;width:100%">'+
    '<tr><td>Férias ('+days+' dias)</td><td style="text-align:right">'+CF.money(r.vacationGross)+'</td></tr>'+
    '<tr><td>(+) 1/3 constitucional</td><td style="text-align:right">'+CF.money(r.bonus)+'</td></tr>'+
    '<tr><td>(−) INSS</td><td style="text-align:right">'+CF.money(r.inss)+'</td></tr>'+
    '<tr><td>(−) IRRF</td><td style="text-align:right">'+CF.money(r.irrf)+'</td></tr>'+
    (sell>0?'<tr><td>(+) Abono pecuniário ('+sell+' dias, isento)</td><td style="text-align:right">'+CF.money(r.abono+r.abonoBonus)+'</td></tr>':'')+
    '<tr style="font-weight:700;border-top:1px solid #ccc"><td>(=) Total a receber</td><td style="text-align:right">'+CF.money(r.totalReceivable)+'</td></tr>'+
    '</table>';
});`
}
];

function ENG_COLOR_OPTS(){
  return [{v:0,l:'Preto'},{v:1,l:'Marrom'},{v:2,l:'Vermelho'},{v:3,l:'Laranja'},{v:4,l:'Amarelo'},{v:5,l:'Verde'},{v:6,l:'Azul'},{v:7,l:'Violeta'},{v:8,l:'Cinza'},{v:9,l:'Branco'}];
}
function ENG_MULT_OPTS(){
  return [{v:0,l:'×1 (Preto)'},{v:1,l:'×10 (Marrom)'},{v:2,l:'×100 (Vermelho)'},{v:3,l:'×1.000 (Laranja)'},{v:4,l:'×10.000 (Amarelo)'},{v:5,l:'×100.000 (Verde)'},{v:6,l:'×1.000.000 (Azul)'}];
}
