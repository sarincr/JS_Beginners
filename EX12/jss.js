$(document).ready(function()
{
    $("#btn1").click(function()
    	{
        alert("Text: " + $("#test").text());
        }
        );
    $("#btn2").click(function()
    		{
        alert("This will show HTML along with text " + $("#test").html());
    		}
            );
}
);