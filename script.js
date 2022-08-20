const btn = document.getAnimations('btn')

const SpeechRecorgnition  = window.SpeechRecognition||window.webkitSpeechRecorgnition
const recorgnition  = new SpeechRecorgnition()

recorgnition.onstart = function(){
    console.log('speek')
}

recorgnition.onresult = function(event){
    var text = event.results[0][0].transcript
    console.log(text)
    document.getElementById('result').innerHTML = text
    read(text)
}

function read(text){
var speech =  new SpeechSynthesisUtterance()
speech.text = text
if(text.includes('time'))
speech.text = 'It is '+new Date().getHours()+new Date().getMinutes()+'right now'
else if(text.includes('my birthday'))
speech.text='you are an brigund a cheat a liar and a rustlet'
}