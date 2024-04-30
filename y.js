var urlParams = new URLSearchParams(location.search);
var source;

window.onload = function() {
	var imgElement = document.querySelector('img[title="Anytime-Fitness-Gym-1200×800"]');
	// Check if the element was found
	if (imgElement) {
		console.log("IMG element found with title 'Anytime-Fitness-Gym-1200×800'");
		// Get the parent element
		var parentDiv = imgElement.parentNode;
	
		// Replace the content of the parent element
		parentDiv.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/BniPPBkoTjw?si=WqHJyUj7kgOZOsww title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
	}
	else{
		console.log("No IMG element found with title 'Anytime-Fitness-Gym-1200×800'");
	}
	
	var descriptionElement = document.querySelector('div[data-id="79dde3fb"]');
	if (descriptionElement) {
		console.log("DIV element found with data-id '79dde3fb'");
	
		// Replace the content of the element
		descriptionElement.innerHTML = `
	Our Premium 24 Hour gym is opening in London - Angel, Islington on Monday 13th May 2024! 
	<br/><br/>
	We have brand new high end equipment, including 8 squat racks, 4 studios, functional training space and lots more. Our 50+ classes are included in your membership as is 24/7 access to all 5000 gyms around the world.
	<br/><br/>
	The next 100 joiners get the fantastic price of just <span class="h5">£34.95 per month</span>. <a href="https://joinanytimefitnesspresale1.clubwise.com/angel/pos.asp">Click here to join</a> and take advantage of this offer before it's too late!
	<br/><br/>
	We are so confident you will love our beautiful gym, we even offer a 14 day cooling off period. There is no reason not to lock in your promo rate now and give us a try.
	<br/><br/>
	You can find us located just around the corner of Angel Tube Station on City Road, London, EC1V 1LR
	<br/><br/>
	<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1475.7914288374914!2d-0.1051937412932726!3d51.532010220378226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sanytime%20fitness%20angel!5e0!3m2!1sen!2suk!4v1714348973258!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	<br/><br/>`;
		
	}
	else{
		console.log("No DIV element found with data-id '79dde3fb'");
	}
}



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
