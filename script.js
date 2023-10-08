const valor = document.getElementById('valor');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const resetar = document.getElementById('resetar');

const updateValor = () => {
    valor.innerHTML = count;
};

let count = 0;       //let pois o valor vai mudar//
let intervalId = 0;

mais.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValor();
    }, 100);
});

menos.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValor();
    }, 100);
});

resetar.addEventListener('click', () => {
        count = 0;
        updateValor();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));