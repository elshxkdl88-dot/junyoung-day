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
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg"
];

const texts = [
"🏆 오늘의 행복 전도사",
"⚡ 초사이어인 각성 완료",
"🎈 풍선 마스터",
"🏌 골프 꿈나무",
"😎 인간 비타민",
"🍜 국밥 마스터"
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
