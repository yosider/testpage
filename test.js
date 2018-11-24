// ブラウザによる差異を吸収
navigator.mediaDevices = navigator.mediaDevices || ((navigator.mozGetUserMedia || navigator.webkitGetUserMedia) ? {
	// getUserMedia??
	getUserMedia: function(c){
		return new Promise(function(y, n){
			(navigator.mozGetUserMedia || navigator.webkitGetUserMedia).call(navigator, c, y, n);
		});
	}
} : null);

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;


var audioData_wave;
var recordedChunks = [];
var record_data = [];

function Initialize(){
    audioData_wave = [];  // 録音データ
    recordedChunks = [];
    record_data = [];
}


var audioContext = new AudioContext();
var audioAnalyser = null;
var recordedBuffer = [];
var timer_s = 0;
var timer = 0;
var tone = ["do","re","mi","fa","so","la","ti","hido"];
/*
var bufferSize = 4096;
var flag = 0;
var myArrayBuffer;
var recording_time = 1000;  // 1sec?

*/

function Record(){
    navigator.mediaDevices.getUserMedia({audio: true}).then(
        function(stream){
            var idx=0;
            recordedBuffer = [];
            var mediaRecorder = new MediaRecorder(stream);
            audioAnalyser = audioContext.createAnalyser();
            audioAnalyser.fftSize = 2048;
            
            timer = timer_s;

            // お手本ピアノ
            var audio = [];
            for(var i=0; i<8; i++){
                audio[i] = new Audio("./sample_wave/" + tone[i] + ".wav");
            }

            // お手本ピアノ　ド
            audio[0].play();
            setTimeout(function(){audio[0].pause();}, recording_time);

            var count = 0;
            function Scale_Recording(count){
                //TODO 7をこえたら録音止める
                audio[count].addEventListener('pause', function(){
                    // 録音チャンクの初期化
                    recordedChunks = [];
                    // 録音開始
                    javascriptnode.onaudioprocess = onAudioProcess;
                    mediaRecorder.start();
                    // タイマーセット
                    timer_s = new Date();
                    timer = timer_s;
                    setTimeout(function(){
                        mediaRecorder.stop();
                        javascriptnode.onaudioprocess = null;
                        // お手本ピアノ
                        audio[]
                    })
                })
            }
        }
    )
}


// 録音処理
function onAudioProcess(e){
    // 周波数成分データ
    var wave = new Uint8Array(audioAnalyser.frequencyBinCount);
    audioAnalyser.getByteTimeDomainData(wave);
    // これまでのデータに追加
    Array.prototype.push.apply(audioData_wave, wave);
}