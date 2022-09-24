//create variables
// create a schedule
// What time is it? What day is it?
// save said schedule
// save to local storage
// current day at the top of the schedule

let date = moment().format("LLL");

$("#currentDay").text(date);


let time = moment().format("h:mm:ss");
console.log(date);

$(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
        
        let text = $.siblings(".description").val();
        let time = $parent().attr("9");
        localStorage.setItem(time, text);
        event.preventDefault();
    })
    $(".time-block").each(function () {
        let block = parseFloat($attr("id").split("")[1]);
        if (block < $time2) {
            $removeId("future");
            $removeId("present");
            $addId("past");
        } else if ( block === #time2) {
            $removeId("past");
            $removeId("future");
            $addId("present");
        } else {
            $removeId("present");
            $removeId("past");
            $addId("future");
        }
    })
})

$("#9-clock.description").val(localStorage.getItem("9 AM"));
$("#10-clock.description").val(localStorage.getItem("10 AM"));
$("#11-clock.description").val(localStorage.getItem("11 AM"));
$("#12-clock.description").val(localStorage.getItem("12 PM"));
$("#1-clock.description").val(localStorage.getItem("1 PM"));
$("#2-clock.description").val(localStorage.getItem("2 PM"));
$("#3-clock.description").val(localStorage.getItem("3 PM"));
$("#4-clock.description").val(localStorage.getItem("4 PM"));
$("#5-clock.description").val(localStorage.getItem("5 PM"));



// color code time blocks depending on past, present, or future
// time displayed on the screen, where?
