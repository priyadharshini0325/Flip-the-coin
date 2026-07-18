const coin = document.getElementById("coin");
const result = document.getElementById("result");

function flipCoin(){

    if(coin.classList.contains("flip")) return;

    coin.classList.add("flip");

    coin.onanimationend = function(){

        const random = Math.floor(Math.random()*2);

        if(random===0){
            coin.src="heads.svg";
            result.innerHTML="Heads";
        }
        else{
            coin.src="tails.svg";
            result.innerHTML="Tails";
        }

        coin.classList.remove("flip");
    };

}

coin.addEventListener("click",flipCoin);
