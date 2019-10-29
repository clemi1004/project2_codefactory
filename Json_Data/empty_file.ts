// loop for adding html div
for (let i = 0; i < alumni.length; i++)
      {
         // definition of the new element
         var newItem_1 = 
        	`<tr class="">
                <td>`+ alumni[i].first_name +`</td>
                <td>`+ alumni[i].last_name +`</td>
                <td>`+ alumni[i].current_working_field +`</td>
                <td>`+ alumni[i].job_title +`</td>
                <td>`+ alumni[i].e_mail +`</td>
                <td><input type="submit" class="btn" value="Write to me!"></td>
              </tr>`
         // insert the new element  
         $("#test").append(newItem_1); 
         };

function sendMail(obj)
{
    var yourMessage = "Hi, please write me your question!";
    var subject = "Question regarding Alumni Codefactory";
    document.location.href = "mailto:" + obj.e_mail + "?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
   
var btns = document.getElementsByClassName("btn");

for(let i = 0; i< btns.length ; i+=1){
    btns[i].addEventListener("click",function(){
        sendMail(alumni[i])
        // console.log(i)
    });
}