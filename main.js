// Player
let player = document.querySelector(".player");

// positions:
let l = 220;
let b = 50;
let aa;
window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    b += 3;
    player.style.bottom = `${b}px`;
  } else if (e.code === "ArrowDown") {
    b -= 3;
    player.style.bottom = `${b}px`;
  } else if (e.code === "ArrowLeft") {
    l -= 3;
    player.style.left = `${l}px`;
  } else if (e.code === "ArrowRight") {
    l += 3;
    player.style.left = `${l}px`;
  }

  if(b >= 630){
    alert("You win")
    document.location.replace("index.html")
}
});

// lights

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let info = document.querySelector(".info");

window.addEventListener("keydown", (e) => {
    if(red.style.backgroundColor == "red" & e.code =="ArrowUp" || e.code =="ArrowDown" || e.code =="ArrowLeft" || e.code =="ArrowRight"){
        
        console.log("game over");
        alert("Game Over you lose")
        document.location.replace("index.html")
    }
})

function fred() {
    let random = Math.floor(Math.random() * (8 - 3 + 1) + 3);
    info.textContent = "Red light!";
    red.style.backgroundColor = "red";
    info.textContent = "Red light!";
  setTimeout(() => {
    red.style.backgroundColor = "white";
    fgreen()
  }, random * 1000);
}

function fgreen() {
    let random = Math.floor(Math.random() * (5 - 3 + 1) + 3);
  green.style.backgroundColor = "green";
  info.textContent = "Green light!";
  setTimeout(() => {
      green.style.backgroundColor = "white";
    fred()
  }, random * 1000);
}
fgreen()
