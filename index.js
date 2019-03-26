let breathStart;
let breathEnd; 
var time1 = [];

function breathTime() {
  let breathTimer = (breathEnd - breathStart)/1000;
  console.log(breathTimer);
  time1.push(breathTimer);
  renderBreaths();
  // document.getElementById("time1").innerHTML = time1 + " seconds";
}

function renderBreaths() {
  const main = document.getElementById('breathlog')
  time1.forEach(t => {
    const li = document.createElement('li')
    li.innerText = `${t}`
    main.appendChild(li)
  })
}

function changeText() {
    var elem = document.getElementById("buttonchange");
    if (elem.value=="Start Inhale") {
        elem.value = "Inhale done";
        breathStart = new Date();
        console.log(breathStart);
    } else if (elem.value=="Inhale done") {
        elem.value = "Start exhale";
    } else if (elem.value=="Start exhale") {
        elem.value = "Exhale done";
    } else if (elem.value=="Exhale done") {
        elem.value = "And relax...";
        breathEnd = new Date();
        console.log(breathEnd);
        breathTime();
    } else if (elem.value=="And relax...") {
        elem.value = "Start Inhale";
    }
}

