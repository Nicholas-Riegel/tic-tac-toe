// global variable for switching off onlick after first click

let x = 0;

// Start button

document.getElementById('start').onclick = () => {
    clearDivs();
    x=0;
    setDivs();
}

// function clear divs

function clearDivs(){
    let subdivs = document.getElementsByClassName('subdiv');
    while (subdivs[0]) {
        subdivs[0].parentNode.removeChild(subdivs[0]);
    }
}

// function set divs

function setDivs(){
    for (let i = 1; i <= 9; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'subdiv');
        div.setAttribute('id', i);
        div.onclick = (e) => xo(e);
        document.getElementById('container').appendChild(div);    
    }
}

// Global variable to alternate between X and O;

let y = 1;

// function which writes X or O;

function xo(e){
    if (e.target.textContent === ''){
        if (y === 1){
            e.target.textContent = 'X';
            y = 2;
            return;
        }
        if (y === 2) {
            e.target.textContent = 'O';
            y = 1;
            return;
        }
    }
    else {
        return ;
    }
}

