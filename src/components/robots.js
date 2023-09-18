const func = () => {
    const robots = [];
    let count = 1;

    while (count <= 10) {
        robots.push({id: count})
        count++
    }

    return robots;
}

const robotNamesAndUsername = {
    "Scrap": "DenScrap",
    "Sparkles": "WobblesCobble",
    "Radion": "ShowRadion",
    "Bruno": "Brunofi",
    "Bolt Head": "PinBolt",
    "Sputnik": "Sputnik",
    "Ash": "SulcusSulfur",
    "Ruin": "GoobleRuin",
    "Bite": "Bitele",
    "Jet": "JetPhir"
}

const robotEmails = Object.entries(robotNamesAndUsername).reduce(
    (accumulator, items) => {
        const text = `${items[1]}@robot-world.com`;
        accumulator.push(text);
        return accumulator;
    }, []
);

const robots = () => {
    let id = func(); // list of object 
    let email = robotEmails; // list of email index gagana (.name = )
    
    Object.entries(robotNamesAndUsername).forEach((items, index) => {
        id[index].name = items[0];
        id[index].username = items[1];
    });

    id.map((item, index) => item.email = email[index]);

    return id;
}

// this is the one that works or else undefined -_-
// maybe shou use javascript jsx? 
module.exports = robots();

// console.log(robots());
