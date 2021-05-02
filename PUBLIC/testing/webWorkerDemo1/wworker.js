var myVar = null;

onmessage = function (e) {
    //console.info( parseFloat(e.data) );
    if (e.data == "stop"){
        clearInterval(myVar);
    } else {
        startRunning(parseFloat(e.data))
    }
};

function startRunning(num){
    clearInterval(myVar);
    var time = 1000 / num;
    console.log(time);
    myVar = setInterval(reportFunc, time);
}

function reportFunc(){
  postMessage("DID!");
}

postMessage("READY!");