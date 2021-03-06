var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
  }

console.log(`Welcome to ROCKETBALL`)
console.log(`Press ENTER`)

var user = undefined;
var playerOne = {
    name: undefined,
    power: 80,
    speed: 80
}
var playerTwo = {
    name: undefined,
    power: 90,
    speed: 85
}
var playerThree = {
    name: undefined,
    power: 70,
    speed: 90
}

var homeruns = 0;

console.log(`Enter your name`);
rl.prompt()

function start(){
    var timer = setInterval(function(){console.log(`TIME'S UP!! Sorry, no advance`)}, 15000);
}

rl.on('line', (input) =>{
    
    if(user === undefined){
        user = input;
    }
    clear();
    console.log(`Welcome ${user}, Choose your player:\n`)
    console.log(`Select '1' for:\nPlayer One\npower: 80\nspeed: 80\n`)
    console.log(`Select '2' for:\nPlayer Two\npower: 90\nspeed: 85\n`)
    console.log(`Select '3' for:\nPlayer Three\npower: 70\nspeed: 90\n`)
    rl.prompt()
    if(input === '1'){
        clear();
        playerOne.name = user;
        console.log(`You chose player One`)
        console.log(`Let's play ball!!\nswing`)
    }else if(input === '2'){
        clear();
        playerTwo.name = user;
        console.log(`You chose player Two`)
        console.log(`Let's play ball!!\nswing`)
    }else if (input === '3'){
        clear();
        playerThree.name = user;
        console.log(`You chose player Three`)
        console.log(`Let's play ball!!\nswing`)
    }
    
    if(input.toLowerCase() === 'swing'){
        start();
    }

    var pitch = Math.floor(Math.random() * 8 + 1)
    if(input.toLowerCase() === 'swing' && pitch < 4){
        console.log(`Swing and a miss!!`)
    }else if(input.toLowerCase() === 'swing' && pitch >= 4){
        var swing = Math.floor(Math.random() * 10 + 1)
        if(swing >= 5){
            var feet = Math.floor(Math.random() * 176 + 325)
            homeruns += 1;
            console.log(`Oh my!! what a blast!! You've driven it ${feet}ft.\n${homeruns} HR`)
        }else{
            var fail = Math.floor(Math.random() * 175 + 1)
            console.log(`You've came up short. ${fail}ft`)
        }
    }


    if(homeruns === 10){
        console.log(`You advanced to the next round`)
        rl.close();
    }
    
    // if(homeruns < 10){                    
    //     rl.setPrompt(`Here comes the pitch\n|Swing|\n`)
    //     rl.prompt()
    // }
});
