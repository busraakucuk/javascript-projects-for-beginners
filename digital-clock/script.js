const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

const dayEl = document.getElementById("day")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")


function updateClock(){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  
  let ampm = "AM"

  if(h > 12){
    h -= 12
    ampm = "PM"
  }

  h = h<10 ? "0" + h : h
  m = m<10 ? "0" + m : m
  s = s<10 ? "0" + s : s
  

  hourEl.innerText =  h
  minuteEl.innerText = m
  secondEl.innerText = s
  ampmEl.innerText = ampm

  setTimeout(()=>{
    updateClock()
  },1000)
}
function updateDate(){
  let d = new Date().getDate()
  let mo = new Date().getMonth()
  let y = new Date().getFullYear()
  dayEl.innerText = d
  monthEl.innerText = mo + 1
  yearEl.innerText = y

  setTimeout(()=>{
    updateDate()
  },24*60*60*1000)
}
updateClock()
updateDate()


