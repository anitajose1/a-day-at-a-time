// add current date
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

startTime = 9;
userInput = "";

// loop through time range array, creating rows, hours, input fields, & save buttons
for (i = 0; i < timeArr.length; i++) {
  // create row to hold hour, input field, save button
  var eachRow = $("<div>").addClass("row");
  $(".container").append(eachRow);
  // create hour
  var eachHour = $("<textarea>")
    .text(timeArr[i])
    .addClass("hour col-md-1 col-sm-1");

  // create user input field, add classes, placeholder attr, & data-value attr
  var userInput = $("<input>")
    .attr("placeholder", "Add your notes here..")
    .attr("data-value", i)
    .addClass("time-block col-md-10 col-sm-10");

  // compare startTime with present time to color-code input field
  if (startTime < moment().hour()) {
    userInput.addClass("past");
  } else if (startTime > moment().hour()) {
    userInput.addClass("future");
  } else {
    userInput.addClass("present");
  }
  startTime++;

  //   create save button
  var textLock = $("<button>")
    .text("Save")
    .addClass("saveBtn col-md-1 col-sm-1");

  // append time, input field, & save button to row
  eachRow.append(eachHour);
  eachRow.append(userInput);
  eachRow.append(textLock);
}
