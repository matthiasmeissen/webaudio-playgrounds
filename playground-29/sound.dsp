import("stdfaust.lib");

tableSize = 48000 * 2;

record = checkbox("Rec");
writeSamples = 1 : + ~ (_);
writeIndex = 0, fmod(writeSamples, tableSize) : select2(record);

speed = hslider("Speed", 1, 0.2, 4.0, 0.01);
readSamples = speed : + ~ (_);
readIndex = fmod(readSamples, tableSize);

looper = rwtable(tableSize, 0.0, writeIndex, _, readIndex);

freq = hslider("Freq", 400, 20, 2000, 1);
osc = os.osc(freq) + os.osc(freq + 2) : _ * 0.1;

env = ba.beat(120 * 4) : en.ar(0.1, 0.2);

input = _ * env;

process = input + osc : looper;