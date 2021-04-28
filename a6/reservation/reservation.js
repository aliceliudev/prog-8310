$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#reservation_form").submit(
		function(event) {

			var isValid = true;

			$("#arrival_date").focus();

			//Validate Arrive date

			var arriveDate = $("#arrival_date").val().trim();

			var arrivalPattern = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;


			if (arriveDate == "") {

				$("#arrival_date").next().text("This field is required.");

				isValid = false;

			}
			else if (!arrivalPattern.test(arriveDate)) {
				$("#arrival_date").next().text("Enter a valid arrival date.");
				isValid = false;

			}

			else {
				$("#arrival_date").next().text("");
			}

			$("#arrival_date").val(arriveDate);

			// validate the nights

			var nightNum = $("#nights").val().trim();

			if (nightNum == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			}

			else if (nightNum < 1 || nightNum > 366) {
				$("#nights").next().text("The nights should be within 1-365.");
				isValid = false;
			}

			else if (isNaN(parseInt(nightNum))) {
				$("#nights").next().text("Enter a number for the nights!");
				isValid = false;

			}


			else {
				$("#nights").next().text("");
			}
			$("#nights").val(nightNum);


			// Validate the name

			var name = $("#name").val().trim();
			if (name == "") {

				$("#name").next().text("This field is required.");

				isValid = false;

			}
			else {
				$("#name").next().text("");
				$("#name").val(name);
			}


			//validate the email entry with a regular expression

			var email = $("#email").val().trim();
			var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if (email == "") {
				$("#email").next().text("This field is required.");
				isValid = false;
			}
			else if (!emailPattern.test(email)) {
				$("#email").next().text("Enter a valid email address.");
				isValid = false;

			}

			else {
				$("#email").next().text("");

			}

			$("#email").val(email);  // return the trimmed email address

			// Validate the phone number

			var phone = $("#phone").val().trim();
			var phonePattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
			if (phone == "") {

				$("#phone").next().text("This field is required.");

				isValid = false;

			}

			else if (!phonePattern.test(phone)) {
				$("#phone").next().text("Enter a valid phone numer.");
				isValid = false;

			}


			else {
				$("#phone").next().text("");
			}

			$("#phone").val(phone);



			//prevent the submission of the form if any entries are invalid

			if (isValid == false) {
				event.preventDefault();
			}

		}

	);  //end submit

}); // end ready

