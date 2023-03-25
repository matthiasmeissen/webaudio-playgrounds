const section = document.querySelector('section');
const freqControl = document.querySelector('input.freq');

const audioContext = new AudioContext();
let soundDsp = null;

const createSound = async function () {
    let plugin = new Faustsound(audioContext, '.')
    plugin.load().then(node => {
        soundDsp = node;
        soundDsp.connect(audioContext.destination);
    })
}

createSound()

let color = 0;

freqControl.addEventListener('input', function () {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    soundDsp.setParamValue('/sound/Frequency', freqControl.value);
    color = freqControl.value / 8000;
    section.style.backgroundColor = `hsl(0deg, 0%, ${color * 100}%)`
})

freqControl.addEventListener('mousedown', function () {
    soundDsp.setParamValue('/sound/Gain', 0.1);
})

freqControl.addEventListener('mouseup', function () {
    soundDsp.setParamValue('/sound/Gain', 0);
    section.style.backgroundColor = `hsl(0deg, 0%, 100%)`
})
