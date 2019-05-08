var playbtn = document.getElementById('playBtn');
var sketch = document.getElementById('sketchPad');

function Fire(rmvplay = false){
    let row = window.prompt('Enter number of rows:');
    let col = window.prompt('Enter number of columns:');
    if(rmvplay == true){
        playbtn.parentElement.removeChild(playbtn);
    }
    sketch.style.width = '700px';
    sketch.style.height = '500px';
    sketch.style.backgroundColor = 'rgb(250, 243, 216)';
    sketch.style.borderStyle = 'solid';
    sketch.style.borderWidth = '30px';
    sketch.style.borderColor = 'rgb(199, 48, 48)';
    sketch.style.borderRadius = '5px';

    sketch.style.display = 'inline-grid';
    sketch.style.gridTemplateRows = 'repeat(' + row + ', 1fr)';
    sketch.style.gridTemplateColumns = 'repeat(' + col + ', 1fr)';

    for(let i = 0; i < row * col; i++){
        let cell = document.createElement('div');
        sketch.appendChild(cell);
        cell.style.backgroundColor = 'rgb(250, 243, 216)';
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = 'black';
        });
    }
    let resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.display = 'inline-block';
    let playArea = document.getElementById('pageCenter');
    playArea.appendChild(resetBtn);
    resetBtn.addEventListener('click', function(){
        clear(row, col);
        playArea.removeChild(resetBtn);
        Fire(false);
    });
}

function clear(rows, cols){
    sketch.innerHTML = "";
}
playbtn.addEventListener('click', function(){
    Fire(true);
});
