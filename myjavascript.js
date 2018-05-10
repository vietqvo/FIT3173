var x = screen.width/2 - 700/2;
var y = screen.height/2 - 450/2;

var popup = open("", "Popup", "width=300,height=200");
var txtarea = popup.document.createElement("TEXTAREA");
var btn = popup.document.createElement("a");
btn.innerHTML = "Submit";
popup.document.body.appendChild(txtarea);
popup.document.body.appendChild(btn);
