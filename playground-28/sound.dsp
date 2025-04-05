import("stdfaust.lib");

// To declare the tableSize we use a bitwise oprator
// << is called the bitwise left shift operator
// It says shift binary 1 to the left by 16 bits
// This creates the binary number 10000000000000000
// It can expressed as 2^16 or the number 65536

tableSize = 1 << 16;

// This function uses ba.time which counts up by one for each sample
// It provides the formular to calculate each entry of the table
// The length of the wavetable is specified by the function parameter ts
// When this function is called it calculates the wavetable at initialization time and stores it in the variable
sineWave(ts) = sin(float(ba.time) * (2.0 * ma.PI) / float(ts));

// Some other waveforms
triWave(ts) = 1.0 - 4.0 * abs( (float(ba.time) / float(ts)) - 0.5 );
sawWave(ts) = 1.0 - 2.0 * (float(ba.time) / float(ts));
additiveWave(ts) = (
    1.0 * sin( float(ba.time) * (2.0 * ma.PI) / float(ts) ) // Fundamental
  + 0.7 * sin( 3.0 * float(ba.time) * (2.0 * ma.PI) / float(ts) ) // 3rd Harmonic
  + 0.4 * sin( 5.0 * float(ba.time) * (2.0 * ma.PI) / float(ts) ) // 5th Harmonic
) * (1.0 / (1.0 + 0.7 + 0.4));
tanhSine(ts) = ma.tanh( 3.0 * sin( float(ba.time) * (2.0 * ma.PI) / float(ts) ) );
chebySine(ts) = 4.0 * pow(sin( float(ba.time) * (2.0 * ma.PI) / float(ts) ), 3.0) - 3.0 * sin( float(ba.time) * (2.0 * ma.PI) / float(ts) );
phaseDistSine(ts) = sin((float(ba.time) * (2.0 * ma.PI) / float(ts))+ 1.5 * sin(float(ba.time) * (2.0 * ma.PI) / float(ts)));
gaussianPulse(ts) = (2.0 * exp(-0.5 * pow(((float(ba.time) / float(ts)) - 0.5) / 0.1, 2.0))) - 1.0;

freq = hslider("Freq", 400, 20, 2000, 1);

osc(f) = rdtable(tableSize, phaseDistSine(tableSize), os.phasor(tableSize, f));

env = en.ar(0.02, 0.1, ba.beat(120));

voice = par(i, 4, osc(freq + 100 * i)) :> _ : fi.resonlp(freq + 40, 4, 1) * env;

feedbackDelay = hslider("Delay", 0.2, 0.1, 0.4, 0.01);

feedback = voice : + ~ (_ @ (ma.SR * feedbackDelay) * 0.6);

process = feedback * 0.4;