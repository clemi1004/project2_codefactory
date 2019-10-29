// loop for adding html div
for (let i = 0; i < careers.length; i++)
      {
         // definition of the new element
         var newItem_1 = 
        	`<div class="parent" onclick="">
                <div class="child" style="background-image: url('`+ careers[i].img +`');">
                    <p class="header">`+ careers[i].type_of_event +`</p>
                    <p class="date">Date: `+ careers[i].date +`<br>Location: `+ careers[i].location +`</p>
                    <p class="description">`+ careers[i].description +`</p>
                </div>
            </div>`
         // insert the new element  
         $(".wrapper").append(newItem_1); 
         };

