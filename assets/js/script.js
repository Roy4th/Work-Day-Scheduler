var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

document.getElementById('currentDay').append(currentDate);

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