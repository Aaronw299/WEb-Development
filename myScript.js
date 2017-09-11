<script>
var totalprice = 300.00;

function changecolor()
{
colorstring= document.getElementById("guitarcolor").value;
document.getElementById("guitarimage").style.backgroundColor=colorstring;

}

function changetype(value)
{
    if(value=='acc')
    {
      document.getElementById('guitarType').innerHTML="Model: Standard";
      document.getElementById('Custom').innerHTML="Custom: No";
       document.getElementById('guitar').src = "accoustic.png";
		 document.body.style.backgroundImage = "url('aback.jpg')";
		document.getElementById('guitarlogo').style.left ="470px";
       document.getElementById('guitarlogo').style.top="900px";
		document.getElementById("guitarcolor").style.visibility="hidden";
		document.getElementById("acctypes").style.visibility="visible";
		document.getElementById(totalprice).innerHTML="300";
	   document.getElementById("guitarimage").style.visibility="hidden";
	}

		if(value=='fl')
    {
      document.getElementById('guitarType').innerHTML="Model: Flare";
      document.getElementById('Custom').innerHTML="Custom: yes";
      document.getElementById('guitar').src = "accoustic2.png";
		document.body.style.backgroundImage = "url('aback.jpg')";
		document.getElementById('guitarlogo').style.left ="470px";
       document.getElementById('guitarlogo').style.top="900px";
		document.getElementById("guitarcolor").style.visibility="hidden";
		document.getElementById("acctypes").style.visibility="visible";
	}
		if(value=='wr')
    {
      document.getElementById('guitarType').innerHTML="Model: Worn Look";
      document.getElementById('Custom').innerHTML="Custom: yes";
       document.getElementById('guitar').src = "accoustic3.png";
		document.body.style.backgroundImage = "url('aback.jpg')";
		document.getElementById('guitarlogo').style.left ="470px";
       document.getElementById('guitarlogo').style.top="900px";
		document.getElementById("guitarcolor").style.visibility="hidden";
		document.getElementById("acctypes").style.visibility="visible";
	}
	if(value=='pf')
    {
      document.getElementById('guitarType').innerHTML="Model: Pink Floyd";
      document.getElementById('Custom').innerHTML="Custom: yes";
       document.getElementById('guitar').src = "accoustic4.png";
		document.body.style.backgroundImage = "url('aback.jpg')";
		document.getElementById('guitarlogo').style.left ="470px";
       document.getElementById('guitarlogo').style.top="900px";
		document.getElementById("guitarcolor").style.visibility="hidden";
		document.getElementById("acctypes").style.visibility="visible";

	}


    if(value=='ele'){
      document.getElementById('guitarType').innerHTML="Model: Electric";
      document.getElementById('Custom').innerHTML="Custom: yes";
        document.getElementById('guitar').src= "electric.png";
		document.body.style.backgroundImage = "url('eback.jpg')";
        document.getElementById('guitarlogo').style.left ="480px";
        document.getElementById('guitarlogo').style.top="600px";
		document.getElementById("guitarcolor").style.visibility="visible";
		document.getElementById("acctypes").style.visibility="hidden";

    }
}

function changelogo(img)
{
    if(img =="none"){
        totalprice = 300.00;
        document.getElementById('guitarlogo').style.visibility="hidden";
        document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
        document.getElementById('Logo').innerHTML="Logo: none";
    }

    if (img =="jumpman"){
        totalprice = 310.00;
        document.getElementById('guitarlogo').src="jumpman.png";
        document.getElementById('guitarlogo').style.visibility="visible";
        document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
        document.getElementById('Logo').innerHTML="Logo: Jumpman + 10.00";
    }

    if (img =="fish"){
        totalprice = 315.00;
        document.getElementById('guitarlogo').src= "fish.png";
        document.getElementById('guitarlogo').style.visibility="visible";
        document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
        document.getElementById('Logo').innerHTML="Logo: Fish + 15.00";
    }

    if (img =="spartan"){
        totalprice = 320.00;
        document.getElementById('guitarlogo').src= "spartan.gif";
        document.getElementById('guitarlogo').style.visibility="visible";
        document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
        document.getElementById('Logo').innerHTML="Logo: Spartan + 20.00";
    }

     if (img =="batman"){
         totalprice = 325.00;
        document.getElementById('guitarlogo').src= "batman.png";
        document.getElementById('guitarlogo').style.visibility="visible";
        document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
        document.getElementById('Logo').innerHTML="Logo: Batman + 25.00";
    }

    if (img =="ghostbusters"){
        totalprice = 330.00;
        document.getElementById('guitarlogo').src= "ghostbusters.png";
        document.getElementById('guitarlogo').style.visibility="visible";
        document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
        document.getElementById('Logo').innerHTML="Logo: Ghostbusters + 30.00";
    }
}

function checkppsn(){
    var total = 0;
    var multiplier = 8;
	var validpps = true;


    var pps = document.getElementById("ppsn").value;
    pps = pps.toUpperCase();

	if (pps == null || pps =="")
	{validpps = false;}

    if (pps.length !=8)
    {validpps = false;}


        for (var n=0; n < pps.length-1; n++)
        {
           var x = parseInt(pps.slice(n,n+1),10);
            x = x * multiplier;
            total = total + x;
            multiplier--;

        }
            var pos = pps.charCodeAt(7);
            pos = pos - 64;

            if (pos != total % 23)
            {
				validpps=false;
            }

	return validpps;

}

function checkdni(){
var validdni = true;

var id = document.getElementById("ppsn").value;
var letter = id.charAt(8);
letter = letter.toUpperCase();

var idLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

if (id == null || id == "")
{ validdni = false;alert}

if (id.length != 9)
{ validdni = false;alert}

	var validLetter;
	for(var i=0; i < idLetters.length; i++)
	{
		if(letter == idLetters[i])
		{
			validLetter = i;
			break;
		}
	}

	id = parseInt(id.slice(0,8), 10);
	var x = id % 23;

	if(validLetter != x)
	{
		validdni = false;;
	}

return validdni;
}


function checkDiscount()
{
	var testpps = new Boolean();
	var testdni = new Boolean();


	testpps = checkppsn();
	testdni = checkdni();

	if(testdni == true || testpps == true)
	{

		if(testdni==true)
		{
			alert("Valid ID Enjoy your discount!");
			document.getElementById('discount').innerHTML="Felicidades su identificación es válida! Disfruta de tu descuento"
			document.getElementById('discountY/N').innerHTML="valid dni -%10";
		}

		if(testpps==true)
		{
			document.getElementById('discount').innerHTML="Comhghairdeas bhfuil do id bailí! Bain sult as do lascaine"
		}


		alert("Valid ID Enjoy your discount!");
		document.getElementById('price').innerHTML="Total Price: &euro;"+ (totalprice -(totalprice/10));
		document.getElementById('discountY/N').innerHTML="valid ppsn -%10";

	}
	else
	{
		alert("Invalid ID no discount for you!");
		document.getElementById('price').innerHTML="Total Price: &euro;"+ totalprice;
	}

}


function validateTel()
{

var validtel = true;

var mobilenumber = document.getElementById('tel').value;
    if ((mobilenumber==null) || (mobilenumber==""))
	{
	alert("There must be digits entered");
	validtel= false;
	}

	if (mobilenumber.length != 10)
	{
	alert("Number must be 10 digits long");
	validtel=false;
	}

	if (mobilenumber.slice(0,2) != "08")
	{
	alert("Number must begin with 08")
	validtel=false;
	}


	var i = mobilenumber.slice(2,3);

	if (! ((i=="3") || (i=="5") || (i=="6") || (i=="7"))  )
	{
		alert("08 must be followed by either 3, 5, 6, 7");
		validtel=false;
	}


	var count = 0;
	for (var j=0;j<3;j++)
	{
		i = parseInt(mobilenumber.slice(j,j+1));
		count = count + i;
	}
	count = (count + 1);
	count = (count / 2);

	i = parseInt(mobilenumber.slice(9,10), 10);
	if (!(i == count))
	{
		validtel=false;
	}

	return validtel;
}


function validateCC()
{

var total = 0;
var n = 0;
var validcc = true;


var cardNumber = document.getElementById('ccnum').value;
if (cardNumber.length != 16)
	{
	validcc = false;
	}

	var firstArray = new Array();
	var secondArray = new Array();

	for (var i=0;i < 8;i++){


		firstArray[i] = parseInt(cardNumber.slice(n,n+1), 10) * 2;
		if (firstArray[i] >= 10)
		{
			firstArray[i] = firstArray[i]-9;
		}
		n++;
		secondArray[i] = parseInt(cardNumber.slice(n,n+1), 10);
		n++;
	}
	for(var ii=0; ii < firstArray.length; ii++)
	{
	total += firstArray[ii];
	total += secondArray[ii];
	}
	total = total % 10;
	if (total != 0)
	{
		validcc = false;
	}

	return validcc;
}

function validateForm()
{
    var valid = true;
	var testtel = false;
	var testcc = false;

	testcc= validateCC();
	testtel = validateTel();


    if (testtel == false)
        {
            alert('Please enter a valid telephone number');
            document.getElementById('tel').style.background='yellow';
            document.getElementById('tel').style.border="solid red 2px";
            valid = false;

        }

    if (testcc==false)
        {
            alert('Please enter a valid credit card');
            document.getElementById('ccnum').style.background='yellow';
            document.getElementById('ccnum').style.border="solid red 2px";
            valid = false;

        }



    return valid;

}

</script>
