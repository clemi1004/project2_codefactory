// loop for adding html div
for (var i = 0; i < alumni.length; i++) {
    // definition of the new element
    var newItem_1 = "<tr class=\"\">\n                <td>" + alumni[i].first_name + "</td>\n                <td>" + alumni[i].last_name + "</td>\n                <td class=\"hide_mobile\">" + alumni[i].current_working_field + "</td>\n                <td class=\"hide_mobile\">" + alumni[i].job_title + "</td>\n                <td class=\"hide_email\">" + alumni[i].e_mail + "</td>\n                <td><input type=\"submit\" class=\"btn\" value=\"Write to me!\"></td>\n              </tr>";
    // insert the new element  
    $("#test").append(newItem_1);
}
;
function sendMail(obj) {
    var yourMessage = "Hi, please write me your question!";
    var subject = "Question regarding Alumni Codefactory";
    document.location.href = "mailto:" + obj.e_mail + "?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
var btns = document.getElementsByClassName("btn");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        sendMail(alumni[i]);
        // console.log(i)
    });
};
for (var i = 0; i < btns.length; i += 1) {
    _loop_1(i);
}
