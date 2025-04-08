import("stdfaust.lib");

sound = soundfile(" son [url: {'https://raw.githubusercontent.com/sletz/faust-sampler/main/violon.wav'} ]", 2);

soundFileIndex = 0;
numSamples = 0, 0 : sound : _, !, !, !;
speed = hslider("Speed", 0.1, 0.04, 1.0, 0.01);
samples = speed : + ~ _;
readIndex = fmod(samples, numSamples);

// The soundfile has two inputs and four outputs
// Input 1: Index of soundfile, it can hold more than on sample
// Input 2: Read Index, which sample from the soundfile is played
// Output 1: Length of the current accessed sound in frames
// Output 2: Samplerate of the current accessed sound in frames
// Output 3 and 4: Channels of the audio file

// Note that with ! you can cut away a channel
// Meaning that the soundfile has 4 channels initially and we reduce it to have two

voice = soundFileIndex, readIndex : sound : !, !, _, _;

cut = hslider("Cut", 600, 200, 1400, 1);
filter = fi.resonlp(cut, 4, 1);

process = voice : filter, filter;