





let validity = document.getElementById('validity-check')

//add event listener
function checkNumber(){

    // document
    let inputVal = document.getElementById('input-number').value
    let msg = document.getElementById('msg')


    let regex = /^(\+88)?01[0-9]{9}$/g
    let phoneNumber = inputVal 

    if(!inputVal){
        alert("Please enter a phone numner.")
         msg.style.display=none

    }

    const testNumber = function(regex,phoneNumber){
        if(regex.test(phoneNumber)){

            msg.style.display="inline-Block"
            msg.innerHTML=`${phoneNumber} is valid Bangladeshi phone number.`;

        }else{

            msg.style.display="inline-Block"
            msg.innerHTML=`${phoneNumber} is not valid Bangladeshi phone number.`;
        }
    }
    testNumber(regex,phoneNumber)
    document.getElementById('input-number').value='';
}
validity.addEventListener('click',checkNumber)





