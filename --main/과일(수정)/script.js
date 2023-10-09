/* color, crayon */
var colorPick = document.querySelector(".color-container");
var crayon = document.querySelector(".crayon-container");
var colorBox = document.querySelector(".color-box");
crayon.addEventListener("click", () => {
    crayon.classList.toggle('hover');
    colorPick.classList.toggle('hover');
    colorBox.classList.toggle('hover');
})
colorPick.addEventListener("click", () => {
    crayon.classList.toggle('hover');
    colorPick.classList.toggle('hover');
    colorBox.classList.toggle('hover');
})

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");
const c6 = document.querySelector(".c6");
const c7 = document.querySelector(".c7");
const c8 = document.querySelector(".c8");
const c9 = document.querySelector(".c9");
const c10 = document.querySelector(".c10");
const c11 = document.querySelector(".c11");
const c12 = document.querySelector(".c12");
c1.addEventListener('click', e=> ctx.strokeStyle = "#e4104d");
c2.addEventListener('click', e=> ctx.strokeStyle = "#e30405");
c3.addEventListener('click', e=> ctx.strokeStyle = "#fd6d27");
c4.addEventListener('click', e=> ctx.strokeStyle = "#f7a213");
c5.addEventListener('click', e=> ctx.strokeStyle = "#83bd00");
c6.addEventListener('click', e=> ctx.strokeStyle = "#3a9d00");
c7.addEventListener('click', e=> ctx.strokeStyle = "#00ac98");
c8.addEventListener('click', e=> ctx.strokeStyle = "#009eb4");
c9.addEventListener('click', e=> ctx.strokeStyle = "#0583f9");
c10.addEventListener('click', e=> ctx.strokeStyle = "#2e33d7");
c11.addEventListener('click', e=> ctx.strokeStyle = "#5a10bb");
c12.addEventListener('click', e=> ctx.strokeStyle = "#1a1a1a");


/* canvas */
const canvas = document.getElementById('canvas');
canvas.width = 550;
canvas.height = 550;
var ctx = canvas.getContext('2d');

function draw(curX, curY){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(curX, curY);
    ctx.stroke();
}

var drawBox = document.querySelector('#drawing > div');
let arr = ["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]
let cnt = 0;
function a() {
    var rightTap = document.querySelector(".rightBtn");
    var leftTap = document.querySelector(".leftBtn");
    rightTap.addEventListener("click",()=>{
        drawBox.style.backgroundImage = "url(image/back/"+arr[cnt]+")";
        cnt++;
        if(cnt==8){
            cnt = 7;
        }
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    })
    leftTap.addEventListener("click", ()=>{
        cnt--;
        drawBox.style.backgroundImage = "url(image/back/"+arr[cnt]+")";

        if(cnt==0){
            cnt = 1;
        }
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    })
}
window.onload = function(){
    a();

}
drawBox.style.backgroundImage = "url('image/back/2.png')";

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);


/* mouse event */
drawBox.addEventListener("mousemove", function(e){ mouseMove(e) });//element안에서 밖으로
drawBox.addEventListener("mousedown", function(e){ mouseDown(e) });//누를때
drawBox.addEventListener("mouseup", function(e){ mouseUp(e) });//뗄 때
drawBox.addEventListener("mouseout", function(e){ mouseOut(e) });//element밖에서 안으로

/* touch event */
drawBox.addEventListener("touchmove", touchMove, false);
drawBox.addEventListener("touchstart", touchStart, false);
drawBox.addEventListener("touchend", touchEnd, false);


/*-------------mouse---------------- */
function mouseDown(e){
    startX = e.offsetX;
    startY = e.offsetY;
    drawing = true;
}

function mouseMove(e){
    if(!drawing)return;
    let curX = e.offsetX;
    let curY = e.offsetY;
    draw(curX, curY);
    startX = curX;
    startY = curY;
}

function mouseUp(e) {
    drawing = false;
}

function mouseOut(e) {
    drawing = false;
}


/*---------touch--------------*/


/* touch 좌표 */ 
function getTouchPos(e) {
    var rect = drawBox.getBoundingClientRect();
    return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
    }
    // return {
    //     x: e.touches[0].clientX - e.target.offsetLeft,
    //     y: e.touches[0].clientY - e.target.offsetTop + document.documentElement.scrollTop
    // }
}
function touchStart(e) {
    e.preventDefault();
    drawing = true;
    const { x, y } = getTouchPos(e);
    startX = x;
    startY = y;
}

function touchMove(e) {
    if(!drawing) return;
    const { x, y } = getTouchPos(e);
    draw(x, y);
    startX = x;
    startY = y;
}

function touchEnd(e) {
    if(!drawing) return;
    // 점을 찍을 경우 위해 마지막에 점을 찍는다.
    // touchEnd 이벤트의 경우 위치정보가 없어서 startX, startY를 가져와서 점을 찍는다.
    ctx.beginPath();
    ctx.arc(startX, startY, ctx.lineWidth/2, 0, 2*Math.PI);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    drawing = false;
}

/*--------크기 조정-----------*/

const rangeInput = document.querySelector("#rangeInput");

// rangeInput
rangeInput.min = 1;
rangeInput.max = 30;
rangeInput.step = 1;
rangeInput.value = 5;

rangeInput.addEventListener("change", e => ctx.lineWidth = e.target.value);

/*----------지우기 버튼---------*/
var bt1 = document.querySelector('.clear');
bt1.addEventListener("click", ()=>{
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}, false);

let startX = 0;
let startY = 0;
let drawing = false;
ctx.lineWidth = 14;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "white";

/* 사이드바 */

var sideBarCon = document.querySelector(".sidebar-container")
var upBtn = document.querySelector('.upBtn')
upBtn.addEventListener("click",()=>{
    sideBarCon.classList.toggle('hover');
    upBtn.classList.toggle('hover');
})