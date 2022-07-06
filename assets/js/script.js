var DateTime = moment().format("dddd, MMMM Do");

$("#currentDay").text(DateTime);

// array for time range
var timeArr = [
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
];

// loop through time range array, creating each hour, input field, and text lock button
for (i = 0; i < timeArr.length; i++) {
  var eachHour = $("<textarea>").text(timeArr[i]).addClass("hour");
  var userInput = $("<input>")
    .attr("placeholder", "Add your notes here..")
    .addClass("time-block");
  var textLock = $("<button>").text("lock/unlock").addClass("saveBtn");
  $(".container").append(eachHour);
  $(".container").append(userInput);
  $(".container").append(textLock);
}
