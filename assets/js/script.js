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
  userInput.addClass("inputIndex-" + i);

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

// save user input to local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  userInputValue = $(this).siblings("input").val();
  var userIndex = parseInt($(this).siblings("input").attr("data-value"));
  console.log(userInputValue);
  console.log(userIndex);
  // validation if input field has value
  if ((userInputValue[0] = "")) {
    alert("You must add some text!");
  }
  // Save each input text
  if (userIndex == 0) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 1) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 2) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 3) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 4) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 5) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 6) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 7) {
    localStorage.setItem(userIndex, userInputValue);
  }
  if (userIndex == 8) {
    localStorage.setItem(userIndex, userInputValue);
  }
});

// get data from local storage for each input field
var getNotes0 = localStorage.getItem("0");
$(".inputIndex-0").val(getNotes0);
var getNotes1 = localStorage.getItem("1");
$(".inputIndex-1").val(getNotes1);
var getNotes2 = localStorage.getItem("2");
$(".inputIndex-2").val(getNotes2);
var getNotes3 = localStorage.getItem("3");
$(".inputIndex-3").val(getNotes3);
var getNotes4 = localStorage.getItem("4");
$(".inputIndex-4").val(getNotes4);
var getNotes5 = localStorage.getItem("5");
$(".inputIndex-5").val(getNotes5);
var getNotes6 = localStorage.getItem("6");
$(".inputIndex-6").val(getNotes6);
var getNotes7 = localStorage.getItem("7");
$(".inputIndex-7").val(getNotes7);
var getNotes8 = localStorage.getItem("8");
$(".inputIndex-8").val(getNotes8);
