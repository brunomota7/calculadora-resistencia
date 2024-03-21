let notacaoCientifica = false;
      
function alternarNotacao() {
  notacaoCientifica = !notacaoCientifica;
  const resistividade = document.getElementById("resistividade").value;
  if (notacaoCientifica) {
    document.getElementById("resistividade").value = resistividade.toExponential();
  } else {
    document.getElementById("resistividade").value = resistividade;
  }
}

/* Calculadora */
function calculateResistance() {
    const resistividade = parseFloat(document.getElementById("resistividade").value);
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const areaTransversal = parseFloat(document.getElementById("areaTransversal").value);
    const resistance = (resistividade * comprimento) / areaTransversal;
    document.getElementById("resistance").value = resistance.toFixed(2);
}

/* Botão reload */
const button = document.querySelector(".btnReloadPage")
button.addEventListener("click", () => {
  window.location.reload()
})