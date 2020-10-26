let src = undefined;

function getClick(event) {
	let t = event.target;
	
	if (t.getAttribute("class") == "fXIG0") {
		src = t.previousSibling.previousSibling.firstChild.firstChild.firstChild.src;
	}
	else if (t.getAttribute("class") == "_9AhH0") {
		src = t.previousSibling.firstChild.src;
	}
	
	if (src != undefined) {
		chrome.runtime.sendMessage(message={"src": src});
		src = undefined;
	}
}

function getStories(e) {
    if(e.button == 2 && location.href.split('/')[3] == "stories") {
        let elem = document.querySelector(".qbCDp");
        
        if(elem.childElementCount > 2 && elem.childNodes[2].tagName == "VIDEO"){
            window.open(elem.childNodes[2].firstChild.src);
        }else{
            window.open(elem.childNodes[0].src);
        }
    }
}

document.addEventListener('mouseup', getStories);
document.addEventListener('mousedown', getClick);