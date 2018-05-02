$(document).ready(function()
{
	$("#button1").click(function()
		{
		$("#divid1").text("Text Changed");
		});
	
   $("#button2").click(function()
	   {
	   $("#divid2").html("<b>Text Changed to Bold</b>");
	   });

   $("#button3").click(function()
      {
	  $("#divid3").val("Value of Box");
      });
}
);