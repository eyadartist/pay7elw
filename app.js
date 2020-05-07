let hour = new Date().getHours()

if (hour >= 6 && hour <= 12) {
  $(function() {
    $("#demo").append("Morning");
});

} else if (hour >= 12 && hour <= 15) {
  $(function() {
    $("#demo").append("Afternoon");
});

}
else if (hour >= 15 && hour <= 20) {
  $(function() {
    $("#demo").append("Evening");
});

} else {
  $(function() {
    $("#demo").append("Nigth");
});

}