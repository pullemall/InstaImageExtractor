let src = undefined;

function getClick(event) {
	let t = event.target;
	
	if (t.getAttribute("class") == "fXIG0") {
		src = t.previousSibling.previousSibling.firstChild.firstChild.firstChild.src;
	}
	else if (t.getAttribute("class") == "_9AhH0") {
		src = t.previousSibling.firstChild.src;
	}
	browser.runtime.sendMessage({"src": src});
	src = undefined;
}

function getStories(e) {
	
    if(e.button == 2 && location.href.split('/')[3] == "stories") {
        let elem = document.querySelector(".qbCDp");
        let l = undefined;
		
        if(elem.childElementCount > 2 && elem.childNodes[2].tagName == "VIDEO"){
			l = elem.childNodes[2].firstChild.src;
            //window.open(l);
        }else{
			l = elem.childNodes[0].src;
			//window.open(l);
			console.log(l);
			browser.tabs.create({url: l});
        }
    }
}

document.addEventListener('mousedown', getClick);
document.addEventListener('mouseup', getStories);
