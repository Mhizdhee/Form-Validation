const formElem = document.getElementById('form');
const  registerBtn = document.getElementsByClassName("reg");
const inputElems = document.getElementsByTagName("input");
const errorMsgs = document.getElementById("errors");
const successMsg = document.getElementById("success");

errorMsgs.style.display="none";
successMsg.style.display="none";


formElem.addEventListener("submit",(e)=>{
    e.preventDefault();

    for(let i=0; i<inputElems.length; i++){
        let myInput=inputElems[i].value;
        if(myInput === ""){
     errorMsgs.textContent = "The following errors occurred:.You did not enter your phone number .You did not enter a password .Customer category is required .Consent to share personal data is required .Security Question Answer is required .You must accept our Terms of Service";
        errorMsgs.style.display="block";
        
      
    } else{
        // errorMsgs.style.display ="none";
        successMsg.style.display="block"
    }
    
    }
    
})

