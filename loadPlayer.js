// loadPlayer.js

// Fungsi untuk memuat skrip eksternal
function loadExternalScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    // Menambahkan callback untuk eksekusi setelah skrip dimuat
    if (callback) {
        script.onload = callback;
    }

    document.head.appendChild(script);
}

// Memuat skrip dari URL tertentu
loadExternalScript("http://scg.streamingmurah.com:2199/system/player.js", function() {
    console.log("Skrip telah dimuat dan dieksekusi.");
});
