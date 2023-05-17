let player1 = Math.floor(Math.random() *6) + 1;
let player2 = Math.floor(Math.random() *6) + 1;

if (player1 > player2){
    console.log(player1);
    console.log(player2);
    console.log('player one wins');
} else if (player1 < player2){
    console.log(player1);
    console.log(player2);
    console.log('player two wins');
} else {
    console.log(player1);
    console.log(player2);
    console.log("It's a tie");
}

//----------------------------------------------------------------------------------------------------------------------------------------

let userMail;
let mailList = ["jfmarkan@gmail.com", 'panchitomarkan@gmail.com', 'boolean@gmail.com', 'riccardo@gmail.com'];
let result = false;

userMail = prompt('Insert your e-mail');
console.log(userMail);

for ( i = 0 ; i < mailList.length ; i++){
    if (mailList[i] === userMail){
        result = true;
    } 
}

console.log(result)

