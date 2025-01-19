const click = document.getElementById("click");
const score = document.getElementById("score");
const coins = document.getElementById("coins");
const btn = document.getElementById("btn");
const byBTn = document.getElementById("byBTn");

let count = 0;
let coins1 = 0;

function func() {
    score.textContent = count;
    coins.textContent = coins1;
}

byBTn.addEventListener('click', () => {
    const bt = parseInt(byScoreInput.value);
    const bt1 = bt * 20;

    if (!isNaN (bt) && bt > 0) {
        if (coins1 >= bt1) {
            coins1 -= bt1;
            count += bt;
            alert(`Successfully purchased ${bt} scores!`);
        }else {
            alert("You do not have enough coins to buy this score!");
        }
        } else {
            alert("Please enter a valid number greater than 0!");
    }
    func()
});

click.addEventListener('click', function() {
    count++;
    score.textContent = count;

    if (count % 10 == 0) {
        coins1++;
        coins.textContent = coins1;
    };
});

btn.addEventListener('click', function() {
    count = 0;
    score.textContent = count;
});


let autoClickerActive = false;

autoClicker.addEventListener("click", () => {
    if (!autoClickerActive) {
        autoClickerActive = true;

        setInterval(() => {
            count++;
            score.textContent = count;

            if (count % 20 === 0) {
                coins1++;
                coins.textContent = coins1;
            }
        }, 1000);
    }
});


let autoClickerInterval;

stopButton.addEventListener("click", () => {
    if (autoClickerActive) {
        clearInterval(autoClickerInterval);
        autoClickerActive = false;
    }
});





