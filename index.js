/* alert ('you are welcome ') */

const claimTrial = document.querySelector('.claim');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorText = document.querySelectorAll('.error_text');
const error_img = document.querySelectorAll('.errorImg');
const togglePassword = document.getElementById("togglePassword");

claimTrial.addEventListener ("click", ()=> {
    event.preventDefault();
    const fname = firstName.value
    const lname = lastName.value
    const eMail = email.value
    const passWord = password.value

    
  if (fname === "") {
    firstName.classList.add("error");  
    errorText[0].classList.remove("hide");
    error_img[0].classList.remove("hide");
   
  } else {
    firstName.classList.remove("error");
    errorText[0].classList.add("hide");
    error_img[0].classList.add("hide");
  }


  if (lname === "") {
    lastName.classList.add("error") ;
    errorText[1].classList.remove("hide");
    error_img[1].classList.remove("hide");
  } else {
    lastName.classList.remove("error");
    errorText[1].classList.add("hide");
    error_img[1].classList.add("hide");
  }

  if (eMail === "") {
    email.classList.add("error");
    errorText[2].classList.remove("hide");
    error_img[2].classList.remove("hide");
  } else {
    email.classList.remove("error");
    errorText[2].classList.add("hide");
    error_img[2].classList.add("hide");
  }


  if (passWord === "") {
    password.classList.add("error") ;
    errorText[3].classList.remove("hide");
    error_img[3].classList.remove("hide");
  } else {
    password.classList.remove("error")
    errorText[3].classList.add("hide");
    error_img[3].classList.add("hide");
  }

  });


  
  togglePassword.addEventListener("click", () => {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // Toggle the eye icon (you can switch to a different icon or style it)
    togglePassword.textContent = type === "password" ? "\u{1F441}" : "\u{1F441}";
  });