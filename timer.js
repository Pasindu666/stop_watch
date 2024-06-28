let counter = 0;
let time = 0;

function count(){
    counter++;
    document.querySelector('#timer').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = () =>{
        time = document.querySelector('#input').value;
        return false;
    }

    document.querySelector('#start').onclick = () =>{
        counting = setInterval(count,1000);
        document.querySelector('#start').disabled = true;
    }

    document.querySelector('#stop').onclick = () => {
        clearInterval(counting);
        document.querySelector('#start').disabled = false;


    }

    document.querySelector('#reset').onclick = () => {
        clearInterval(counting);
        counter = 0;
        document.querySelector('#timer').innerHTML = counter;

    }


    
})