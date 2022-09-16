/*
Clicking on the buttons should change the "theme" of the website:

- When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
*/
    constjumbotronEl=document.querySelector(".jumbotron");
    constbtnBlueEl=document.querySelector("#blueBtn");
    constbtnPrimaryEl=document.querySelector("a.btn.btn-primary.btn-lrg");
    constbtnVolunteerEl=document.querySelector("a.btn.btn-secondary.btn-lrg");
    btnBlueEl.addEventListener("click",e=>{
        e.preventDefault();
        jumbotronEl.style.background="#588fbd";
        btnPrimaryEl.style.background="#ffa500";
        btnVolunteerEl.style.background="black";
        btnVolunteerEl.style.color="white";
    })

/*
- When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
*/
    constbtnOrangeEl=document.querySelector("#orangeBtn");
    btnOrangeEl.addEventListener("click",e=>{
        e.preventDefault();
        jumbotronEl.style.background="#f0ad4e";
        btnPrimaryEl.style.background="#5751fd";
        btnVolunteerEl.style.background="#31b0d5";
        btnVolunteerEl.style.color="white";
    })
/*
- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`

Here's an example of how the website should look for the blue button:

![Blue button example](images/blue_clicked.png)
*/
constbtnGreenEl=document.querySelector("#greenBtn");
btnGreenEl.addEventListener("click",e=>{
    e.preventDefault();
    jumbotronEl.style.background="#87ca8a";
    btnPrimaryEl.style.background="black";
    btnVolunteerEl.style.background="#8c9c08";
})
/*
## Part 2

Just below the buttons, there's a form called **Register with us**.

Continue working in `./js/main.js` to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault

*/

constbtnSubmitEl=document.querySelector("form button.btn.btn-primary");
constnameEl=document.querySelector("#example-text-input");
constemailEl=document.querySelector("#exampleInputEmail1");
constdescribeEl=document.querySelector("#exampleTextarea");

functionnonEmpty(text){
    console.log(text,text.length);
    returntext.length>0;
}

functionmarkColor(element,color){
    console.log("validating..",element);
    element.style.background=color;
}

functionblankOut(elements){
    elements.forEach(element=>{
        element.textContent="";
        markColor(element,"white");
        
    });
    
}

functionvalidate(elements,validator,coloring){
    letvalid=true;
    elements.forEach(element=>{
        if(!validator(element.value)){
            console.log(element,"EMPTY");
            valid=false;
            coloring(element,"red");
        }
    });
    returnvalid;
    
        
    
}

btnSubmitEl.addEventListener("click",e=>{
    e.preventDefault();
    console.log("click botton");
    constelementsToValidate=[nameEl,emailEl,describeEl];
    console.log("elementsToValidate",elementsToValidate);
    constvalid=validate(elementsToValidate,nonEmpty,markColor);
    console.log("valid",valid);
    if(valid){
    blankOut(elementsToValidate);

}
    if(!emailEl.value.includes("@")){
        
        console.log("bad email");
        markColor(emailEl,"red");
    }else{
        if(valid){
            alert("Thank you for filling out the form");
        }
        
    }

})
