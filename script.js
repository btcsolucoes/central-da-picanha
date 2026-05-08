const body = document.body;
const tabs = Array.from(document.querySelectorAll('.category-tab'));
const panels = Array.from(document.querySelectorAll('.panels > .panel'));
const subTabs = Array.from(document.querySelectorAll('.subtab'));
const subPanels = Array.from(document.querySelectorAll('.subpanel'));
const buffetTabs = Array.from(document.querySelectorAll('.buffet-tab'));
const buffetPanels = Array.from(document.querySelectorAll('.buffet-panel'));
const rodizioPanel = document.querySelector('#panel-rodizios');
const rodizioSymbol = document.querySelector('.rodizio-symbol');
const languageButtons = Array.from(document.querySelectorAll('.language-pill'));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const translations = {
  pt: {
    'hero.menu': 'Cardápio Digital',
    'hero.kicker': 'Rodízio, pizza, crepe e sushi',
    'nav.rodizios': 'Rodízios',
    'nav.sobremesas': 'Sobremesas',
    'nav.bebidas': 'Bebidas',
    'nav.drinks': 'Drinks',
    'nav.vinhos': 'Vinhos',
    'nav.info': 'Info',
    'status.prices': 'Valores em R$',
    'rodizios.eyebrow': 'Serviço da casa',
    'rodizios.title': 'Rodízios',
    'rodizios.desc': 'Escolha entre carnes na brasa, pizzas saindo do forno, crepes preparados na hora e sushis.',
    'sub.carnes': 'Carnes',
    'sub.pizzas': 'Pizzas',
    'sub.crepes': 'Crepes',
    'sub.sushis': 'Sushis',
    'meat.lunch': 'Almoço',
    'meat.title': 'Rodízio de carnes',
    'meat.desc': 'Cortes servidos na mesa com buffet de acompanhamentos, saladas, guarnições e molhos.',
    'special.period': 'Noite e fim de semana',
    'special.title': 'Rodízio especial',
    'special.desc': 'Seleção ampliada de cortes, linguiças, frango, queijo coalho e buffet completo.',
    'buffet.cortes': 'Cortes',
    'buffet.acompanhamentos': 'Acompanhamentos',
    'buffet.saladas': 'Saladas',
    'buffet.guarnicoes': 'Guarnições',
    'buffet.molhos': 'Molhos',
    'buffet.cortes.title': 'Cortes da brasa',
    'buffet.picanha': 'Picanha fatiada',
    'buffet.costela': 'Costela bovina',
    'buffet.coracao': 'Coração de frango',
    'buffet.linguica': 'Linguiça toscana',
    'buffet.feijao': 'Feijão tropeiro',
    'buffet.grao': 'Salada de grão-de-bico',
    'buffet.guarnicoes.quentes': 'Guarnições quentes',
    'buffet.pure': 'Purê de batata',
    'buffet.macarrao': 'Macarrão ao molho',
    'label.rodizio': 'Rodízio',
    'label.completo': 'Completo',
    'label.entrada': 'Entrada',
    'label.classico': 'Clássico',
    'label.refreshing': 'Refrescante',
    'pizza.rodizio.title': 'Rodízio de pizzas salgadas',
    'pizza.rodizio.desc': 'Sabores tradicionais e especiais servidos em fatias direto na mesa.',
    'pizza.full.title': 'Rodízio de pizzas doces e salgadas',
    'pizza.full.desc': 'Inclui pizzas doces no final do serviço, com sabores de chocolate, banana e Romeu e Julieta.',
    'pizza.kids.title': 'Rodízio infantil',
    'pizza.kids.desc': 'Para crianças até 10 anos, com pizzas salgadas e doces.',
    'crepe.savory.title': 'Crepes salgados',
    'crepe.savory.desc': 'Massa fina com recheios de frango, queijo, carne de sol, presunto e calabresa.',
    'crepe.full.title': 'Crepes salgados e doces',
    'crepe.full.desc': 'Inclui recheios doces como chocolate, banana, doce de leite e goiabada com queijo.',
    'crepe.group.label': 'Mesa cheia',
    'crepe.mixed.title': 'Rodízio misto',
    'crepe.mixed.desc': 'Pizza, crepe e buffet de apoio em uma experiência única para grupos.',
    'sushi.traditional.title': 'Sushis tradicionais',
    'sushi.traditional.desc': 'Hossomaki, uramaki, niguiri, hot roll e entradas simples servidas em sequência.',
    'sushi.special.title': 'Sushis especiais',
    'sushi.special.desc': 'Inclui salmão, skin, kani, cream cheese, hot roll e sugestões do sushiman.',
    'sushi.entry.desc': 'Opções leves para abrir o serviço japonês.',
    'price.included': 'Incluso',
    'desserts.eyebrow': 'Final doce',
    'desserts.desc': 'Clássicos simples para fechar o almoço ou o rodízio.',
    'dessert.pudim': 'Pudim de leite',
    'portion.slice': 'Fatia',
    'dessert.cartola.desc': 'Banana, queijo e canela',
    'dessert.brownie': 'Brownie com sorvete',
    'dessert.icecream': 'Taça de sorvete',
    'dessert.icecream.desc': '2 bolas',
    'dessert.withicecream': 'Com sorvete',
    'drinks.na': 'Sem álcool',
    'bebidas.desc': 'Refrigerantes, sucos, água e opções para acompanhar o almoço.',
    'drink.water.still': 'Água sem gás',
    'drink.water.sparkling': 'Água com gás',
    'drink.soda.can': 'Refrigerante lata',
    'drink.soda.liter': 'Refrigerante 1L',
    'drink.table': 'Para mesa',
    'drink.juice.glass': 'Suco copo',
    'drink.juice.pitcher': 'Suco jarra',
    'drink.coconut': 'Água de coco',
    'drink.icedtea': 'Chá gelado',
    'drink.energy': 'Energético',
    'drink.can': 'Lata',
    'drinks.desc': 'Clássicos da casa para noite, grupos e celebrações.',
    'drink.caipirinha.desc': 'Limão, cachaça e açúcar.',
    'drink.caipiroska.desc': 'Vodka, fruta da casa e gelo.',
    'drink.gin.title': 'Gin tônica',
    'drink.gin.desc': 'Gin, tônica, limão e especiarias.',
    'drink.mojito.desc': 'Rum, hortelã, limão e água com gás.',
    'drink.mocktail.title': 'Coquetel de frutas',
    'drink.mocktail.desc': 'Frutas, leite condensado e gelo.',
    'wine.eyebrow': 'Carta simples',
    'wine.desc': 'Rótulos fáceis de harmonizar com carnes, pizza e massas.',
    'wine.red': 'Tintos',
    'wine.red.list': 'Cabernet Sauvignon nacional 89,00 · Malbec argentino 110,00 · Carmenere chileno 105,00 · Merlot nacional 92,00',
    'wine.white': 'Brancos',
    'wine.white.list': 'Chardonnay 92,00 · Sauvignon Blanc 98,00 · Vinho verde 86,00',
    'wine.rose': 'Rosés e espumantes',
    'wine.rose.list': 'Rosé seco 94,00 · Espumante brut 98,00 · Espumante moscatel 89,00',
    'wine.glass': 'Taças',
    'wine.glass.list': 'Tinto da casa 24,00 · Branco da casa 24,00 · Espumante 26,00',
    'info.eyebrow': 'Restaurante',
    'info.title': 'Informações',
    'info.address': 'Endereço',
    'info.hours': 'Horário',
    'info.hours.desc': 'Todos os dias, 11h30 - 23h',
    'info.specialty': 'Especialidade',
    'info.specialty.desc': 'Rodízio de carnes, pizzas, crepes e sushi'
  },
  en: {
    'hero.menu': 'Digital Menu',
    'hero.kicker': 'Steakhouse, pizza, crepe and sushi',
    'nav.rodizios': 'All-you-can-eat',
    'nav.sobremesas': 'Desserts',
    'nav.bebidas': 'Beverages',
    'nav.drinks': 'Cocktails',
    'nav.vinhos': 'Wines',
    'nav.info': 'Info',
    'status.prices': 'Prices in BRL',
    'rodizios.eyebrow': 'House service',
    'rodizios.title': 'All-you-can-eat',
    'rodizios.desc': 'Choose from grilled meats, oven-baked pizzas, made-to-order crepes and sushi.',
    'sub.carnes': 'Meats',
    'sub.pizzas': 'Pizzas',
    'sub.crepes': 'Crepes',
    'sub.sushis': 'Sushi',
    'meat.lunch': 'Lunch',
    'meat.title': 'Meat rodizio',
    'meat.desc': 'Table-served cuts with a buffet of sides, salads, hot dishes and sauces.',
    'special.period': 'Evening and weekend',
    'special.title': 'Special rodizio',
    'special.desc': 'Expanded selection of cuts, sausages, chicken, coalho cheese and full buffet.',
    'buffet.cortes': 'Cuts',
    'buffet.acompanhamentos': 'Sides',
    'buffet.saladas': 'Salads',
    'buffet.guarnicoes': 'Hot sides',
    'buffet.molhos': 'Sauces',
    'buffet.cortes.title': 'Grill cuts',
    'buffet.picanha': 'Sliced picanha',
    'buffet.costela': 'Beef ribs',
    'buffet.coracao': 'Chicken hearts',
    'buffet.linguica': 'Brazilian sausage',
    'buffet.feijao': 'Tropeiro beans',
    'buffet.grao': 'Chickpea salad',
    'buffet.guarnicoes.quentes': 'Hot sides',
    'buffet.pure': 'Mashed potatoes',
    'buffet.macarrao': 'Pasta with sauce',
    'label.rodizio': 'All-you-can-eat',
    'label.completo': 'Full service',
    'label.entrada': 'Starter',
    'label.classico': 'Classic',
    'label.refreshing': 'Refreshing',
    'pizza.rodizio.title': 'Savory pizza rodizio',
    'pizza.rodizio.desc': 'Traditional and special flavors served by the slice at the table.',
    'pizza.full.title': 'Savory and sweet pizza rodizio',
    'pizza.full.desc': 'Includes sweet pizzas at the end of service, with chocolate, banana and guava-and-cheese flavors.',
    'pizza.kids.title': 'Kids rodizio',
    'pizza.kids.desc': 'For children up to 10 years old, with savory and sweet pizzas.',
    'crepe.savory.title': 'Savory crepes',
    'crepe.savory.desc': 'Thin batter with chicken, cheese, carne de sol, ham and calabresa fillings.',
    'crepe.full.title': 'Savory and sweet crepes',
    'crepe.full.desc': 'Includes sweet fillings such as chocolate, banana, dulce de leche and guava with cheese.',
    'crepe.group.label': 'For the table',
    'crepe.mixed.title': 'Mixed rodizio',
    'crepe.mixed.desc': 'Pizza, crepe and support buffet in one experience for groups.',
    'sushi.traditional.title': 'Traditional sushi',
    'sushi.traditional.desc': 'Hossomaki, uramaki, nigiri, hot roll and simple starters served in sequence.',
    'sushi.special.title': 'Special sushi',
    'sushi.special.desc': 'Includes salmon, skin, kani, cream cheese, hot roll and chef suggestions.',
    'sushi.entry.desc': 'Light options to start the Japanese service.',
    'price.included': 'Included',
    'desserts.eyebrow': 'Sweet finish',
    'desserts.desc': 'Simple classics to finish lunch or the rodizio.',
    'dessert.pudim': 'Milk pudding',
    'portion.slice': 'Slice',
    'dessert.cartola.desc': 'Banana, cheese and cinnamon',
    'dessert.brownie': 'Brownie with ice cream',
    'dessert.icecream': 'Ice cream cup',
    'dessert.icecream.desc': '2 scoops',
    'dessert.withicecream': 'With ice cream',
    'drinks.na': 'Alcohol-free',
    'bebidas.desc': 'Soft drinks, juices, water and options to pair with lunch.',
    'drink.water.still': 'Still water',
    'drink.water.sparkling': 'Sparkling water',
    'drink.soda.can': 'Canned soda',
    'drink.soda.liter': '1L soda',
    'drink.table': 'For the table',
    'drink.juice.glass': 'Juice glass',
    'drink.juice.pitcher': 'Juice pitcher',
    'drink.coconut': 'Coconut water',
    'drink.icedtea': 'Iced tea',
    'drink.energy': 'Energy drink',
    'drink.can': 'Can',
    'drinks.desc': 'House classics for evenings, groups and celebrations.',
    'drink.caipirinha.desc': 'Lime, cachaça and sugar.',
    'drink.caipiroska.desc': 'Vodka, house fruit and ice.',
    'drink.gin.title': 'Gin and tonic',
    'drink.gin.desc': 'Gin, tonic, lime and spices.',
    'drink.mojito.desc': 'Rum, mint, lime and sparkling water.',
    'drink.mocktail.title': 'Fruit mocktail',
    'drink.mocktail.desc': 'Fruit, condensed milk and ice.',
    'wine.eyebrow': 'Simple wine list',
    'wine.desc': 'Easy-pairing labels for meats, pizza and pasta.',
    'wine.red': 'Red wines',
    'wine.red.list': 'Brazilian Cabernet Sauvignon 89.00 · Argentinian Malbec 110.00 · Chilean Carmenere 105.00 · Brazilian Merlot 92.00',
    'wine.white': 'White wines',
    'wine.white.list': 'Chardonnay 92.00 · Sauvignon Blanc 98.00 · Vinho verde 86.00',
    'wine.rose': 'Rosé and sparkling',
    'wine.rose.list': 'Dry rosé 94.00 · Brut sparkling 98.00 · Moscatel sparkling 89.00',
    'wine.glass': 'By the glass',
    'wine.glass.list': 'House red 24.00 · House white 24.00 · Sparkling 26.00',
    'info.eyebrow': 'Restaurant',
    'info.title': 'Information',
    'info.address': 'Address',
    'info.hours': 'Hours',
    'info.hours.desc': 'Every day, 11:30 AM - 11 PM',
    'info.specialty': 'Specialty',
    'info.specialty.desc': 'Meat, pizza, crepe and sushi rodizio'
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.pt;

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.title = lang === 'en' ? 'Central da Picanha - Digital Menu' : 'Central da Picanha - Cardápio Digital';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('centralPicanhaLang', lang);
}

function applyRodizioVisual(tab) {
  if (!tab || !rodizioPanel) return;

  rodizioPanel.dataset.rodizio = tab.dataset.rodizio || 'carnes';

  if (rodizioSymbol && tab.dataset.symbol) {
    rodizioSymbol.src = tab.dataset.symbol;
  }

  if (!rodizioPanel.hidden) {
    body.dataset.theme = tab.dataset.theme || 'rodizios';
  }
}

function activatePrimary(tab) {
  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });

  panels.forEach((panel) => {
    const active = panel.id === tab.getAttribute('aria-controls');
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });

  if (tab.getAttribute('aria-controls') === 'panel-rodizios') {
    applyRodizioVisual(subTabs.find((item) => item.classList.contains('is-active')) || subTabs[0]);
  } else {
    body.dataset.theme = tab.dataset.theme || 'rodizios';
  }

  tab.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    inline: 'center',
    block: 'nearest'
  });
}

function activateScopedTab(tab, tabList, panelList) {
  const target = tab.dataset.target;

  tabList.forEach((item) => {
    item.classList.toggle('is-active', item === tab);
  });

  panelList.forEach((panel) => {
    const active = panel.id === target;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activatePrimary(tab));
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang || 'pt'));
});

subTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateScopedTab(tab, subTabs, subPanels);
    applyRodizioVisual(tab);
  });
});

buffetTabs.forEach((tab) => {
  tab.addEventListener('click', () => activateScopedTab(tab, buffetTabs, buffetPanels));
});

setLanguage(localStorage.getItem('centralPicanhaLang') || 'pt');
