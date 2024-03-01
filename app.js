console.log("let's write Java Script");

async function getSongs(){
    let a = await fetch("file:///Users/prashantagrawal/Desktop/javascript/spotifyClone/songs/");
    let response = await a.text();
    console.log(response);
}

getSongs();