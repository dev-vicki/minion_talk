var translateButton = document.querySelector("#btn-translate");
translateButton.addEventListener("click", buttonClickHandler)
var translateInput = document.querySelector("#txt-input");
var translateOutput = document.querySelector("#txt-output");

// API used to fetch data from server
var url = "https://api.funtranslations.com/translate/minion.json";

// when pressed the translate button, this function is called and it takes the input from user and fetches the required data from API and returns the output to user
function buttonClickHandler(event) {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))

}

// takes and encodes user text string as valid URI with the url given
function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}


