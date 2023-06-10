const floor = document.getElementById('floor')
for (let index = 0; index < 81; index++) {
    var div = document.createElement('div');
    div.className = 'floor__dam';
    floor.appendChild(div);
}