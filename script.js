let floodEnabled = false;
let count = 0;


document.getElementById("d2luZG93LW90aGVyLWNsZWFyaGlzdG9yeQ").onclick = function () {
  window.location.replace("https://www.google.com")
};

document.getElementById("d2luZG93LW90aGVyLWJ1dHRvbg").onclick = function () {
  var a = prompt("Run javascript here, errors will popup in an alert box.");
  try {
    eval(a);
  } catch (err) {
    alert(err);
  };
};

document.addEventListener('keydown', logKey);

function youtube() {
  var theId = document.getElementById('eW91dHViZWxpbmstaW5wdXQ').value;
  var theOtherId = document.getElementById('eW91dHViZWxpbmstaW5wdXQ').value;
  var YouTube = "youtube";
  var YouTube2 = "https://youtu.be/";
  var YouTube3 = "http://youtu.be/";
  var YouTube4 = "youtu.be/";
  if (theId.indexOf(YouTube) >= 0) {
    var string = theId.split('=');
    theId = string[1];
  }
  if (theId.indexOf(YouTube2) >= 0) {
    var sString = theId.split('/');
    theId = sString[3];
  }
  if (theId.indexOf(YouTube3) >= 0) {
    var ssString = theId.split('/');
    theId = ssString[3];
  }
  if (theId.indexOf(YouTube4) >= 0) {
    var sssString = theId.split('/');
    theId = sssString[3];
  }
  var newId = theId.match(/.{1,11}/g);
  var otherId = theOtherId.split('?');
  var otherPartId = "?" + otherId[1];
  for (i = 2; i < otherId.length; i++) {
    otherPartId += '?';
    otherPartId += otherId[i];
  }
  otherPartId = otherPartId.replace(/t/g, 'start');
  var customLink = 'https://www.youtube-nocookie.com/embed/' + newId[0] + '?autoplay=1';
  document.getElementById("eW91dHViZWlk").style.visibility = "visible";
  document.getElementById("eW91dHViZWlk").src = customLink;
  document.getElementById("eW91dHViZWlk").style.zIndex = "1";
  document.getElementById("eW91dHViZWlk").style.width = '480px';
  document.getElementById("eW91dHViZWlk").style.height = '270px';
};

function logKey(e) {
  if (e.code == "ShiftRight") {
    if (document.getElementById("modol").style.visibility == "hidden") {
      document.getElementById("modol").style.visibility = "visible";
      if (document.getElementById("eW91dHViZWlk").src != "") {
        document.getElementById("eW91dHViZWlk").style.visibility = "visible";
      };
      if (document.getElementById("cm93cw").src != "") {
        document.getElementById("cm93cw").style.visibility = "visible";
      };
      if (document.getElementById("aWZyYW1laWQ").src != "") {
        document.getElementById("aWZyYW1laWQ").style.visibility = "visible";
      };
    } else {
      document.getElementById("modol").style.visibility = "hidden";
      document.getElementById("eW91dHViZWlk").style.visibility = "hidden";
      document.getElementById("cm93cw").style.visibility = "hidden";
      document.getElementById("aWZyYW1laWQ").style.visibility = "hidden";
    };
  };
};

document.getElementById("d2luZG93LW90aGVyLWZsb29kYnV0dG9u").onclick = function () {
  if (!floodEnabled) {
    floodEnabled = true;
    var t = "/";
    o = "f_";
    var permCount = 0;
    var flooder = setInterval(function () {
      if (floodEnabled) {
        if (count > 45) {
          history.pushState(0, 0, "/");
          t = "/";
          o = "f_";
        };
        history.pushState(0, 0, t += o.toString() + count.toString());
        count++;
        permCount++;
      } else {
        clearInterval(flooder);
        document.getElementById("d2luZG93LW90aGVyLWZsb29kYnV0dG9u").style.backgroundColor = "#00b08a";
      };
    }, 50);
  } else {
    floodEnabled = false;
    history.pushState(0, 0, "/");
  };
};

document.getElementById("YWxsb3ktYnV0dG9a").onclick = function () {
  document.getElementById("aWZyYW1laWQ").style.visibility = "visible";
  document.getElementById("aWZyYW1laWQ").src = "https://edgenuity.herokuapp.com/service/hvtrs8%2F-dksaopd%2Ccmm-lmgkn";
  document.getElementById("aWZyYW1laWQ").style.zIndex = "1";
  document.getElementById("aWZyYW1laWQ").style.width = '900px';
  document.getElementById("aWZyYW1laWQ").style.height = '600px';
  
};

document.getElementById("aW5jb2duaXRvLWJ1dHRvbg").onclick = function () {
  document.getElementById("aWZyYW1laWQ").style.visibility = "visible";
  document.getElementById("aWZyYW1laWQ").src = "https://home-access-center.herokuapp.com/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-";
  document.getElementById("aWZyYW1laWQ").style.zIndex = "1";
  document.getElementById("aWZyYW1laWQ").style.width = '900px';
  document.getElementById("aWZyYW1laWQ").style.height = '600px';
};

document.getElementById("YWxsb3ktYnV0dG9u").onclick = function () {
  document.getElementById("aWZyYW1laWQ").style.visibility = "visible";
  document.getElementById("aWZyYW1laWQ").src = "https://phosphorous.tomcodez.repl.co/games-gh-pages/index.html";
  document.getElementById("aWZyYW1laWQ").style.zIndex = "1";
  document.getElementById("aWZyYW1laWQ").style.width = '480px';
  document.getElementById("aWZyYW1laWQ").style.height = '270px';
};

document.getElementById("Y2xvc2UteW91dHViZS1idXR0b24").onclick = function () {
  document.getElementById("eW91dHViZWlk").style.visibility = "hidden";
  document.getElementById("eW91dHViZWlk").style.zIndex = "0";
  document.getElementById("eW91dHViZWlk").style.width = '0px';
  document.getElementById("eW91dHViZWlk").style.height = '0px';
  document.getElementById("eW91dHViZWlk").src = " ";
};

document.getElementById("Y2xvc2UteW91dHViZS1zZWFyY2gtYnV0dG9u").onclick = function () {
  document.getElementById("cm93cw").style.visibility = "hidden";
  document.getElementById("cm93cw").style.zIndex = "0";
  document.getElementById("cm93cw").style.width = '0px';
  document.getElementById("cm93cw").style.height = '0px';
  document.getElementById("cm93cw").innerHTML = '';
};

document.getElementById("eW91dHViZS1zZWFyY2gtYnV0dG9u").onclick = function () {
  document.getElementById("cm93cw").style.visibility = "visible";
  document.getElementById("cm93cw").style.zIndex = "1";
  document.getElementById("cm93cw").style.width = '450px';
  document.getElementById("cm93cw").style.height = '116.4px';
  document.getElementById("cm93cw").innerHTML = "";

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBxhiR-MMw-VFx-gQFDM3XB9bcv9mUc2co&type=video&maxResults=1&q=" + document.getElementById("eW91dHViZXNlYXJjaC1pbnB1dA").value, false);
  xmlHttp.send(null);
  url = xmlHttp.responseText;
  actualurl = JSON.parse(url);
  if (xmlHttp.status == 200) {
    console.log("working" + url.status);
    actualurl.items.forEach(obj => {
      var rowdiv = document.createElement('div');
      rowdiv.style = "display:flex";
      rowdiv.classList.add('cm93');
      rowdiv.innerHTML = "<img src=" + obj.snippet.thumbnails.medium.url + " alt=\"\" id=\"VGh1bWJuYWls\" width=\"200\"><div class=\"ZGV0YWlscw\"><h4 class=\"aDR0ZXh0\" style=\"color:white !important;padding: 0 !important;margin: 0 !important;line-height: 1.3 !important;font-weight: 600 !important;font-size: 20px !important\">" + obj.snippet.title + "</h4><p class=\"cHRleHQ\" style=\"padding: 0 !important;margin: 0 !important;line-height: 1.3 !important;font-weight: 600 !important;color: grey !important;font-size: 15px !important;\">" + obj.snippet.channelTitle + "</p></div>";
      document.getElementById("cm93cw").append(rowdiv);
      rowdiv.style.cursor = 'pointer';
      rowdiv.onclick = function () {
        document.getElementById("eW91dHViZWxpbmstaW5wdXQ").value = "https://www.youtube.com/watch?v=" + obj.id.videoId;
        youtube();
      };
    });
    if (actualurl.pageInfo.totalResults == 0) {
      var errordiv = document.createElement('div');
      errordiv.style = "margin-bottom: 5px; color: white; text-align: center;";
      errordiv.innerHTML = "No Results Found";
      document.getElementById("cm93cw").append(errordiv);
    };
  } else {
    return;
  };
};


document.getElementById("eW91dHViZS1idXR0b24").onclick = function () {
  youtube();
};

document.getElementById("YWxsb3ktYnV0dG9a").onclick = function () {
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
};


dragElement(document.getElementById("d2luZG93LW90aGVy"));
dragElement(document.getElementById("bmV3LXdpbmRvdw"));
dragElement(document.getElementById("eW91dHViZS13aW5kb3c"));
dragElement(document.getElementById("Y2FsY3VsYXRvci13aW5kb3c"));
dragElement(document.getElementById("eW91dHViZS1zZWFyY2gtd2luZG93"));
var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

function dragElement(elmnt) {
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  };

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  };

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  };
};