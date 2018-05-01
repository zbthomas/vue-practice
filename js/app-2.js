/*
	JS Strategy
	Store the pieces of this template so that 
	they can be inserted on the fly whereever we want themto be.
	Pros for this would be better easier to manage pieces,
	and less redundancy.
*/


// start app
var app = new Vue({
  el: '#landing-page',
  data: {
  	menuItems: [
	  	{title: 'Sign up', subtitle: 'To receive the latest updates', href: '#sign-up'},
	  	{title: 'Our Process', subtitle: 'Answers to your questions', href: '#our-process'},
	  	{title: 'Gallery', subtitle: 'View photos and video', href: '#gallery'}
  	],
  	address: '8024 Calvin Hall Rd.<br>Indian Land, SC 28277',
  	hours: 'Hours: 8:00AM - 5:00PM',
  	aboutCard: [
	  {title: 'About', subtitle: 'A few thing to know', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ullamcorper dui, in mattis libero. Curabitur eu diam augue. Maecenas blandit elementum vulputate. Etiam sollicitudin urna vel est tempus condimentum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ullamcorper dui, in mattis libero. Curabitur eu diam augue.</p>' }
  ],
  factsCard: [
	  {title: 'Facts', subtitle: 'What makes us so good', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ullamcorper dui, in mattis libero. Curabitur eu diam augue.</p>', 
		  factList: [
		  	{className: 'message', fact: 'Lorem ipsum dolor sit amet vel est'},
		  	{className: 'chat', fact: 'Lorem ipsum vel est tempus urna'},
		  	{className: 'message', fact: 'Lorem ipsum dolor sit amet vel est'}
		  ]}
  ],
  locationCard: [
	  {title: 'Location', subtitle: 'We welcome you'}
  ]

  }
})


/*Google Map instance*/
let map;
let marker;
let mapLocation = {lat: 34.998791, lng: -80.871305};
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
     center: mapLocation,
     zoom: 17
	});
    marker = new google.maps.Marker({
	   position: mapLocation,
	   map: map
    });
}