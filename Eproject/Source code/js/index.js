// get the count element
let countEl = document.getElementById("count");

// check if the count data is saved in local storage
let count = localStorage.getItem("count");

// if count data exists, set the count to that value, otherwise set it to 0
if (count) {
    countEl.textContent = count;
} else {
    countEl.textContent = 0;
}

// increment the count and update the element and local storage
function incrementCount() {
    count++;
    countEl.textContent = count;
    localStorage.setItem("count", count);
}

// call the incrementCount function when the page is loaded
window.onload = incrementCount;



