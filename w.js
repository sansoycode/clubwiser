
var htmlTxt='<div id=google-review-section></div>\
 <br/>\
<table style="border-collapse: collapse;margin-left:auto;margin-right:auto;">\
<tr>\
	<td style="padding:0; margin:0;" align="center">\
		<img width="97" height="50"  src="https://user-images.githubusercontent.com/36538998/47352192-55182000-d6b1-11e8-8926-7168172e4d21.png"/>\
		<span style="display: block; color:#ea7a02; font-size: 26px;margin-top: 0px;margin-bottom: 0px;" class="rating_score">4.6</span>\
		<span style="display: block; color:black; font-size: 10px;margin-top: 0px;margin-bottom: 0px;" class="rating_count"><a href="https://www.google.co.uk/search?q=anytime+fitness+woolwich&oq=anytime+fitne&ie=UTF-8#lrd=0x47d8a8ebdc390d8f:0xa854c7ba75a1d1e9,1,,,">62 Reviews</a></span>\
	</td>\
	<td style="width:100px">\
	</td>\
	<td style="padding:0; margin:0;" border="0" align="center">\
		<img width="97" height="50"  src="https://user-images.githubusercontent.com/36538998/47352191-55182000-d6b1-11e8-992c-6edb8156df91.png"/>\
		<span style="display: block; color:#ea7a02; font-size: 26px;margin-top: 0px;margin-bottom: 0px;" class="rating_score">4.9</span>\
		<span style="display: block; color:black; font-size: 10px;margin-top: 0px;margin-bottom: 0px;" class="rating_count"><a href="https://www.facebook.com/pg/AnytimeFitnessWoolwich/reviews">57 Reviews</a></span>\
	</td>\
</tr>\
</table>\
<hr>\
<h3>What is Anytime Fitness?</h3>\
Anytime Fitness operates over 4,000 premium, 24 hour health and fitness facilities in 30 countries around the world.<br/>\
We provide high end equipment and a first class workout environment without all the frills of more expensive clubs. This means we can offer a great value membership.<br/>\
We are committed to providing a non-intimidating workout environment with an expert team to help you achieve your goals.<br/>\
Our clubs are arranged and located to enable a quick and efficient workout, with minimal wait times for equipment. Our quality facilities attract quality members, who often go on to participate in fitness events and social activities outside of the club as well as inside!<br/>\
<br/>\
<h3 id="aboutUs">What is the Woolwich club like?</h3>\
Feel free to visit us any time and take a look at our premium club, offering:<br/><br/>\
<ul>\
<li>Resistance machines and internet and tv enabled cardio equipment from Life Fitness</li>\
<li>A 500 square foot spin and class studio</li>\
<li>3 Power cages from Hammer Strength and Smith Machine</li>\
<li>Hammer Strength Olympic Deadlifting Platform</li>\
<li>1.5 tonnes of plates</li>\
<li>Free weights from Jordan Fitness with dumbell weights up to 50Kg</li>\
<li>A range of free, instructor led studio classes (including Yoga, Spin, Pilates, Boxing and more)</li>\
<li>Personal Training</li>\
<li>A Functional Training zone consisting of a customised wall rig for TRX training and more</li>\
<li>Virtual instructor technology for a huge range of on demand fitness classes</li>\
<li>Multiple stretch areas</li>\
<li>Individual bathrooms with shower, W.C, sink, hand and hair dryers for your privacy - cleaned frequently</li>\
<li>Multiple ventilation and air conditioning systems for precise temperature control and air scent</li>\
<li>Free Tesco parking for members (worth £5 per visit)</li>\
<li>Free member app, giving you access to 10,000 workouts and MapMyFitness MVP subscription worth £144 per year</li>\
<li>Lots more!</ul>\
<br/>\
<h3>Where is Anytime Fitness Woolwich ?</h3>\
We are located on the ground floor of Tesco Extra in Woolwich Town centre, opposite Gordon Square and moments from Woolwich Arsenal station. There is free parking for members (and visitors) inside the Tesco building - using our registration kiosk inside the club.<br/>\
You can also jump onto one of the many buses heading toward Woolwich town centre.<br/>\
<img style="width:300px;height:191px;margin: auto; display: block;margin-top: 20px;" src="https://user-images.githubusercontent.com/36538998/47352216-5fd2b500-d6b1-11e8-81b7-2f28858fb78c.png"/>\
 <br/>\
<h3>What are the opening hours?</h3>\
We are open 24 hours a day, 7 days a week, 365 days per year! Please see our staffed times above for guest visits and tours.<br/>\
 <br/>\
<hr>\
<div id=timetable-section>\
<h2 id="timetable" class="headline text-center">Class Timetable</h2>\
All our classes are free to attend and can be booked online or through our free mobile app for Android and iPhone. Classes are led by qualified instructors who are committed to ensuring \
you have a great workout and meet great friends along the way!\
 <br/>\
 <br/>\
	<div class="timetable-bg">\
	<table class="timetable-table" id="timetable-id"></table>\
	</div>\
</div>\
'

var divsToUpdate = document.getElementsByClassName("page-content");
for(var i = 0; i < divsToUpdate.length; i++){
	divsToUpdate[i].innerHTML = htmlTxt;
}


// add google review css to page
var cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://cdn.jsdelivr.net/gh/sansoycode/clubwiser@4.6/google-places.css';
document.getElementsByTagName('head')[0].appendChild(cssLink);

var googleDivToUpdate = document.getElementById("google-review-section");
var reviewPanel='<h2 id="reviews" class="headline text-center">What Our Members Say:</h2>\
<div id="google-reviews"></div>'

reviewPanel+='\
<div class="review-meta"><span class="review-author">Amanda Howard</span></div>\
<div class="review-stars"><ul><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li></ul></div>\
<div style="width:100%;"><span class="review-text">\
"I started at Anytime fitness in woolwich in September last year After a friend recommended the gym to me. Sally and her team are fantastic, they are all happy to help and push you to achieve your goals. They had me doing things I didn\'t think I could do. There are lots of classes to choose from and the app on your phone to book them is great. such a welcoming atmosphere and friendly gym I ve ever been too. Highly recommend it."\
</span></div>'

reviewPanel+='\
<div class="review-meta"><span class="review-author">Egle Zalpyte</span></div>\
<div class="review-stars"><ul><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li></ul></div>\
<div style="width:100%;"><span class="review-text">\
"I am a member of this gym over a year! Perfect location, very clean and well organised gym! Found staff very friendly, especially Heather she is a superstar - very helpful! Really enjoy Lawrence body pump class! If you don\'t know about it guys - you should of try! Anytime Fitness Woolwich"\
</span></div>'

reviewPanel+='\
<div class="review-meta"><span class="review-author">Michael Costello</span></div>\
<div class="review-stars"><ul><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li></ul></div>\
<div style="width:100%;"><span class="review-text">\
"I\'ve been a member for 6 months and love Anytime Woolwich. The equipment is great, people are nice and my PT Scott is exceptional, motivating and very knowledgeable - 5 stars all round!"\
</span></div>'

reviewPanel+='\
<div class="review-meta"><span class="review-author">Alison Walker</span></div>\
<div class="review-stars"><ul><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li></ul></div>\
<div style="width:100%;"><span class="review-text">\
"This is a brilliant gym. Always clean, got great equipment and the staff are really helpful and friendly. I\'ve done a few of the classes too and they have been great. Would definitely recommend!"\
</span></div>'

reviewPanel+='\
<div class="review-meta"><span class="review-author">Heather Quelch</span></div>\
<div class="review-stars"><ul><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li><li><i class="star"></i></li></ul></div>\
<div style="width:100%;"><span class="review-text">\
"Great gym, personal team with great service. I asked for some specific equipment and had it within the week! So glad I swapped fitness first for this."\
</span></div>'


reviewPanel +='<div style="margin: auto; text-align:center; width:100%; display: block;">\
<a href="https://www.google.co.uk/search?q=anytime+fitness+woolwich&oq=anytime+fitne&ie=UTF-8#lrd=0x47d8a8ebdc390d8f:0xa854c7ba75a1d1e9,1,,," target="_blank">See All Our Google Reviews</a>\
</div>'

var newReviewDiv = document.createElement("div");
newReviewDiv.innerHTML = reviewPanel;
googleDivToUpdate.appendChild(newReviewDiv);


var timetable = {  
   "days":[  
      {  
         "day":"Monday",
         "classes":[  
            {  
               "name":"Sculpt Cycle",
               "location":"Studio",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"06:15",
               "mins":45,
               "cph":30
            },
            {  
               "name":"2 Fit 2 Quit",
               "location":"Functional Area",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"13:00",
               "mins":30,
               "cph":30
            },
            {  
               "name":"Vinyasa Yoga",
               "location":"Studio",
               "instructor":"Krista",
               "virtual":false,
               "start_time":"18:30",
               "mins":60,
               "cph":30
            },
            {  
               "name":"Lean Legs & Abs",
               "location":"Functional Area",
               "instructor":"Amanda",
               "virtual":false,
               "start_time":"18:30",
               "mins":45,
               "cph":30
            },
            {  
               "name":"Strongman / Woman",
               "location":"Functional Area",
               "instructor":"Katie",
               "virtual":false,
               "start_time":"19:30",
               "mins":30,
               "cph":30
            }
         ]
      },
      {  
         "day":"Tuesday",
         "classes":[  
            {  
               "name":"Metabolic Mayhem",
               "location":"Studio",
               "virtual":true,
               "start_time":"06:30",
               "mins":50,
               "cph":0
            },
            {  
               "name":"HIIT",
               "location":"Functional Area",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"13:00",
               "mins":30,
               "cph":0
            },
            {  
               "name":"Ab Attack",
               "location":"Functional Zone",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"18:10",
               "mins":30,
               "cph":0
            },
            {  
               "name":"Candlelit Flow Yoga",
               "location":"Studio",
               "instructor":"Liloo",
               "virtual":false,
               "start_time":"18:45",
               "mins":60,
               "cph":30
            },
            {  
               "name":"Advanced Boxing",
               "location":"Studio",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"19:15",
               "mins":45,
               "cph":30
            }
         ]
      },
      {  
         "day":"Wednesday",
         "classes":[  
            {  
               "name":"Cycle",
               "location":"Studio",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"06:15",
               "mins":45,
               "cph":30
            },
            {  
               "name":"Strongman / Woman",
               "location":"Functional Zone",
               "instructor":"Katie",
               "virtual":false,
               "start_time":"13:00",
               "mins":30,
               "cph":30
            },
            {  
               "name":"Boxercise",
               "location":"Functional Zone",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"18:30",
               "mins":45,
               "cph":30
            },
            {  
               "name":"Zumba",
               "location":"Studio",
               "instructor":"Jana",
               "virtual":false,
               "start_time":"18:30",
               "mins":45,
               "cph":30
            },
            {  
               "name":"Pilates",
               "location":"Studio",
               "instructor":"Edyta",
               "virtual":false,
               "start_time":"19:20",
               "mins":45,
               "cph":30
            },
            {  
               "name":"2 Fit 2 Quit",
               "location":"Functional Area",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"19:30",
               "mins":30,
               "cph":30
            }
         ]
      },
      {  
         "day":"Thursday",
         "classes":[  
            {  
               "name":"Anytime Pump",
               "location":"Studio",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"06:15",
               "mins":45,
               "cph":30
            },
            {  
               "name":"Ab Attack",
               "location":"Functional Area",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"13:00",
               "mins":30,
               "cph":30
            },
            {  
               "name":"Zumba",
               "location":"Studio",
               "instructor":"Jana",
               "virtual":false,
               "start_time":"18:30",
               "mins":45,
               "cph":30
            },
            {  
               "name":"HIIT",
               "location":"Functional Area",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"18:30",
               "mins":30,
               "cph":30
            },
            {  
               "name":"Vinyasa Flow Yoga",
               "location":"Studio",
               "instructor":"Liloo",
               "virtual":false,
               "start_time":"19:30",
               "mins":60,
               "cph":30
            }
         ]
      },
      {  
         "day":"Friday",
         "classes":[  
            {  
               "name":"Fitness 360",
               "location":"Studio",
               "virtual":true,
               "start_time":"06:30",
               "mins":50,
               "cph":0
            },
            {  
               "name":"Stretch & Fix",
               "location":"Functional Area",
               "instructor":"Katie",
               "virtual":false,
               "start_time":"13:00",
               "mins":30,
               "cph":0
            },
            {  
               "name":"Circuit Crazy",
               "location":"Studio",
               "virtual":true,
               "start_time":"18:45",
               "mins":45,
               "cph":0
            }
         ]
      },
      {  
         "day":"Saturday",
         "classes":[  
            {  
               "name":"Cycle and Abs",
               "location":"Studio",
               "instructor":"Edyta",
               "virtual":false,
               "start_time":"09:15",
               "mins":45,
               "cph":30
            },
            {  
               "name":"HIIT",
               "location":"Functional Area",
               "instructor":"Davin",
               "virtual":false,
               "start_time":"09:30",
               "mins":30,
               "cph":30
            },
            {  
               "name":"Power Yoga",
               "location":"Studio",
               "instructor":"Liloo",
               "virtual":false,
               "start_time":"10:00",
               "mins":60,
               "cph":30
            },
            {  
               "name":"Insanity",
               "location":"Studio",
               "instructor":"Peter",
               "virtual":false,
               "start_time":"11:15",
               "mins":45,
               "cph":30
            }
         ]
      },
      {  
         "day":"Sunday",
         "classes":[  
            {  
               "name":"Sunday Yoga",
               "location":"Studio",
               "instructor":"Krista",
               "virtual":false,
               "start_time":"09:30",
               "mins":60,
               "cph":30
            },
            {  
               "name":"Anytime Combat",
               "location":"Functional Area",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"10:30",
               "mins":45,
               "cph":30
            },
            {  
               "name":"Anytime Pump",
               "location":"Functional Area",
               "instructor":"Menay",
               "virtual":false,
               "start_time":"11:30",
               "mins":45,
               "cph":30
            }
         ]
      }
   ]
};

var thead = document.createElement('thead');

var tbody = document.createElement('tbody'),tr, td;
tr = document.createElement('tr');
td = document.createElement('td');

var maxClasses=0;
for(var i = 0; i < timetable.days.length; i++) {
  var day = timetable.days[i];
  var th = document.createElement("th");
  th.className='timetable-day'
  th.innerHTML=day.day;
  thead.append(th);
  var thisClasses = day.classes.length;
  if(thisClasses>maxClasses){
	maxClasses=thisClasses;
  }
}

for(var j = 0; j < maxClasses; j++) {
  tr = document.createElement('tr');
  tbody.append(tr);
  for(var k = 0; k < timetable.days.length; k++) {
    var day = timetable.days[k];
	td = document.createElement('td');
	td.className='timetable-td';
	if(day.classes.length>j){
		var clazz = day.classes[j];
		td.innerHTML='<span class="timetable-name">'+clazz.name+'</span><span class="timetable-time">'+clazz.start_time+'</span><span class="timetable-location">'+clazz.location+'</span><span class="timetable-duration">'+clazz.mins+' min</span><span>';
	}
	else{
		td.innerHTML="";
	}
	tr.append(td);
  }
}

var timetableDivToUpdate = document.getElementById("timetable-id");
timetableDivToUpdate.append(thead);
timetableDivToUpdate.append(tbody);

var calendarDiv = document.getElementsByClassName("club-cal");
for(var i = 0; i < calendarDiv.length; i++){
	calendarDiv[i].style.visibility = "hidden"; 
	calendarDiv[i].style.display = "none"; //
}

// append source to enquiry, trial and signup links
// get href from url

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
if(urlParams.has('source')){
	source = urlParams.get('source');
}
if(source){
	var trialLinks = document.querySelectorAll('a[href*="guest_pass.asp"]');
	for (var i = 0; i < trialLinks.length; i++) {
		var trialLink = trialLinks[i];
		trialLink.href += "?Member__Source=" + source;
	}
	var enquiryLinks = document.querySelectorAll('a[href*="enquiry.asp"]');
	for (var i = 0; i < enquiryLinks.length; i++) {
		var enquiryLink = enquiryLinks[i];
		enquiryLink.href += "?Member__Source=" + source;
	}
}


console.log(tbody);
