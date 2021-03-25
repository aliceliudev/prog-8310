$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	/*
	$(":radio").change(
	
	   function() {
	
	  var radioBnt = $(":radio:checked").val();
	  if (radioBnt == "")
	
	
	
	
	
	   }  // end function
	);  //end change
	*/

	$("#reservation_form").submit(
		function(event) {

			var isValid = true;

			//validate the email entry with a regular expression

			var email = $("#email").val().trim();

			if (email == "") {
				$("#email").next().text("This field is required.");
				isValid = false;
			}
			else if (!emailPattern.text(email)) {
				$("#email").next().text("You must enter a valid email address.");
				isValid = false;

			}

			else {
				$("#email").next().text("");

			}

			$("#email").val(email);  // return the trimmed email address

			// validate the nights

			var nightNum = $("#nights").val().trim();
			if (isNaN(nightNum) == true) {

				$("#nights").val().text("You must enter a number for the nights!");
				isValid = false;
			}

			else {
				$("#nights").next().text("");
			}
			$("#nights").val(nightNum);

			//Validate Arrive date

			var arriveDate = $("#arrival_date").val().trim();
			if (arriveDate == "") {

				$("#arrival_date").next().text("This field is required.");

				isValid = false;

			}
			else {
				$("#arrival_date").next().text("");
			}

			$("#arrival_date").val(arriveDate);






			//prevent the submission of the form if any entries are invalid

			if (isValid == false) {
				event.preventDefault();
			}



		}





















	);  //end submit











}); // end ready

