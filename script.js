document.getElementById("textInput").addEventListener("input", calculateStats);

function calculateStats() {
    var text = document.getElementById("textInput").value;

    // Character count
    var charCount = text.length;
    document.getElementById("charCount").textContent = "Characters: " + charCount;

    // Word count
    var wordCount = text.trim().split(/\s+/).filter(function(n) { return n != '' }).length;
    document.getElementById("wordCount").textContent = "Words: " + wordCount;

    // Line count
    var lineCount = text.split("\n").length;
    document.getElementById("lineCount").textContent = "Lines: " + lineCount;

    // Byte size
    var byteSize = new Blob([text]).size;
    document.getElementById("byteSize").textContent = "Bytes: " + formatBytes(byteSize);
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
