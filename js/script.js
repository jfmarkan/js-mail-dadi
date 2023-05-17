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
let mailList = ["jfmarkan@gmail.com", 'antonio@boolean.com', 'stefano@boolean.com', 'riccardo@boolean.com'];


const btnVerify = document.getElementById('btnverify');

btnVerify.addEventListener('click',
    function(){
        userMail = document.getElementById('emailaddress').value;
        console.log(userMail);
        let result
        for ( i = 0 ; i < mailList.length ; i++){
            if (mailList[i] === userMail){
                result = true;
            }    
        }
        console.log(result);
        if (result === true){
            document.getElementById('emailaddress').classList.add('is-valid');
            document.getElementById('emailaddress').classList.remove('is-invalid');
        } else {
            document.getElementById('emailaddress').classList.add('is-invalid');
        }
    }    
)


