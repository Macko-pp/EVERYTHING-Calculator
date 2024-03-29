function calc(var1, modifier, var2, var3) {
	// make var3 default to null if not passed
	var2 = var2 || null;
	var3 = var3 || null;

	let result;
	
	if (modifier === "+") {
		result = var1 + var2;
		result = result.toFixed(2);
	}
	
	else if (modifier === "-") {
		result = var1 - var2;
		result = result.toFixed(2);
	}
	
	else if (modifier === "x" || modifier === "*") {
		result = var1 * var2;
		result = result.toFixed(2);
	}
	
	else if (modifier === "/" || modifier === "÷") {
		result = var1 / var2;
		result = result.toFixed(2);
	}

	else if (modifier === "^") {
		result = Math.pow(var1, var2);
		result = result.toFixed(2);
	}

	else if (modifier === "%") {
		result = (var1 * var2) / 100;
		result = result.toFixed(2);
		result = `${result}%`
	}

	else if (modifier === "√") {
		result = Math.sqrt(var1);
		result = result.toFixed(2);
	}

	else if (modifier === "³√") {
		result = Math.cbrt(var1);
		result = result.toFixed(2);
	}

	else if (modifier === "△") {
		result = (var1 * var2) / 2
		result = result.toFixed(2);
	}
		
	else if (modifier === "◯") {
		result = Math.PI * var1 ^2
		result = result.toFixed(2);
	}

	else if (modifier === "◬") {
		result = ((var1 * var2) / 2) * var3;
		result = result.toFixed(2);
	}

	else if (modifier === "⬤") {
		result = (4/3) * Math.PI * var1^3;
		result = result.toFixed(2);
	}

	else if (modifier === "❑") {
		result = (var1 * var2) * var3;
		result = result.toFixed(2);
	}

	else if (modifier === "⊿") {
		result = Math.sqrt(Math.pow(var1, 2) + Math.pow(var2, 2));
		result = result.toFixed(2);
	}

	else if (modifier === "፳") {
		function isPrime(num) {
			for (var i = 2; i < num; i++)
				if(num % i === 0) return false;
				return num > 1;
		}

		(isPrime(var1)) ? result = `${var1} is a prime number` : result = `${var1} is not a prime number`;
	}

	else if (modifier === "Mi-Km") {
		result = var1 * 1.609;
		result = result.toFixed(2);
		result = `${result}mi`
	}
	
	else if (modifier === "Km-Mi") {
		result = var1 / 1.609;
		result = result.toFixed(2);
		result = `${result}km`
	}
	
	else if (modifier === "Ft-M") {
		result = var1 / 3.281;
		result = result.toFixed(2);
		result = `${result}m`
	}
	
	else if (modifier === "M-Ft") {
		result = var1 * 3.281;
		result = result.toFixed(2);
		result = `${result}ft`
	}
	
	else if (modifier === "Cm-In") {
		result = var1 / 2.54;
		result = result.toFixed(2);
		result = `${result}"`
	}
	
	else if (modifier === "In-Cm") {
		result = var1 * 2.54;
		result = result.toFixed(2);
		result = `${result}cm`
	}
	
	else if (modifier === "F-C") {
		result = (var1 - 32) * 5 / 9;
		result = result.toFixed(2);
		result = `${result}°C`;
	}
	
	else if (modifier === "C-F") {
		result = (var1 * 9 / 5) + 32;
		result = result.toFixed(2);
		result = `${result}°F`;
	}
	
	else if (modifier === "Kg-Lb") {
		result = var1 / 0.45359237;
		result = result.toFixed(2);
		result = `${result}lb`
	}
	
	else if (modifier === "Lb-Kg") {
		result = var1 * 0.45359237;
		result = result.toFixed(2);
		result = `${result}kg`
	}

	return result;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  	if (!event.target.matches('.dropbtn')) {
    	var dropdowns = document.getElementsByClassName("dropdown-content");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
      		var openDropdown = dropdowns[i];
      		if (openDropdown.classList.contains('show')) {
        		openDropdown.classList.remove('show');
      		}
    	}
  	}
}
