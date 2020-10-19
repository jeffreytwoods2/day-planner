var today = $("#today");
var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var date  = d.getDate();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthList  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var superScript;
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

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
console.log(date);
console.log(superScript);

today.text(dayList[day] + ", " + monthList[month] + " " + date);
today.append("<sup>" + superScript + "</sup>");