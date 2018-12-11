import { handleStatus } from './utils/promise-helpers.js';

document
    .querySelector('#myButton')
    .onclick = () =>
        fetch('http://localhost:3000/notas')
        .then(handleStatus)
            //Lida com o status de retorno
        .then(notas => console.log(notas))
            //Equivale a .then(console.log)
        .catch(console.log);
            //Equivale a .catch(err => console.log(err))