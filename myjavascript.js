
var w = 300;
var h = 200;
var left = (screen.width - w) / 2;
var top = (screen.height - h) / 4;

//var popup = open("", "Popup", "width=300,height=200");
var popup = open("", "Popup",'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

var h5 = document.createElement('h5');
h5.appendChild(document.createTextNode("Please confirm your password"));

var txtOk = popup.document.createElement("input");

var linebreak = document.createElement("br");

var button = document.createElement('input');
button.setAttribute('type', 'button');
button.setAttribute('value', 'Confirm');

popup.document.body.appendChild(h5);
popup.document.body.appendChild(linebreak);
popup.document.body.appendChild(txtOk);
popup.document.body.appendChild(linebreak);
popup.document.body.appendChild(button); 
