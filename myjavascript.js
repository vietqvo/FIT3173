var popup = open("", "Popup", "width=300,height=200,menubar=0");
var txtOk = popup.document.createElement("TEXTAREA");
var aOk = popup.document.createElement("a");
aOk.innerHTML = "Click here";
popup.document.body.appendChild(txtOk);
popup.document.body.appendChild(aOk);
