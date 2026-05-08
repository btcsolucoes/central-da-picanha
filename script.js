const body = document.body;
const tabs = Array.from(document.querySelectorAll('.category-tab'));
const panels = Array.from(document.querySelectorAll('.panels > .panel'));
const subTabs = Array.from(document.querySelectorAll('.subtab'));
const subPanels = Array.from(document.querySelectorAll('.subpanel'));
const buffetTabs = Array.from(document.querySelectorAll('.buffet-tab'));
const buffetPanels = Array.from(document.querySelectorAll('.buffet-panel'));
const rodizioPanel = document.querySelector('#panel-rodizios');
const rodizioSymbol = document.querySelector('.rodizio-symbol');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

subTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateScopedTab(tab, subTabs, subPanels);
    applyRodizioVisual(tab);
  });
});

buffetTabs.forEach((tab) => {
  tab.addEventListener('click', () => activateScopedTab(tab, buffetTabs, buffetPanels));
});
