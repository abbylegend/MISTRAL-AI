const modal = document.getElementById('sceneModal');
const openBtn = document.getElementById('openSceneDashboard');
const closeBtn = document.getElementById('closeSceneDashboard');
const activeScene = document.getElementById('activeScene');
const sceneButtons = document.querySelectorAll('.scene-btn');

const eq = document.getElementById('eqIntensity');
const compression = document.getElementById('compression');
const reverb = document.getElementById('reverb');
const settingsSummary = document.getElementById('settingsSummary');
const seedValue = document.getElementById('seedValue');
const generateSeed = document.getElementById('generateSeed');

function openModal() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function updateSettings() {
  settingsSummary.textContent = `EQ ${eq.value} · Compression ${compression.value} · Reverb ${reverb.value}`;
}

function randomSeed() {
  const n = Math.floor(Math.random() * 900000 + 100000);
  return `KS-${n}`;
}

openBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

sceneButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const scene = btn.getAttribute('data-scene');
    activeScene.textContent = scene;
    closeModal();
  });
});

[eq, compression, reverb].forEach((el) => {
  el?.addEventListener('input', updateSettings);
});

generateSeed?.addEventListener('click', () => {
  seedValue.textContent = randomSeed();
});

updateSettings();
