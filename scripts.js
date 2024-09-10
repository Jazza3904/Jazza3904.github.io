document.addEventListener('DOMContentLoaded', function() {
    // Open the "info" tab by default
    openTab(null, 'info');
    //stuff for randomized footer
    var messages = [
        { text: "note: near a tree by a river, there's a hole in the ground..." },
        { text: "note: :3" },
        { text: "note: yeah i know that the github button isn't aligned, i'll fix it later. update: fixed." },
        { text: "tip: did you know? refreshing this site changes this text." },
        { text: "tip: don't mine at night" },
        { text: "note: well here we are again, it's always such a pleasure..." },
        { text: "note: huge success" },
        { text: "note: i'd just like to interject for a moment...", url: "/extras/stallman.html" },
        { text: "note: sometimes it's ok to just guhhhhh" },
        { text: "oobe says: please just log in with a microsoft account i swear we won't track you come on please!!11!1!" },
        { text: "oobe says: what do you mean you have no wifi drivers installed? you need them!" },
        { text: "oobe says: use our shit!" },
        { text: "oobe says: even better, use an online account!" },
        { text: "oobe says: please allow us to auto-import your data into our shitty browser we shove down your throat!" },
        { text: "oobe hates: ~$ oobe\\bypassnro" },
        { text: "note: in soviet russia, arch installs you." },
        { text: "note: ¯\\_(ツ)_/¯" },
        { text: "oobe says: no, we won't give you an option to just skip the m$ account!!" },
    ];

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    var footer = document.getElementById('footer');
    footer.innerHTML = '<input class="noteMS" type="image" height="30" width="30" src="/media/music.png" name="B1" onclick="randomlink()"><span class="music-note"></span>';

    if (randomMessage.url) {
        var link = document.createElement('a');
        link.href = randomMessage.url;
        link.textContent = randomMessage.text;
        link.style.color = "white"; // Change the color if needed
        footer.appendChild(link);
    } else {
        footer.appendChild(document.createTextNode(randomMessage.text));
    }
});
var geometryDash = new Audio('/media/gd.mp3');
var randomlinks = [];
randomlinks[0] = "https://www.youtube.com/watch?v=yGZr98GEs0U";
randomlinks[1] = "https://www.youtube.com/watch?v=AS58aeJQI4Y";
randomlinks[2] = "https://www.youtube.com/watch?v=cygu65ytwTc";
randomlinks[3] = "https://www.youtube.com/watch?v=M9J6DKJXoKk";
randomlinks[4] = "https://www.youtube.com/watch?v=20dIl2fl5GM";
randomlinks[5] = "https://www.youtube.com/watch?v=BwUBkKKP27A";
randomlinks[6] = "/media/gd.mp3";
randomlinks[7] = "https://www.youtube.com/watch?v=5kca9KVKy04";
randomlinks[8] = "https://www.youtube.com/watch?v=utP11PQEsZw";
randomlinks[9] = "https://www.youtube.com/watch?v=5BZLz21ZS_Y";
randomlinks[10] = "https://www.youtube.com/watch?v=Si8PyULlt7Q";
randomlinks[11] = "https://www.youtube.com/watch?v=FmW6RNT2jCs";

function randomlink() {
    console.log("randomizing link for music...")
    window.open(randomlinks[Math.floor(Math.random() * randomlinks.length)]);
}

console.error("you nosy little shit, now close the consloe! >:3")



function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    if (evt) {
        evt.currentTarget.className += " active";
    } else {
        // If the function is called without an event, manually add the active class to the "info" tab
        document.querySelector('.tab button.tablinks').className += " active";
    }
}
