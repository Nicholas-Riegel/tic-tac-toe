// game in its simplest verion

// Global variable to alternate between Xs and Os;

let x = 1;

// Start button

document.getElementById('start').onclick = () => {
    clearDivs(); 
    x=1; 
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
        div.setAttribute('id', `d${i}`);
        div.onclick = (e) => xo(e);
        document.getElementById('container').appendChild(div);    
    }
}

// function which writes X or O;

function xo(e){
    if (e.target.textContent === ''){
        if (x === 1) { e.target.textContent = 'X'; x = 2; }
        else if (x === 2) { e.target.textContent = 'O'; x = 1; }
    } else { return ; }
}