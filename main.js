let btn = document.querySelector("button");
let userText = document.querySelector("input");
let msg = new SpeechSynthesisUtterance();

// when click on button 
btn.addEventListener("click",()=>{
    // when input value is blank
    if(userText.value == ""){
        msg.text = "Please type text that you wanna speech";
    } else{
        msg.text = userText.value;
    }
    window.speechSynthesis.speak(msg);
});
