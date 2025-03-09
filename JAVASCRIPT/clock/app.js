var now = new Date()
var month_names = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
var get_month = now.getMonth()
var get_date = now.getDate()
var get_year = now.getFullYear()

document.getElementById("month").innerText = month_names[get_month];
document.getElementById("date").innerText = get_date;
document.getElementById("year").innerText = get_year;

function updateClock() {
  // getting id's  
  var hour = document.getElementById("hour")
  var mint = document.getElementById("mint")
  var sec = document.getElementById("sec")
  //getting hour and minutes from Date Object
  var now = new Date()
  var gethour = now.getHours()
  var getmints = now.getMinutes()
  var getsec = now.getSeconds()
  // calculation of rotation
  var hour_deg = (gethour * 30) + (0.1 * getmints)
  var mint_deg = (getmints * 6) + (0.1 * getsec)
  var sec_deg = getsec * 6

  //giving rotaion styling
  hour.style.transform = `rotate(${hour_deg}deg)`
  mint.style.transform = `rotate(${mint_deg}deg)`
  sec.style.transform = `rotate(${sec_deg}deg)`


  // setTimeout to update our clock after every 1 sec
  setTimeout(updateClock, 1000)

}
updateClock()
