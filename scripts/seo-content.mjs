// Semantic SEO content for every tool page: intro paragraph, explanatory
// sections (method/formula), and an FAQ (rendered as visible text *and* as a
// matching FAQPage JSON-LD schema — text must stay identical in both places).
// Keyed by tool slug. Written in pt-BR, grounded in real competitor keyword
// research (calculadora-online.xyz) so the vocabulary matches how Brazilian
// users actually search for each tool.

export const SEO_CONTENT = {

'calculadora-cientifica': {
  intro: 'Esta <strong>calculadora científica online</strong> resolve expressões matemáticas completas — seno, cosseno, tangente, logaritmos, raízes, potências e fatorial — digitando a expressão diretamente, sem precisar apertar uma tecla por vez como em uma calculadora de bolso comum.',
  sections: [
    { h2: 'Como usar a calculadora científica', html: '<p>Toque nos botões para montar a expressão no visor (por exemplo, <code>sin(30)+sqrt(16)</code>) e pressione "=" para calcular. O botão DEG/RAD alterna entre graus e radianos para as funções trigonométricas — use DEG para ângulos em graus (como 30, 45, 90) e RAD para ângulos em radianos (como π/2).</p>' },
    { h2: 'Funções disponíveis', html: '<p>sin, cos, tan (trigonométricas), log (base 10), ln (logaritmo natural), √ (raiz quadrada), ^ (potência), ! (fatorial), π e e (constantes), além de parênteses para agrupar operações complexas e o botão Ans para reutilizar o último resultado.</p>' }
  ],
  faq: [
    { q: 'Como alternar entre graus e radianos?', a: 'Toque no botão DEG/RAD no canto superior direito da calculadora. Em DEG, sin(90) retorna 1; em RAD, use sin(pi/2) para o mesmo resultado.' },
    { q: 'Esta calculadora funciona com parênteses e operações encadeadas?', a: 'Sim. Você pode digitar expressões complexas com múltiplos parênteses, como (2+3)*sqrt(16)-log(100), e a calculadora resolve respeitando a ordem correta das operações.' },
    { q: 'O que o botão "Ans" faz?', a: 'Insere o resultado do último cálculo na posição atual do cursor, permitindo encadear novas operações a partir do resultado anterior sem redigitá-lo.' }
  ]
},

'calculadora-grafica': {
  intro: 'Plote o <strong>gráfico de qualquer função matemática</strong> f(x) instantaneamente — digite a função, escolha o intervalo de x e veja a curva desenhada automaticamente, útil para estudos de funções, trigonometria e cálculo.',
  sections: [
    { h2: 'Como usar a calculadora gráfica', html: '<p>Digite a função usando x como variável (por exemplo, <code>x^2</code>, <code>sin(x)</code>, <code>sqrt(x)+2</code>), defina o intervalo mínimo e máximo de x, e clique em "Plotar gráfico". As funções trigonométricas aqui usam radianos, o padrão matemático para gráficos.</p>' },
    { h2: 'Exemplos de funções para testar', html: '<p><code>x^2</code> (parábola), <code>sin(x)</code> (onda senoidal), <code>1/x</code> (hipérbole, observe a descontinuidade em x=0), <code>sqrt(x)</code> (apenas para x ≥ 0), <code>x^3-3*x</code> (cúbica com pontos de inflexão).</p>' }
  ],
  faq: [
    { q: 'As funções trigonométricas usam graus ou radianos no gráfico?', a: 'Radianos — o padrão matemático usado em gráficos de função. Por isso sin(x) completa um ciclo completo a cada 2π (≈ 6,28) unidades de x, não a cada 360.' },
    { q: 'O que significa quando o gráfico aparece com um "buraco"?', a: 'Indica que a função não é definida naquele ponto (por exemplo, 1/x em x=0) — a calculadora pula esses pontos em vez de desenhar um valor incorreto.' }
  ]
},

'calculadora-salario-liquido': {
  intro: 'Calcule o <strong>salário líquido</strong> a partir do salário bruto, com os descontos de INSS e IRRF aplicados automaticamente conforme as tabelas progressivas vigentes — descubra exatamente quanto cai na conta todo mês.',
  sections: [
    { h2: 'Como o salário líquido é calculado', html: '<p>Salário líquido = salário bruto − INSS − IRRF. O INSS é calculado por faixas progressivas sobre o salário bruto; o IRRF é calculado por faixas progressivas sobre o salário já descontado do INSS, considerando também a dedução por dependente.</p><p><strong>Atenção:</strong> as tabelas de INSS e IRRF são reajustadas anualmente pelo governo federal. Os valores usados aqui seguem as faixas vigentes mais recentes conhecidas — confirme sempre na Receita Federal/INSS antes de usar o resultado para decisões oficiais.</p>' }
  ],
  faq: [
    { q: 'Por que o desconto de INSS não é uma porcentagem fixa?', a: 'Porque o INSS usa alíquotas progressivas por faixa de salário — uma parte do salário é descontada a 7,5%, a próxima faixa a 9%, e assim por diante, em vez de aplicar uma única alíquota sobre o valor total.' },
    { q: 'O que é a dedução por dependente no IRRF?', a: 'Cada dependente declarado reduz a base de cálculo do IRRF em um valor fixo por mês, diminuindo o imposto devido — útil para quem tem filhos ou outros dependentes legais.' },
    { q: 'Este cálculo inclui FGTS?', a: 'Não. O FGTS (8% do salário) é depositado pelo empregador em uma conta separada e não é descontado do salário do funcionário, por isso não afeta o cálculo do líquido recebido.' }
  ]
},

'calculadora-ferias': {
  intro: 'Calcule o <strong>valor líquido das suas férias</strong>, incluindo o terço constitucional e os descontos de INSS e IRRF, com a opção de simular a venda de dias (abono pecuniário) — saiba exatamente quanto você vai receber antes de sair de férias.',
  sections: [
    { h2: 'Como o valor das férias é calculado', html: '<p>O valor bruto das férias é (salário ÷ 30) × dias de férias, mais o terço constitucional (1/3 desse valor), garantido pela Constituição Federal. Sobre esse total incidem INSS e IRRF, da mesma forma que no salário mensal. O abono pecuniário (venda de até 10 dias de férias) é isento de INSS e IRRF e pago separadamente.</p>' }
  ],
  faq: [
    { q: 'O que é o terço constitucional de férias?', a: 'É um adicional de 1/3 sobre o valor das férias, garantido pela Constituição Federal de 1988 a todo trabalhador CLT, pago junto com o valor das férias.' },
    { q: 'Quantos dias de férias posso vender (abono pecuniário)?', a: 'Até 10 dias (1/3 dos 30 dias de férias) podem ser convertidos em dinheiro em vez de descanso, mediante solicitação formal ao empregador com pelo menos 15 dias de antecedência.' },
    { q: 'O abono pecuniário tem desconto de INSS e IRRF?', a: 'Não. O abono pecuniário é isento de INSS e IRRF, diferente do valor normal das férias (que sofre os mesmos descontos do salário mensal).' }
  ]
},

'calculo-raiz-quadrada': {
  intro: 'A <strong>raiz quadrada</strong> (√) de um número é o valor que, multiplicado por si mesmo, resulta no número original. Esta calculadora de raiz quadrada online resolve o cálculo instantaneamente, incluindo números decimais, e mostra o resultado com 5 casas decimais de precisão.',
  sections: [
    { h2: 'Como calcular a raiz quadrada', html: '<p>A fórmula é √x = y, onde y × y = x. Por exemplo, √144 = 12 porque 12 × 12 = 144. Para números que não têm raiz exata (não são quadrados perfeitos, como 2, 3 ou 10), o resultado é um número irracional com infinitas casas decimais — a calculadora arredonda para 5 casas.</p><table><tr><th>Número</th><th>Raiz quadrada</th></tr><tr><td>4</td><td>2</td></tr><tr><td>25</td><td>5</td></tr><tr><td>100</td><td>10</td></tr><tr><td>2</td><td>1,41421</td></tr></table>' },
    { h2: 'Quadrados perfeitos de 1 a 20', html: '<p>1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400 — as raízes quadradas desses números são sempre inteiras (1 a 20).</p>' }
  ],
  faq: [
    { q: 'Qual é a raiz quadrada de um número negativo?', a: 'Números negativos não têm raiz quadrada real — o resultado seria um número imaginário (com i). Esta calculadora trabalha apenas com números reais positivos.' },
    { q: 'Como simplificar uma raiz quadrada à mão?', a: 'Decomponha o número em fatores, procure o maior quadrado perfeito que o divide e tire a raiz desse fator. Por exemplo, √50 = √(25×2) = 5√2.' },
    { q: 'A raiz quadrada é o mesmo que potência de 1/2?', a: 'Sim. √x é matematicamente equivalente a x^(1/2), por isso algumas calculadoras científicas usam a tecla x^y com expoente 0,5 para o mesmo resultado.' }
  ]
},

'calculo-raiz-cubica': {
  intro: 'A <strong>raiz cúbica</strong> (∛) de um número é o valor que, multiplicado três vezes por si mesmo, resulta no número original. Diferente da raiz quadrada, a raiz cúbica aceita números negativos, já que um número negativo elevado ao cubo continua negativo.',
  sections: [
    { h2: 'Como calcular a raiz cúbica', html: '<p>A fórmula é ∛x = y, onde y × y × y = x. Por exemplo, ∛27 = 3 porque 3 × 3 × 3 = 27. Para números negativos, ∛-27 = -3, já que (-3)×(-3)×(-3) = -27.</p><table><tr><th>Número</th><th>Raiz cúbica</th></tr><tr><td>8</td><td>2</td></tr><tr><td>27</td><td>3</td></tr><tr><td>125</td><td>5</td></tr><tr><td>-8</td><td>-2</td></tr></table>' }
  ],
  faq: [
    { q: 'A raiz cúbica de um número negativo existe?', a: 'Sim. Diferente da raiz quadrada, a raiz cúbica de um número negativo é real e também negativa — por exemplo, ∛-8 = -2.' },
    { q: 'Qual é a relação entre raiz cúbica e potência?', a: '∛x é o mesmo que x elevado a 1/3 (x^(1/3)). Por isso o cubo (x³) e a raiz cúbica são operações inversas uma da outra.' }
  ]
},

'calcular-potencia': {
  intro: 'Esta <strong>calculadora de potência</strong> eleva qualquer base a qualquer expoente (xⁿ), incluindo expoentes negativos, decimais e zero. É a ferramenta certa para resolver cálculos de potenciação rapidamente, sem precisar multiplicar o número por si mesmo manualmente.',
  sections: [
    { h2: 'Como funciona o cálculo de potência', html: '<p>Uma potência x^n significa multiplicar a base x por ela mesma n vezes. Regras importantes: qualquer número elevado a 0 é igual a 1 (x⁰=1); um expoente negativo inverte a base (x⁻ⁿ = 1/xⁿ); um expoente fracionário equivale a uma raiz (x^(1/2) = √x).</p><table><tr><th>Expressão</th><th>Resultado</th></tr><tr><td>2¹⁰</td><td>1024</td></tr><tr><td>5³</td><td>125</td></tr><tr><td>10⁻²</td><td>0,01</td></tr><tr><td>9^0,5</td><td>3</td></tr></table>' }
  ],
  faq: [
    { q: 'Como calcular uma potência com expoente negativo?', a: 'Inverta a base e torne o expoente positivo: x⁻ⁿ = 1/xⁿ. Por exemplo, 2⁻³ = 1/2³ = 1/8 = 0,125.' },
    { q: 'O que é x elevado a zero?', a: 'Qualquer número diferente de zero elevado a zero é igual a 1 (x⁰=1), por definição matemática.' },
    { q: 'Qual a diferença entre potência e multiplicação?', a: 'A multiplicação soma um número várias vezes (2+2+2), enquanto a potência multiplica um número por si mesmo várias vezes (2×2×2).' }
  ]
},

'calcular-numero-quadrado': {
  intro: 'Calcule o <strong>quadrado de um número</strong> (x²) instantaneamente — a operação inversa da raiz quadrada, muito usada em geometria, física e estatística (por exemplo, no cálculo de áreas e no desvio padrão).',
  sections: [
    { h2: 'Como elevar um número ao quadrado', html: '<p>Elevar ao quadrado significa multiplicar o número por ele mesmo: x² = x × x. Por exemplo, 12² = 12 × 12 = 144. Números negativos ao quadrado sempre resultam em um valor positivo, pois negativo × negativo = positivo.</p>' }
  ],
  faq: [
    { q: 'Um número negativo ao quadrado é positivo ou negativo?', a: 'É sempre positivo. Por exemplo, (-5)² = (-5)×(-5) = 25, porque o produto de dois números negativos é positivo.' },
    { q: 'Qual é a relação entre x² e a área de um quadrado?', a: 'A área de um quadrado é lado × lado, ou seja, lado². É por isso que a operação se chama "elevar ao quadrado".' }
  ]
},

'calculo-numero-cubo': {
  intro: 'Calcule o <strong>cubo de um número</strong> (x³) online — a multiplicação do número por si mesmo três vezes, usada para calcular volumes (como o de um cubo geométrico) e em diversas fórmulas de física e engenharia.',
  sections: [
    { h2: 'Como elevar um número ao cubo', html: '<p>Elevar ao cubo significa multiplicar o número por ele mesmo três vezes: x³ = x × x × x. Por exemplo, 5³ = 5 × 5 × 5 = 125. Diferente do quadrado, o cubo de um número negativo continua negativo: (-2)³ = -8.</p>' }
  ],
  faq: [
    { q: 'O cubo de um número negativo é negativo?', a: 'Sim. Como há três multiplicações por um número negativo, o sinal final fica negativo: (-3)³ = -27.' },
    { q: 'Para que serve o cálculo de x³ na prática?', a: 'É usado principalmente para calcular o volume de um cubo (aresta³) e aparece em fórmulas de física, estatística e engenharia.' }
  ]
},

'notacao-cientifica': {
  intro: 'Converta qualquer número decimal para <strong>notação científica</strong> (a × 10ⁿ) instantaneamente. A notação científica é usada para representar números muito grandes ou muito pequenos de forma compacta, comum em física, química e engenharia.',
  sections: [
    { h2: 'Como converter para notação científica', html: '<p>Todo número é escrito como um valor entre 1 e 10 (a mantissa) multiplicado por uma potência de 10. Por exemplo, 123.400 = 1,234 × 10⁵. Para números pequenos, o expoente é negativo: 0,00056 = 5,6 × 10⁻⁴.</p><table><tr><th>Número decimal</th><th>Notação científica</th></tr><tr><td>1.000.000</td><td>1 × 10⁶</td></tr><tr><td>0,001</td><td>1 × 10⁻³</td></tr><tr><td>45.200</td><td>4,52 × 10⁴</td></tr></table>' }
  ],
  faq: [
    { q: 'Por que usar notação científica?', a: 'Ela facilita a leitura e os cálculos com números extremamente grandes (como a distância entre planetas) ou extremamente pequenos (como o tamanho de um átomo), evitando escrever muitos zeros.' },
    { q: 'O que é a mantissa em notação científica?', a: 'É o número entre 1 e 10 (exclusive) que multiplica a potência de 10 — por exemplo, em 3,2 × 10⁵, a mantissa é 3,2.' }
  ]
},

'converter-longitude': {
  intro: 'Converta graus de <strong>longitude geográfica em tempo</strong> (horas e minutos) e vice-versa. Essa conversão é usada em navegação, astronomia e para entender os fusos horários, já que a Terra gira 360° em 24 horas — ou seja, 15° por hora.',
  sections: [
    { h2: 'A relação entre longitude e tempo', html: '<p>Como a Terra completa uma rotação de 360° em 24 horas, cada 15° de longitude correspondem a exatamente 1 hora de diferença de fuso horário. Um grau equivale a 4 minutos (60 minutos ÷ 15).</p>' }
  ],
  faq: [
    { q: 'Quantos minutos equivalem a 1 grau de longitude?', a: '1 grau de longitude equivale a 4 minutos de tempo (24h × 60min ÷ 360°).' },
    { q: 'Por que a longitude está ligada aos fusos horários?', a: 'Os fusos horários do mundo são definidos, em teoria, a cada 15° de longitude a partir do meridiano de Greenwich (0°), já que a Terra gira 15° por hora.' }
  ]
},

'testar-verificar-numero-primo': {
  intro: 'Verifique instantaneamente se um número é <strong>primo</strong> — ou seja, divisível apenas por 1 e por ele mesmo. Esta ferramenta testa qualquer número inteiro e informa o resultado na hora, sem necessidade de testar divisores manualmente.',
  sections: [
    { h2: 'Como saber se um número é primo', html: '<p>Um número primo só pode ser dividido exatamente por 1 e por ele mesmo. Para verificar, testa-se a divisibilidade por todos os números inteiros até a raiz quadrada do número — se nenhum dividir exatamente, o número é primo. Exemplos de números primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.</p>' }
  ],
  faq: [
    { q: 'O número 1 é primo?', a: 'Não. Por definição matemática, um número primo precisa ter exatamente dois divisores distintos (1 e ele mesmo); o número 1 tem apenas um divisor, por isso não é considerado primo.' },
    { q: 'O 2 é o único número primo par?', a: 'Sim. O 2 é o único número primo par — todos os outros números pares são divisíveis por 2, então têm pelo menos três divisores e não podem ser primos.' }
  ]
},

'lista-numero-primo': {
  intro: 'Gere a <strong>lista completa de números primos</strong> até qualquer limite (até 100.000) em segundos. Útil para estudos de matemática, criptografia e exercícios escolares sobre teoria dos números.',
  sections: [
    { h2: 'Primeiros números primos', html: '<p>Os primeiros números primos são: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47... A quantidade de primos diminui proporcionalmente conforme os números crescem, mas a sequência nunca termina (existem infinitos números primos, um fato provado por Euclides há mais de 2 mil anos).</p>' }
  ],
  faq: [
    { q: 'Quantos números primos existem até 100?', a: 'Existem 25 números primos entre 1 e 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 e 97.' },
    { q: 'Existe um maior número primo?', a: 'Não. Euclides provou por volta de 300 a.C. que a quantidade de números primos é infinita — não existe um "maior primo".' }
  ]
},

'maximo-divisor-comum-mdc': {
  intro: 'Calcule o <strong>MDC (máximo divisor comum)</strong> entre dois números — o maior número que divide ambos exatamente, sem deixar resto. O MDC é muito usado para simplificar frações e resolver problemas de divisão em partes iguais.',
  sections: [
    { h2: 'Como calcular o MDC pelo algoritmo de Euclides', html: '<p>O método mais rápido é o algoritmo de Euclides: divide-se o maior número pelo menor, depois o menor pelo resto, repetindo até o resto ser zero — o último divisor não-zero é o MDC. Exemplo: MDC(48,18) → 48÷18 resto 12 → 18÷12 resto 6 → 12÷6 resto 0 → MDC = 6.</p>' }
  ],
  faq: [
    { q: 'Para que serve o MDC na prática?', a: 'O MDC é usado para simplificar frações ao menor termo possível e para dividir quantidades em grupos iguais do maior tamanho possível.' },
    { q: 'Qual a diferença entre MDC e MMC?', a: 'O MDC é o maior número que divide dois números exatamente; o MMC (mínimo múltiplo comum) é o menor número que é múltiplo de ambos. São operações complementares.' }
  ]
},

'resolver-equacao-primeiro-grau': {
  intro: 'Resolva qualquer <strong>equação de primeiro grau</strong> (ax + b = 0) instantaneamente, encontrando o valor de x com o passo a passo da álgebra básica.',
  sections: [
    { h2: 'Como resolver uma equação de 1º grau', html: '<p>Para isolar x na equação ax + b = 0, subtrai-se b dos dois lados (ax = -b) e depois divide-se por a (x = -b/a). Exemplo: 2x + 6 = 0 → 2x = -6 → x = -3.</p>' }
  ],
  faq: [
    { q: 'O que é uma equação de primeiro grau?', a: 'É uma equação em que a incógnita (x) aparece apenas elevada à potência 1, na forma geral ax + b = 0, com a diferente de zero.' },
    { q: 'O que acontece se a = 0 na equação?', a: 'Se a for zero, a equação deixa de ser de primeiro grau — se b também for zero, há infinitas soluções; se b for diferente de zero, não há solução.' }
  ]
},

'resolver-equacao-segundo-grau': {
  intro: 'Resolva qualquer <strong>equação de segundo grau</strong> (ax² + bx + c = 0) usando a fórmula de Bhaskara, encontrando as raízes reais ou identificando quando não existem soluções reais.',
  sections: [
    { h2: 'A fórmula de Bhaskara', html: '<p>x = (-b ± √(b² - 4ac)) / 2a. O termo dentro da raiz (b² - 4ac) é chamado de discriminante (Δ): se Δ &gt; 0, há duas raízes reais distintas; se Δ = 0, há uma raiz dupla; se Δ &lt; 0, não há raízes reais.</p>' }
  ],
  faq: [
    { q: 'O que é o discriminante (Δ) de uma equação de 2º grau?', a: 'É o valor b² - 4ac dentro da raiz da fórmula de Bhaskara. Ele determina quantas soluções reais a equação tem: duas (Δ>0), uma (Δ=0) ou nenhuma (Δ<0).' },
    { q: 'Toda equação de segundo grau tem solução real?', a: 'Não. Quando o discriminante é negativo, a equação só tem soluções no conjunto dos números complexos, não nos números reais.' }
  ]
},

'regra-de-tres': {
  intro: 'Resolva qualquer <strong>regra de três simples</strong> (proporção direta) encontrando o quarto valor (a 4ª proporcional) a partir de três valores conhecidos — útil para receitas, conversões e problemas de proporcionalidade do dia a dia.',
  sections: [
    { h2: 'Como funciona a regra de três', html: '<p>Dada a proporção A está para B como C está para X, calcula-se X = (B × C) / A. Exemplo: se 3 litros de tinta cobrem 12 m², quantos litros cobrem 20 m²? X = (12×20)/3 = 80... ajustando: X = (3×20)/12 = 5 litros.</p>' }
  ],
  faq: [
    { q: 'Qual a diferença entre regra de três simples e composta?', a: 'A regra de três simples envolve apenas duas grandezas proporcionais; a composta envolve três ou mais grandezas relacionadas simultaneamente.' },
    { q: 'A regra de três sempre é proporção direta?', a: 'Não necessariamente — pode ser direta (quando uma grandeza aumenta, a outra também aumenta) ou inversa (quando uma aumenta, a outra diminui), dependendo do problema.' }
  ]
},

'calcular-logaritmo': {
  intro: 'Calcule o <strong>logaritmo na base 10</strong> (log₁₀) de qualquer número positivo. O logaritmo é a operação inversa da potenciação e é usado em escalas como a de pH, decibéis e na escala Richter de terremotos.',
  sections: [
    { h2: 'O que é logaritmo', html: '<p>log₁₀(x) = y significa que 10^y = x. Por exemplo, log₁₀(1000) = 3, porque 10³ = 1000. O logaritmo só é definido para números positivos.</p>' }
  ],
  faq: [
    { q: 'O logaritmo de um número negativo existe?', a: 'Não, no conjunto dos números reais. O logaritmo só é definido para números positivos maiores que zero.' },
    { q: 'Qual é o logaritmo de 1?', a: 'log₁₀(1) = 0, porque qualquer base elevada a 0 é igual a 1 (10⁰ = 1).' }
  ]
},

'coeficiente-angular': {
  intro: 'Calcule o <strong>coeficiente angular (inclinação)</strong> de uma reta a partir de dois pontos conhecidos — um conceito fundamental de geometria analítica que indica o quanto uma reta "sobe" ou "desce".',
  sections: [
    { h2: 'Fórmula do coeficiente angular', html: '<p>m = (y₂ - y₁) / (x₂ - x₁). O resultado indica a inclinação da reta: positivo significa que a reta é crescente, negativo que é decrescente, e zero indica uma reta horizontal.</p>' }
  ],
  faq: [
    { q: 'O que significa um coeficiente angular negativo?', a: 'Significa que a reta é decrescente — conforme x aumenta, y diminui.' },
    { q: 'O que acontece se os dois pontos tiverem o mesmo x?', a: 'Nesse caso a reta é vertical e o coeficiente angular é indefinido (divisão por zero), pois x₂ - x₁ = 0.' }
  ]
},

'transformar-decimal-fracao': {
  intro: 'Converta qualquer número <strong>decimal em fração</strong> simplificada automaticamente — ideal para trabalhos escolares de matemática e para entender a representação fracionária de decimais exatos e periódicos.',
  sections: [
    { h2: 'Como converter decimal em fração', html: '<p>Para um decimal exato, coloca-se o número decimal sobre uma potência de 10 (conforme a quantidade de casas decimais) e simplifica-se pelo MDC. Exemplo: 0,75 = 75/100 = 3/4 (simplificado dividindo por 25).</p>' }
  ],
  faq: [
    { q: 'Todo decimal pode ser escrito como fração?', a: 'Decimais exatos e periódicos (dízimas) sempre podem ser escritos como fração. Apenas números irracionais, como π, não podem.' },
    { q: 'Como simplificar a fração resultante?', a: 'Divide-se o numerador e o denominador pelo MDC entre eles, até não haver mais divisor comum além de 1.' }
  ]
},

'fracoes-irredutiveis-simplificar': {
  intro: 'Simplifique qualquer <strong>fração até sua forma irredutível</strong> (mais simples possível) automaticamente, dividindo numerador e denominador pelo máximo divisor comum entre eles.',
  sections: [
    { h2: 'Como simplificar uma fração', html: '<p>Calcula-se o MDC entre o numerador e o denominador, depois divide-se os dois pelo MDC. Exemplo: 18/24 → MDC(18,24)=6 → 18÷6 / 24÷6 = 3/4.</p>' }
  ],
  faq: [
    { q: 'Quando uma fração é irredutível?', a: 'Quando o numerador e o denominador não têm nenhum divisor comum além de 1 — ou seja, o MDC entre eles é 1.' },
    { q: 'Simplificar uma fração muda seu valor?', a: 'Não. Simplificar apenas reescreve a fração de forma mais simples, mantendo exatamente o mesmo valor numérico.' }
  ]
},

'minimo-multiplo-comum-mmc': {
  intro: 'Calcule o <strong>MMC (mínimo múltiplo comum)</strong> entre dois números — o menor número que é múltiplo de ambos simultaneamente. Muito usado para somar e subtrair frações com denominadores diferentes.',
  sections: [
    { h2: 'Como calcular o MMC', html: '<p>Uma forma prática é a fatoração simultânea em números primos, multiplicando todos os fatores primos (usando o maior expoente de cada). Exemplo: MMC(4,6) → 4=2², 6=2×3 → MMC = 2²×3 = 12.</p>' }
  ],
  faq: [
    { q: 'Para que serve o MMC?', a: 'O MMC é essencial para somar ou subtrair frações com denominadores diferentes, encontrando o menor denominador comum possível.' },
    { q: 'Qual a relação entre MMC e MDC?', a: 'Para dois números a e b, MMC(a,b) × MDC(a,b) = a × b. Essa fórmula permite calcular um a partir do outro.' }
  ]
},

'simplificar-raiz-quadrada': {
  intro: 'Simplifique qualquer <strong>raiz quadrada</strong> na forma a√b (um coeficiente multiplicando uma raiz menor), útil para deixar o resultado de cálculos algébricos em sua forma mais simples, sem usar decimais aproximados.',
  sections: [
    { h2: 'Como simplificar uma raiz quadrada', html: '<p>Decompõe-se o número em fatores, isolando o maior quadrado perfeito possível. Exemplo: √72 = √(36×2) = √36×√2 = 6√2.</p>' }
  ],
  faq: [
    { q: 'Toda raiz quadrada pode ser simplificada?', a: 'Apenas quando o número tem um fator que seja um quadrado perfeito (4, 9, 16, 25...). Se o número for livre de quadrados, a raiz já está em sua forma mais simples.' },
    { q: 'Por que simplificar em vez de usar a forma decimal?', a: 'A forma simplificada (a√b) é exata, enquanto a forma decimal é sempre uma aproximação arredondada para números irracionais.' }
  ]
},

'calculadora-horario': {
  intro: 'A <strong>calculadora de horas</strong> soma e subtrai durações de tempo (horas, minutos e segundos) automaticamente — perfeita para somar horas trabalhadas, calcular o total de um cronómetro ou simplesmente somar horários sem errar a conversão de 60 minutos para 1 hora.',
  sections: [
    { h2: 'Como somar e subtrair horas corretamente', html: '<p>Diferente da matemática decimal, o tempo usa base 60: ao somar minutos, cada 60 minutos completos se transformam em 1 hora extra. Exemplo: 2h45min + 1h30min = 3h75min = 4h15min (75 minutos = 1h15min).</p>' },
    { h2: 'Contador de horas para o trabalho', html: '<p>Esta calculadora também funciona como contador de horas: informe o horário de entrada e saída para descobrir quantas horas foram trabalhadas no total, incluindo intervalos de almoço.</p>' }
  ],
  faq: [
    { q: 'Como somar horas que passam de 24h?', a: 'A calculadora soma normalmente e mostra o total mesmo acima de 24 horas (por exemplo, 20h + 10h = 30h), sem "resetar" no meia-noite, o que é útil para somar horas trabalhadas em vários dias.' },
    { q: 'Como converter minutos para horas?', a: 'Divida o número de minutos por 60. Por exemplo, 90 minutos ÷ 60 = 1,5 horas, ou seja, 1 hora e 30 minutos.' },
    { q: 'Esta calculadora soma também segundos?', a: 'Sim, a calculadora aceita horas, minutos e segundos e converte automaticamente os "transbordos" (60 segundos = 1 minuto, 60 minutos = 1 hora).' }
  ]
},

'calcular-tempo-trabalho': {
  intro: 'Calcule o <strong>tempo de trabalho</strong> total a partir do horário de entrada e saída, descontando o intervalo de almoço — ideal para conferir a folha de ponto e calcular horas extras com precisão.',
  sections: [
    { h2: 'Como calcular as horas trabalhadas', html: '<p>Subtrai-se o horário de entrada do horário de saída e, em seguida, desconta-se o tempo de intervalo. Exemplo: entrada 08:00, saída 18:00, intervalo de 1h → 10h totais - 1h de intervalo = 9h trabalhadas.</p>' }
  ],
  faq: [
    { q: 'Como calcular horas extras a partir da jornada?', a: 'Subtraia a jornada contratual (normalmente 8h/dia) do total de horas trabalhadas calculado aqui. O que exceder é considerado hora extra.' },
    { q: 'O que fazer se o horário de saída for depois da meia-noite?', a: 'A calculadora trata automaticamente a passagem pela meia-noite, somando 24h ao cálculo quando a saída é no dia seguinte à entrada.' }
  ]
},

'multiplicar-duracao': {
  intro: 'Multiplique uma <strong>duração de tempo</strong> (horas, minutos, segundos) por um número inteiro ou decimal — útil para calcular o total de horas de vários turnos idênticos ou o tempo total de tarefas repetidas.',
  sections: [
    { h2: 'Como multiplicar uma duração', html: '<p>Multiplica-se cada unidade (horas, minutos, segundos) pelo fator e depois reorganiza-se o resultado em base 60. Exemplo: 1h30min × 3 = 3h90min = 4h30min.</p>' }
  ],
  faq: [
    { q: 'Como multiplicar horas e minutos por um número?', a: 'Multiplique o total em minutos (ou segundos) pelo fator desejado, depois converta o resultado de volta para horas e minutos dividindo por 60.' }
  ]
},

'dividir-tempo-duracao': {
  intro: 'Divida uma <strong>duração de tempo</strong> por um número — útil para calcular a média de tempo por tarefa quando se conhece o tempo total e a quantidade de repetições.',
  sections: [
    { h2: 'Como dividir uma duração', html: '<p>Converte-se a duração total para uma única unidade (geralmente segundos ou minutos), divide-se pelo número desejado, e converte-se o resultado de volta para horas:minutos:segundos.</p>' }
  ],
  faq: [
    { q: 'Como dividir 2h30min por 3?', a: '2h30min = 150 minutos. 150 ÷ 3 = 50 minutos, ou seja, 0h50min por parte.' }
  ]
},

'calcular-varios-horarios': {
  intro: 'Some ou subtraia <strong>várias durações de tempo</strong> de uma só vez — útil para somar o total de horas trabalhadas em uma semana inteira a partir de vários registros de ponto diários.',
  sections: [
    { h2: 'Como somar múltiplas durações', html: '<p>Cada duração é convertida para uma unidade comum (segundos), somadas todas juntas, e o total é reconvertido para horas, minutos e segundos, incluindo os "transbordos" de base 60.</p>' }
  ],
  faq: [
    { q: 'Posso somar horas de vários dias diferentes de uma vez?', a: 'Sim, basta adicionar cada duração diária (por exemplo, as horas trabalhadas de segunda a sexta) e a calculadora soma tudo automaticamente.' }
  ]
},

'conversao-hora-minuto-decimal': {
  intro: 'Converta <strong>horas e minutos para formato decimal</strong> (e vice-versa) instantaneamente — essencial para folhas de pagamento e planilhas, onde o tempo precisa ser expresso em decimal (como 7,5 horas) em vez de formato horário (7h30min).',
  sections: [
    { h2: 'Como converter horas:minutos para decimal', html: '<p>Divide-se os minutos por 60 e soma-se às horas inteiras. Exemplo: 7h30min → 30÷60 = 0,5 → 7,5 horas decimais. Para o caminho inverso, multiplica-se a parte decimal por 60: 7,25h → 0,25×60 = 15 → 7h15min.</p><table><tr><th>Horário</th><th>Decimal</th></tr><tr><td>1h15min</td><td>1,25</td></tr><tr><td>2h30min</td><td>2,5</td></tr><tr><td>3h45min</td><td>3,75</td></tr></table>' }
  ],
  faq: [
    { q: 'Como converter 30 minutos em decimal?', a: '30 minutos equivalem a 0,5 hora (30÷60 = 0,5), pois 30 minutos é a metade de 60 minutos.' },
    { q: 'Por que a folha de pagamento usa horas decimais?', a: 'O formato decimal facilita cálculos matemáticos diretos (como multiplicar pelo valor da hora) sem precisar lidar com a base 60 do sistema horário tradicional.' }
  ]
},

'converter-tempo-duracao': {
  intro: 'Converta uma <strong>duração de tempo entre diferentes unidades</strong> — segundos, minutos, horas, dias, semanas, meses e anos — em um único conversor completo e instantâneo.',
  sections: [
    { h2: 'Tabela de conversão de unidades de tempo', html: '<table><tr><th>Unidade</th><th>Equivale a</th></tr><tr><td>1 minuto</td><td>60 segundos</td></tr><tr><td>1 hora</td><td>60 minutos / 3.600 segundos</td></tr><tr><td>1 dia</td><td>24 horas</td></tr><tr><td>1 semana</td><td>7 dias</td></tr><tr><td>1 ano</td><td>365,25 dias (média)</td></tr></table>' }
  ],
  faq: [
    { q: 'Quantos segundos tem um dia?', a: 'Um dia tem 86.400 segundos (24 horas × 60 minutos × 60 segundos).' },
    { q: 'Quantas horas tem uma semana?', a: 'Uma semana tem 168 horas (7 dias × 24 horas).' }
  ]
},

'converter-timestamp-data': {
  intro: 'Converta um <strong>timestamp Unix em data legível</strong> (e vice-versa) — ferramenta essencial para desenvolvedores que trabalham com APIs, bancos de dados e logs de sistema que armazenam datas como números.',
  sections: [
    { h2: 'O que é um timestamp Unix', html: '<p>O timestamp Unix é o número de segundos decorridos desde 1º de janeiro de 1970 às 00:00:00 UTC (a chamada "época Unix"). É o formato padrão usado por sistemas operacionais, linguagens de programação e bancos de dados para armazenar datas de forma compacta.</p>' }
  ],
  faq: [
    { q: 'Por que os sistemas usam timestamp em vez de data normal?', a: 'Por ser um único número inteiro, o timestamp é mais fácil de armazenar, comparar e calcular diferenças de tempo do que strings de data formatadas.' },
    { q: 'O timestamp Unix considera fuso horário?', a: 'Não. O timestamp Unix é sempre baseado em UTC; a conversão para um horário local depende do fuso horário configurado no dispositivo ou sistema.' }
  ]
},

'calcular-adicao-subtracao-data': {
  intro: 'Some ou subtraia <strong>dias, meses ou anos de uma data</strong> para descobrir rapidamente uma data futura ou passada — útil para calcular prazos, vencimentos e datas de entrega.',
  sections: [
    { h2: 'Como somar ou subtrair de uma data', html: '<p>Informe a data inicial e a quantidade de dias, meses ou anos a adicionar (ou subtrair, usando valores negativos). O cálculo considera automaticamente meses com diferentes quantidades de dias e anos bissextos.</p>' }
  ],
  faq: [
    { q: 'Como calcular a data de 90 dias a partir de hoje?', a: 'Informe a data de hoje e adicione 90 dias — a calculadora já considera a passagem entre meses e anos automaticamente.' }
  ]
},

'calcular-duracao-duas-datas': {
  intro: 'Calcule o <strong>intervalo exato entre duas datas</strong> em dias, meses e anos — perfeito para calcular prazos de contratos, tempo de empresa ou qualquer intervalo entre dois eventos.',
  sections: [
    { h2: 'Como calcular a diferença entre duas datas', html: '<p>Basta informar a data inicial e a data final. A calculadora conta os dias corridos entre elas e também mostra o resultado decomposto em anos, meses e dias, considerando automaticamente anos bissextos.</p>' }
  ],
  faq: [
    { q: 'A calculadora considera anos bissextos?', a: 'Sim, o cálculo do intervalo entre datas considera automaticamente os anos bissextos (fevereiro com 29 dias) para um resultado exato.' }
  ]
},

'verificar-ano-bissexto': {
  intro: 'Verifique instantaneamente se um <strong>ano é bissexto</strong> — ou seja, se tem 366 dias em vez de 365, com um dia extra em fevereiro (29 de fevereiro).',
  sections: [
    { h2: 'Regra do ano bissexto', html: '<p>Um ano é bissexto se for divisível por 4. Exceção: anos divisíveis por 100 só são bissextos se também forem divisíveis por 400. Por exemplo, 2000 foi bissexto, mas 1900 não foi.</p>' }
  ],
  faq: [
    { q: 'Por que existe o ano bissexto?', a: 'Porque o ano solar real tem aproximadamente 365,25 dias. O dia extra a cada 4 anos (29 de fevereiro) compensa essa fração e mantém o calendário alinhado com as estações do ano.' },
    { q: '2024 e 2028 são anos bissextos?', a: 'Sim, ambos são divisíveis por 4 e não são exceções de século, então 2024 e 2028 são anos bissextos (366 dias).' }
  ]
},

'calcular-idade': {
  intro: 'Calcule sua <strong>idade exata</strong> em anos, meses e dias a partir da data de nascimento — rápido, preciso e considerando automaticamente anos bissextos.',
  sections: [
    { h2: 'Como a idade é calculada', html: '<p>A calculadora conta o intervalo entre a data de nascimento informada e a data de hoje (ou outra data escolhida), decompondo o resultado em anos completos, meses completos e dias restantes.</p>' }
  ],
  faq: [
    { q: 'Como calcular quantos dias eu já vivi?', a: 'Informe sua data de nascimento e a data de hoje — a calculadora mostra o total de dias corridos entre as duas datas.' },
    { q: 'Como calcular minha idade em uma data futura específica?', a: 'Basta trocar a "data final" para a data futura desejada, em vez de usar a data de hoje, para descobrir quantos anos você terá naquele dia.' }
  ]
},

'cronometro': {
  intro: 'Um <strong>cronômetro online</strong> simples e preciso, direto no navegador — inicie, pause e zere o tempo sem precisar instalar nenhum aplicativo.',
  sections: [
    { h2: 'Como usar o cronômetro', html: '<p>Clique em iniciar para começar a contagem, pause quando precisar e retome de onde parou. O tempo é exibido em horas, minutos, segundos e centésimos, direto no navegador, sem necessidade de conexão contínua com a internet.</p>' }
  ],
  faq: [
    { q: 'O cronômetro continua funcionando se eu trocar de aba?', a: 'Sim, a contagem continua em segundo plano enquanto a página estiver aberta no navegador.' }
  ]
},

'calcular-iva': {
  intro: 'Calcule o <strong>IVA (imposto sobre valor agregado)</strong> de qualquer valor — adicione ou remova o imposto de um preço instantaneamente, útil para comerciantes, freelancers e consumidores que precisam entender o valor com e sem imposto.',
  sections: [
    { h2: 'Como calcular o IVA', html: '<p>Para adicionar o IVA: valor final = valor base × (1 + alíquota). Para remover o IVA de um preço que já o inclui: valor base = valor final ÷ (1 + alíquota). Exemplo com 20%: R$100 com IVA = R$100 × 1,20 = R$120.</p>' }
  ],
  faq: [
    { q: 'Como remover o IVA de um valor que já inclui o imposto?', a: 'Divida o valor final por (1 + alíquota em decimal). Por exemplo, com IVA de 20%, divida por 1,20 para encontrar o valor sem imposto.' }
  ]
},

'percentagem': {
  intro: 'Calcule <strong>percentagens</strong> de diversas formas: qual é x% de um valor, qual percentual um número representa de outro, e some ou subtraia percentuais de um valor — tudo em uma única calculadora.',
  sections: [
    { h2: 'Fórmulas de percentagem mais usadas', html: '<p>Calcular x% de um valor: valor × (x/100). Descobrir que percentual A representa de B: (A÷B)×100. Aumentar um valor em x%: valor × (1 + x/100). Exemplo: 15% de 200 = 200×0,15 = 30.</p>' }
  ],
  faq: [
    { q: 'Como calcular quantos % um número representa de outro?', a: 'Divida o número pelo total e multiplique por 100. Por exemplo, 30 de 200 é (30÷200)×100 = 15%.' },
    { q: 'Como aplicar um desconto percentual em um preço?', a: 'Multiplique o preço por (1 - desconto/100). Por exemplo, um desconto de 20% em R$50 é R$50 × 0,80 = R$40.' }
  ]
},

'calcular-rateio': {
  intro: 'Divida qualquer <strong>valor ou conta em partes proporcionais (rateio)</strong> entre várias pessoas ou categorias — útil para dividir contas de condomínio, despesas de grupo ou custos proporcionais a pesos diferentes.',
  sections: [
    { h2: 'Como funciona o rateio proporcional', html: '<p>Cada parte recebe uma fração do valor total proporcional ao seu "peso" (pode ser igual para todos ou baseado em critérios como área, consumo ou participação). A fórmula é: parte = (peso individual ÷ soma de todos os pesos) × valor total.</p>' }
  ],
  faq: [
    { q: 'O rateio sempre divide o valor igualmente?', a: 'Não necessariamente. O rateio pode ser igual entre todos ou proporcional a um critério específico, como área de um imóvel ou participação societária.' }
  ]
},

'calculadora-gorjeta': {
  intro: 'Calcule a <strong>gorjeta (taxa de serviço)</strong> ideal sobre uma conta de restaurante e descubra quanto cada pessoa deve pagar ao dividir a conta entre várias pessoas.',
  sections: [
    { h2: 'Como calcular a gorjeta', html: '<p>Multiplica-se o valor da conta pela porcentagem de gorjeta desejada (geralmente 10%) e, se necessário, divide-se o total (conta + gorjeta) pelo número de pessoas. Exemplo: conta de R$200, gorjeta de 10% = R$20, total R$220 dividido por 4 pessoas = R$55 cada.</p>' }
  ],
  faq: [
    { q: 'Qual é a porcentagem padrão de gorjeta no Brasil?', a: 'A taxa de serviço usual em restaurantes brasileiros é de 10% sobre o valor da conta, geralmente já incluída na nota, mas opcional ao cliente.' }
  ]
},

'calcular-emprestimo-credito': {
  intro: 'Simule as <strong>prestações de um empréstimo</strong> informando valor, taxa de juros e número de parcelas — descubra o valor exato de cada prestação mensal pela tabela price (prestações fixas).',
  sections: [
    { h2: 'Como é calculada a prestação', html: '<p>A fórmula da prestação fixa (tabela price) é: PMT = P × [i(1+i)ⁿ] / [(1+i)ⁿ-1], onde P é o valor financiado, i é a taxa de juros mensal (decimal) e n é o número de parcelas.</p>' }
  ],
  faq: [
    { q: 'O que é a tabela price?', a: 'É o sistema de amortização mais comum em empréstimos e financiamentos, em que todas as prestações têm o mesmo valor, mudando apenas a proporção entre juros e amortização do saldo a cada mês.' }
  ]
},

'calcular-custo-credito': {
  intro: 'Calcule o <strong>custo total de um crédito ou financiamento</strong> — descubra quanto você pagará de juros no total ao final do contrato, comparando com o valor originalmente emprestado.',
  sections: [
    { h2: 'Como calcular o custo total do crédito', html: '<p>Multiplica-se o valor da prestação pelo número total de parcelas, e subtrai-se o valor original emprestado. A diferença é o custo total em juros pago durante o contrato.</p>' }
  ],
  faq: [
    { q: 'Qual a diferença entre taxa de juros e custo total do crédito?', a: 'A taxa de juros é um percentual mensal ou anual; o custo total do crédito é o valor absoluto em dinheiro pago a mais, somando os juros de todas as parcelas do contrato.' }
  ]
},

'juros-compostos-capitalizacao': {
  intro: 'Calcule os <strong>juros compostos</strong> de um investimento ou dívida ao longo do tempo — descubra o montante final considerando a capitalização (juros sobre juros) mês a mês ou ano a ano.',
  sections: [
    { h2: 'Fórmula dos juros compostos', html: '<p>M = C × (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros por período (decimal) e t é o número de períodos. Diferente dos juros simples, aqui os juros de cada período também passam a gerar juros.</p>' }
  ],
  faq: [
    { q: 'Qual a diferença entre juros simples e compostos?', a: 'Nos juros simples, o juro incide sempre sobre o capital inicial; nos juros compostos, o juro de cada período é somado ao capital e passa a gerar juros também — por isso o crescimento é exponencial, não linear.' },
    { q: 'Por que os juros compostos são chamados de "juros sobre juros"?', a: 'Porque a cada período de capitalização, o juro gerado passa a fazer parte do capital, e o próximo cálculo de juros incide sobre esse novo total maior.' }
  ]
},

'dobrar-capital': {
  intro: 'Descubra em <strong>quanto tempo um investimento dobra de valor</strong> com juros compostos, a partir de uma taxa de rendimento informada — usando a fórmula derivada dos juros compostos.',
  sections: [
    { h2: 'Como calcular o tempo para dobrar o capital', html: '<p>A fórmula exata é t = log(2) / log(1+i), onde i é a taxa de juros por período. Uma aproximação rápida conhecida é a "regra dos 72": tempo ≈ 72 ÷ taxa de juros anual (em %).</p>' }
  ],
  faq: [
    { q: 'O que é a regra dos 72?', a: 'É um atalho matemático para estimar quantos anos um investimento leva para dobrar: basta dividir 72 pela taxa de juros anual em percentual. Por exemplo, a 8% ao ano, o capital dobra em aproximadamente 9 anos (72÷8).' }
  ]
},

'calcular-comprar-vender-acoes': {
  intro: 'Calcule o <strong>ganho ou perda ao comprar e vender ações</strong> na bolsa de valores — informe preço de compra, preço de venda e quantidade para descobrir o resultado em valor e em percentual.',
  sections: [
    { h2: 'Como calcular o lucro ou prejuízo na bolsa', html: '<p>Resultado = (preço de venda - preço de compra) × quantidade de ações. O percentual de ganho/perda é calculado como (preço de venda ÷ preço de compra - 1) × 100.</p>' }
  ],
  faq: [
    { q: 'Esta calculadora considera taxas de corretagem?', a: 'O cálculo básico mostra o resultado bruto da operação; taxas de corretagem e impostos sobre ganho de capital devem ser descontados separadamente do resultado.' }
  ]
},

'converter-criptomoeda-real': {
  intro: 'Converta valores entre <strong>criptomoedas e o Real brasileiro</strong> usando uma taxa de câmbio informada — útil para calcular rapidamente quanto vale uma quantidade de cripto em moeda local.',
  sections: [
    { h2: 'Como funciona a conversão cripto ↔ real', html: '<p>Multiplique a quantidade de criptomoeda pela cotação atual em reais para obter o valor em Real, ou divida um valor em reais pela cotação para descobrir a quantidade equivalente em cripto.</p>' }
  ],
  faq: [
    { q: 'A cotação da criptomoeda é atualizada automaticamente?', a: 'Esta calculadora funciona com a cotação que você informar manualmente — consulte uma exchange confiável para o valor atual antes de calcular.' }
  ]
},

'gerar-senha-sequencia-caracteres': {
  intro: 'Gere <strong>senhas aleatórias e seguras</strong> com o tamanho e os tipos de caracteres que você escolher (letras maiúsculas, minúsculas, números e símbolos) — direto no navegador, sem enviar nada para servidores externos.',
  sections: [
    { h2: 'O que torna uma senha segura', html: '<p>Uma senha forte combina pelo menos 12 caracteres, misturando letras maiúsculas, minúsculas, números e símbolos. Quanto maior a variedade de caracteres possíveis e o tamanho da senha, exponencialmente mais difícil é forçá-la por tentativa e erro.</p>' }
  ],
  faq: [
    { q: 'As senhas geradas aqui são enviadas para algum servidor?', a: 'Não. A geração acontece inteiramente no seu navegador (client-side), usando o gerador de números aleatórios do próprio dispositivo — nenhuma senha gerada é transmitida ou armazenada.' },
    { q: 'Qual tamanho de senha é recomendado hoje?', a: 'Especialistas em segurança recomendam no mínimo 12 a 16 caracteres, combinando letras, números e símbolos, especialmente para contas importantes como e-mail e banco.' }
  ]
},

'criptografar-descriptografar-mensagem': {
  intro: 'Criptografe e descriptografe <strong>mensagens de texto</strong> com uma senha, direto no navegador — uma forma simples de proteger o conteúdo de um texto antes de compartilhá-lo.',
  sections: [
    { h2: 'Como funciona a criptografia de texto', html: '<p>O texto original é transformado em um código ilegível usando uma senha (chave) escolhida por você. Só quem souber a senha correta consegue reverter o processo e ler a mensagem original.</p>' }
  ],
  faq: [
    { q: 'Se eu esquecer a senha, posso recuperar a mensagem?', a: 'Não. A criptografia é simétrica e depende exclusivamente da senha usada — sem ela, não há como recuperar o texto original.' }
  ]
},

'converter-binario-hexadecimal': {
  intro: 'Converta números entre <strong>decimal, binário e hexadecimal</strong> instantaneamente — ferramenta essencial para quem estuda ou trabalha com programação, redes e sistemas digitais.',
  sections: [
    { h2: 'Como converter entre as bases numéricas', html: '<p>O sistema binário usa apenas 2 dígitos (0 e 1); o hexadecimal usa 16 símbolos (0-9 e A-F). Exemplo: o número decimal 255 é 11111111 em binário e FF em hexadecimal — o maior valor possível com 8 bits.</p><table><tr><th>Decimal</th><th>Binário</th><th>Hexadecimal</th></tr><tr><td>10</td><td>1010</td><td>A</td></tr><tr><td>16</td><td>10000</td><td>10</td></tr><tr><td>255</td><td>11111111</td><td>FF</td></tr></table>' }
  ],
  faq: [
    { q: 'Por que a programação usa hexadecimal?', a: 'O hexadecimal representa valores binários de forma mais compacta e legível — cada dígito hexadecimal corresponde exatamente a 4 dígitos binários, facilitando a leitura de códigos de cor, endereços de memória e mais.' }
  ]
},

'somar-subtrair-hexadecimal': {
  intro: 'Some e subtraia <strong>números hexadecimais</strong> diretamente, sem precisar converter manualmente para decimal e voltar — útil para programadores e estudantes de sistemas digitais.',
  sections: [
    { h2: 'Como somar números em hexadecimal', html: '<p>A soma segue a mesma lógica do sistema decimal, mas cada posição vai até F (15) antes de “virar” e levar 1 para a próxima casa, em vez de ir até 9. Exemplo: A + 6 = 10 (porque A=10, 10+6=16, que em hexadecimal se escreve 10).</p>' }
  ],
  faq: [
    { q: 'Como funciona o “vai um” na soma hexadecimal?', a: 'Quando a soma de uma posição atinge 16 ou mais, subtrai-se 16 e soma-se 1 na próxima casa à esquerda — exatamente como o “vai um” do sistema decimal acontece ao atingir 10.' }
  ]
},

'converter-bytes': {
  intro: 'Converta valores de armazenamento digital entre <strong>bytes, KB, MB, GB e TB</strong> instantaneamente — essencial para entender o tamanho real de arquivos, planos de internet e capacidade de armazenamento.',
  sections: [
    { h2: 'Tabela de conversão de bytes', html: '<table><tr><th>Unidade</th><th>Equivale a</th></tr><tr><td>1 KB</td><td>1.024 bytes</td></tr><tr><td>1 MB</td><td>1.024 KB</td></tr><tr><td>1 GB</td><td>1.024 MB</td></tr><tr><td>1 TB</td><td>1.024 GB</td></tr></table><p>Atenção: fabricantes de armazenamento costumam usar 1.000 em vez de 1.024 nas conversões comerciais, o que explica por que um “HD de 1 TB” mostra menos de 1.000 GB reais no sistema operacional.</p>' }
  ],
  faq: [
    { q: 'Por que 1 KB tem 1.024 bytes e não 1.000?', a: 'Porque os computadores trabalham em base binária (potências de 2), e 1.024 = 2^10 é a potência de 2 mais próxima de 1.000, por isso foi adotada como padrão técnico para KB, MB, GB etc.' }
  ]
},

'converter-mascara-sub-rede': {
  intro: 'Converta <strong>máscaras de sub-rede</strong> entre notação decimal, binária e CIDR (/24, /16...) — ferramenta essencial para quem trabalha com configuração de redes e administração de sistemas.',
  sections: [
    { h2: 'O que é uma máscara de sub-rede', html: '<p>A máscara de sub-rede define quantos bits de um endereço IP identificam a rede e quantos identificam o host. Por exemplo, a máscara 255.255.255.0 equivale a /24 em notação CIDR, significando que os primeiros 24 bits identificam a rede.</p>' }
  ],
  faq: [
    { q: 'O que significa /24 em uma rede?', a: '/24 indica que os primeiros 24 bits do endereço IP (3 dos 4 octetos) identificam a rede, deixando 8 bits para endereços de host — o que permite 254 hosts válidos nessa sub-rede.' }
  ]
},

'calcular-faixa-enderecos-ip': {
  intro: 'Calcule a <strong>faixa de endereços IP</strong> de uma sub-rede — descubra o endereço de rede, o endereço de broadcast e a quantidade de hosts válidos a partir de um IP e uma máscara de sub-rede.',
  sections: [
    { h2: 'Como calcular a faixa de endereços de uma sub-rede', html: '<p>A partir do IP e da máscara (ou CIDR), calcula-se o endereço de rede (primeiro IP da faixa), o endereço de broadcast (último IP da faixa) e o número de hosts utilizáveis, que é sempre 2 elevado ao número de bits de host, menos 2.</p>' }
  ],
  faq: [
    { q: 'Por que se subtrai 2 do número de hosts possíveis?', a: 'Porque o primeiro endereço da faixa é reservado para identificar a rede e o último é reservado para broadcast — nenhum dos dois pode ser atribuído a um dispositivo individual.' }
  ]
},

'contar-caracteres': {
  intro: 'Conte o <strong>número de caracteres, palavras e linhas</strong> de qualquer texto instantaneamente — útil para respeitar limites de redes sociais, anúncios, meta descrições de SEO e formulários.',
  sections: [
    { h2: 'Por que contar caracteres é importante', html: '<p>Muitas plataformas têm limites estritos de caracteres (como posts do X/Twitter ou meta descrições do Google, limitadas a cerca de 155-160 caracteres). Contar com precisão evita que o texto seja cortado ou rejeitado.</p>' }
  ],
  faq: [
    { q: 'Espaços contam como caracteres?', a: 'Sim, tecnicamente espaços são caracteres. Esta ferramenta mostra a contagem total incluindo espaços e também costuma destacar a contagem sem espaços separadamente.' }
  ]
},

'remover-espacos-texto': {
  intro: 'Remova <strong>espaços extras de um texto</strong> automaticamente — elimine espaços duplicados, espaços no início/fim ou todos os espaços de uma vez, limpando o texto para uso em planilhas, URLs ou código.',
  sections: [
    { h2: 'Tipos de limpeza de espaços disponíveis', html: '<p>É possível remover apenas espaços duplicados (mantendo um único espaço entre palavras), remover espaços no início e fim (trim), ou remover absolutamente todos os espaços do texto, unindo as palavras.</p>' }
  ],
  faq: [
    { q: 'Por que textos copiados da web costumam ter espaços extras?', a: 'Isso acontece por causa da formatação HTML original, quebras de linha ocultas e caracteres invisíveis que são copiados junto com o texto visível.' }
  ]
},

'converter-hexadecimal-texto': {
  intro: 'Converta <strong>texto para hexadecimal e hexadecimal para texto</strong> (UTF-8) instantaneamente — útil para programadores que precisam inspecionar ou gerar representações hexadecimais de strings.',
  sections: [
    { h2: 'Como funciona a conversão texto-hexadecimal', html: '<p>Cada caractere do texto é convertido para seu valor numérico UTF-8 correspondente e depois representado em hexadecimal. Por exemplo, a letra “A” corresponde ao valor 65 em decimal, que é 41 em hexadecimal.</p>' }
  ],
  faq: [
    { q: 'Esta ferramenta funciona com acentos e emojis?', a: 'Sim, a conversão usa codificação UTF-8, que suporta acentos, caracteres especiais e emojis, representando cada um pelos bytes hexadecimais correspondentes.' }
  ]
},

'converter-distancia': {
  intro: 'Converta <strong>distâncias</strong> entre metros, quilômetros, centímetros, milhas, pés e polegadas instantaneamente — útil para viagens internacionais, receitas, projetos de construção e conversão de medidas do sistema imperial para o métrico.',
  sections: [
    { h2: 'Tabela de conversão de distância', html: '<table><tr><th>Unidade</th><th>Equivale a</th></tr><tr><td>1 milha</td><td>1,609 km</td></tr><tr><td>1 pé</td><td>0,3048 m</td></tr><tr><td>1 polegada</td><td>2,54 cm</td></tr><tr><td>1 km</td><td>1.000 m</td></tr></table>' }
  ],
  faq: [
    { q: 'Quantos quilômetros tem uma milha?', a: 'Uma milha equivale a aproximadamente 1,609 quilômetros.' },
    { q: 'Quantos centímetros tem uma polegada?', a: 'Uma polegada equivale exatamente a 2,54 centímetros.' }
  ]
},

'converter-massa': {
  intro: 'Converta valores de <strong>massa/peso</strong> entre gramas, quilogramas, toneladas, libras e onças instantaneamente — útil para receitas, compras internacionais e conversão entre o sistema métrico e o imperial.',
  sections: [
    { h2: 'Tabela de conversão de massa', html: '<table><tr><th>Unidade</th><th>Equivale a</th></tr><tr><td>1 kg</td><td>1.000 g</td></tr><tr><td>1 libra (lb)</td><td>0,4536 kg</td></tr><tr><td>1 onça (oz)</td><td>28,35 g</td></tr><tr><td>1 tonelada</td><td>1.000 kg</td></tr></table>' }
  ],
  faq: [
    { q: 'Quantos quilos tem uma libra?', a: 'Uma libra (lb) equivale a aproximadamente 0,4536 quilogramas.' }
  ]
},

'converter-volume': {
  intro: 'Converta <strong>volume entre litros e metros cúbicos</strong> (e outras unidades de volume) instantaneamente — útil para cálculos de caixas d’água, piscinas, reservatórios e receitas.',
  sections: [
    { h2: 'Relação entre litros e metros cúbicos', html: '<p>1 metro cúbico (m³) equivale exatamente a 1.000 litros. Essa conversão é fundamental em contas de água (geralmente medidas em m³) e em projetos de construção e piscinas.</p>' }
  ],
  faq: [
    { q: 'Quantos litros tem 1 m³?', a: '1 metro cúbico equivale exatamente a 1.000 litros.' }
  ]
},

'converter-celsius-fahrenheit': {
  intro: 'Converta temperaturas entre <strong>Celsius e Fahrenheit</strong> instantaneamente — essencial para quem viaja para os EUA, acompanha previsões do tempo internacionais ou trabalha com receitas/equipamentos importados.',
  sections: [
    { h2: 'Fórmulas de conversão °C ↔ °F', html: '<p>De Celsius para Fahrenheit: °F = (°C × 9/5) + 32. De Fahrenheit para Celsius: °C = (°F - 32) × 5/9. Exemplo: 0°C = 32°F (ponto de congelamento da água); 100°C = 212°F (ponto de ebulição).</p>' }
  ],
  faq: [
    { q: 'Quanto é 37°C (temperatura corporal) em Fahrenheit?', a: '37°C equivale a 98,6°F, usando a fórmula (37×9/5)+32 = 98,6.' },
    { q: 'Em que temperatura Celsius e Fahrenheit são iguais?', a: 'A -40 graus, as duas escalas coincidem: -40°C = -40°F.' }
  ]
},

'converter-potencia-motriz-cavalos-kw': {
  intro: 'Converta <strong>potência de motores entre cavalos (cv/hp) e quilowatts (kW)</strong> instantaneamente — essencial para comparar especificações de carros, motos e máquinas entre diferentes padrões de medida.',
  sections: [
    { h2: 'Fórmula de conversão cv ↔ kW', html: '<p>1 cavalo-vapor (cv) equivale a aproximadamente 0,7355 kW. Para converter de kW para cv, divide-se por 0,7355 (ou multiplica-se por ≈1,36).</p>' }
  ],
  faq: [
    { q: 'Quantos kW tem um motor de 100 cv?', a: '100 cv equivalem a aproximadamente 73,55 kW (100 × 0,7355).' }
  ]
},

'converter-energia': {
  intro: 'Converta <strong>energia entre kWh, MWh, Joules e calorias</strong> instantaneamente — útil para entender contas de energia elétrica, especificações técnicas e cálculos de física.',
  sections: [
    { h2: 'Tabela de conversão de energia', html: '<table><tr><th>Unidade</th><th>Equivale a</th></tr><tr><td>1 kWh</td><td>3.600.000 J (3,6 MJ)</td></tr><tr><td>1 MWh</td><td>1.000 kWh</td></tr><tr><td>1 caloria</td><td>4,184 J</td></tr></table>' }
  ],
  faq: [
    { q: 'Quantos Joules tem 1 kWh?', a: '1 kWh (quilowatt-hora, a unidade usada na conta de luz) equivale a exatamente 3.600.000 Joules, ou 3,6 megajoules.' }
  ]
},

'calcular-resistencia-termica': {
  intro: 'Calcule a <strong>resistência térmica (valor R)</strong> de um material isolante — importante para projetos de construção e escolha de materiais de isolamento térmico.',
  sections: [
    { h2: 'Como calcular a resistência térmica', html: '<p>R = espessura do material (m) ÷ condutividade térmica (W/m·K). Quanto maior o valor R, melhor o material isola contra a passagem de calor.</p>' }
  ],
  faq: [
    { q: 'O que significa um valor R mais alto?', a: 'Um valor R mais alto indica melhor capacidade de isolamento térmico — o material deixa passar menos calor através dele.' }
  ]
},

'converter-passos-distancia': {
  intro: 'Converta <strong>passos em distância</strong> (km ou metros) e vice-versa — útil para quem usa contador de passos e quer saber quantos quilômetros realmente caminhou.',
  sections: [
    { h2: 'Como converter passos em quilômetros', html: '<p>Em média, um passo adulto mede entre 0,70 e 0,80 metros. Multiplicando o número de passos pelo tamanho médio do passo, obtém-se a distância aproximada percorrida. Exemplo: 10.000 passos × 0,75m = 7.500m = 7,5 km.</p>' }
  ],
  faq: [
    { q: 'Quantos km tem 10.000 passos?', a: 'Em média, 10.000 passos equivalem a aproximadamente 7 a 8 km, dependendo do tamanho do passo da pessoa.' }
  ]
},

'calculadora-pace-corrida': {
  intro: 'Calcule o <strong>pace (ritmo) de corrida</strong> em minutos por quilômetro, ou converta para velocidade em km/h — essencial para corredores que treinam com metas de ritmo específicas.',
  sections: [
    { h2: 'Como calcular o pace de corrida', html: '<p>Pace (min/km) = tempo total (min) ÷ distância (km). Para converter pace em velocidade (km/h), divide-se 60 pelo pace em minutos. Exemplo: um pace de 6 min/km equivale a 60÷6 = 10 km/h.</p>' }
  ],
  faq: [
    { q: 'Como converter pace (min/km) em velocidade (km/h)?', a: 'Divida 60 pelo pace em minutos por quilômetro. Por exemplo, um pace de 5 min/km equivale a 60÷5 = 12 km/h.' }
  ]
},

'calcular-area-retangulo': {
  intro: 'Calcule a <strong>área de um retângulo</strong> informando a base e a altura — fórmula básica de geometria usada em projetos de construção, decoração e estudos escolares.',
  sections: [
    { h2: 'Fórmula da área do retângulo', html: '<p>Área = base × altura. Exemplo: um retângulo de 5m de base por 3m de altura tem área de 15m².</p>' }
  ],
  faq: [
    { q: 'Qual a diferença entre área de retângulo e de quadrado?', a: 'O quadrado é um caso especial de retângulo em que todos os lados são iguais — por isso sua área é lado², que é a mesma fórmula base × altura quando base = altura.' }
  ]
},

'calcular-perimetro-retangulo': {
  intro: 'Calcule o <strong>perímetro de um retângulo</strong> (a soma de todos os lados) informando base e altura — útil para calcular a quantidade de material para cercar ou emoldurar uma área.',
  sections: [
    { h2: 'Fórmula do perímetro do retângulo', html: '<p>Perímetro = 2 × (base + altura). Exemplo: um retângulo de 5m por 3m tem perímetro de 2×(5+3) = 16m.</p>' }
  ],
  faq: [
    { q: 'Por que o perímetro multiplica por 2?', a: 'Porque um retângulo tem dois lados de cada medida (duas bases e duas alturas), por isso soma-se base+altura e multiplica-se por 2.' }
  ]
},

'calcular-area-circulo': {
  intro: 'Calcule a <strong>área de um círculo</strong> a partir do raio — fórmula clássica de geometria usando a constante pi (π), útil para projetos, jardinagem e estudos escolares.',
  sections: [
    { h2: 'Fórmula da área do círculo', html: '<p>Área = π × raio² (onde π ≈ 3,14159). Exemplo: um círculo de raio 5 tem área de π×5² = π×25 ≈ 78,54.</p>' }
  ],
  faq: [
    { q: 'Como calcular a área a partir do diâmetro em vez do raio?', a: 'Divida o diâmetro por 2 para obter o raio, depois aplique a fórmula π×raio² normalmente.' }
  ]
},

'calcular-perimetro-circulo': {
  intro: 'Calcule o <strong>perímetro (circunferência) de um círculo</strong> a partir do raio — útil para calcular a quantidade de material para contornar uma área circular.',
  sections: [
    { h2: 'Fórmula da circunferência', html: '<p>Circunferência = 2 × π × raio. Exemplo: um círculo de raio 5 tem circunferência de 2×π×5 ≈ 31,42.</p>' }
  ],
  faq: [
    { q: 'Qual a diferença entre área e perímetro de um círculo?', a: 'A área mede o espaço interno (em unidades quadradas), enquanto o perímetro (circunferência) mede o contorno externo (em unidades lineares).' }
  ]
},

'calcular-area-triangulo': {
  intro: 'Calcule a <strong>área de um triângulo</strong> usando a fórmula de Heron (a partir dos três lados) — funciona para qualquer tipo de triângulo, mesmo sem conhecer a altura.',
  sections: [
    { h2: 'Fórmula de Heron', html: '<p>Primeiro calcula-se o semiperímetro s = (a+b+c)/2, depois a área = √(s(s-a)(s-b)(s-c)), onde a, b e c são os três lados do triângulo.</p>' }
  ],
  faq: [
    { q: 'Por que usar a fórmula de Heron em vez de base × altura ÷ 2?', a: 'A fórmula de Heron é útil quando você conhece apenas os três lados do triângulo, sem precisar medir ou calcular a altura separadamente.' }
  ]
},

'calcular-media': {
  intro: 'Calcule a <strong>média aritmética</strong> de uma lista de números instantaneamente — a medida estatística mais usada para resumir um conjunto de notas, valores ou medições em um único número representativo.',
  sections: [
    { h2: 'Como calcular a média', html: '<p>Soma-se todos os valores da lista e divide-se pela quantidade de valores. Exemplo: a média de 7, 8 e 9 é (7+8+9)÷3 = 24÷3 = 8.</p>' }
  ],
  faq: [
    { q: 'Qual a diferença entre média e mediana?', a: 'A média é a soma dos valores dividida pela quantidade; a mediana é o valor que fica exatamente no meio da lista ordenada. A mediana é menos sensível a valores extremos (outliers) do que a média.' }
  ]
},

'media-ponderada': {
  intro: 'Calcule a <strong>média ponderada</strong> de um conjunto de notas ou valores, cada um com um peso (importância) diferente — muito usada para calcular a média final de disciplinas escolares com provas de pesos diferentes.',
  sections: [
    { h2: 'Como calcular a média ponderada', html: '<p>Média ponderada = soma de (valor × peso) ÷ soma dos pesos. Exemplo: nota 7 com peso 2 e nota 9 com peso 3 → (7×2 + 9×3)÷(2+3) = (14+27)÷5 = 8,2.</p>' }
  ],
  faq: [
    { q: 'Quando usar média ponderada em vez de média simples?', a: 'Quando os valores têm importâncias diferentes entre si — por exemplo, quando uma prova final vale mais do que um trabalho, a média ponderada reflete isso corretamente, o que a média simples não faz.' }
  ]
},

'calcular-mediana': {
  intro: 'Calcule a <strong>mediana</strong> de uma lista de números — o valor central de um conjunto de dados ordenados, uma medida estatística menos afetada por valores extremos do que a média.',
  sections: [
    { h2: 'Como calcular a mediana', html: '<p>Ordena-se a lista de valores. Se a quantidade for ímpar, a mediana é o valor central. Se for par, a mediana é a média dos dois valores centrais. Exemplo: em {3,5,9}, a mediana é 5; em {3,5,9,11}, a mediana é (5+9)÷2=7.</p>' }
  ],
  faq: [
    { q: 'Por que a mediana é útil quando há valores extremos?', a: 'Porque a mediana considera apenas a posição central dos dados ordenados, sem ser distorcida por valores muito altos ou muito baixos, diferente da média aritmética.' }
  ]
},

'volt-ampere-ohm-watt-calcular': {
  intro: 'Calcule <strong>tensão, corrente, resistência e potência elétrica</strong> a partir da Lei de Ohm e da fórmula de potência — ferramenta essencial para estudantes e profissionais de eletricidade e eletrônica.',
  sections: [
    { h2: 'Lei de Ohm e fórmula de potência', html: '<p>Lei de Ohm: V = R × I (tensão = resistência × corrente). Potência: P = V × I (potência = tensão × corrente). A partir de quaisquer duas grandezas conhecidas, é possível calcular as outras duas.</p>' }
  ],
  faq: [
    { q: 'Como calcular a corrente a partir da potência e da tensão?', a: 'Use I = P ÷ V (corrente = potência ÷ tensão). Por exemplo, um aparelho de 1100W ligado em 220V consome 1100÷220 = 5 amperes.' }
  ]
},

'calcular-resistor-codigo-cores': {
  intro: 'Decodifique o <strong>valor de um resistor pelo código de cores</strong> — identifique a resistência em ohms a partir das faixas coloridas pintadas no componente, sem precisar medir com um multímetro.',
  sections: [
    { h2: 'Como funciona o código de cores dos resistores', html: '<p>Cada cor representa um dígito (preto=0, marrom=1, vermelho=2, laranja=3, amarelo=4, verde=5, azul=6, violeta=7, cinza=8, branco=9). As primeiras faixas formam o valor, a faixa seguinte é o multiplicador, e a última indica a tolerância.</p>' }
  ],
  faq: [
    { q: 'O que a última faixa colorida do resistor indica?', a: 'Indica a tolerância do componente — o quanto o valor real pode variar em relação ao valor nominal calculado (por exemplo, dourado = ±5%, prateado = ±10%).' }
  ]
},

'calculo-imc': {
  intro: 'Calcule seu <strong>IMC (Índice de Massa Corporal)</strong> a partir do peso e altura — um indicador usado pela OMS para estimar se o peso está dentro da faixa considerada saudável.',
  sections: [
    { h2: 'Fórmula do IMC', html: '<p>IMC = peso (kg) ÷ altura² (m). Exemplo: uma pessoa de 70kg e 1,75m tem IMC = 70÷(1,75²) = 70÷3,0625 ≈ 22,9.</p><table><tr><th>Faixa de IMC</th><th>Classificação (OMS)</th></tr><tr><td>Abaixo de 18,5</td><td>Abaixo do peso</td></tr><tr><td>18,5 a 24,9</td><td>Peso normal</td></tr><tr><td>25 a 29,9</td><td>Sobrepeso</td></tr><tr><td>30 ou mais</td><td>Obesidade</td></tr></table>' }
  ],
  faq: [
    { q: 'O IMC é um diagnóstico médico preciso?', a: 'Não. O IMC é apenas um indicador geral e não considera fatores como massa muscular, idade ou distribuição de gordura — uma avaliação médica completa é sempre recomendada.' },
    { q: 'Qual é o IMC considerado normal?', a: 'Segundo a OMS, o IMC considerado normal para adultos fica entre 18,5 e 24,9.' }
  ]
},

'contador-calorias-proteinas-carboidratos-gorduras': {
  intro: 'Calcule o total de <strong>calorias a partir de proteínas, carboidratos e gorduras</strong> de um alimento ou refeição — útil para quem acompanha a dieta e quer confirmar a informação nutricional de um rótulo.',
  sections: [
    { h2: 'Como as calorias são calculadas a partir dos macronutrientes', html: '<p>Cada grama de proteína e de carboidrato fornece aproximadamente 4 calorias; cada grama de gordura fornece aproximadamente 9 calorias. Total de calorias = (proteínas×4) + (carboidratos×4) + (gorduras×9).</p>' }
  ],
  faq: [
    { q: 'Por que a gordura tem mais calorias por grama?', a: 'A gordura é o macronutriente mais energeticamente denso, fornecendo cerca de 9 calorias por grama, contra aproximadamente 4 calorias por grama de proteínas ou carboidratos.' }
  ]
},

};
