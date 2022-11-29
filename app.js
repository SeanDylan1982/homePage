function colorPicker() {
  let hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
  let a;

  function populate(a) {
    for (let i = 0; i < 6; i++) {
    let x = Math.floor(Math.random() * 14);
    let y = hex[x];
    a += y;
    }
    return a;
  }
  let Color1 = populate("#");
  let Color2 = populate("#");
  let angle = Math.floor(Math.random() * 359);

  let gradient = 'linear-gradient(' + angle + 'deg, ' + Color1 + ', ' + Color2 + ')';
  let revGradient = 'linear-gradient(' + angle + 'deg, ' + Color2 + ', ' + Color1 + ')';
  document.getElementById("apps-container").style.background = gradient;
  document.getElementById("sidebar-list").style.background = revGradient;
  document.getElementById("header").style.background = gradient;
  document.getElementById("login").style.background = revGradient;
};
document.querySelector('#colorPicker').addEventListener('click', colorPicker);
colorPicker();

function showApps() {
  let appIcon = '';
  for (let i = 0; i < apps.length; i++) {
    let app = apps[i];
    appIcon += `<a href="${app.url}" target="_blank" style="text-decoration: none">
    <div class="apps-icon-container" id="${app.name}Icon">
      <div class="icon-img" id="${app.name}icon-img">
        <img src="./img/${app.name}-icon.png" alt="icon">
      </div>
      <div class="icon-text" id="icon-text">${app.name}
      </div>
    </div>
    </a>`;
    document.getElementById("apps").innerHTML = appIcon;    
  };
};
showApps();