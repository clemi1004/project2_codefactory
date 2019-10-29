// loop for adding html div
for (var i = 0; i < alumni.length; i++) {
    // definition of the new element
    var newItem_1 = "<tr class=\"\">\n                <td>" + alumni[i].first_name + "</td>\n                <td>" + alumni[i].last_name + "</td>\n                <td>" + alumni[i].current_working_field + "</td>\n                <td>" + alumni[i].job_title + "</td>\n                <td>" + alumni[i].e_mail + "</td>\n            </tr>";
    // insert the new element  
    $("#test").append(newItem_1);
}
;
