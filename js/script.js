//  Selecting the name field to use the focus() method on it

let userName = document.getElementById("name");

userName.focus();

// Selecting Job roles and other job role

let jobRoles = document.getElementById("title");

let otherJobRole = document.getElementById("other-job-role");


//  Hiding other job roles by default

otherJobRole.style.display = "none";


// If the job role selected was other, other job text field will display 

jobRoles.addEventListener("change", () => {
    if(jobRoles.value === "other"){
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = "none";
    }
})

/*  Programming the design element to listen for user change and Disabling the design elememnt */

let shirtDesign = document.getElementById('design');
let shirtColor = document.getElementById("color");
const shirtThemes = shirtColor.children;

shirtDesign.disable = true;



shirtDesign.addEventListener("change", () => {
    shirtColor.disable = false;
    for(let i=0; i<shirtThemes.length;i++){
        if (e.target.value = shirtThemes[i].getAttribute("data-theme")){
            shirtThemes[i].hidden = false;
            shirtThemes[i].setAttribute("selected", true);
          } else {
            shirtThemes[i].hidden = true;
            shirtThemes[i].removeAttribute("selected");
        }
    }
});


// Making the fieldtext element listen for the checkbox being selected by the user

let activities = document.getElementById("activities");

let activitiesCosts = document.getElementById("activities-cost");

let newCost = 0; 

const events = document.querySelectorAll("#activities-box input");


activities.addEventListener("change", (e) => {
    let clicked = e.target;
    let costs = parseInt(clicked.getAttribute("data-cost"));
    if(clicked.checked){
        newCost += costs;
    } else {
        newCost -= costs;
    }
    activitiesCosts.innerHTML = `Total:$${newCost}`;
    console.log(newCost)

})

 //payment variables 

 const paymentSelected = document.getElementById('payment');

 const creditCard = document.getElementById('credit-card');
 
 const paypal = document.getElementById('paypal');
 
 const bitcoin = document.getElementById('bitcoin');

 paymentSelected.children[1].setAttribute("selected", true);

paypal.style.display = "none";

bitcoin.style.display = "none";

// Depending on the method selected, the payment info will change 
paymentSelected.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paypal.style.display = "";
    bitcoin.style.display = "none";
    creditCard.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    paypal.style.display = "none";
    bitcoin.style.display = "";
    creditCard.style.display = "none";
  } else {
    paypal.style.display = "none";
    bitcoin.style.display = "none";
    creditCard.style.display = "";
  }
});

//Setting these payments as default
paymentSelected.children[1].setAttribute("selected", "");
paypal.style.display = "none";
bitcoin.style.display = "none";


// check if we can validated the elements using this function 
const invalidated = (element) => {
    element.parentNode.className = 'not-valid';
    element.parentNode.className.remove = 'valid';
    element.parentNode.lastElementChild.style.display = 'block';
  };
  
  const validated = (element) => {  
    element.parentNode.className = 'valid';
    element.parentNode.classList.remove('not-valid', 'error-border');
    element.parentNode.lastElementChild.style.display = 'none';
  };
  


// New variables for users information

const email = document.getElementById("email");

const cvv = document.getElementById("cvv");

const zip = document.getElementById("zip");

const formField = document.querySelector("form");

const cardField = document.getElementById("cc-num");

const activitiesArray = document.querySelectorAll('[type="checkbox"]');


//Creating functions to see if inputs, match the Regex we demande 

const validActivity = () => {
    const selectedActs = activitiesCosts > 0;
    return selectedActs;
  }

const nameValidation = () => {
    const nameInput = userName.value;
    const validName = /^[a-zA-z]{2,30}$/.test(nameInput)
    return validName
};

const emailValidation = () => {
    const emailInput = email.value;
    const validEmails = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput)
    return validEmails
}

const cardValidation = () => {
    let cardSubmited = cardField.value;
    let validCard = /^[0-9]{13,16}$/.test(cardSubmited);
    return validCard;
  };

  const zipValidation = () => {
    let zipSubmited = zip .value;
    let validZip = /^[0-9]{5}$/.test(zipSubmited);
    return validZip;
  };
  
  const cvvValidation = () => {
    let cvvSubmited = cvv.value ;
    let validCvv = /^[0-9]{3}$/.test(cvvSubmited);
    return validCvv;
  };


// Programming the formField element, to listen for the submit event and check if the sections are validated or not

formField.addEventListener("submit", (e) => {
    e.preventDefault();

    if(invalidated){
        e.preventDefault()
    }

    if(!nameValidation()){
        invalidated(userName)
    } else {
        validated(userName)
    }

    if(!emailValidation()){
        invalidated(email)
    } else { 
        validated(email)
    }

    if (!registerValidation()) {
        invalidated(activityField);
      } else {
        validated(activityField);
      }

      if (paymentSelected.value === "credit-card") {
        if (!cardValidation()) {
          invalidated(cardField);
        } else {
          validated(cardField);
        }
    
        if (!zipValidation()) {
          invalidated(zip);
        } else {
          validated(zip); 
        }
    
        if (!cvvValidation()) {
          invalidated(cvv);
        } else {
          validated(cvv);
        }
      }

});

// console.log(checkBox);
const checkBox = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkBox.length; i++) {
  const choice = checkBox[i];

  choice.addEventListener("focus", (e) => {
    e.target.parentElement.classList.add("focus");
  });

  choice.addEventListener("blur", (e) => {
    e.target.parentElement.classList.remove("focus");
  });
}

//keyup event listeners, to verify in the process
formField.addEventListener("keyup", (e) => {
    let nameInput = userName.value;
    let validName = /^[a-zA-Z ]{2,30}$/.test(nameInput);
  
    if (isNaN(e.target.value === nameInput)) {
      return validName;
    } else if (!isNaN(nameInput) && nameInput !== "") {
      document.getElementById("name-hint").textContent =
        "Numeric values are invalid";
    } else if (nameInput === "") {
      document.getElementById("name-hint").textContent =
        "Name field cannot be blank";
    }
  
    if (!nameValidation()) {
      invalidated(userName);
    } else {
      validated(userName);
    }
  });