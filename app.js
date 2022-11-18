function colorPicker() {
  let hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
  let a;

  function populate(a) {
    for (let i = 0; i < 6; i++) {
    let x = Math.floor(Math.random() * 16);
    let y = hex[x];
    a += y;
    }
    return a;
  }
  let Color1 = populate("#");
  let Color2 = populate("#");
  let angle = Math.floor(Math.random() * 360);

  let gradient = 'linear-gradient(' + angle + 'deg, ' + Color1 + ', ' + Color2 + ')';
  document.getElementById("apps-container").style.background = gradient;
  document.getElementById("games-container").style.background = gradient;
};
document.querySelector('#colorPicker').addEventListener('click', colorPicker);
colorPicker();
