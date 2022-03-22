let floodEnabled = !1,
    count = 0;

function youtube() {
    var e = document.getElementById("eW91dHViZWxpbmstaW5wdXQ").value,
        t = document.getElementById("eW91dHViZWxpbmstaW5wdXQ").value;
    if (e.indexOf("youtube") >= 0) {
        var n = e.split("=");
        e = n[1]
    }
    if (e.indexOf("https://youtu.be/") >= 0) {
        var d = e.split("/");
        e = d[3]
    }
    if (e.indexOf("http://youtu.be/") >= 0) {
        var l = e.split("/");
        e = l[3]
    }
    if (e.indexOf("youtu.be/") >= 0) {
        var o = e.split("/");
        e = o[3]
    }
    var m = e.match(/.{1,11}/g),
        c = t.split("?"),
        u = "?" + c[1];
    for (i = 2; i < c.length; i++) u += "?", u += c[i];
    u = u.replace(/t/g, "start");
    var s = "https://www.youtube-nocookie.com/embed/" + m[0] + "?autoplay=1";
    document.getElementById("eW91dHViZWlk").style.visibility = "visible", document.getElementById("eW91dHViZWlk").src = s, document.getElementById("eW91dHViZWlk").style.zIndex = "1", document.getElementById("eW91dHViZWlk").style.width = "480px", document.getElementById("eW91dHViZWlk").style.height = "270px"
}

function logKey(e) {
    "ShiftRight" == e.code && ("hidden" == document.getElementById("modol").style.visibility ? (document.getElementById("modol").style.visibility = "visible", "" != document.getElementById("eW91dHViZWlk").src && (document.getElementById("eW91dHViZWlk").style.visibility = "visible"), "" != document.getElementById("cm93cw").src && (document.getElementById("cm93cw").style.visibility = "visible"), "" != document.getElementById("aWZyYW1laWQ").src && (document.getElementById("aWZyYW1laWQ").style.visibility = "visible")) : (document.getElementById("modol").style.visibility = "hidden", document.getElementById("eW91dHViZWlk").style.visibility = "hidden", document.getElementById("cm93cw").style.visibility = "hidden", document.getElementById("aWZyYW1laWQ").style.visibility = "hidden"))
}
document.getElementById("d2luZG93LW90aGVyLWNsZWFyaGlzdG9yeQ").onclick = function() {
    window.location.replace("https://www.google.com")
}, document.getElementById("d2luZG93LW90aGVyLWJ1dHRvbg").onclick = function() {
    var a = prompt("Run javascript here, errors will popup in an alert box.");
    try {
        eval(a)
    } catch (e) {
        alert(e)
    }
}, document.addEventListener("keydown", logKey), document.getElementById("d2luZG93LW90aGVyLWZsb29kYnV0dG9u").onclick = function() {
    if (floodEnabled) floodEnabled = !1, history.pushState(0, 0, "/");
    else {
        floodEnabled = !0;
        var e = "/";
        o = "f_";
        var t = setInterval(function() {
            floodEnabled ? (count > 45 && (history.pushState(0, 0, "/"), e = "/", o = "f_"), history.pushState(0, 0, e += o.toString() + count.toString()), count++, 0) : (clearInterval(t), document.getElementById("d2luZG93LW90aGVyLWZsb29kYnV0dG9u").style.backgroundColor = "#00b08a")
        }, 50)
    }
}, document.getElementById("aW5jb2duaXRvLWJ1dHRvbg").onclick = function() {
    document.getElementById("aWZyYW1laWQ").style.visibility = "visible", document.getElementById("aWZyYW1laWQ").src = "https://www.unblockyoutube.co/", document.getElementById("aWZyYW1laWQ").style.zIndex = "1", document.getElementById("aWZyYW1laWQ").style.width = "1200px", document.getElementById("aWZyYW1laWQ").style.height = "1000px"
}, document.getElementById("YWxsb3ktYnV0dG9u").onclick = function() {
    document.getElementById("aWZyYW1laWQ").style.visibility = "visible", document.getElementById("aWZyYW1laWQ").src = "https://phosphorous.tomcodez.repl.co/games-gh-pages/index.html", document.getElementById("aWZyYW1laWQ").style.zIndex = "1", document.getElementById("aWZyYW1laWQ").style.width = "480px", document.getElementById("aWZyYW1laWQ").style.height = "270px"
}, document.getElementById("Y2xvc2UteW91dHViZS1idXR0b24").onclick = function() {
    document.getElementById("eW91dHViZWlk").style.visibility = "hidden", document.getElementById("eW91dHViZWlk").style.zIndex = "0", document.getElementById("eW91dHViZWlk").style.width = "0px", document.getElementById("eW91dHViZWlk").style.height = "0px", document.getElementById("eW91dHViZWlk").src = " "
}, document.getElementById("Y2xvc2UteW91dHViZS1zZWFyY2gtYnV0dG9u").onclick = function() {
    document.getElementById("cm93cw").style.visibility = "hidden", document.getElementById("cm93cw").style.zIndex = "0", document.getElementById("cm93cw").style.width = "0px", document.getElementById("cm93cw").style.height = "0px", document.getElementById("cm93cw").innerHTML = ""
}, document.getElementById("eW91dHViZS1zZWFyY2gtYnV0dG9u").onclick = function() {
    document.getElementById("cm93cw").style.visibility = "visible", document.getElementById("cm93cw").style.zIndex = "1", document.getElementById("cm93cw").style.width = "450px", document.getElementById("cm93cw").style.height = "116.4px", document.getElementById("cm93cw").innerHTML = "";
    var e = new XMLHttpRequest;
    if (e.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBxhiR-MMw-VFx-gQFDM3XB9bcv9mUc2co&type=video&maxResults=1&q=" + document.getElementById("eW91dHViZXNlYXJjaC1pbnB1dA").value, !1), e.send(null), url = e.responseText, actualurl = JSON.parse(url), 200 == e.status && (console.log("working" + url.status), actualurl.items.forEach(e => {
            var t = document.createElement("div");
            t.style = "display:flex", t.classList.add("cm93"), t.innerHTML = "<img src=" + e.snippet.thumbnails.medium.url + ' alt="" id="VGh1bWJuYWls" width="200"><div class="ZGV0YWlscw"><h4 class="aDR0ZXh0" style="color:white !important;padding: 0 !important;margin: 0 !important;line-height: 1.3 !important;font-weight: 600 !important;font-size: 20px !important">' + e.snippet.title + '</h4><p class="cHRleHQ" style="padding: 0 !important;margin: 0 !important;line-height: 1.3 !important;font-weight: 600 !important;color: grey !important;font-size: 15px !important;">' + e.snippet.channelTitle + "</p></div>", document.getElementById("cm93cw").append(t), t.style.cursor = "pointer", t.onclick = function() {
                document.getElementById("eW91dHViZWxpbmstaW5wdXQ").value = "https://www.youtube.com/watch?v=" + e.id.videoId, youtube()
            }
        }), 0 == actualurl.pageInfo.totalResults)) {
        var t = document.createElement("div");
        t.style = "margin-bottom: 5px; color: white; text-align: center;", t.innerHTML = "No Results Found", document.getElementById("cm93cw").append(t)
    }
}, document.getElementById("eW91dHViZS1idXR0b24").onclick = function() {
    youtube()
}, dragElement(document.getElementById("d2luZG93LW90aGVy")), dragElement(document.getElementById("bmV3LXdpbmRvdw")), dragElement(document.getElementById("eW91dHViZS13aW5kb3c")), dragElement(document.getElementById("Y2FsY3VsYXRvci13aW5kb3c")), dragElement(document.getElementById("eW91dHViZS1zZWFyY2gtd2luZG93"));
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

function dragElement(e) {
    function t(e) {
        (e = e || window.event).preventDefault(), pos3 = e.clientX, pos4 = e.clientY, document.onmouseup = d, document.onmousemove = n
    }

    function n(t) {
        (t = t || window.event).preventDefault(), pos1 = pos3 - t.clientX, pos2 = pos4 - t.clientY, pos3 = t.clientX, pos4 = t.clientY, e.style.top = e.offsetTop - pos2 + "px", e.style.left = e.offsetLeft - pos1 + "px"
    }

    function d() {
        document.onmouseup = null, document.onmousemove = null
    }
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = t : e.onmousedown = t
}
operator = "", number1 = "", number2 = "", answer = "", document.getElementById("QUM").onclick = function() {
    document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = "", operator = "", number1 = "", number2 = "", answer = ""
}, document.getElementById("T25l").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "1", "" == operator ? number1 += "1" : number2 += "1")
}, document.getElementById("VHdv").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "2", "" == operator ? number1 += "2" : number2 += "2")
}, document.getElementById("VGhyZWU").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "3", "" == operator ? number1 += "3" : number2 += "3")
}, document.getElementById("Rm91cg").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "4", "" == operator ? number1 += "4" : number2 += "4")
}, document.getElementById("Rml2ZQ").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "5", "" == operator ? number1 += "5" : number2 += "5")
}, document.getElementById("U2l4").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "6", "" == operator ? number1 += "6" : number2 += "6")
}, document.getElementById("U2V2ZW4").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "7", "" == operator ? number1 += "7" : number2 += "7")
}, document.getElementById("RWlnaHQ").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "8", "" == operator ? number1 += "8" : number2 += "8")
}, document.getElementById("TmluZQ").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "9", "" == operator ? number1 += "9" : number2 += "9")
}, document.getElementById("WmVybw").onclick = function() {
    "" == answer && (document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "0", "" == operator ? number1 += "0" : number2 += "0")
}, document.getElementById("RG90").onclick = function() {
    document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + ".", "" == operator ? number1 += "." : number2 += "."
}, document.getElementById("RGl2aXNpb24").onclick = function() {
    "" != number1.value && "" == operator && (operator = "/", document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "/")
}, document.getElementById("TWludXM").onclick = function() {
    "" != number1.value && "" == operator && (operator = "-", document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "-")
}, document.getElementById("UGx1cw").onclick = function() {
    "" != number1.value && "" == operator && (operator = "+", document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "+")
}, document.getElementById("TXVsdGlwbGljYXRpb24").onclick = function() {
    "" != number1.value && "" == operator && (operator = "*", document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "*")
}, document.getElementById("RXF1YWxz").onclick = function() {
    "" == answer && ("/" == operator ? answer = number1 / number2 : "+" == operator ? answer = parseInt(number1) + parseInt(number2) : "-" == operator ? answer = number1 - number2 : "*" == operator && (answer = number1 * number2), document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value = document.getElementById("Q2FsY3VsYXRvci1pbnB1dA").value + "=" + answer)
};