let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

document.addEventListener("keypress", (keyvalue) => {
if (keyvalue.keyCode ==97) {
    boom.pause();
    boom.currentTime =  0
    boom.play(); 

    }else if (keyvalue.keyCode == 115) {
    clap.pause();
    clap.currentTime =  0
    clap.play(); 



    }else if (keyvalue.keyCode == 122 ){
     kick.pause();
     kick.currentTime = 0
     kick.play();

    }else if (keyvalue.keyCode == 120 ){
    openhat.pause
    openhat.currentTime = 0
    openhat.play();
    } else if (keyvalue.keyCode == 108 ){
    ride.pause();
    ride.currentTime = 0
    ride.play();

    }else if (keyvalue.keyCode == 107){
    snare.pause();
    snare.currentTime = 0
        snare.play();

    }else if (keyvalue.keyCode == 109 ){
    tink.pause();
    tink.currentTime = 0
    tink.play();
}else if(keyvalue.keyCode == 44){
    tom.pause();
    tom.currentTime = 0
    tom.play();
}
})



