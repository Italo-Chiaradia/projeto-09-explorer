import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calcIMC, notANumber } from './utilis.js';
// variáveis 
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = function(event) {
  event.preventDefault();
  
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (notANumber(weight) || notANumber(height)) {
    AlertError.open();
    inputHeight.value = '';
    inputWeight.value = '';
    return;
  }

  AlertError.close();

  const imc = calcIMC(weight, height);
  
  Modal.message.innerText = `Seu IMC é de ${imc}`;
  Modal.open();

  inputHeight.value = '';
  inputWeight.value = '';
}

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();
