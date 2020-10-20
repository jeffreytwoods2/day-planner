# day-planner

Link:  https://jeffreytwoods2.github.io/day-planner/


### HTML:

Static header w/ the name and short description of the app
Sticky div that displays the current date, updated automatically, sticks to top of page when scrolling
Calendar is a Bootstrap table to ensure responsiveness to every viewport size, prevents save button from being shifted down to lower row on small screens


### CSS:

Time elements on each calendar are given a top margin of 10px to align them vertically on desktop
Top margin doesn't quite align them perfectly on mobile, but looks are improved - any more margin and they won't be aligned on desktop
Text field and button are set to 100% width so that they are usable even on very small viewports


### Javascript:

Date display function checks the current day, month, and date and populates that to the time display div
Suffix function makes sure that the date has the proper suffix (eg 24th, 2nd, 23rd, etc)
Color function checks current time, changes style of time element in calendar depending on whether that time has passed, that time is current, or that time is in the future


Screencaps of working website are included in screencap folder.
Second screencap in particular demonstrates all three colors and sticky date div
