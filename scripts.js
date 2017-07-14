function submitContactForm(){
var x=document forms ["contactForm"]["fname"].value;
   if(x==""){
       alert("Fname must be filled out");
       return false;
   } else {
       alert('Thank you for submitting the form and we will try to contact you in 5-7 business days')
   }
}