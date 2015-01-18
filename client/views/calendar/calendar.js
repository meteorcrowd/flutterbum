Template.calendar.rendered = function () {
    $calendar = $('#projectCalendar');
    var calendar = $calendar.fullCalendar({
        header: {
            left: 'title',
            center: 'today',
            right: 'prev,next'
        },
        contentHeight: 150,
        theme: false,
        defaultView: 'basicWeek',
        selectable: true,
        selectHelper: true,
        editable: true,
        weekMode: 'liquid'
    });
}
