var x = screen.width/2 - 700/2;
var y = screen.height/2 - 450/2;

var popup = open("", "Popup", "width=300,height=200");

var txtOk = popup.document.createElement("TEXTAREA");

var button = document.createElement('input');
button.setAttribute('type', 'button');
button.setAttribute('value', 'Confirm');

popup.document.body.appendChild(txtOk);
popup.document.body.appendChild(button);
