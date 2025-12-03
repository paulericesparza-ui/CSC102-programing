function addAudio(){
    //create HTML audio
    let audioElm = document.getElementById("audio");
    audioElm.setAttribute("id", "myAudio");
    //Audio name has to be exact to work
    audioElm.setAttribute("src","us-lab-background.mp3" );
    //Adds controls
    audioElm.setAttribute("controls", "controls");
    //add to div
    document.getElementById("divAudio").appendChild(audioElm);
    //Adds buttons
    document.getElementById("btnAddAudio").hidden = true;
    document.getElementById("btnPlayAudio").hidden = false;
    document.getElementById("btnPauseAudio").hidden = false;
}