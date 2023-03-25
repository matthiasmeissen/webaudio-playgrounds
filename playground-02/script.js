const section = document.querySelector('section');
const playButton = document.querySelector('button');
const stepContainer = document.querySelector('.steps');

const context = new AudioContext();

const tempo = 120;
const stepsPerBeat = 4;
const numSteps = 16;

const sequence = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];

let currentStep = 0;


const play = () => {
    currentStep = 0;
    setInterval(() => {
        if (sequence[currentStep]) {
            console.log(sequence[currentStep])
        }
        currentStep = (currentStep + 1) % numSteps;
    }, (60 / tempo) / stepsPerBeat * 1000);
}

playButton.addEventListener('click', play);


const createStep = (active) => {
    const step = document.createElement('div');
    step.classList.add('step');
    if (active) {
        step.classList.add('active');
    }
    stepContainer.appendChild(step);

    step.addEventListener('click', () => {
        if (step.classList.contains('active')) {
            step.classList.remove('active');
        } else {
            step.classList.add('active');
        }
    });
}

sequence.forEach((index) => {
    createStep(index);
})
