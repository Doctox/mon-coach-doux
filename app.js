const modes = {
  brise: {
    label: 'Brise',
    effort: 35,
    rest: 25,
    intro: 'Aujourd’hui, le but c’est juste d’être là.',
  },
  doux: {
    label: 'Doux',
    effort: 45,
    rest: 20,
    intro: 'Garde le rythme. Propre plutôt que rapide.',
  },
  sombre: {
    label: 'Sombre',
    effort: 50,
    rest: 15,
    intro: 'Reste solide. Lent, propre, contrôlé.',
  },
};

const exercises = [
  {
    title: 'Respiration debout',
    phase: 'Échauffement',
    duration: 60,
  },
  {
    title: 'Cercles d’épaules',
    phase: 'Échauffement',
    duration: 60,
  },
  {
    title: 'Cat-cow doux',
    phase: 'Échauffement',
    duration: 60,
  },
  {
    title: 'Ouverture de hanches',
    phase: 'Échauffement',
    duration: 60,
  },
  {
    title: 'Marche active',
    phase: 'Échauffement',
    duration: 60,
  },
  {
    title: 'Squat contrôlé',
    phase: 'Circuit',
    duration: 'effort',
  },
  {
    title: 'Pompes adaptées',
    phase: 'Circuit',
    duration: 'effort',
  },
  {
    title: 'Pont fessier',
    phase: 'Circuit',
    duration: 'effort',
  },
  {
    title: 'Bird-dog',
    phase: 'Circuit',
    duration: 'effort',
  },
  {
    title: 'Dead bug',
    phase: 'Circuit',
    duration: 'effort',
  },
  {
    title: 'Nageur au sol',
    phase: 'Circuit',
    duration: 'effort',
  },
  {
    title: 'Squat contrôlé',
    phase: 'Circuit - tour 2',
    duration: 'effort',
  },
  {
    title: 'Pompes adaptées',
    phase: 'Circuit - tour 2',
    duration: 'effort',
  },
  {
    title: 'Pont fessier',
    phase: 'Circuit - tour 2',
    duration: 'effort',
  },
  {
    title: 'Bird-dog',
    phase: 'Circuit - tour 2',
    duration: 'effort',
  },
  {
    title: 'Dead bug',
    phase: 'Circuit - tour 2',
    duration: 'effort',
  },
  {
    title: 'Nageur au sol',
    phase: 'Circuit - tour 2',
    duration: 'effort',
  },
  {
    title: 'Mobilité hanches',
    phase: 'Mobilité',
    duration: 60,
  },
  {
    title: 'Rotation thoracique',
    phase: 'Mobilité',
    duration: 60,
  },
  {
    title: 'Posture de repos',
    phase: 'Retour au calme',
    duration: 60,
  },
];

const restPhases = ['Circuit', 'Circuit - tour 2'];

const encouragements = [
  'Tranquille. Tu n’as qu’à suivre.',
  'Respire, garde le contrôle.',
  'Propre plutôt que rapide.',
  'Tu avances, exercice après exercice.',
  'Encore un peu, sans forcer.',
];

const exerciseGuides = {
  'Respiration debout': {
    setup: 'Debout, pieds bien posés au sol. Relâche les épaules et garde le regard devant toi.',
    movement: 'Pose les mains sur les côtes ou le ventre. Sens le corps se gonfler doucement à l’inspiration, puis se relâcher à l’expiration.',
    breath: 'Inspire par le nez, expire lentement par la bouche. Cherche une expiration plus longue que l’inspiration.',
    watch: 'Ne force pas la poitrine. Si tu te sens étourdi, respire normalement et ralentis.',
  },
  'Cercles d’épaules': {
    setup: 'Debout ou assis, dos long, bras relâchés le long du corps.',
    movement: 'Monte les épaules vers les oreilles, recule-les, descends-les, puis ramène-les vers l’avant. Change de sens à mi-parcours.',
    breath: 'Respire naturellement. Essaie de relâcher un peu plus à chaque expiration.',
    watch: 'Le cou reste détendu. Le mouvement vient des épaules, pas de la tête.',
  },
  'Cat-cow doux': {
    setup: 'À quatre pattes, mains sous les épaules, genoux sous les hanches. Répartis le poids entre mains et genoux.',
    movement: 'Arrondis doucement le dos, puis creuse légèrement. Le mouvement doit être lent et confortable.',
    breath: 'Expire quand tu arrondis le dos. Inspire quand tu reviens et creuses légèrement.',
    watch: 'Ne cherche pas une grande amplitude. Si les poignets gênent, pose les avant-bras ou fais plus petit.',
  },
  'Ouverture de hanches': {
    setup: 'Debout, près d’un mur ou d’une chaise si tu veux garder l’équilibre.',
    movement: 'Monte un genou devant toi, ouvre la hanche vers le côté, puis repose le pied. Alterne les jambes.',
    breath: 'Respire régulièrement. Expire quand tu ouvres la hanche.',
    watch: 'Le bassin reste stable. Monte moins haut si le genou ou la hanche tire.',
  },
  'Marche active': {
    setup: 'Debout, dos long, bras souples. Garde les pieds dans une zone confortable.',
    movement: 'Marche sur place en levant légèrement les genoux. Les bras accompagnent naturellement.',
    breath: 'Respire sans forcer. Tu dois pouvoir parler pendant le mouvement.',
    watch: 'Aucun impact nécessaire. Si les genoux sont sensibles, lève moins les jambes.',
  },
  'Squat contrôlé': {
    setup: 'Debout, pieds largeur épaules, pointes légèrement ouvertes. Imagine une chaise derrière toi.',
    movement: 'Recule les fesses comme pour t’asseoir, plie les genoux, puis pousse dans les pieds pour remonter.',
    breath: 'Inspire en descendant. Expire doucement en remontant.',
    watch: 'Les talons restent au sol. Les genoux suivent la direction des pieds. Descends moins bas si ça gêne.',
  },
  'Pompes adaptées': {
    setup: 'Choisis une hauteur stable : mur, table solide, canapé stable ou sol. Mains un peu plus larges que les épaules.',
    movement: 'Plie les coudes pour approcher la poitrine du support, puis repousse lentement.',
    breath: 'Inspire en descendant. Expire en repoussant.',
    watch: 'Garde le ventre légèrement serré. Si les épaules montent vers les oreilles, choisis une version plus facile.',
  },
  'Pont fessier': {
    setup: 'Allongé sur le dos, genoux pliés, pieds au sol largeur bassin. Bras posés au sol.',
    movement: 'Pousse dans les talons pour lever le bassin, puis redescends doucement vertèbre par vertèbre.',
    breath: 'Expire en montant. Inspire en redescendant.',
    watch: 'Ne cambre pas exagérément. Si tu sens surtout le bas du dos, monte moins haut.',
  },
  'Bird-dog': {
    setup: 'À quatre pattes, mains sous les épaules, genoux sous les hanches.',
    movement: 'Tends un bras et la jambe opposée, marque une petite pause, puis reviens. Alterne les côtés.',
    breath: 'Expire quand tu tends. Inspire en revenant au centre.',
    watch: 'Le bassin reste le plus stable possible. Si c’est trop dur, tends seulement la jambe ou seulement le bras.',
  },
  'Dead bug': {
    setup: 'Allongé sur le dos, bras vers le plafond, genoux pliés au-dessus des hanches.',
    movement: 'Descends lentement un bras et la jambe opposée, puis reviens. Alterne les côtés.',
    breath: 'Expire pendant la descente. Inspire en revenant.',
    watch: 'Le bas du dos reste proche du sol. Fais plus petit si tu sens que le dos se creuse.',
  },
  'Nageur au sol': {
    setup: 'Allongé sur le ventre, bras devant toi, regard vers le sol pour garder la nuque longue.',
    movement: 'Lève très légèrement un bras et la jambe opposée, puis alterne. Cherche la longueur, pas la hauteur.',
    breath: 'Respire doucement. Évite de bloquer l’air quand tu lèves.',
    watch: 'Le mouvement doit rester petit. Stoppe ou réduis si le bas du dos pince.',
  },
  'Mobilité hanches': {
    setup: 'Place-toi dans une position confortable, debout ou au sol selon ce qui te convient.',
    movement: 'Fais des mouvements lents de hanche : ouverture, fermeture, petits cercles ou bascule douce.',
    breath: 'Respire lentement et laisse l’expiration relâcher les tensions.',
    watch: 'Aucune douleur vive. Reste dans une zone agréable et contrôlée.',
  },
  'Rotation thoracique': {
    setup: 'Au sol ou à quatre pattes, installe-toi de façon stable avant de tourner.',
    movement: 'Tourne doucement le haut du dos d’un côté, reviens au centre, puis change de côté.',
    breath: 'Expire pendant la rotation. Inspire en revenant au centre.',
    watch: 'La rotation vient du haut du dos. Ne force pas le bas du dos.',
  },
  'Posture de repos': {
    setup: 'Installe-toi au sol ou assis dans une position confortable.',
    movement: 'Relâche progressivement les épaules, la mâchoire, le ventre et les jambes.',
    breath: 'Respire lentement. Laisse chaque expiration faire redescendre le rythme.',
    watch: 'Le but est de finir calme, pas d’étirer fort.',
  },
  'Respiration douce': {
    setup: 'Mets-toi dans une position stable et confortable.',
    movement: 'Ne cherche plus l’effort. Laisse le corps redescendre doucement.',
    breath: 'Inspire calmement, expire plus longuement.',
    watch: 'Si une douleur persiste, arrête la séance et reprends plus tard.',
  },
};

let selectedMode = 'brise';
let currentIndex = -1;
let remaining = 3;
let currentState = 'prep';
let isPaused = false;
let awaitingReady = true;
let tickId = null;
let totalSteps = exercises.length;
let currentAdaptation = null;
let voiceEnabled = true;
let speechVoice = null;
let lastSpokenKey = '';

const screens = {
  home: document.querySelector('#homeScreen'),
  session: document.querySelector('#sessionScreen'),
  adapt: document.querySelector('#adaptScreen'),
  finish: document.querySelector('#finishScreen'),
};

const modeCards = document.querySelectorAll('.mode-card');
const startButton = document.querySelector('#startButton');
const backButton = document.querySelector('#backButton');
const readyButton = document.querySelector('#readyButton');
const skipButton = document.querySelector('#skipButton');
const painButton = document.querySelector('#painButton');
const switchBriseButton = document.querySelector('#switchBriseButton');
const replaceButton = document.querySelector('#replaceButton');
const stopButton = document.querySelector('#stopButton');
const resumeFromAdaptButton = document.querySelector('#resumeFromAdaptButton');
const restartButton = document.querySelector('#restartButton');
const voiceToggle = document.querySelector('#voiceToggle');

const phaseLabel = document.querySelector('#phaseLabel');
const exerciseTitle = document.querySelector('#exerciseTitle');
const modePill = document.querySelector('#modePill');
const progressFill = document.querySelector('#progressFill');
const timerText = document.querySelector('#timerText');
const setupText = document.querySelector('#setupText');
const movementText = document.querySelector('#movementText');
const breathText = document.querySelector('#breathText');
const watchText = document.querySelector('#watchText');
const encouragementText = document.querySelector('#encouragementText');
const nextText = document.querySelector('#nextText');
const stepCount = document.querySelector('#stepCount');
const phaseDots = document.querySelectorAll('.phase-dot');
const finishMode = document.querySelector('#finishMode');
const finishSteps = document.querySelector('#finishSteps');

modeCards.forEach((card) => {
  card.addEventListener('click', () => {
    selectedMode = card.dataset.mode;
    document.body.dataset.mode = selectedMode;
    modeCards.forEach((item) => item.classList.remove('is-selected'));
    card.classList.add('is-selected');
  });
});

document.body.dataset.mode = selectedMode;

startButton.addEventListener('click', startSession);
backButton.addEventListener('click', goHome);
readyButton.addEventListener('click', toggleReadyPause);
skipButton.addEventListener('click', skipCurrent);
painButton.addEventListener('click', showAdapt);
switchBriseButton.addEventListener('click', switchToBrise);
replaceButton.addEventListener('click', replaceWithBreathing);
stopButton.addEventListener('click', finishSession);
resumeFromAdaptButton.addEventListener('click', resumeFromAdapt);
restartButton.addEventListener('click', goHome);
voiceToggle.addEventListener('click', toggleVoice);

setupVoice();

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('is-active'));
  screens[name].classList.add('is-active');
}

function startSession() {
  currentIndex = -1;
  remaining = 3;
  currentState = 'prep';
  isPaused = false;
  awaitingReady = true;
  currentAdaptation = null;
  lastSpokenKey = '';
  modePill.textContent = modes[selectedMode].label;
  readyButton.textContent = 'Prêt';
  showScreen('session');
  renderPrep();
  speak('Installe-toi. La séance va commencer. Je te guide étape par étape.', 'prep');
  startTicking();
}

function startTicking() {
  clearInterval(tickId);
  tickId = setInterval(() => {
    if (isPaused || awaitingReady) return;
    remaining -= 1;
    if (remaining <= 0) {
      advance();
    } else {
      render();
    }
  }, 1000);
}

function advance() {
  if (currentState === 'prep' || currentState === 'rest') {
    currentIndex += 1;
    currentAdaptation = null;
    if (currentIndex >= exercises.length) {
      finishSession();
      return;
    }
    currentState = 'exercise';
    remaining = getExerciseDuration(exercises[currentIndex]);
    awaitingReady = shouldWaitForReady(exercises[currentIndex]);
  } else {
    const hasNext = currentIndex < exercises.length - 1;
    if (!hasNext) {
      finishSession();
      return;
    }
    if (needsRestAfter(exercises[currentIndex])) {
      currentState = 'rest';
      remaining = modes[selectedMode].rest;
      awaitingReady = false;
    } else {
      currentIndex += 1;
      currentAdaptation = null;
      currentState = 'exercise';
      remaining = getExerciseDuration(exercises[currentIndex]);
      awaitingReady = shouldWaitForReady(exercises[currentIndex]);
    }
  }
  isPaused = false;
  render();
}

function renderPrep() {
  phaseLabel.textContent = 'Préparation';
  exerciseTitle.textContent = 'On s’installe';
  stepCount.textContent = 'Préparation';
  timerText.textContent = formatTime(remaining);
  encouragementText.textContent = modes[selectedMode].intro;
  readyButton.textContent = awaitingReady || isPaused ? 'Prêt' : 'Pause';
  nextText.textContent = exercises[0].title;
  renderGuide({
    title: 'Préparation',
  });
  updatePhaseDots('warmup');
  progressFill.style.width = '0%';
}

function render() {
  timerText.textContent = formatTime(remaining);
  readyButton.textContent = awaitingReady || isPaused ? 'Prêt' : 'Pause';

  if (currentState === 'prep') {
    renderPrep();
    return;
  }

  if (currentState === 'rest') {
    const next = exercises[currentIndex + 1];
    phaseLabel.textContent = 'Repos guidé';
    exerciseTitle.textContent = 'Respire';
    encouragementText.textContent = 'Relâche les épaules. Tu repars dans quelques secondes.';
    nextText.textContent = next ? next.title : 'Fin de séance';
    readyButton.textContent = isPaused ? 'Prêt' : 'Pause';
    stepCount.textContent = `Repos - étape ${Math.min(currentIndex + 2, totalSteps)}/${totalSteps}`;
    updatePhaseDots(next ? getPhaseKey(next.phase) : 'calm');
    renderGuide({
      title: 'Respiration douce',
    });
    speak(next ? `Repos. Respire. Prochain exercice : ${next.title}.` : 'Repos. Dernier souffle avant la fin.', `rest-${currentIndex}`);
  } else {
    const exercise = currentAdaptation || exercises[currentIndex];
    phaseLabel.textContent = exercise.phase;
    exerciseTitle.textContent = exercise.title;
    encouragementText.textContent = getEncouragement();
    nextText.textContent = exercises[currentIndex + 1]?.title ?? 'Fin de séance';
    stepCount.textContent = `Étape ${currentIndex + 1}/${totalSteps}`;
    updatePhaseDots(getPhaseKey(exercise.phase));
    renderGuide(exercise);
    speak(`${exercise.title}. ${getSpokenGuide(exercise)}`, `exercise-${currentIndex}-${exercise.title}`);
  }

  const progress = Math.max(0, currentIndex + 1) / totalSteps;
  progressFill.style.width = `${Math.min(100, Math.round(progress * 100))}%`;
}

function renderGuide(exercise) {
  const guide = getGuide(exercise);

  setupText.textContent = guide.setup;
  movementText.textContent = guide.movement;
  breathText.textContent = guide.breath;
  watchText.textContent = guide.watch;
}

function getGuide(exercise) {
  return exerciseGuides[exercise.title] || {
    setup: 'Installe-toi dans une position confortable et stable.',
    movement: 'Fais le mouvement lentement, en gardant le contrôle.',
    breath: 'Respire régulièrement, sans bloquer l’air.',
    watch: 'Si une douleur apparaît, réduis l’amplitude ou adapte.',
  };
}

function getSpokenGuide(exercise) {
  const guide = getGuide(exercise);
  return `${guide.setup} ${guide.movement} ${guide.breath} ${guide.watch}`;
}

function setupVoice() {
  if (!('speechSynthesis' in window)) {
    voiceEnabled = false;
    voiceToggle.textContent = 'Voix indisponible';
    voiceToggle.classList.remove('is-on');
    voiceToggle.disabled = true;
    return;
  }

  const loadVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const frenchVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith('fr'));
    speechVoice =
      frenchVoices.find((voice) => /thomas|henri|paul|male|homme/i.test(voice.name)) ||
      frenchVoices[0] ||
      voices[0] ||
      null;
  };

  loadVoice();
  window.speechSynthesis.onvoiceschanged = loadVoice;
}

function speak(text, key) {
  if (!voiceEnabled || !('speechSynthesis' in window) || lastSpokenKey === key) return;

  lastSpokenKey = key;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.86;
  utterance.pitch = 0.72;
  utterance.volume = 0.95;
  if (speechVoice) utterance.voice = speechVoice;
  window.speechSynthesis.speak(utterance);
}

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  voiceToggle.classList.toggle('is-on', voiceEnabled);
  voiceToggle.setAttribute('aria-pressed', String(voiceEnabled));
  voiceToggle.textContent = voiceEnabled ? 'Voix activée' : 'Voix coupée';

  if (!voiceEnabled && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  } else {
    speak('Voix activée.', 'voice-on');
  }
}

function getExerciseDuration(exercise) {
  return exercise.duration === 'effort' ? modes[selectedMode].effort : exercise.duration;
}

function needsRestAfter(exercise) {
  return restPhases.includes(exercise.phase);
}

function shouldWaitForReady(exercise) {
  return !exercise.phase.includes('Échauffement');
}

function getPhaseKey(phase) {
  if (phase.includes('Circuit')) return 'circuit';
  if (phase.includes('Mobil')) return 'mobility';
  if (phase.includes('Retour')) return 'calm';
  return 'warmup';
}

function updatePhaseDots(activePhase) {
  phaseDots.forEach((dot) => {
    dot.classList.toggle('is-active', dot.dataset.phaseDot === activePhase);
  });
}

function getEncouragement() {
  if (remaining <= 10) return 'Encore 10 secondes. Propre jusqu’au bout.';
  return encouragements[currentIndex % encouragements.length];
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function toggleReadyPause() {
  if (awaitingReady || isPaused) {
    awaitingReady = false;
    isPaused = false;
    readyButton.textContent = 'Pause';
    encouragementText.textContent = currentState === 'prep'
      ? 'C’est parti. On démarre doucement.'
      : getEncouragement();
    return;
  }

  isPaused = true;
  readyButton.textContent = 'Prêt';
  encouragementText.textContent = 'Pause. Respire, tu repars quand tu es prêt.';
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function skipCurrent() {
  advance();
}

function showAdapt() {
  isPaused = true;
  awaitingReady = false;
  readyButton.textContent = 'Prêt';
  showScreen('adapt');
}

function switchToBrise() {
  selectedMode = 'brise';
  document.body.dataset.mode = selectedMode;
  modeCards.forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.mode === selectedMode);
  });
  modePill.textContent = modes[selectedMode].label;
  resumeFromAdapt();
}

function replaceWithBreathing() {
  currentState = 'exercise';
  remaining = 30;
  awaitingReady = true;
  currentAdaptation = {
    title: 'Respiration douce',
    phase: 'Adaptation',
  };
  resumeFromAdapt();
}

function resumeFromAdapt() {
  isPaused = false;
  readyButton.textContent = awaitingReady ? 'Prêt' : 'Pause';
  showScreen('session');
  render();
}

function finishSession() {
  clearInterval(tickId);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  progressFill.style.width = '100%';
  finishMode.textContent = modes[selectedMode].label;
  finishSteps.textContent = totalSteps;
  updatePhaseDots('calm');
  showScreen('finish');
}

function goHome() {
  clearInterval(tickId);
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  isPaused = false;
  awaitingReady = true;
  showScreen('home');
}

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}
