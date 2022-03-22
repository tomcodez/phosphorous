javascript:
function makeHttpObject() {  
  try {    
    return new XMLHttpRequest();  
  }
  catch (error) {
    
  }  
  try {    
    return new ActiveXObject("Msxml2.XMLHTTP");
  } 
  catch (error) {
    
  }  
  try {    
    return new ActiveXObject("Microsoft.XMLHTTP");  
  } 
  catch (error) {
    
  }  
  throw new Error("Could not create HTTP request object.");
};
var request = makeHttpObject();
request.open("GET", "https://raw.githubusercontent.com/tomcodez/phosphorous/main/index.html", true);
request.send(null);
request.onreadystatechange = function () {
if (request.readyState == 4) 
{    
  var yoiframe = document.createElement('div');   
  yoiframe.innerHTML = request.responseText;    
  yoiframe.id = "modol";    
  yoiframe.style = "position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%;overflow-x: hidden; z-index:99999999;";    
  document.body.appendChild(yoiframe);    
  let script = document.createElement('script');    
  script.setAttribute("src", "https://raw.githubusercontent.com/tomcodez/phosphorous/main/script.js");    
  script.setAttribute("type", "application/javascript"); 
  document.body.appendChild(script);  
};
};