import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector(".form");
  
formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let delay = Number(formElem.elements.delay.value);
  const step = Number(formElem.elements.step.value);
  const amount = Number(formElem.elements.amount.value);
  
  for (let index = 1; index <= amount; index += 1) {
    createPromise(index, delay).then().catch();
    delay += step;
  } 
}

function createPromise(index, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${index} in ${delay}ms`)
        resolve;
      } else {
        Notify.failure(`❌ Rejected promise ${index} in ${delay}ms`)
        reject;
      }
    }, delay);
  })
}