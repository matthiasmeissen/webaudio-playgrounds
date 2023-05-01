const section = document.querySelector('section');
const freqControl = document.querySelector('input.freq');

const audioContext = new AudioContext();
let soundDsp = null;

const createSound = async function () {
    let plugin = new Faustsound(audioContext, '.')
    plugin.load().then(node => {
        soundDsp = node;
        soundDsp.connect(audioContext.destination);
        console.log(soundDsp)
    })
}

createSound()


const createButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Play';
    button.addEventListener('click', () => {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        soundDsp.setSoundGateCycle(1)
    })
    section.appendChild(button);
}

const createSlider = ({label, min, max, steps, value}, onInput) => {
    const sliderLabel = document.createElement('label');
    sliderLabel.textContent = label;
    section.appendChild(sliderLabel);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.step = steps;
    slider.value = value;
    slider.addEventListener('input', () => {
        onInput(slider.value)
    })
    section.appendChild(slider);
}

createSlider({
    label: 'Frequency',
    min: 40,
    max: 2000,
    steps: 0.01,
    value: 440
}, (value) => {soundDsp.setSoundOscillaorFrequency(value)})

createSlider({
    label: 'PWM',
    min: 0,
    max: 10,
    steps: 0.01,
    value: 2
}, (value) => {soundDsp.setSoundOscillaorPulseWidth(value)})

createSlider({
    label: 'Cutoff',
    min: 50,
    max: 10000,
    steps: 0.01,
    value: 500
}, (value) => {soundDsp.setSoundFilterCutoff(value)})

createSlider({
    label: 'Resonance',
    min: 1,
    max: 30,
    steps: 0.1,
    value: 5
}, (value) => {soundDsp.setSoundFilterResonance(value)})

createSlider({
    label: 'Attack',
    min: 0.01,
    max: 4,
    steps: 0.01,
    value: 0.1
}, (value) => {soundDsp.setSoundEnvelopeAttack(value)})

createSlider({
    label: 'Release',
    min: 0.01,
    max: 4,
    steps: 0.01,
    value: 1
}, (value) => {soundDsp.setSoundEnvelopeRelease(value)})

createSlider({
    label: 'Speed',
    min: 1,
    max: 40,
    steps: 1,
    value: 2
}, (value) => {soundDsp.setSoundGateSpeed(value)})

createSlider({
    label: 'Gain',
    min: 0,
    max: 1,
    steps: 0.01,
    value: 0.2
}, (value) => {soundDsp.setSoundGain(value)})

createButton();

