let src = undefined;


chrome.contextMenus.create({
	id: "src",
	title: "Get full-sized image or video",
	type: 'normal',
	contexts: ['page'],
	onclick: function(info, tab) {
		if (src != undefined) {
			window.open(src);
			src = undefined;
		}
	},
	documentUrlPatterns: [
		"https://*.instagram.com/*"
	]
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	src = message.src;
})