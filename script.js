let inicio = document.querySelector(".inicio");
let cont = 0;
let img = document.querySelector("#img-ban");

//obtenemos valores de los botones
let btnopc = document.querySelectorAll(".btnopc");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let answer = "Argentina";
let repetir = document.getElementById("btnr");

// boton principal del juego
inicio.addEventListener("click", () => {
  iniciojuego();
  comprobacion();
});

//funcion que inicia y cambia estilos
function iniciojuego() {
  document.getElementById("t1").style.display = "none";
  document.getElementById("btn").style.display = "none";
  document.getElementById("s1").style.visibility = "visible";
}

function comprobacion() {
  for (let i = 0; i < btnopc.length; i++) {
    btnopc[i].addEventListener("click", () => {
      if (btnopc[i].innerText === answer) {
        cont++;
      }
      setTimeout(mostrarBandera, 1000);
    });
  }
}

const randomMinMax = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function mostrarBandera() {
  if (band.length === 0) {
    document.getElementById("correctas").innerHTML = `${cont}`;
    document.getElementById("incorrectas").innerHTML = `${
      bandOriginal.length + 1 - cont
    }`;
    finalizar();
    return;
  }
  let numrand = randomMinMax(0, band.length - 1);
  const [banderaeliminada] = band.splice(numrand, 1);

  //img.src = banderaeliminada.bandera;
  img.setAttribute("src", banderaeliminada.bandera);

  btn1.textContent = banderaeliminada.paises[0];
  btn2.textContent = banderaeliminada.paises[1];
  btn3.textContent = banderaeliminada.paises[2];

  answer = banderaeliminada.correcta;
}

repetir.addEventListener("click", () => {
  location.reload();
});

function finalizar() {
  document.getElementById("s1").style.visibility = "hidden";
  document.getElementById("final").style.visibility = "visible";
}
