function nm() {

    chrome.tabs.executeScript(null, { file: "js/jquery.js" }, function () {
        chrome.tabs.executeScript(null, { file: "js/new_conversation.js" });
    });

}

document.getElementById('nm').addEventListener('click', nm);
