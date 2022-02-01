const SelecElement = document.querySelector(".gaseosa");

SelecElement.addEventListener(`change`, (evt) => {
    const resultado = document.querySelector(".resultado");
    resultado.textContent = `Usted va a comprar la gaseosa ${evt.target.value}`;
})