{
    var mainLogo = '/media/Jazzaicon.ico/';
    var altLogo = '/media/Jazzaicon.ico';
    var randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        document.getElementById('logo').src = altLogo;
    }
    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', function() {
        if (themeSwitch.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
};

//random messages
//stuff for randomized footer
var messages = [
    { text: "Jazza's note #1: i'm insane. "},
    { text: "Jazza's note #2: I like music."},
    { text: "Jazza's note #3: Did you know that number 15?"},
    { text: "pro tip: refreshing this site changes this text. and maybe some other things too..." },
    { text: "pro tip: don't mine at night", url: "https://youtu.be/X_XGxzMrq04?si=20m4vGQfSjLz-gug" },
    { text: "well here we are again, it's always such a pleasure", url: "https://youtu.be/dVVZaZ8yO6o?si=CHhGSqs-l8mkj1UC" },
    { text: "someone made a note here: 'HUGE SUCCESS'", url: "https://youtu.be/SXRteMSSZ14?si=Xc8FZXwOpcVi-cHi" },
    { text: "i canNOT hold it in anymore, i just wanna- -you know?", url: "https://youtu.be/gixxZZOkBEA?si=viPryMoCR6jurSgy" },
    { text: "someone's note: 'in soviet russia, website codes you.'" },
    { text: "¯\\_(ツ)_/¯" },
    { text: "hello everybody my name is welcome- what?", url: "https://youtu.be/Ebuu7FhX4tc?si=inD6Jui89T15vz0Y" },
    { text: "DISTRACTION!", url:"https://youtu.be/XP_ZivuN6iY?si=sgEJOPF-iHD0C_Vf" },
    {text: "what is something people are not ready to hear?", url: "https://youtu.be/YgH0_u0p-ls?si=1mZSr-IpWnDSOg9B"},
    {text: "It's impossible for pandas to be ...", url: "https://youtu.be/i2pvTq1EMlA?si=a0dlYRKLDwgyV-6n"},
    {text: "me washing my car with hydrochloric acid", url: "https://youtu.be/DTSaZ35pQW4?si=oNvt8FKf_fX_C7Ea"},
    {text: "DON'T DO IT MARCUS!", url: "https://youtu.be/iK4tgC7P810?si=MHPnRsB7u_2pYlZt"},
    {text: "I pet my antichrist", url: "https://youtu.be/DLu2CFDBJk0?si=SRNi816uVrp6E1No"},
    {text: "the resolution?", url: "https://youtu.be/bavdqHHK26I?si=66iByxoJv8PZujqu"},
    {text: "I'M GAY?!", url: "https://youtu.be/Ue46stbXhoU?si=mrKccUM04ETk59OU"},
    {text: "Will you press the button?", url: "https://youtu.be/5w7XXydxRVw?si=nsklWBEajHoCItaV"},
    {text: "*installs ms-dos to your brain*", url: "https://youtu.be/Y2L7_2Wvycc?si=o-ukT-C8P7WuFc3M"},
    {text: "AHH- AAAHHH- AAAAAAHHHH- ... *scottish screaming*", url: "https://youtu.be/RpvLd901Wqs?si=CSvhfTOkzKWa0uia"},
    {text: "if the earth is round, how come the ball ain't goin nowhere?", url: "https://youtu.be/2O0IQNiSoEk?si=kBpGNJSVdx0bAITO"},
    {text: "i see your comments ladies and they make me smile", url: "https://youtu.be/dppnGtEcf7k?si=-4xIh5o1pzCdpCo2"},
    {text: "kitty! what are you doing down here? did i not see you before?", url: "https://youtu.be/LqJXDOwxqIA?si=Tlskfb6OhVGTLKwi"},
    {text: "*electronic coughing*", url: "https://youtu.be/_zTzkWnKrKc?si=ps3M1QzZvTctfshC"},
    {text: "i think my cat broke", url: "https://youtu.be/Tc6qlEpDP_s?si=wnsueUEu8KDgvru0"},
    {text: "WOOOOWWW", url: "https://youtu.be/lkWidisTpYM?si=I8p_p_A84i0fvXMD"},
    {text: "number 2: expect this.", url: "https://youtu.be/nTtycUO25KY?si=PZMNTBzx9go5zdNV"},
    {text: "la creatura", url: "https://youtu.be/whnZSnW3XsI?si=Y966ghEyFG1X1e3y"},
    {text: "he had enough", url: "https://youtu.be/D2hro6Lq25U?si=sMCf5-a43-EKfOx8"},
    {text: "*CONFUSED SCREAMING*", url: "https://youtu.be/ytSVwETbZtI?si=iUtrnw11_SnP9gUA"},
    {text: "bomb has been planted", url: "https://youtu.be/3B6jWw7UoJo?si=LxXk4INuqtGMIiaw"},
    {text: "glueeeee", url: "https://youtu.be/kfH26ODWOhU?si=lKRFUgQr-GRWYzMy"},
    {text: "spray that makes you angry", url: "https://youtu.be/wQ0AdNxa118?si=gjn1lU9Jhz_sCMPv"},
    {text: "number 15", url: "https://youtu.be/TmfVjjdBd3Y?si=abwTspyzaN2CdLy9"},
];

function messagesindex() { //useful debugging function: check how many messages there are
    console.log("the messages array has " + (messages.length - 1) + " items");

    // Count and log the number of messages with a link
    var messagesWithLink = messages.filter(message => message.url).length;
    console.log("the messages array has " + messagesWithLink + " items with a link");
}

function showMessages() { //useful debugging function: show all messages in the console
    console.log("here are the messages: ");
    for (var i = 0; i < messages.length; i++) {
        var messageText = i + ": '" + messages[i].text + "'";
        if (messages[i].url) {
            messageText += " HAS LINK: " + messages[i].url;
        }
        console.log(messageText);
    }
}

// Define the function to update the footer message
function updateFooterMessage(index) {
    if (index === 'last') {
        index = messages.length - 1;
    }
    if (typeof index !== 'number') {
        console.error("Invalid input. Please provide a number as the index.");
        return;
    }
    if (index < 0 || index >= messages.length) {
        console.error("Invalid index. Please provide a valid index between 0 and " + (messages.length - 1));
        return;
    }
    
    var randomMessage = messages[index];
    var messageContainer = document.querySelector('.message-container');
    messageContainer.innerHTML = '';

    if (randomMessage.url) {
        var link = document.createElement('a');
        link.href = randomMessage.url;
        link.textContent = randomMessage.text;
        link.style.color = "white"; // Change the color if needed
        link.target = "_blank"; //makes link open in new tab hopefully
        messageContainer.appendChild(link);
    } else {
        messageContainer.appendChild(document.createTextNode(randomMessage.text));
    }
    console.log("message updated to: " + index);
}
// Example usage: updateFooterMessage(0); // This will update the footer with the first message

document.addEventListener('DOMContentLoaded', function() {
    updateFooterMessage(Math.floor(Math.random() * messages.length));
});

console.error("you nosy little shit, now close the console! >:3")
console.error("unless you contribute to coding and need to debug some stuff")

//tab stuff
document.addEventListener('DOMContentLoaded', function() {
    // Open the "info" tab by default
    openTab(null, 'info');

    // Check if there's a last opened tab stored in localStorage
    var lastTab = localStorage.getItem('lastTab');
    console.log('last tab from localStorage:', lastTab)
    if (lastTab) {
        openTab(null, lastTab);
    } else {
        console.error('No last tab found in localStorage.');
    }

    // Add event listeners to tab buttons to store the last opened tab
    var tablinks = document.getElementsByClassName('tablinks');
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener('click', function(evt) {
            var cityName = evt.currentTarget.getAttribute('data-city');
            console.log('Clicked tab data-city:', cityName);
            localStorage.setItem('lastTab', cityName);
        });
    }
});

function openTab(evt, tabName) {
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
    var tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.style.display = "block";
        if (evt) {
            evt.currentTarget.className += " active";
        }
    } else {
        console.error(`Tab with ID ${tabName} does not exist.`);
    }
}

// Retrieve the active tab from localStorage when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    var activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        openTab(null, activeTab);
        var activeButton = document.querySelector(`.tab button[onclick="openTab(event, '${activeTab}')"]`);
        if (activeButton) {
            activeButton.className += " active";
        }
    }
});