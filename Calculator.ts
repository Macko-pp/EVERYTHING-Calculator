function calc(var1, modifier, var2, var3) {
	// make var3 default to null if not passed
	var2 = var2 || null;
	var3 = var3 || null;

	let result;
	let resultFormat;
	
	if (modifier === "+") {
		result = var1 + var2;
		resultFormat = var1 + " + " + var2 + " = " + result;
	}
	
	else if (modifier === "-") {
		result = var1 - var2;
		resultFormat = var1 + " - " + var2 + " = " + result;
	}
	
	else if (modifier === "x" || modifier === "*") {
		result = var1 * var2;
		resultFormat = var1 + " x " + var2 + " = " + result;
	}
	
	else if (modifier === "/" || modifier === "÷") {
		result = var1 / var2;
		resultFormat = var1 + " ÷ " + var2 + " = " + result;
	}

	else if (modifier === "^") {
		result = Math.pow(var1, var2);
		resultFormat = var1 + " ^ " + var2 + " = " + result;
	}

	else if (modifier === "%") {
		result = (var1 / var2) * 100 + "%";
		resultFormat = var1 + " % " + var2 + " = " + result;
	}

	else if (modifier === "√") {
		result = Math.sqrt(var1);
		resultFormat = "√" + var1 + " = " + result;
	}

	else if (modifier === "³√") {
		result = Math.cbrt(var1);
		resultFormat = "³√" + var1 + " = " + result;
	}

	else if (modifier === "△") {
		result = (var1 * var2) / 2
		resultFormat = var1 + " △ " + var2 + " = " + result;
	}

	else if (modifier === "◬") {
		result = ((var1 * var2) / 2) * var3;
		resultFormat = 'The Volume of ◬ is ' + result + "x³";
	}

	else if (modifier === "◬") {
		result = ((var1 * var2) / 2) * var3;
		resultFormat = 'The Volume of ❑ is ' + result + "x³";
	}

	else if (modifier === "❑") {
		result = (var1 * var2) * var3;
		resultFormat = 'The Volume of ❑ is ' + result + "x³";
	}

	else if (modifier === "⊿") {
		result = Math.sqrt(Math.pow(var1, 2) + Math.pow(var2, 2));
		resultFormat = "Hypotenuse of " + var1 + " and " + var2 + " = " + result;
	}

	else if (modifier === "Mi-Km") {
		result = (var1 * 1.609) + "km";
		resultFormat = var1 + "mi = " + result + "km";
	}

	else if (modifier === "Km-Mi") {
		result = (var1 / 1.609) + "mi";
		resultFormat = var1 + "km = " + result + "mi";
	}

	else if (modifier === "Ft-M") {
		result = (var1 / 3.281) + "m";
		resultFormat = var1 + "ft = " + result + "m";
	}

	else if (modifier === "M-Ft") {
		result = (var1 * 3.281) + "ft";
		resultFormat = var1 + "m = " + result + "ft";
	}

	else if (modifier === "Cm-In") {
		result = (var1 / 2.54) + "in";
		resultFormat = var1 + "cm = " + result + "in";
	}

	else if (modifier === "In-Cm") {
		result = (var1 * 2.54) + "cm";
		resultFormat = var1 + "in = " + result + "cm";
	}

	else if (modifier === "F-C") {
		result = ((var1 - 32) * 5 / 9) + "°C";
		resultFormat = var1 + "°F = " + result + "°C";
	}

	else if (modifier === "C-F") {
		result = ((var1 * 9 / 5) + 32) + "°F";
		resultFormat = var1 + "°C = " + result + "°F";
	}

	else if (modifier === "Kg-Lb") {
		result = (var1 / 0.45359237) + "lb";
		resultFormat = var1 + "kg = " + result + "lb";
	}

	else if (modifier === "Lb-Kg") {
		result = (var1 * 0.45359237) + "kg";
		resultFormat = var1 + "lb = " + result + "kg";
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
