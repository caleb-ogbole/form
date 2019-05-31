
const userName = "admin";
const passWord ="admin123";
//Submit Button
const subBtn = document.getElementById("Submit");
//Event listener
subBtn.addEventListener("click" , function(e){
  e.preventDefault();
  //Declaration of constants
  const formReg = document.getElementById("register");
  const user = document.getElementById("usernamesignup")
  const userNameInput = document.getElementById("usernamesignup").value;
  const passwordInput = document.getElementById("passwordsignup").value;
//Conditional statements

  if(userName === userNameInput && passWord === passWordInput){
     const newDiv = document.createElement("div");
     newDiv.classList.add("correct");
     newDiv.textContent="Correct Username and password";
     formReg.appendChild(newDiv);

  }
  else{
    const anotherDiv = document.createElement("div");
    anotherDiv.classList.add("wrong");
    anotherDiv.textContent ="Incorrect Username and Password";
    formReg.appendChild(anotherDiv); 
  }
});