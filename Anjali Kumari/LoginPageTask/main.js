/* ========================WRITE YOUR JS FROM HERE======================== */

/* Phone number validation*/

	function isNumberKey(evt)
			{
				var charCode = (evt.which) ? evt.which : evt.keyCode;
				if (charCode != 46 && charCode > 31 
				&& (charCode < 48 || charCode > 57))
				return false;
				return true;

			}  
			
			function isNumericKey(evt)
			{
				var charCode = (evt.which) ? evt.which : evt.keyCode;
				if (charCode != 46 && charCode > 31 
				&& (charCode < 48 || charCode > 57))
				return true;
				return false;
			} 

/* Email Vailidation */

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  


/* password validation*/

function matchpass(){  
var firstpassword=document.myform.password.value;  
var secondpassword=document.myform.password2.value;  
  
if(firstpassword==secondpassword ){  
return true;  
}  
else {  
alert("password must be same!");  
return false;  
}  

}  
