var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

document.getElementById('currentDay').append(currentDate);

function saveInput() {
    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(textValue, time);
    localStorage.setItem(time, textValue);
}

timeCheck = function() {
    const currentHour = moment().hours()
    $(".time-block").each(function() {
        const eventHour = $(this).attr('id')
        if (eventHour < currentHour) {
            $(this).addClass('past')
        } else if (eventHour === currentHour) {
            $(this).addClass('present')
            $(this).removeClass('past')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

timeCheck()

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));

$(".saveBtn").on("click", saveInput);
