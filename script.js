const startBtn = document.getElementById("startBtn");
const loading = document.getElementById("loading");
const gallery = document.getElementById("gallery");
const hero = document.querySelector(".hero");

const progress = document.getElementById("progress");
const percent = document.getElementById("percent");

const photo = document.getElementById("photo");
const title = document.getElementById("title");
const nextBtn = document.getElementById("nextBtn");

const photos = [
"images/1.png",
"images/2.png",
"images/3.png",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg"
];

const texts = [
"🏆 아~ 배부르다~",
"⚡ !!!",
"🎈 날아오른다~!!",
"🏌 7번 아이언 100미터 가주아~!",
"😎 으잇! 가려워!!",
"🍜 이히히히힣"
];

let index=0;

startBtn.onclick=()=>{

hero.classList.add("hidden");
loading.classList.remove("hidden");

let p=0;

let timer=setInterval(()=>{

p++;

progress.style.width=p+"%";

percent.innerHTML=p+"%";

if(p>=100){

clearInterval(timer);

loading.classList.add("hidden");

gallery.classList.remove("hidden");

showPhoto();

}

},30);

}

function showPhoto(){

photo.src=photos[index];

title.innerHTML=texts[index];

}

nextBtn.onclick=()=>{

index++;

if(index>=photos.length){

index=0;

}

showPhoto();

}
function createBalloon(){

const b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"%";

b.style.animationDuration=(6+Math.random()*5)+"s";

document.getElementById("balloons").appendChild(b);

setTimeout(()=>{

b.remove();

},11000);

}

setInterval(createBalloon,600);
