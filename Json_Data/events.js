// loop for adding html div
for (var i = 0; i < events.length; i++) {
    // definition of the new element
    var newItem_1 = "<div class=\"parent\" onclick=\"\">\n                <div class=\"child\" style=\"background-image: url('" + events[i].img + "');\">\n                    <p class=\"header\">" + events[i].type_of_event + "</p>\n                    <p class=\"date\">Date: " + events[i].date + "<br>Location: " + events[i].location + "</p>\n                    <p class=\"description\">" + events[i].description + "</p>\n                </div>\n            </div>";
    // insert the new element  
    $(".wrapper").append(newItem_1);
}
;
