// Set to > 0 if the DSP is polyphonic
const FAUST_DSP_VOICES = 16;

// Declare faustNode as a global variable
let faustNode;

// Create audio context activation button
/** @type {HTMLButtonElement} */
const $buttonDsp = document.getElementById("button-dsp");

// Create audio context
const AudioCtx = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioCtx({ latencyHint: 0.00001 });

// Activate AudioContext and Sensors on user interaction
$buttonDsp.disabled = true;
let sensorHandlersBound = false;
$buttonDsp.onclick = async () => {

    // Import the requestPermissions function
    const { requestPermissions } = await import("./create-node.js");

    // Request permission for sensors
    await requestPermissions();

    // Activate sensor listeners
    if (!sensorHandlersBound) {
        await faustNode.startSensors();
        sensorHandlersBound = true;
    }

    // Activate or suspend the AudioContext
    if (audioContext.state === "running") {
        $buttonDsp.textContent = "Suspended";
        await audioContext.suspend();
    } else if (audioContext.state === "suspended") {
        $buttonDsp.textContent = "Running";
        await audioContext.resume();
        if (FAUST_DSP_VOICES) play(faustNode);
    }
}

// Called at load time
(async () => {

    const { createFaustNode, connectToAudioInput } = await import("./create-node.js");

    const play = (node) => {
        node.keyOn(0, 60, 100);
        setTimeout(() => node.keyOn(0, 64, 100), 1000);
        setTimeout(() => node.keyOn(0, 67, 100), 2000);
        setTimeout(() => node.allNotesOff(), 5000);
        setTimeout(() => play(node), 7000);
    }

    // Create Faust node
    const result = await createFaustNode(audioContext, "sound", FAUST_DSP_VOICES);
    faustNode = result.faustNode;  // Assign to the global variable
    if (!faustNode) throw new Error("Faust DSP not compiled");

    // Connect the Faust node to the audio output
    faustNode.connect(audioContext.destination);

    // Connect the Faust node to the audio input
    if (faustNode.getNumInputs() > 0) {
        await connectToAudioInput(audioContext, null, faustNode, null);
    }

    console.log(faustNode)

    // Create Faust node activation button
    $buttonDsp.disabled = false;
})();

document.addEventListener("mousemove", (e) => {
    $mouseX = e.clientX / window.innerWidth;
    $mouseY = e.clientY / window.innerHeight;

    const speed1 = (mapNormalizedToRange($mouseX, 0.25, 4));
    const speed2 = (mapNormalizedToRange($mouseY, 0, 400));

    faustNode.setParamValue("/sound/Multiplier", speed1);
    faustNode.setParamValue("/sound/Modulator_Index", speed2);
}
);

function mapNormalizedToRange(normalizedValue, min, max) {
    return min + normalizedValue * (max - min);
}

const keyToMidi = {
    a: 0, w: 1, s: 2, e: 3, d: 4, f: 5, t: 6, g: 7,
    z: 8, h: 9, u: 10, j: 11, k: 12, o: 13, l: 14, p: 15,
};

let currentOctave = 5;
const activeKeys = {};

// Handle keydown events.
window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    // Handle octave changes.
    if (key === 'arrowup' && currentOctave < 8) {
        currentOctave++;
        return;
    }
    if (key === 'arrowdown' && currentOctave > 0) {
        currentOctave--;
        return;
    }

    // Only process mapped keys that are not already active.
    if (key in keyToMidi && !activeKeys[key]) {
        const midiNote = keyToMidi[key] + currentOctave * 12;
        activeKeys[key] = midiNote;
        faustNode.keyOn(0, midiNote, 100);
    }
});

// Handle keyup events.
window.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key in activeKeys) {
        const midiNote = activeKeys[key];
        delete activeKeys[key];
        faustNode.keyOff(0, midiNote, 0);
    }
});
