// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
const coin = document.querySelector('#coin');
const flipper = document.querySelector('#flipper');
const clear = document.querySelector('#clearbutton');
const headsCountTD = document.querySelector('#heads');
const headsPercent = document.querySelector('#heads-percent');
const tailsCountTD = document.querySelector('#tails');
const tailsPercent = document.querySelector('#tails-percent');
const statusMsg = document.querySelector('#statusmsg');

flipper.addEventListener("click",flipcoin);
clear.addEventListener("click",clearHistory);

let headCount = 0;
let tailCount = 0;
let flipCount = 0;

function clearHistory(){
    headCount=0;
    tailCount=0;
    flipCount=0;
    headsCountTD.textContent=headCount;
    headsPercent.textContent=headCount+"%";
    tailsCountTD.textContent=tailCount;
    tailsPercent.textContent=tailCount+"%";
    statusMsg.textContent="History Cleared";

}


function flipcoin(){
    let flipValue = Math.ceil(Math.random() * 2)
    if (flipValue<2){
        coin.src="assets/images/penny-tails.jpg";
        tailCount++;
        flipCount++;
        tailsCountTD.textContent=tailCount;
        tailsPercent.textContent=(tailCount/flipCount)*100 + "%";
        headsPercent.textContent=(headCount/flipCount)*100 + "%";
        statusMsg.textContent="Penny is Tails!";
        return 0;
    }
    coin.src="assets/images/penny-heads.jpg";
    headCount++;
    flipCount++;
    headsCountTD.textContent=headCount;
    headsPercent.textContent=(headCount/flipCount)*100 + "%";
    tailsPercent.textContent=(tailCount/flipCount)*100 + "%";
    statusMsg.textContent="Penny is Heads!";
}
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})