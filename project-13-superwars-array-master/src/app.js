const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {

    // Instead of forloop use Map method
    // Code here

    let detailedPlayers = [];
    players.map((player,i)=>
    {
        let characters =
        {
            name : player,
            strength :Math.floor(Math.random() * 101),
            image : 'images/super-'+ (i+1)+'.png',
            type:"hero|villain"
        }
        detailedPlayers.push(characters)
    })
    return detailedPlayers;
}



// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here


    // console.log(players,type)
    if (type === 'hero')
    {
       players.map((element,index)=>
        {
        if (index%2 === 0)
            {
                fragment+= '<div class="player"> \
                <img src="'+element['image']+'"alt="">\
                <div class="name">'+element['name']+'</div>\
                <div class="strength">'+getRandomStrength()+'</div></div>'
            }
        })
    }
    else
    {
        players.map((element,index)=>
        {
        if (index%2 === 1)
            {
                fragment+= '<div class="player"> \
                <img src="'+element['image']+'"alt="">\
                <div class="name">'+element['name']+'</div>\
                <div class="strength">'+getRandomStrength()+'</div></div>'
            }
        })
    }
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}