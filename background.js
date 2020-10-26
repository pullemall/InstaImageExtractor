let src = undefined;

browser.menus.create({
	id: "src",
	title: "Get full-sized image or video",
	type: 'normal',
	contexts: ['page'],
	documentUrlPatterns: [
		"https://*.instagram.com/*"
	]
});

browser.menus.onClicked.addListener(function(info, tab) {
	if (src != undefined) {
		console.log(src);
		browser.tabs.create({url: src});
		src = undefined;
	}
});


browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	src = message.src;
})