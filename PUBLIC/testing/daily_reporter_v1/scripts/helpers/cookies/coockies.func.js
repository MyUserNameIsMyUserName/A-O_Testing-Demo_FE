/*
Helper Cookies functions 

List of functions:
    1. setCookie (cname, cvalue, exdays)
       - [cname]   <- Cookie Name to Set
       - [cvalue]  <- Set Cookie Value
       - [exdays]  <- When will it expire

    2. getCookie(cname)
       - [cname]   <- Cookie Name to Get

*/


//  1. setCookie (cname, cvalue, exdays)

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//--//

//  2. getCookie(cname)

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//--//

//  3. listAllCookies()

function listAllCookies() {
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  return ca;
}

//--//

//  3. printAllCookies(elemSel)

function printAllCookies(elemSel) {
  document.querySelector(elemSel).innerHTML = listAllCookies();
}

//--//

//  3. deleteCookie(elemSel)

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//--//


