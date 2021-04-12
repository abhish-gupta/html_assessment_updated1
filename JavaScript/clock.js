function startTime() {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    mm = getValue(mm);
    ss = getValue(ss);
    document.getElementById('txt').innerHTML = hh + ":" + mm + ":" + ss;
    var t = setTimeout(startTime, 1000);
  }
  function getValue(l) {
    if (l < 10) {l = "0" + l};  
    return l;
  }