function validate(){
let firstName=document.getElementById('first-name').value
console.log(firstName)
let lastName=document.getElementById('last-name').value
console.log(lastName)
let Email=document.getElementById('email').value
console.log(Email)
// let City=document.getElementById('city').value
// console.log(City)
let State=document.getElementById('state').value
console.log(State)
let Zip=document.getElementById('zip').value
console.log(Zip)
let gen=document.getElementsByName('gen')
let valid = false
for(let i=0;i<gen.length;i++){
    if(gen[i].checked){
        valid=true
        break
    }
}
if(valid){
    document.getElementById('gender-valid').style.display='block'
     document.getElementById('gender-invalid').style.display='none'
        }

        else {
            document.getElementById('gender-invalid').style.display='block'
            document.getElementById('gender-valid').style.display='none'
            error=true
        }

let TnC=document.getElementById('tnc').checked
console.log(TnC)

if(firstName.length >= 2){
  document.getElementById('valid-first-name').style.display='block'
  document.getElementById('invalid-first-name').style.display='none'
}
else{
    document.getElementById('invalid-first-name').style.display='block'
    document.getElementById('valid-first-name').style.display='none'

}

if(lastName.length >= 2){
    document.getElementById('valid-last-name').style.display='block'
    document.getElementById('invalid-last-name').style.display='none'
  }
  else{
      document.getElementById('invalid-last-name').style.display='block'
      document.getElementById('valid-last-name').style.display='none'
  
  }

  if(Email.includes('@') && Email.includes('.') && Email.indexOf('@') >=1 && Email.lastIndexOf('.') >= 2)
  {
    document.getElementById('valid-email').style.display='block'
    document.getElementById('invalid-email').style.display='none'
  }
  else{
      document.getElementById('invalid-email').style.display='block'
      document.getElementById('valid-email').style.display='none'
  }

//   if(City.length >= 3){
//     document.getElementById('city-valid').style.display='block'
//     document.getElementById('city-invalid').style.display='none'
//   }
//   else{
//       document.getElementById('city-invalid').style.display='block'
//       document.getElementById('city-valid').style.display='none'
//   }

  let zipNumber=parseInt(Zip)

  if(Zip.length === 10  && !isNaN(zipNumber) && Zip.charAt(0)>=6 )
  {
    document.getElementById('valid-zip').style.display='block'
    document.getElementById('invalid-zip').style.display='none'
  }
  else{
      document.getElementById('invalid-zip').style.display='block'
      document.getElementById('valid-zip').style.display='none'
  }

  if(State != 'None')
    {
        document.getElementById('valid-state').style.display='block'
        document.getElementById('invalid-state').style.display='none'
      }
      else {
          document.getElementById('invalid-state').style.display='block'
          document.getElementById('valid-state').style.display='none'
      }


  if(TnC) {
    document.getElementById('tnc-invalid').style.display = 'none'
}
 else {
    document.getElementById('tnc-invalid').style.display = 'block'
}


// let Err = false
// if(!Err){
//     alert("Your details have been successfully submitted!")
//     document.getElementById('registration-form').reset()
//     let validfeedback=document.getElementsByClassName('valid-feedback')
//     for(let i=0;i<validfeedback.length;i++){
//         validfeedback[i].style.display='none'
//     }
//     let invalidfeedback=document.getElementsByClassName('invalid-feedback')
//     for(let i=0;i<invalidfeedback.length;i++){
//         invalidfeedback[i].style.display='none'
//     }

// }  
}

