import("stdfaust.lib");

soundFile = soundfile(" son [url: {'https://raw.githubusercontent.com/kennethreitz/infinite-state-sample-pack/master/Loops/Awaken_116/loop2.wav'} ]", 2);

slices = hslider("Slices", 16, 1, 32, 1);
offset = floor(hslider("Offset", 0.4, 0, 1, 0.01) * (slices - 1));

numSamples = 0, 0 : soundFile : _, !, !, !;
samples = 1.0 : + ~ _;
mappedSamples = samples / numSamples;

// Creates a ramp from 0 to one to play the sample 
// needs to be multiplied by numSamples later
//normalizedIndex = fmod(mappedSamples, 1.0);

// Multipliy mappedSamples by slices to increas number of repeated samples 
// divide by slices again to reduce speed
// This loops a fraction of the whole sample based on the slice number
//normalizedIndex = fmod(mappedSamples * slices, 1.0) / slices;

// Add offset before reducing speed to play different parts of the sample
normalizedIndex = (fmod(mappedSamples * slices, 1.0) + offset) / slices;
mappedIndex = normalizedIndex * numSamples;

sample = 0, mappedIndex : soundFile : !, !, !, _;

process = sample, sample;