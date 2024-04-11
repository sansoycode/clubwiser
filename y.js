var urlParams = new URLSearchParams(location.search);
var source;
var display;

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

if(urlParams.has('Fwd')){
	window.stop();
	var label = urlParams.get('label');
	var id = urlParams.get('id');
	var url = urlParams.get('url');
	//var tracker = "https://sansoy.co.uk/link.php?id="+id+"&label="+label+"&url="+url;
	const zapier = "https://hooks.zapier.com/hooks/catch/2629410/3xvcjpq/silent/?id=" + id + "&label=" + label + "&url=" + url;
	// log the redirect
	fetch(zapier).then(data => {
		console.log("Sent to zapier" + data);
    })
	window.location.href = url;
}

if(urlParams.has('Source') || urlParams.has('Land')){
	
	var landingPages = [
	  "https://anytimefitnesswoolwich.lpages.co/angel-general-enquiry/", // standard
	  "https://anytimefitnesswoolwich.lpages.co/anytime-fitness-angel-promotion-price/", // displays price 
	  "https://anytimefitnesswoolwich.lpages.co/anytime-fitness-angel-promotion-discount/", // displays discount percent
	  "https://afangelv2.social-fitness.co/coming-soon-ga" // social fitness landing page
	];
	
	var iframeHtml="<iframe id=\"the-iframe\" frameborder=\"0\" style=\"position: fixed;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;\"></iframe>"	
	window.stop()
	document.body.innerHTML=""
	document.body.innerHTML=iframeHtml;
	const iframe = document.getElementById('the-iframe');
	
	var landingPageUrl = landingPages[0];
	
	if(urlParams.has('Display')){
		display = urlParams.get('Display');
	}
	if(display){
		if(display.indexOf("P")>=0){
			// price is shown
			landingPageUrl = landingPages[1];	
		}
		if(display.indexOf("D")>=0){
			// discount is shown
			landingPageUrl = landingPages[2];	
		}
		if(display.indexOf("R")>=0){
			// random display
			landingPageUrl = landingPages[Math.floor(Math.random()*landingPages.length)];
		}
		if(display.indexOf("L")>=0){
			// social fitness landing page
			landingPageUrl = landingPages[3] + location.search;
		}
	}
	
	source = urlParams.get('Source');	
	if(source){
		landingPageUrl = landingPageUrl + "?Source=" + source
	}
	iframe.src = landingPageUrl;
}


// dont need to track the referrer for now
/*
if(document.referrer && 0 !== document.referrer.length){
	source = new URL(document.referrer).hostname;
	if(source.indexOf("google")>0){
		source = "Google Search";	
	}
	if(source.indexOf("bing")>0){
		source = "Bing Search";	
	}
	if(source.indexOf("yahoo")>0){
		source = "Yahoo Search";	
	}
	if(source.indexOf("facebook")>0){
		source = "Facebook";	
	}
}
*/
