function compute()
{
    //Initialize variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear() + parseInt(years);

    //Input validation
    if(principal == ""){
    	alert("Enter a positive number!!");
    	document.getElementById("principal").focus();
    	return false;
    }

    //Show result
    document.getElementById("result").innerHTML = "If you deposite " + principal + "," + "<br>" + "at an interest rate of " + rate + "%," + "<br>" + "You will receive an amount of " + interest + "," + "<br>" + "in the year " + year + "<br>";

    
}

function updateRate(){
	//initialize variables
	var rateval  = document.getElementById("rate").value;
	//Assigning value
	document.getElementById("rate_val").innerText = rateval;
	
}