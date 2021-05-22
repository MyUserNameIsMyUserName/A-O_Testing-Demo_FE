
class GuiApp {

    constructor(elemId = null){
        console.log("[ START >> GuiApp Class constructor ] ");
        if (elemId !== null) {
          this.elemId = elemId;
          this.rootElem = document.getElementById(elemId);
          this.init();
        } else {
          console.error("GuiApp Constructor Error : elemId can not be empty.");
        }
        console.log("[ START >> GuiApp Class constructor ] ");
    }

    init (){
        console.log("[ START >> GuiApp Class Init Method ] ");
        this.rootElem.innerHTML += "<h1>Welcome to SyFy_GUI_v.1</h1>"
        console.log("[ END >> GuiApp Class Init Method ] ");
    }
}