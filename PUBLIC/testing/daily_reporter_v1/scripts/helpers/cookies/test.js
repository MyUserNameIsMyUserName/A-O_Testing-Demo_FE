// TEST JS

// 1. Check and Prompt
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    document.body.innerHTML += "Welcome again " + user;
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length = 4096) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


window.onload = function() {
    checkCookie();
    printAllCookies("cookie_list");
    console.log("TEST_DONE");

    var x = document.cookie;
    document.body.innerHTML += "<div>" + x.length + "</div>";

    var randomStr = {
      256: generateString(256),
      512: generateString(512),
      1024: generateString(1024),
      2048: generateString(2048),
      4096: generateString(4096),
      8192: generateString(8192),
    };
    
    document.body.innerHTML += "<div>Generating Random Strings</div>";
    document.body.innerHTML += "<div>String_256 [ L:"+randomStr[256].length+" ] >> " + randomStr[256] + "</div>";
    document.body.innerHTML += "<div>String_512 [ L:"+randomStr[512].length+" ] >> " + randomStr[512] + "</div>";
    document.body.innerHTML += "<div>String_1024 [ L:"+randomStr[1024].length+" ] >> " + randomStr[1024] + "</div>";
    document.body.innerHTML += "<div>String_2048 [ L:"+randomStr[2048].length+" ] >> " + randomStr[2048] + "</div>";
    document.body.innerHTML += "<div>String_4096 [ L:"+randomStr[4096].length+" ] >> " + randomStr[4096] + "</div>";
    document.body.innerHTML += "<div>String_8192 [ L:"+randomStr[8192].length+" ] >> " + randomStr[8192] + "</div>";

    
    setCookie(generateString(36), randomStr[256], 30);
    setCookie(generateString(36), randomStr[512], 30);
    setCookie(generateString(36), randomStr[1024], 30);
    setCookie(generateString(36), randomStr[2048], 30);
    setCookie(generateString(36), randomStr[4096], 30);
    //setCookie(generateString(36), randomStr[8192], 30);

    printAllCookies("cookie_list");
}