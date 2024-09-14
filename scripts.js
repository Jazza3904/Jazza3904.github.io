document.addEventListener('DOMContentLoaded', function() {
    // Open the "info" tab by default
    openTab(null, 'info');
    //stuff for randomized footer
    var messages = [
        { text: "i67's note 1: images are broken, i think." },
        { text: "AHAHHAHahHAHHahAHAHHHAAHAHAHHAAHHAHHAHH" },
        { text: "what is going on here?" },
        { text: "pro tip: refreshing this site changes this text. and maybe some other things too..." },
        { text: "pro tip: don't mine at night", url: "https://youtu.be/X_XGxzMrq04?si=20m4vGQfSjLz-gug" },
        { text: "well here we are again, it's always such a pleasure", url: "https://youtu.be/dVVZaZ8yO6o?si=CHhGSqs-l8mkj1UC" },
        { text: "someone made a note here: 'HUGE SUCCESS'", url: "https://youtu.be/SXRteMSSZ14?si=Xc8FZXwOpcVi-cHi" },
        { text: "i canNOT hold it in anymore, i just wanna- -you know?", url: "https://youtu.be/gixxZZOkBEA?si=viPryMoCR6jurSgy" },
        { text: "oobe says: please just log in with a microsoft account i swear we won't track you come on please!!11!1!" },
        { text: "oobe says: what do you mean you have no wifi drivers installed? you need them!" },
        { text: "oobe says: use our shit!" },
        { text: "oobe says: even better, use an online account!" },
        { text: "oobe says: please allow us to auto-import your data into our shitty browser we shove down your throat!" },
        { text: "oobe hates: ~$ oobe\\bypassnro" },
        { text: "someone's note: 'in soviet russia, website codes you.'" },
        { text: "¯\\_(ツ)_/¯" },
        { text: "oobe says: no, we won't give you an option to just skip the m$ account!!" },
        { text: "DISTRACTION!", url: "https://youtu.be/ZhFVt5uPdW0?si=zp1mZq--J5zImJ4B" },
        { text: "i67's note 2: when clicking links in this website, you better hold the middle mouse button, or else."},
        { text: "i67's update to note 1: the logo works, but the other images don't"},
        { text: "i67's second update to note 1: the images do work, just forgor to add files tho 💀"},
        { text: "i67's update to note 2: you don't need to do that anymore, links open in new tabs"},
        { text: "i67's note 3: lore coming soon(trademark)" },
        { text: "i67's update to note 3: trademark doesn't work properly in my brand font, it just looks like shit: ™"},
        { text: "micro$oft says: michaelsoft binbows is not real", url: "https://youtu.be/_xEMG_tt1Vc?si=tYjs93HMIC0UTvgw" },
        { text: "micro$oft says: we totally don't force you to buy a windows license, even though you can technically use it for free. wait that's illegal." },
        { text: "micro$oft says: read our terms and service agreement before you use windows!", url: "/extras/microsoftlicensing.html" },
        { text: "do you even read these?" },
        { text: "micro$oft says: if you don't buy our product, you are our product.²"},
        { text: "micro$oft replies to ²: THAT IS TOTALLY NOT OUR MOTTO!"},
        { text: "hello everybody my name is welcome- what?", url: "https://youtu.be/Ebuu7FhX4tc?si=inD6Jui89T15vz0Y" },
        { text: "yo i just got these new steel toed boots", url: "https://youtu.be/7QeLjy65OHY?si=VJyt4LZJgqAfukNi" },
        { text: "my name is kira yoshikage", url: "/extras/kirayoshikage.html" },
        { text: "i67's note 4: kira's speech is looped even though i set looping to false 😢" },
        { text: "DISTRACTION!", url:"https://youtu.be/XP_ZivuN6iY?si=sgEJOPF-iHD0C_Vf" },
        { text: "he turned himself into an angry sausage", url:"https://youtu.be/qaUSuh1ICJw?si=HkLq7H2Y1tJFVufn"},
        {text:"i67's update to note 4: nevermind i fixed it."},
        {text:"i67's note 5: i think mobile view is broken"}
    ];

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    var footer = document.getElementById('footer');
    footer.innerHTML = '<div class="githublogo"><input type="image" src="/media/github-mark-white.svg" alt="githubLogo" height="30" width="30" onclick="window.open(\'https://www.github.com/icey67\', \'_blank\')"></div>';

    if (randomMessage.url) {
        var link = document.createElement('a');
        link.href = randomMessage.url;
        link.textContent = randomMessage.text;
        link.style.color = "white"; // Change the color if needed
        link.target = "_blank"; //makes link open in new tab hopefully
        footer.appendChild(link);
    } else {
        footer.appendChild(document.createTextNode(randomMessage.text));
    }
    //funny switcheroo logo
    var mainLogo = '/media/IceyBanner.png'; //og logo
    var altLogo = '/media/IC67.png'; //lore
    var randomNumber = Math.floor(Math.random() * 4); //randomly choose between 0-3 (25%)

    if (randomNumber === 0) {                           //it hits the gold mine
        document.getElementById('logo').src = altLogo;  //it's in
    }
});
var randomlinks = [];
randomlinks[0] = ""; //gotta add my own links here

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
