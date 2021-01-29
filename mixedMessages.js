
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

var d = new Date();
var n = d.getHours();

if (n >= 0 && n <= 12){
    n = "Morning"
}
if (n > 12 && n <= 14){
    n = "Afternoon"
}
if (n > 6 && n <= 23){
    n = "Evening"
}
//console.log(n)
var day = d.getDay();
if (day === 0){
    day = "Sunday"
}
if (day === 1){
    day = "Monday"
}
if (day === 2){
    day = "Tuesday"
}
if (day === 3){
    day = "Wednesday"
}
if (day === 4){
    day = "Thursday"
}
if (day === 5){
    day = "Friday"
}
if (day === 6){
    day = "Saturday"
}
//console.log(day)

const mixedMessages = (userName, userGenre) => {
    for (let i = 0; i < genres.length; i++){
        if (userGenre == genres[i]){
            console.log(`Hello, ${userName}! I see that you like listening to ${genres[i]}!`);
            let index = genres.indexOf(genres[i])
            let randomSong = songSuggestion[index][Math.floor(Math.random() * songSuggestion[index].length)]
            console.log(`If you like ${userGenre}, you might like this song: ${randomSong}.`);
            console.log(`You're a true ${genreStereotype[index]} if you like listening to ${userGenre} on a ${day} ${n}!`);    
        break
        } else { 
            console.log(`Hi ${userName}! I actually haven't heard of ${userGenre} before! 
        Can you tell me your second favorite genre? I figured in the meantime I could share one of my favorite songs with you anyways, 
        its ${songSuggestion[10][Math.floor(Math.random() * songSuggestion[10].length)]}.`)     
        }
        break
    }
};


mixedMessages("Jesse", "Rap")

