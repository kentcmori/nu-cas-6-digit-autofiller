//
// Copyright (c) 2022 Mori, Kent. C.
// Released under the MIT license 
// https://opensource.org/licenses/mit-license.php
//

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.digit) {
	document.getElementById('token').value = msg.digit;
	document.getElementsByClassName('btn btn-submit')[0].click();
        sendResponse('Change to ' + msg.color);
    } else {
        sendResponse('Message is none.');
    }
});