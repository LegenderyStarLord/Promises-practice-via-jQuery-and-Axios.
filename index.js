//Server request via axios

const resultBlock = document.getElementById("result");
const pageNumberEl = document.getElementById("page-number");
const clickMeButton = document.getElementById("button");

function onDataRecieved(data) {
    data.forEach(el => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector("#result").appendChild(img);
    });
};


clickMeButton.addEventListener("click", () => { 
    const promise = getImages( pageNumberEl.value);
    promise.then(onDataRecieved); 
});


//Server request via jquery-ajax

const resultBlock_2 = document.getElementById("result_2");
const pageNumberEl_2 = document.getElementById("page-number_2");
const clickMeButton_2 = document.getElementById("button_2");


function onDataRecieved_2(data) {
    data.forEach(el => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector("#result_2").appendChild(img);
    });
};

clickMeButton_2.addEventListener("click", () => { 
    const promise = getImages_2( pageNumberEl_2.value);
    promise.then(onDataRecieved_2); 
});





