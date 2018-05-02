$(document).ready(function()
{

	 if ($(this).val()  == '') 
	 {
		 $(this).val() = 'email@abc.com';
     }
	 if ($(this).val()  == 'email@abc.com') 
	 {
		 $(this).val() = '';
	 }
}
);