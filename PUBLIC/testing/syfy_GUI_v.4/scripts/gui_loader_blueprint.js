
class GuiLoader {

    constructor(elemId = null){
        console.log("[ START >> GuiLoader Class constructor ] ");
        if (elemId !== null) {
          this.elemId = elemId;
          this.rootElem = document.getElementById(elemId);
          this.init();
        } else {
          console.error("GuiLoader Constructor Error : elemId can not be empty.");
        }
        console.log("[ START >> GuiLoader Class constructor ] ");
    }

    findUserDevice(){
      this.device = {
              cpuCores        : null,
              memory          : null,
              cookieEnabled   : null,
              supportTouch    : null,
              maxTouchPoints  : null,
              language        : null,
              online          : null,
              orientation     : null,
              screenWidth     : null, 
              screenHeight    : null, 
              availHeight     : null,
              availWidth      : null,
              colorDepth      : null
      };
      this.device.cookieEnabled = navigator.cookieEnabled;
      this.device.cpuCores = navigator.hardwareConcurrency;
      this.device.memory = navigator.deviceMemory;
      this.device.language = navigator.language;
      this.device.maxTouchPoints = navigator.maxTouchPoints;
      this.device.online = navigator.onLine;
      this.device.orientation = screen.orientation.type;
      this.device.screenWidth = screen.width;
      this.device.screenHeight = screen.height;  
      this.device.availHeight = screen.availHeight;
      this.device.availWidth = screen.availWidth;
      this.device.colorDepth = screen.colorDepth;

      if ("ontouchstart" in document.documentElement){ this.device.supportTouch = true;};
    }

    init (){
        console.log("[ START >> GuiLoader Class Init Method ] ");
        //this.rootElem.innerHTML += "<h1>Welcome to SyFy_GUI_v.1</h1>"
        console.log("[ END >> GuiLoader Class Init Method ] ");
    }
}