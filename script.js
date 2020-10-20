var today = $("#today");
var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var date  = d.getDate();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthList  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var superScript;
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var button = $("button");

// This var allows init() to auto-populate Notes fields w/ a for loop
var textBoxes = [
    $("#nine"),
    $("#ten"),
    $("#eleven"),
    $("#twelve"),
    $("#one"),
    $("#two"),
    $("#three"),
    $("#four"),
    $("#five")
];
var textBoxVal = [];

// Adds appropriate suffix to date
function superScriptWrite() {
    if (date === 1 || date === 21 || date === 31) {
        superScript = "st"
    } else if (date === 2 || date === 22) {
        superScript = "nd"
    } else if (date === 3 || date === 23) {
        superScript = "rd"
    } else {
        superScript = "th"
    };
};

// If there's a stored note, populates it to the appropriate Notes field
function init() {
    for (i = 0; i < textBoxes.length; i++) {
        if (localStorage.getItem(textBoxes[i].attr("id")) !== null) {
            textBoxes[i].text(localStorage.getItem(textBoxes[i].attr("id")));
        };
    };
};

init();
superScriptWrite();

// Displays today's date in a clean format
today.text(dayList[day] + ", " + monthList[month] + " " + date);

// Appends proper suffix to end of date, superscripted for prettier look
today.append("<sup>" + superScript + "</sup>");

// Save button stores Notes
button.on('click', function(event) {
    event.stopPropagation();

    // This var goes up to the specfic table row of the button clicked, then goes down to the specific text field in that row
    var input = $(this.parentElement.parentElement.children[1].children[0]);
    
    // Gets the ID of the text field next to the button clicked
    var inputAttr = input.attr("id");

    // Sets whatever was typed in Notes to local storage, ties it to the correct text field by giving it same key name as text field's ID
    localStorage.setItem(inputAttr, input.val());
});