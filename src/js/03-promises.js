import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
  e.preventDefault();

  const  {
     elements: { delay, step, amount }
  } = e.currentTarget;


  inputDelayValue = Number(delay.value);
  inputStepValue = Number(step.value);
  inputAmountValue = Number(amount.value);

  console.log( `delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}  `);
  
  for (let i = 1; i <= inputAmountValue; i  += 1) {
  createPromise(i, inputDelayValue)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    inputDelayValue += inputStepValue;
  }

};



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
  setTimeout(() => {
      if (shouldResolve) {
    resolve({ position, delay });
  }
  reject({ position, delay })
  },delay)
  });
};