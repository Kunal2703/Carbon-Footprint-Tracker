$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();



	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values

			var familyInput = document.getElementById("family").value;
			var petrolInput = document.getElementById("petrol").value;
			var dieselInput = document.getElementById("diesel").value;
			var autoInput = document.getElementById("auto").value;
			var taxisInput = document.getElementById("taxis").value;
			var busInput = document.getElementById("bus").value;
			var autorickshawInput = document.getElementById("autorickshaw").value;
			var trainInput = document.getElementById("train").value;


			var LPGInput = document.getElementById("LPG").value;
			var CNGInput = document.getElementById("CNG").value;
			var ElectricityInput = document.getElementById("Electricity").value;


			var familyScore = "";
			var petrolScore = "";
			var dieselScore = "";
			var autoScore = "";
			var taxisScore = "";
			var busScore = "";
			var autorickshawScore = "";
			var trainScore = "";


			var LPGScore = "";
			var CNGScore = "";
			var ElectricityScore = "";



			if (petrolInput === 0 || petrolInput === "undefined") {
				petrolScore = 0;
			} else {
				petrolScore = familyInput * petrolInput * 2.33;
			}

			if (dieselInput === 0 || dieselInput === "undefined") {
				dieselScore = 0;
			} else {
				dieselScore = familyInput * dieselInput * 2.68;
			}

			if (autoInput === 0 || autoInput === "undefined") {
				autoScore = 0;
			} else {
				autoScore = familyInput * autoInput * 3.06;
			}

			if (taxisInput === 0 || taxisInput === "undefined") {
				taxisScore = 0;
			} else {
				taxisScore = familyInput * taxisInput * 0.31;
			}

			if (busInput === 0 || busInput === "undefined") {
				busScore = 0;
			} else {
				busScore = familyInput * busInput * 0.05;
			}

			if (autorickshawInput === 0 || autorickshawInput === "undefined") {
				autorickshawScore = 0;
			} else {
				autorickshawScore = familyInput * autorickshawInput * 0.05;
			}

			if (trainInput === 0 || trainInput === "undefined") {
				trainScore = 0;
			} else {
				trainScore = familyInput * trainInput * 0.10;
			}




			if (LPGInput === 0 || LPGInput === "undefined") {
				LPGScore = 0;
			} else {
				LPGScore = familyInput * LPGInput * 42.50;
			}

			if (CNGInput === 0 || CNGInput === "undefined") {
				CNGScore = 0;
			} else {
				CNGScore = familyInput * CNGInput * 1.82;
			}

			if (ElectricityInput === 0 || ElectricityInput === "undefined") {
				ElectricityScore = 0;
			} else {
				ElectricityScore = familyInput * ElectricityInput * 0.90;
			}

			
			// calculate scores for each category
			var TransportationScore = petrolScore + dieselScore + autoScore + taxisScore + busScore + autorickshawScore + trainScore; // + gasScore + oilScore;
			var DomesticScore = LPGScore	+ CNGScore + ElectricityScore;
			//var wasteScore = newspaperScore + alumTinScore;

			// calculate total score and round to nearest whole integer
			//totalScore = Math.round(energyScore + travelScore + wasteScore);

			totalScore = (TransportationScore + DomesticScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});

		}

		calculateAndDisplayScore();
	});	
});