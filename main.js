$(document).ready(function() {
	console.log("Ready.");
});

function travel(from, to) {
	$(from).css("display","none");
	$(to).css("display","block");
}
