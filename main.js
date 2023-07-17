const pat = document.querySelector(".pAT");
const cat = document.querySelector(".cAT");

const pcs = document.querySelector(".pCS");
const ccs = document.querySelector(".cCS");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const choice = document.querySelector(".choiceimages");

const pback = document.querySelector(".pchoiceback");
const cback = document.querySelector(".cchoiceback");

const play = document.querySelector(".pb");
const reset = document.querySelector(".rb");
const result = document.querySelector(".resulttext");

const patscore = JSON.parse(localStorage.getItem("patscore"));
pat.textContent = Number(patscore);
const catscore = JSON.parse(localStorage.getItem("catscore"));
cat.textContent = Number(catscore);

changePlayerBack = (p) => {
  if (p === -1) {
    pback.setAttribute("src", "Images/b.jpeg");
    pback.setAttribute("style", "opacity: 0.1;");
  }
  else if (p === 1) {
    pback.setAttribute("src", "Images/rock.png");
    pback.setAttribute("style", "opacity: 1;");
  }
  else if (p === 2) {
    pback.setAttribute("src", "Images/paper.png");
    pback.setAttribute("style", "opacity: 1;");
  }
  else if (p === 3) {
    pback.setAttribute("src", "Images/scissor.png");
    pback.setAttribute("style", "opacity: 1;");
  }
}

changeComputerBack = (c) => {
  if (c === -1) {
    cback.setAttribute("src", "Images/b.jpeg");
    cback.setAttribute("style", "opacity: 0.1;");
  }
  else if (c === 1) {
    cback.setAttribute("src", "Images/rock.png");
    cback.setAttribute("style", "opacity: 1;");
  }
  else if (c === 2) {
    cback.setAttribute("src", "Images/paper.png");
    cback.setAttribute("style", "opacity: 1;");
  }
  else if (c === 3) {
    cback.setAttribute("src", "Images/scissor.png");
    cback.setAttribute("style", "opacity: 1;");
  }
}

showResult = (res) => {
  if (res === 'r') result.textContent = "CLICK PLAY";
  else if (res === 'x') result.textContent = "CHOOSE ROCK, PAPER OR SCISSOR";
  else if (res === 'd') result.textContent = "DRAW";
  else if (res === 'p') result.textContent = "PLAYER WINS";
  else result.textContent = "COMPUTER WINS";
}

updateCurrentSessionBoard = (res) => {
  if (res === 'd') return;
  else if (res === 'p') pcs.textContent++;
  else if (res === 'c') ccs.textContent++;
}

updateAllTimeBoard = (res) => {
  if (res === 'd') return;
  else if (res === 'p') pat.textContent++;
  else if (res === 'c') cat.textContent++;
}

rst = () => {
  changePlayerBack(-1);
  changeComputerBack(-1);
  showResult('r');
}

start = async () => {
  let p;
  showResult('x');

  await new Promise((resolve) => {
    choice.addEventListener('click', (event) => {
      p = event.target;
      if (p === rock) p = 1;
      else if (p === paper) p = 2;
      else p = 3;
      resolve();
    });
  });

  let c = Math.floor(Math.random() * 3) + 1;

  let res;
  if (p === c) res = 'd';
  else if (p === 1 && c === 2) res = 'c';
  else if (p === 2 && c === 3) res = 'c';
  else if (p === 3 && c === 1) res = 'c';
  else res = 'p';

  changePlayerBack(p);
  changeComputerBack(c);
  showResult(res);
  updateCurrentSessionBoard(res);
  updateAllTimeBoard(res);

  setTimeout(rst, 3000);
};

play.addEventListener("click", start);
reset.addEventListener("click", rst);

rock.addEventListener("mouseover", () => {
  rock.setAttribute("style", "width: auto; height: 22vh; margin: 1vh;");
});
rock.addEventListener("mouseout", () => {
  rock.setAttribute("style", "width: auto; height: 20vh; margin: 2vh;");
});

scissor.addEventListener("mouseover", () => {
  scissor.setAttribute("style", "width: auto; height: 22vh; margin: 1vh;");
});
scissor.addEventListener("mouseout", () => {
  scissor.setAttribute("style", "width: auto; height: 20vh; margin: 2vh;");
});

paper.addEventListener("mouseover", () => {
  paper.setAttribute("style", "width: auto; height: 22vh; margin: 1vh;");
});
paper.addEventListener("mouseout", () => {
  paper.setAttribute("style", "width: auto; height: 20vh; margin: 2vh;");
});

play.addEventListener("mouseover", () => {
  play.setAttribute("style", "font-family: fantasy;  font-size: 1rem; letter-spacing: 0.1em; height: 2.2em; width: 4.4em; color: #000000; border-radius: 5px");
});
play.addEventListener("mouseout", () => {
  play.setAttribute("style", "font-family: fantasy;  font-size: 1rem;  letter-spacing: 0.1em; height: 2em; width: 4em; color: #000000; border-radius: 4px");
});

reset.addEventListener("mouseover", () => {
  reset.setAttribute("style", "font-family: fantasy; font-size: 1rem; letter-spacing: 0.1em; height: 2.2em; width: 4.4em; color: #000000; border-radius: 5px");
});
reset.addEventListener("mouseout", () => {
  reset.setAttribute("style", "font-family: fantasy; font-size: 1rem; letter-spacing: 0.1em; height: 2em; width: 4em; color: #000000; border-radius: 4px");
});
window.addEventListener("beforeunload", () => {
  localStorage.setItem("patscore", JSON.stringify(pat.textContent));
  localStorage.setItem("catscore", JSON.stringify(cat.textContent));
})
