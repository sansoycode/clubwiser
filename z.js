var urlParams = new URLSearchParams(location.search);
var source = "Web";
var isSearch = false;
var hasSource = false;

if(document.referrer && 0 !== document.referrer.length){
	source = new URL(document.referrer).hostname.toLowerCase();
	if(source.indexOf("google")>=0){
		source = "Google Search";
		isSearch = true;
	}
	if(source.indexOf("bing")>=0){
		source = "Bing Search";	
		isSearch = true;
	}
	if(source.indexOf("yahoo")>=0){
		source = "Yahoo Search";	
		isSearch = true;
	}
/**
	if(source.indexOf("facebook")>=0){
		source = "Facebook";	
	}
	if(source.indexOf("instagram")>0){
		source = "Instagram";	
	}
  	if(source.indexOf("anytimefitness.co")>=0){
		source = "AnytimeFitnessHomepage";	
	}
 **/
}

if(urlParams.has('Source')){
	source = urlParams.get('Source');
	hasSource = true;
}

if(hasSource || isSearch){
	
	var sectionElement = document.querySelector('section[data-id="7e41a3b3"]');
	var formUrl = "https://www.atfpromo.co.uk/websiteform/?Source=" + source;
	if (sectionElement) {
		console.log("Section element found with data-id '7e41a3b3'");

		var higherSectionElement = document.querySelector('section[data-id="648e5ecd"]');
		if (higherSectionElement) {
			var existingFreetrialElement = document.getElementById("freetrial");
			existingFreetrialElement.id = "oldFreetrial";
			
			var newAnchor = document.createElement("a");
			newAnchor.setAttribute("id", "freetrial");
			var sectionParent = higherSectionElement.parentNode;
			sectionParent.insertBefore(newAnchor, higherSectionElement);
		}
		
		sectionElement.innerHTML = '<iframe id="myIframe" src="'+formUrl+'" scrolling="no" onload="resizeIframe()"></iframe>';
	}
	else{
		console.log("No Section element found with data-id '7e41a3b3'");
	}
	
	var mobileSectionElement = document.querySelector('section[data-id="0bed894"]');
	if (mobileSectionElement) {
		console.log("mobile Section element found with data-id '0bed894'");
		mobileSectionElement.parentNode.removeChild(mobileSectionElement);
	}
	else{
		console.log("No mobile Section element found with data-id '0bed894'");
	}
	
	function resizeIframe() {
		var iframe = document.getElementById('myIframe');
		iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
	}
	
	// Optional: Resize the iframe when the content inside it changes
	window.addEventListener('message', function(event) {
		if (event.data && event.data.iframeHeight) {
			var iframe = document.getElementById('myIframe');
			iframe.style.height = event.data.iframeHeight + 'px';
		}
	}, false);
	
}	


