$(document).on("keyup", "INPUT SELECTOR", function () {
    var f = $(this),
        fval = f.val(),
        timer = f.data('timeout'),
        x = 400; // AFTER N MILLISECONDS


    function callback() {
        // KEYUP ACTION
    }

    if (timer) {
        clearTimeout(timer);
        f.removeData('timeout');
    }




    if (fval == 0 || fval == '' || fval == null) {
        callback();
    } else {
        f.data('timeout', setTimeout(callback, x));
    }

})