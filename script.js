// /* ********** Menu_Mobile ********** */
// ((d) => {
//   const $btnMenu = d.querySelector(".menu-btn"),
//     $menu = d.querySelector(".menu");

//   $btnMenu.addEventListener("click", (e) => {
//     $btnMenu.firstElementChild.classList.toggle("none");
//     $btnMenu.lastElementChild.classList.toggle("none");
//     $menu.classList.toggle("is-active");
//   });

//   d.addEventListener("click", (e) => {
//     if (!e.target.matches(".menu__enlace")) return false;

//     $btnMenu.firstElementChild.classList.remove("none");
//     $btnMenu.lastElementChild.classList.add("none");
//     $menu.classList.remove("is-active");
//   });
// })(document);

/* *************Script_DARK-MODE************** */
const dark = document.getElementById("switch");
console.log(dark);

dark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  dark.classList.toggle("active");
});

/*Script CONTADOR*/
let contador = 0;
const valor = document.querySelector("#valor");
const botones = document.querySelectorAll(".boton");
botones.forEach((boton) => {
  boton.addEventListener("click", function (e) {
    const estilos = e.currentTarget.classList;

    if (estilos.contains("disminuir")) {
      contador--;
    } else if (estilos.contains("aumentar")) {
      contador++;
    } else {
      contador = 0;
    }
    valor.textContent = contador;

    if (contador < 0) {
      valor.style.color = "red";
    } else if (contador > 0) {
      valor.style.color = "";
    }
  });
});
