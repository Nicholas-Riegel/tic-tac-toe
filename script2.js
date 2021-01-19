// Global variable to alternate between Xs and Os in xo function ;

let x = 1;
let allowClicks = 'yes'

// game object. x = 1, o = 2

const game = {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0,
    d7: 0,
    d8: 0,
    d9: 0,
}

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
    game.d1 = 0;
    game.d2 = 0;
    game.d3 = 0;
    game.d4 = 0;
    game.d5 = 0;
    game.d6 = 0;
    game.d7 = 0;
    game.d8 = 0;
    game.d9 = 0;
    allowClicks='yes';
    document.getElementById('winner').textContent='';
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
    if ((e.target.textContent === '') && (allowClicks==='yes')){
        if (x === 1) { 
            e.target.textContent = 'X'; 
            game[e.target.id] = 1;
            x = 2; 
            announceWinner()
        }
        else if (x === 2) { 
            e.target.textContent = 'O';
            game[e.target.id] = 2; 
            x = 1;
            announceWinner(); 
        }
    } 
    else { 
        return ; 
    }
}

// function announce winner

function announceWinner(){
    if (
        (game.d1===1&&game.d2===1&&game.d3===1) ||
        (game.d4===1&&game.d5===1&&game.d6===1) ||
        (game.d7===1&&game.d8===1&&game.d9===1) ||
        (game.d1===1&&game.d4===1&&game.d7===1) ||
        (game.d2===1&&game.d5===1&&game.d8===1) ||
        (game.d3===1&&game.d6===1&&game.d9===1) ||
        (game.d1===1&&game.d5===1&&game.d9===1) ||
        (game.d3===1&&game.d5===1&&game.d7===1) 
    ){
        document.getElementById('winner').textContent = 'X wins!';
        allowClicks='no'
    }
    else if (
        (game.d1===2&&game.d2===2&&game.d3===2) ||
        (game.d4===2&&game.d5===2&&game.d6===2) ||
        (game.d7===2&&game.d8===2&&game.d9===2) ||
        (game.d1===2&&game.d4===2&&game.d7===2) ||
        (game.d2===2&&game.d5===2&&game.d8===2) ||
        (game.d3===2&&game.d6===2&&game.d9===2) ||
        (game.d1===2&&game.d5===2&&game.d9===2) ||
        (game.d3===2&&game.d5===2&&game.d7===2)
    ){
        document.getElementById('winner').textContent = 'O wins!';
        allowClicks='no'
    }
}