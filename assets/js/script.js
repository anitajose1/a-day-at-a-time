var DateTime = moment().format("dddd, MMMM Do");
// show current date
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

userInput = "";

// loop through time range array, creating rows, hours, input fields, & save buttons
for (i = 0; i < timeArr.length; i++) {
  var eachRow = $("<div>").addClass("row");
  $(".container").append(eachRow);
  var eachHour = $("<textarea>")
    .text(timeArr[i])
    .addClass("hour col-md-1 col-sm-1");
  var userInput = $("<input>")
    .attr("placeholder", "Add your notes here..")
    .addClass("time-block col-md-10 col-sm-10");
  var textLock = $("<button>")
    .text("save")
    .addClass("saveBtn col-md-1 col-sm-1");
  eachRow.append(eachHour);
  eachRow.append(userInput);
  eachRow.append(textLock);
}
