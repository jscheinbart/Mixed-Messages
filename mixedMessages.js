
let genres = [
    "Pop",
    "Rock",
    "Country",
    "Jazz",
    "Techno",
    "Classical",
    "Metal",
    "Funk",
    "Hip Hop",
    "Rap"
];
let songSuggestion = [
    ["'Rain on Me' - Lady Gaga", "'Positions' - Ariana Grande", "'Bad Guy' - Billy Eilish"],
    ["'Bohemian Rhapsody' - Queen", "'Baba O'Riley' - The Who", "'Back in Black' - AC/DC"],
    ["'Life is a Highway' - Rascall Flatts", "'Jolene' - Dolly Parton", "'Ring of Fire' - Johnny Cash"],
    ["'Giant Steps' - John Coltrane", "'Take 5' - Manhattan Transfer", "'The Girl from Ipanema' - Stan Getz"],
    ["'Sandstorm' - Darude", "'I Wanna Go Bang' - Bjarki", "'Subzero' - Ben Klock"],
    ["'A Soft Day' - Syracuse University Singers", "'Lux Aeterna: III O Nata Lux' - Syracuse University Singers", "'Amazing Grace' - Syracuse University Singers"],
    ["'Hallowed Be Thy Name' - Iron Maiden", "'Angel of Death' - Slayer", "'Crazy Train' - Ozzy Osbourne"],
    ["'Super Freak' - Rick James", "'1612' - Vulfpeck", "'Shining Star' - Earth, Wind & Fire"],
    ["'Savage' - Megan Thee Stallion", "'WAP' - Cardi B", "'Laugh Now Cry Later' - Drake"],
    ["'Tang Clan' - Wu-Tang Clan", "'Dear Mama' - Tupac Shakur", "'Passin Me By' - The Phyarcyde"],
    ["'Man in the Mirror' - Michael Jackson", "'Wait a Minute' - Willow Smith", "'Welcome to Burlesque' - Cher"]
];

let genreStereotype = [
    "POPular kid",
    "Hard rocker",
    "Country music buff",
    "Scat Master",
    "Techno-logist",
    "diva",
    "Metalhead",
    "vibe curator",
    "Hiphopotamuse",
    "Rhyme Rinoceroce",
];

let date = new Date();
let hours = date.getHours();
let timeOfDay;

if (hours >= 0 && hours <= 12){
    timeOfDay = "morning"
}
else if (hours > 12 && hours <= 14){
    timeOfDay = "afternoon"
}
else if (hours > 6 && hours <= 23){
    timeOfDay = "evening"
}

var day = date.getDay();
switch (day){
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    default:
        day = "Saturday"
        break;
}

const mixedMessages = (userName, userGenre) => {
    let output = ' ';
    for (let i = 0; i < genres.length; i++){
        if (userGenre == genres[i]){
            let index = genres.indexOf(genres[i])
            let randomSong = songSuggestion[index][Math.floor(Math.random() * songSuggestion[index].length)]
            output = `Hello, ${userName}! I see that you like listening to ${genres[i]} music!
                      If you like ${userGenre}, you might like this song: ${randomSong}.
                      You're a true ${genreStereotype[index]} if you like listening to ${userGenre} on a ${day} ${timeOfDay}!` 
        break  
        } else { 
            output = `Hi ${userName}! I actually haven't heard of ${userGenre} before! 
        Can you tell me your second favorite genre? I figured in the meantime I could share one of my favorite songs with you anyways, 
        its ${songSuggestion[10][Math.floor(Math.random() * songSuggestion[10].length)]}.`
        }
    }
    console.log(output)
};

mixedMessages("Jesse", "ock")

