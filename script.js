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

function init() {
    for (i = 0; i < textBoxes.length; i++) {
        if (localStorage.getItem(textBoxes[i].attr("id")) !== null) {
            textBoxes[i].text(localStorage.getItem(textBoxes[i].attr("id")))
        };
    };
};

init();
superScriptWrite();

today.text(dayList[day] + ", " + monthList[month] + " " + date);
today.append("<sup>" + superScript + "</sup>");

console.log(date);
console.log(superScript);

button.on('click', function(event) {
    event.stopPropagation();

    var input = $(this.parentElement.parentElement.children[1].children[0]);
    var inputAttr = input.attr("id");
    localStorage.setItem(inputAttr, input.val());

    console.log(localStorage.getItem("nine"));

    console.log(input);
    console.log("This should be the id of the text box: " + inputAttr);
    console.log("This should be the text value currently in the field: " + input.val());
});