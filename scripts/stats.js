
const audioBtns1 = document.querySelectorAll('.employee_voice-note1');
const audioBtns2 = document.querySelectorAll('.employee_voice-note2');

const audio1 = new Audio("./audio/1.mp3");
const audio2 = new Audio("./audio/2.mp3");

audioBtns1.forEach(audioBtn => {
    audioBtn.addEventListener('click', ()=>{
        audio1.play();
    })
})
audioBtns2.forEach(audioBtn => {
    audioBtn.addEventListener('click', ()=>{
        audio2.play();
    })
})