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

superScriptWrite();

today.text(dayList[day] + ", " + monthList[month] + " " + date);
today.append("<sup>" + superScript + "</sup>");

console.log(date);
console.log(superScript);

button.on('click', function(event) {
    event.stopPropagation();

    var input = $(this.parentElement.parentElement.children[1].children[0]);
    var inputAttr = input.attr("id");

    localStorage.setItem(inputAttr, input.text());

    var userNote = localStorage.getItem(inputAttr);
    input.text(userNote);

    console.log("This should be the user note: " + userNote);
});