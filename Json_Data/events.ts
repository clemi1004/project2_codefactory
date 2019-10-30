// loop for adding html div
for (let i = 0; i < events.length; i++)
      {
         // definition of the new element
         var newItem_1 = 
        	`<div class="parent" onclick="">
                <div class="child" style="background-image: url('`+ events[i].img +`');">
                    <p class="header">`+ events[i].type_of_event +`</p>
                    <p class="date">Date: `+ events[i].date +`<br>Location: `+ events[i].location +`</p>
                    <p class="description">`+ events[i].description +`</p>
                </div>
            </div>`
         // insert the new element  
         $(".wrapper").append(newItem_1); 
         };

