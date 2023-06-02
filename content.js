chrome.runtime.sendMessage({ action: "getCopiedCookie" }, function (response) {
    if (response.cookie) {
        copyToClipboard(response.cookie);
        console.log("Cookie copiada al portapapeles.");
    }
});

function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}