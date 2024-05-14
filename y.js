var urlParams = new URLSearchParams(location.search);
var source;
var display;


// log the visit
	
var source = "";
var referrer = "";

if(urlParams.has('Source')){
	source = urlParams.get('Source');	
}

if(document.referrer && 0 !== document.referrer.length){
	referrer = new URL(document.referrer).hostname;
}

var site = "HomePage"
var zapier = "https://hooks.zapier.com/hooks/catch/2629410/37sj45d/silent/?site=" + site + "&source=" + source + "&referrer=" + referrer;
// log the redirect
//fetch(zapier).then(data => {
//	console.log("Sent to zapier" + data);
//});

if(urlParams.has('Join')){
	window.stop();
	var label = urlParams.get('label');
	var id = urlParams.get('id');
	var joinUrl = "https://joinanytimefitnesspresale1.clubwise.com/angel/pos.asp";
	var seed = id + ",9789";
	var token = btoa(seed);
	var customUrl = joinUrl + "?d=" + token;
	const zapier = "https://hooks.zapier.com/hooks/catch/2629410/3xvcjpq/silent/?id=" + id + "&label=" + label + "&url=" + customUrl;
	// log the redirect
	fetch(zapier).then(data => {
		console.log("Sent to zapier" + data);
   	 })
	window.location.href = customUrl;
}

window.addEventListener('load', function() {

	var imgElement = document.querySelector('img[title="Anytime-Fitness-Gym-1200×800"]');
	// Check if the element was found
	if (imgElement) {
		console.log("IMG element found with title 'Anytime-Fitness-Gym-1200×800'");
		// Get the parent element
		var parentDiv = imgElement.parentNode;
	
		// Replace the content of the parent element
		parentDiv.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/BniPPBkoTjw?si=WqHJyUj7kgOZOsww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
	}
	else{
		console.log("No IMG element found with title 'Anytime-Fitness-Gym-1200×800'");
	}
	
	var tourParams = "?utm_source="+source;
	var tourLink = "https://calendly.com/atf-angel/club-tour" + tourParams;
	
	var newDescription = `
		Our Premium 24 Hour gym is <b>NOW OPEN</b> in London - Angel, Islington! 
			<br><br>
			The next 100 joiners get the fantastic price of just <span class="h5">£35.95 per month</span>. <h5><a href="https://joinanytimefitnesspresale1.clubwise.com/angel/pos.asp">Click here to join</a></h5> and take advantage of this offer before it's too late!
			<br><br>
			Pop in any time, and see why we are already Angel Islington's best rated gym on Google.
			<br><br>
			We have brand new high end equipment, including 8 squat racks, 4 studios, functional training space and lots more. Our 50+ classes are included in your membership as is 24/7 access to all 5000 gyms around the world.
			<br><br>
			You can find us located just around the corner of Angel Tube Station on City Road, London, EC1V 1LR
			<br><br>
			<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1475.7914288374914!2d-0.1051937412932726!3d51.532010220378226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sanytime%20fitness%20angel!5e0!3m2!1sen!2suk!4v1714348973258!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<br><br>`;
	
	var descriptionElement1 = document.querySelector('div[data-id="79dde3fb"]');
	if (descriptionElement1) {
		console.log("DIV element found with data-id '79dde3fb'");
		descriptionElement1.innerHTML = newDescription;
	}
	else{
		console.log("No DIV element found with data-id '79dde3fb'");
	}
	
	var descriptionElement2 = document.querySelector('div[data-id="fc53e6e"]');
	if (descriptionElement2) {
		console.log("DIV element found with data-id 'fc53e6e'");
		descriptionElement2.innerHTML = newDescription;
	}
	else{
		console.log("No DIV element found with data-id 'fc53e6e'");
	}
  
});
