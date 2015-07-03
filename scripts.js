$("#new_message").on('input propertychange paste', function() {
    var length = $("#new_message").val().length;
    var remaining = $("#new_message").attr("maxlength") - length;
    $("#characters_remaining").html(remaining)
});