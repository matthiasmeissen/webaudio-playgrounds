
/*
Code generated with Faust version 2.52.7
Compilation options: -lang wasm-ib -cn sound -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONsound() {
	return '{"name": "sound","filename": "sound.dsp","version": "2.52.7","compile_options": "-lang wasm-ib -cn sound -es 1 -mcd 16 -single -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/10528905B976177842E29CB4AFE640C6841FB8A9/web/wasmjs-worklet"],"size": 20624,"inputs": 0,"outputs": 2,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_tabulate_author": "Stephane Letz" },{ "basics_lib_version": "0.9" },{ "compile_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "envelopes_lib_ar_author": "Yann Orlarey, Stéphane Letz" },{ "envelopes_lib_author": "GRAME" },{ "envelopes_lib_copyright": "GRAME" },{ "envelopes_lib_license": "LGPL with exception" },{ "envelopes_lib_name": "Faust Envelope Library" },{ "envelopes_lib_version": "0.2" },{ "filename": "sound.dsp" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "MIT-style STK-4.3 license" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_resonlp_author": "Julius O. Smith III" },{ "filters_lib_resonlp_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_resonlp_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2_author": "Julius O. Smith III" },{ "filters_lib_tf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2s_author": "Julius O. Smith III" },{ "filters_lib_tf2s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2s_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "interpolators_lib_interpolate_cubic_author": "Stéphane Letz" },{ "interpolators_lib_interpolate_cubic_licence": "MIT" },{ "interpolators_lib_name": "Faust Interpolator Library" },{ "interpolators_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/oscillators.lib" },{ "library_path2": "/libraries/maths.lib" },{ "library_path3": "/libraries/platform.lib" },{ "library_path4": "/libraries/quantizers.lib" },{ "library_path5": "/libraries/basics.lib" },{ "library_path6": "/libraries/interpolators.lib" },{ "library_path7": "/libraries/filters.lib" },{ "library_path8": "/libraries/envelopes.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "sound" },{ "oscillators_lib_lf_sawpos_author": "Bart Brouns, revised by Stéphane Letz" },{ "oscillators_lib_lf_sawpos_licence": "STK-4.3" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_sawN_author": "Julius O. Smith III" },{ "oscillators_lib_sawN_license": "STK-4.3" },{ "oscillators_lib_version": "0.3" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.3" },{ "quantizers_lib_name": "Faust Frequency Quantization Library" },{ "quantizers_lib_version": "0.1" },{ "version": "2.54.11" }],"ui": [ {"type": "vgroup","label": "sound","items": [ {"type": "vgroup","label": "Oscillaor","meta": [{ "0": "" }],"items": [ {"type": "hslider","label": "Frequency","shortname": "Frequency","address": "/sound/Oscillaor/Frequency","index": 4172,"meta": [{ "0": "" }],"init": 440,"min": 40,"max": 2000,"step": 0.01},{"type": "hslider","label": "PulseWidth","shortname": "PulseWidth","address": "/sound/Oscillaor/PulseWidth","index": 20584,"meta": [{ "1": "" }],"init": 2,"min": 0,"max": 10,"step": 0.01}]},{"type": "vgroup","label": "Filter","meta": [{ "1": "" }],"items": [ {"type": "hslider","label": "Cutoff","shortname": "Cutoff","address": "/sound/Filter/Cutoff","index": 4160,"meta": [{ "2": "" }],"init": 500,"min": 50,"max": 10000,"step": 0.01},{"type": "hslider","label": "Resonance","shortname": "Resonance","address": "/sound/Filter/Resonance","index": 4168,"meta": [{ "3": "" }],"init": 5,"min": 1,"max": 30,"step": 0.1}]},{"type": "vgroup","label": "Envelope","meta": [{ "3": "" }],"items": [ {"type": "hslider","label": "Attack","shortname": "Attack","address": "/sound/Envelope/Attack","index": 4140,"init": 0.1,"min": 0.01,"max": 4,"step": 0.01},{"type": "hslider","label": "Release","shortname": "Release","address": "/sound/Envelope/Release","index": 4156,"init": 1,"min": 0.01,"max": 4,"step": 0.01}]},{"type": "vgroup","label": "Gate","meta": [{ "5": "" }],"items": [ {"type": "checkbox","label": "Cycle","shortname": "Cycle","address": "/sound/Gate/Cycle","index": 4096},{"type": "button","label": "Gate","shortname": "Gate","address": "/sound/Gate/Gate","index": 4100},{"type": "hslider","label": "Speed","shortname": "Speed","address": "/sound/Gate/Speed","index": 4104,"init": 2,"min": 1,"max": 40,"step": 1}]},{"type": "hslider","label": "Gain","shortname": "Gain","address": "/sound/Gain","index": 20612,"meta": [{ "6": "" }],"init": 0.2,"min": 0,"max": 1,"step": 0.01}]}]}';
}
function getBase64Codesound() { return "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Yl92ZXJzaW9uIjogIjAuOSIgfSx7ICJjb21waWxlX29wdGlvbnMiOiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiZW52ZWxvcGVzX2xpYl9hcl9hdXRob3IiOiAiWWFubiBPcmxhcmV5LCBTdMOpcGhhbmUgTGV0eiIgfSx7ICJlbnZlbG9wZXNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJlbnZlbG9wZXNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJlbnZlbG9wZXNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJlbnZlbG9wZXNfbGliX25hbWUiOiAiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSIgfSx7ICJlbnZlbG9wZXNfbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgImZpbGVuYW1lIjogInNvdW5kLmRzcCIgfSx7ICJmaWx0ZXJzX2xpYl9maXJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfZmlyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9maXJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2lpcl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9paXJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2lpcl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfbG93cGFzczBfaGlnaHBhc3MxIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVyc19saWJfcmVzb25scF9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9yZXNvbmxwX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9yZXNvbmxwX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfdGYyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX3RmMnNfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfdGYyc19jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfdGYyc19saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAiaW50ZXJwb2xhdG9yc19saWJfaW50ZXJwb2xhdGVfY3ViaWNfYXV0aG9yIjogIlN0w6lwaGFuZSBMZXR6IiB9LHsgImludGVycG9sYXRvcnNfbGliX2ludGVycG9sYXRlX2N1YmljX2xpY2VuY2UiOiAiTUlUIiB9LHsgImludGVycG9sYXRvcnNfbGliX25hbWUiOiAiRmF1c3QgSW50ZXJwb2xhdG9yIExpYnJhcnkiIH0seyAiaW50ZXJwb2xhdG9yc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAibGlicmFyeV9wYXRoMCI6ICIvbGlicmFyaWVzL3N0ZGZhdXN0LmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgxIjogIi9saWJyYXJpZXMvb3NjaWxsYXRvcnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDIiOiAiL2xpYnJhcmllcy9tYXRocy5saWIiIH0seyAibGlicmFyeV9wYXRoMyI6ICIvbGlicmFyaWVzL3BsYXRmb3JtLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg0IjogIi9saWJyYXJpZXMvcXVhbnRpemVycy5saWIiIH0seyAibGlicmFyeV9wYXRoNSI6ICIvbGlicmFyaWVzL2Jhc2ljcy5saWIiIH0seyAibGlicmFyeV9wYXRoNiI6ICIvbGlicmFyaWVzL2ludGVycG9sYXRvcnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDciOiAiL2xpYnJhcmllcy9maWx0ZXJzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg4IjogIi9saWJyYXJpZXMvZW52ZWxvcGVzLmxpYiIgfSx7ICJtYXRoc19saWJfYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRoc19saWJfbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHNfbGliX3ZlcnNpb24iOiAiMi41IiB9LHsgIm5hbWUiOiAic291bmQiIH0seyAib3NjaWxsYXRvcnNfbGliX2xmX3Nhd3Bvc19hdXRob3IiOiAiQmFydCBCcm91bnMsIHJldmlzZWQgYnkgU3TDqXBoYW5lIExldHoiIH0seyAib3NjaWxsYXRvcnNfbGliX2xmX3Nhd3Bvc19saWNlbmNlIjogIlNUSy00LjMiIH0seyAib3NjaWxsYXRvcnNfbGliX25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzX2xpYl9zYXdOX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgIm9zY2lsbGF0b3JzX2xpYl9zYXdOX2xpY2Vuc2UiOiAiU1RLLTQuMyIgfSx7ICJvc2NpbGxhdG9yc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAicGxhdGZvcm1fbGliX25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJxdWFudGl6ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZyZXF1ZW5jeSBRdWFudGl6YXRpb24gTGlicmFyeSIgfSx7ICJxdWFudGl6ZXJzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJ2ZXJzaW9uIjogIjIuNTQuMTEiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogInNvdW5kIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJPc2NpbGxhb3IiLCJtZXRhIjogW3sgIjAiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiRnJlcXVlbmN5Iiwic2hvcnRuYW1lIjogIkZyZXF1ZW5jeSIsImFkZHJlc3MiOiAiL3NvdW5kL09zY2lsbGFvci9GcmVxdWVuY3kiLCJpbmRleCI6IDQxNzIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpbml0IjogNDQwLCJtaW4iOiA0MCwibWF4IjogMjAwMCwic3RlcCI6IDAuMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiUHVsc2VXaWR0aCIsInNob3J0bmFtZSI6ICJQdWxzZVdpZHRoIiwiYWRkcmVzcyI6ICIvc291bmQvT3NjaWxsYW9yL1B1bHNlV2lkdGgiLCJpbmRleCI6IDIwNTg0LCJtZXRhIjogW3sgIjEiOiAiIiB9XSwiaW5pdCI6IDIsIm1pbiI6IDAsIm1heCI6IDEwLCJzdGVwIjogMC4wMX1dfSx7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiRmlsdGVyIiwibWV0YSI6IFt7ICIxIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkN1dG9mZiIsInNob3J0bmFtZSI6ICJDdXRvZmYiLCJhZGRyZXNzIjogIi9zb3VuZC9GaWx0ZXIvQ3V0b2ZmIiwiaW5kZXgiOiA0MTYwLCJtZXRhIjogW3sgIjIiOiAiIiB9XSwiaW5pdCI6IDUwMCwibWluIjogNTAsIm1heCI6IDEwMDAwLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJSZXNvbmFuY2UiLCJzaG9ydG5hbWUiOiAiUmVzb25hbmNlIiwiYWRkcmVzcyI6ICIvc291bmQvRmlsdGVyL1Jlc29uYW5jZSIsImluZGV4IjogNDE2OCwibWV0YSI6IFt7ICIzIjogIiIgfV0sImluaXQiOiA1LCJtaW4iOiAxLCJtYXgiOiAzMCwic3RlcCI6IDAuMX1dfSx7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiRW52ZWxvcGUiLCJtZXRhIjogW3sgIjMiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiQXR0YWNrIiwic2hvcnRuYW1lIjogIkF0dGFjayIsImFkZHJlc3MiOiAiL3NvdW5kL0VudmVsb3BlL0F0dGFjayIsImluZGV4IjogNDE0MCwiaW5pdCI6IDAuMSwibWluIjogMC4wMSwibWF4IjogNCwic3RlcCI6IDAuMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiUmVsZWFzZSIsInNob3J0bmFtZSI6ICJSZWxlYXNlIiwiYWRkcmVzcyI6ICIvc291bmQvRW52ZWxvcGUvUmVsZWFzZSIsImluZGV4IjogNDE1NiwiaW5pdCI6IDEsIm1pbiI6IDAuMDEsIm1heCI6IDQsInN0ZXAiOiAwLjAxfV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJHYXRlIiwibWV0YSI6IFt7ICI1IjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiY2hlY2tib3giLCJsYWJlbCI6ICJDeWNsZSIsInNob3J0bmFtZSI6ICJDeWNsZSIsImFkZHJlc3MiOiAiL3NvdW5kL0dhdGUvQ3ljbGUiLCJpbmRleCI6IDQwOTZ9LHsidHlwZSI6ICJidXR0b24iLCJsYWJlbCI6ICJHYXRlIiwic2hvcnRuYW1lIjogIkdhdGUiLCJhZGRyZXNzIjogIi9zb3VuZC9HYXRlL0dhdGUiLCJpbmRleCI6IDQxMDB9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiU3BlZWQiLCJzaG9ydG5hbWUiOiAiU3BlZWQiLCJhZGRyZXNzIjogIi9zb3VuZC9HYXRlL1NwZWVkIiwiaW5kZXgiOiA0MTA0LCJpbml0IjogMiwibWluIjogMSwibWF4IjogNDAsInN0ZXAiOiAxfV19LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiR2FpbiIsInNob3J0bmFtZSI6ICJHYWluIiwiYWRkcmVzcyI6ICIvc291bmQvR2FpbiIsImluZGV4IjogMjA2MTIsIm1ldGEiOiBbeyAiNiI6ICIiIH1dLCJpbml0IjogMC4yLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX1dfV19"; }

/************************************************************************
 FAUST Architecture File
 Copyright (C) 2003-2019 GRAME, Centre National de Creation Musicale
 ---------------------------------------------------------------------
 This Architecture section is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 3 of
 the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; If not, see <http://www.gnu.org/licenses/>.
 
 EXCEPTION : As a special exception, you may create a larger work
 that contains this FAUST architecture section and distribute
 that work under terms of your choice, so long as this FAUST
 architecture section is not modified.
 
 ************************************************************************
 ************************************************************************/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class soundNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'sound', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, soundNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, soundNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class sound {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "sound.wasm" : (this.baseURL + "/sound.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let soundProcessorString1 = soundProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([soundProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new soundNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from sound-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createsoundGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createsoundGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let soundProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class soundProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                soundProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                soundProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                soundProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                soundProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            soundProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, soundProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.sound_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.sound_instance.exports;
            this.HEAP = this.sound_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                soundProcessor.parse_ui(this.json_object.ui, this, soundProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('sound', soundProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "sound";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.sound = sound;
    window.Faustsound = sound;
    window[dspName] = sound;
} else {
    module.exports = { sound };
}
