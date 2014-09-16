function mychange(amount) {
    // Need to Move Green / Red3
    // If over 100% keep text and leave 100% RED.
    // need to change text.

    var select_bars = document.getElementById('select_bars').value;
    var select_text = select_bars + "text";
    var bar_value = document.getElementById(select_text).innerHTML;


    bar_value = bar_value.substring(0, bar_value.length - 2);
    bar_number = Number(bar_value) + amount;
    if (bar_number > 0) {
        bar_off =  100 / bar_number * 100;
    }

    if (bar_number <= 0) {
        document.getElementById(select_bars).style.width='0.5%';
        document.getElementById(select_text).style.width='20000%'; // Ugly but works on Firefox and linux.
        document.getElementById(select_text).innerHTML='0 %';
        document.getElementById(select_bars).style.background='#00cc00';
    } else if (bar_number <= 95) {
        document.getElementById(select_bars).style.width=bar_number +'%';
        document.getElementById(select_text).style.width=bar_off + '%';
        document.getElementById(select_text).innerHTML=bar_number +' %';
        document.getElementById(select_bars).style.background='#00cc00';
    } else {
        document.getElementById(select_bars).style.width='100%';
        document.getElementById(select_text).style.width='100%';
        document.getElementById(select_text).innerHTML=bar_number +' %';
        document.getElementById(select_bars).style.background='#cc0000';
    } // */
}
