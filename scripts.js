function updateNowPlayingText(data) {
    const nowPlaying = document.getElementById("nowPlaying");
    if (!nowPlaying) return;
    const { discord_status, activities } = data;
    if (activities && activities.length > 0) {
        const musicPlayer = activities.find(a => a.type === 2);
        if (musicPlayer) {
            nowPlaying.innerHTML = `<p>I'm currently listening to <a href="${musicPlayer.details_url}">${musicPlayer.details}</a> <a href="${musicPlayer.state_url}">${musicPlayer.state}</a> on ${musicPlayer.name}</p>`;
            return;
        }
        const game = activities.find(a => a.type === 0);
        if (game) {
            nowPlaying.innerHTML = `<p>I'm currently playing ${game.name}</p>`;
            return;
        }
    }

    if (discord_status === "online") {
        nowPlaying.innerHTML = "<p>I'm online, but not doing anything!</p>";
    } else if (discord_status === "offline") {
        nowPlaying.innerHTML = "<p>I'm currently offline!</p>";
    } else if (discord_status === "idle") {
        nowPlaying.innerHTML = "<p>I'm online, but away!</p>";
    } else if (discord_status === "dnd") {
        nowPlaying.innerHTML = "<p>I'm online, but on DND!</p>";
    } else {
        nowPlaying.innerHTML = "Loading...";
    }
}

function setLanyardStatus() {
    fetch("https://api.lanyard.rest/v1/users/1038260891378004108")
        .then(response => response.json())
        .then(json => {
            if (json && json.success && json.data) {
                updateNowPlayingText(json.data);
            }
        })
        .catch(() => {
            const nowPlaying = document.getElementById("nowPlaying");
            if (nowPlaying) nowPlaying.textContent = "cannot update nowPlaying!";
        });
}

function setOsuStatus() {

}

addEventListener("DOMContentLoaded", () => {
    setLanyardStatus();
});


console.log(`
     _____ 
 _  |___ / 
(_)   |_ \\ 
 _   ___) |
(_) |____/ 

mrooooow~
`);