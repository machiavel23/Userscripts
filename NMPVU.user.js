// ==UserScript==
// @name         NMPVU (Naughty Machinima Private Videos Unlocker)
// @namespace    https://www.github.com/machiavel23
// @version      1.0
// @description  Adds a link to access private videos
// @author       Machiavel Dhy'v
// @match        https://www.naughtymachinima.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/machiavel23/Userscripts/main/NMPVU.user.js
// @updateURL    https://raw.githubusercontent.com/machiavel23/Userscripts/main/NMPVU.user.js
// ==/UserScript==

(function() {
    'use strict';

    // UNBLURRING PRIVATE MINIATURES
    // Getting <img class="img-responsive img-private">
    var imgElements = document.querySelectorAll('img.img-responsive.img-private');
    imgElements.forEach(function(imgElement) {
        // Removing blur
        imgElement.classList.remove('img-private');
    });
    
    // ENABLING PRIVATE VIDEOS
    // Get current url
    var currentURL = window.location.href;
    // Get the digits between "/video/" and the next "/"
    var regex = /\/video\/([^\/]+)\//;
    var match = currentURL.match(regex);
    if (match) {
        // Extracting digits
        var capturedPart = match[1];
        // Build new url
        var newURL = 'https://www.naughtymachinima.com/media/videos/h264/' + capturedPart;
        // Look for span with "text-danger" class
        var textDanger = document.querySelector('span.text-danger');
        // Adding links in textDanger
        if (textDanger) {
            textDanger.innerHTML += '<br><br>View the video with NMPVU userscript:<br><a href="' + newURL + '_1080p.mp4" target="_blank">1080p</a> - <a href="' + newURL + '_720p.mp4" target="_blank">720p</a> - <a href="' + newURL + '_480p.mp4" target="_blank">480p</a> - <a href="' + newURL + '_360p.mp4" target="_blank">360p</a><br>Keep in mind not all videos have been uploaded in HD. Try a lower resolution if you reach a 404.';
        }
    }
})();
