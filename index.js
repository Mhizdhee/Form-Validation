const form=document.getElementById("myForm");
const loginButton = document.getElementById("btn");
const myInput = document.querySelector(".emailInput");
const myPwInput = document.querySelector(".pwInput");
const errorMsg = document.getElementById("error");
errorMsg.style.display="none";

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

loginButton.addEventListener("click",buttonElem);

function buttonElem(){
    let inputElem =myInput.value;
    let passwordInput =myPwInput.value;
    if(inputElem === "" || passwordInput === ""){
        // alert ("Login Details Incorrect. Please try again.")
        errorMsg.textContent = "Login Details Incorrect. Please try again.";
        // errorMsg.style.color = "rgb(168, 51, 51)";
        // errorMsg.style.backgroundColor ="rgb(247, 223, 223)";
        // errorMsg.style.borderRadius="5px"
        // errorMsg.style.padding="20px";
        // errorMsg.style.marginBottom="20px";
        errorMsg.style.display="block";

    }else{
        errorMsg.style.display ="none";
        // alert("You have sucessfully login");

    }

  
}
