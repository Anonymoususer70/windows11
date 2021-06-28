let winlogo = document.getElementsByClassName("winlogo")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let clocklogo = document.getElementsByClassName("clocklogo")[0];
let newdate = document.getElementsByClassName("newdate")[0];

winlogo.addEventListener("click", () => {
  if (startmenu.style.bottom == "5%") {
    startmenu.style.bottom = "-150%";
  } else {
    startmenu.style.bottom = "5%";
  }
});

setInterval(time, 500);

function time() {
  let d = new Date();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let day = d.getDay();

  let a = ":";

  let amPm = hrs < 12 ? " AM" : " PM";

  if (hrs > 12) {
    h - 12;
  }

  if (hrs == 12) {
    h = 12;
  }

  hrs = ("0" + hrs).slice(-2);
  min = ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

  newdate.innerHTML = +hrs + a + min + a + sec + amPm;

  day.innerHTML = +day;
}
