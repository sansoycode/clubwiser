var iframeHtml="<iframe id=\"the-iframe\" frameborder=\"0\" style=\"position: fixed;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;\"></iframe>"
window.stop()
document.body.innerHTML=""
document.body.innerHTML=iframeHtml;
const iframe = document.getElementById('the-iframe');
var urlParams = new URLSearchParams(location.search);
var source;
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
if(urlParams.has('Source')){
	source = urlParams.get('Source');
}
var landingPageUrl = "http://anytimefitnesswoolwich.lpages.co/angel-general-enquiry/";
if(source){
    landingPageUrl = landingPageUrl + "?Source=" + source
}
iframe.src = landingPageUrl;