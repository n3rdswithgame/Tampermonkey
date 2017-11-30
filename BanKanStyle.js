// ==UserScript==
// @name         BanKanStyle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fuck bad emotes
// @author       N3rdsWithGame
// @match        *.twitch.tv/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

//var hideEmotes = new Array("JKanStyle");

function hideEmotes() {
    var emotes = $(".chat-line__message--emote");

    emotes.each(function(){
        var emoteAlt = this.getAttribute("alt");
        var found = false;
        if(emoteAlt.includes("JKanStyle"))
            found = true;
        if(found){
            $(this).hide();
            $(this).attr('class',"JCancer");
        }
    });
}

var test = "this is a test string";

$(document).ready(function(){
    console.log("testing");
    setInterval(hideEmotes,1);
});