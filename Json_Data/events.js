// loop for adding html div
for (var i = 0; i < careers.length; i++) {
    // definition of the new element
    var newItem_1 = "<div class=\"parent\" onclick=\"\">\n                <div class=\"child\" style=\"background-image: url('" + careers[i].img + "');\">\n                    <p class=\"header\">" + careers[i].type_of_event + "</p>\n                    <p class=\"date\">Date: " + careers[i].date + "<br>Location: " + careers[i].location + "</p>\n                    <p class=\"description\">" + careers[i].description + "</p>\n                </div>\n            </div>";
    // insert the new element  
    $(".wrapper").append(newItem_1);
}
;
