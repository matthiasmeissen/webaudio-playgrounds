import("stdfaust.lib");

reset = button("Reset [1]") : ba.impulsify;
pause = checkbox("Pause [2]");

// Counts up by one each sample, converts value to seconds, loops in defined interval
samples = (1 - pause) : + ~ select2(reset, _, 0.0);
seconds = samples / ma.SR;
loopSeconds = fmod(seconds, 1.0);

freq = hslider("Freq [3]", 400, 20, 2000, 1);

// Counts up by freq / samplerate each sample, loops from 0 to 1, shifts signal -0.5 to 0.5
slope = freq / ma.SR;
samples2 = (slope - (slope * pause)) : + ~ select2(reset, _, 0.0);
customPhasor = fmod(samples2, 1.0);
bipolarSaw = customPhasor - 0.5;

// Built in phasor, but without pause and reset functionality
phasor = os.phasor(1.0, freq) - 0.5;

select = checkbox("Use Custom [4]");
voice1 = phasor, bipolarSaw : select2(select) * hslider("Phasor [5]", 0.4, 0.0, 1.0, 0.01);
voice2 = os.osc(400) * customPhasor * hslider("Amplitude Modulation [6]", 0.2, 0.0, 1.0, 0.01);

process = voice1, voice2;