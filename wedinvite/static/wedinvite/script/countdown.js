setInterval(function () {
  updateClock();
}, 10000);

function updateClock() {
  var target_date = new Date("May 29, 2015 13:00:00").getTime();
  var days, hours, minutes, seconds;
  var countdown = document.getElementById("countdown");
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;
  days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;
  hours = parseInt(seconds_left / 3600);
  var daysString = getDateString("dien", days);
  var hourString = getDateString("valand", hours);
  countdown.innerHTML = days + " " + daysString + " ir " + hours + " " + hourString;
}

function getDateString(base, days) {
  var string;
  if ((days % 100 > 10) && (days % 100 < 20)) {
    return base + "ų";
  }
  switch(days % 10) {
    case 0:
      string = base + "ų";
      break;
    case 1:
      string = base + "a";
      break;
    default:
      string = base + "os";
  }
  return string;
}
