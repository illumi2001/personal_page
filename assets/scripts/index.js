window.onload = () => {
	let clock = document.getElementById('clock');
	let clockText = document.querySelector('#clock span');
	let language = document.getElementById('language');
	
	fetch('https://worldtimeapi.org/api/timezone/America/New_York')
		.then((response) => response.json())
		.then((data) => {
			if (data.datetime == undefined) return;
			let date = new Date(data.datetime.slice(0,-6));
			console.log(data.datetime.slice(0,-6));
			clockText.innerHTML = `${date.toLocaleTimeString()} ${data.abbreviation}`;
			clock.style = "margin-top: 0;";
			language.style = "margin-top: 0; margin-bottom: 0;";
		})
		.catch((error) => console.error);
	
	document.addEventListener("keydown", function(event) {
		if (event.shiftKey && event.code === "KeyL") {
			window.location.href = "/bomp.html";
		}
	});
}