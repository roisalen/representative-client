function startApp() {
	$.get("http://127.0.0.1:8080/organisations", function (response) {
		console.log(response);
	})
}


document.onload = startApp;

$.get("http://127.0.0.1:8080/organisations", function (response) {
		console.log(response);
	})