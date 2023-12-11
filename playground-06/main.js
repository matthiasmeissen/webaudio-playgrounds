
const isWebKitAudio = (typeof (webkitAudioContext) !== "undefined");
const audioContext = (isWebKitAudio) ? new webkitAudioContext() : new AudioContext();
let soundDsp = null;

const createSound = async function () {
    let plugin = new Faustsound(audioContext, '.')
    plugin.load().then(node => {
        soundDsp = node;
        const params = soundDsp.getParams();

        params.forEach((param, index) => {
            const input = soundDsp.json_object.ui[index].items[0]
            createSlider(input)
        });
        
        soundDsp.connect(audioContext.destination);
    })
}

createSound()


window.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}
)

const createSlider = function (param) {
    let inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    document.body.appendChild(inputContainer);

    let labelContainer = document.createElement('div');
    labelContainer.className = 'label-container';
    inputContainer.appendChild(labelContainer);

    let label = document.createElement('label');
    label.innerHTML = param.label;
    labelContainer.appendChild(label);

    let value = document.createElement('span');
    value.innerHTML = param.init;
    labelContainer.appendChild(value);

    let slider = document.createElement('input');
    slider.type = 'range';
    slider.min = param.min;
    slider.max = param.max;
    slider.step = param.step;
    slider.value = param.init;
    slider.addEventListener('input', () => {
        soundDsp.setParamValue(param.address, parseFloat(slider.value));
        value.innerHTML = slider.value;
    });
    inputContainer.appendChild(slider);
}
