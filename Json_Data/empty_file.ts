// loop for adding html div
for (let i = 0; i < alumni.length; i++)
      {
         // definition of the new element
         var newItem_1 = 
        	`<tr>
                <td>`+ alumni[i].first_name +`</td>
                <td>`+ alumni[i].last_name +`</td>
                <td>`+ alumni[i].current_working_field +`</td>
                <td>`+ alumni[i].job_title +`</td>
                <td>`+ alumni[i].e_mail +`</td>
            </tr>`
         // insert the new element  
         $("#test").append(newItem_1); 
         };


