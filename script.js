let inicio = document.querySelector(".inicio");
let cont = 0;
let answer = "argentina";

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
  //obtenemos valores de los botones
  let btnopc = document.querySelectorAll(".btnopc");

  for (let i = 0; i < btnopc.length - 1; i++) {
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
  let img = document.querySelector("#img-ban");

  let btn1 = document.querySelector("#btn1");
  let btn2 = document.querySelector("#btn2");
  let btn3 = document.querySelector("#btn3");

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

  // img.src = banderaeliminada.bandera;
  img.setAttribute("src", banderaeliminada.bandera);

  btn1.textContent = banderaeliminada.paises[0];
  btn2.textContent = banderaeliminada.paises[1];
  btn3.textContent = banderaeliminada.paises[2];

  answer = banderaeliminada.correcta;
}

function pintarArgentina() {
  return `
  <figure class="imgb">
    <img
      src="Banderas-img/Argentina.jpg"
      alt="banderas"
      id="img-ban"
      width="400px"
      height="250"
    />
  </figure>
  <div class="opc">
    <button class="btnopc" id="btn1">argentina</button>
    <button class="btnopc" id="btn2">uruguay</button>
    <button class="btnopc" id="btn3">nicaragua</button>
  </div>
  <div id="final">
    <h2>CORRECTAS: <span id="correctas" class="correctas"></span></h2>
    <h2>INCORRECTAS: <span id="incorrectas" class="incorrectas"></span></h2>
    <button id="btnr" class="btnopc">volver a jugar</button>
  </div>
  `;
}

function finalizar() {
  document.getElementById("s1").style.visibility = "hidden";
  document.getElementById("final").style.visibility = "visible";

  document.getElementById("btnr").addEventListener("click", () => {
    // location.reload();
    cont = 0;
    band = [...bandOriginal];
    answer = "argentina";

    document.getElementById("s1").innerHTML = pintarArgentina();
    iniciojuego();
    comprobacion();
  });
}
