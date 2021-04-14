//toggle completed tasks
$("dl").on("click", "li", function() {
    $(this).toggleClass("taskDone");
});


//remove tasks
$("dl").on("click", "span", function(evt) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    evt.stopPropagation();
});

//add a new todo
$("input[type='text']").keypress(function(evt) {
    if (evt.which === 13 && $(this).val() !== "") {
        var newTask = $(this).val();
        $("dl").append("<li><i class='fa fa-thumb-tack' aria-hidden='true'></i><span><i class='fa fa-eraser' aria-hidden='true'></i></span>" + newTask + "</li>");
        $(this).val("");
    };
});
