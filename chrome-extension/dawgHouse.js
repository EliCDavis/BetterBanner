/**
 * http://stackoverflow.com/questions/9425324/chrome-content-script-onclick-event
 * https://developer.chrome.com/extensions/event_pages
 * http://stackoverflow.com/questions/3188384/google-chrome-extensions-open-new-tab-when-clicking-a-toolbar-icon
 */

function goDawgs(tab) {
	chrome.tabs.create({ url: 'https://my.msstate.edu'}); 
}

chrome.browserAction.onClicked.addListener(goDawgs);