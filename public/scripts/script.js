var projects = [
  {
    title: 'Henchman',
    gif: '../images/HenchmanGif.gif',
    description: 'A decoupled single-page app built to help keep a D&D Dungeon Master\'s gameplay streamlined and organized. Built with React, PostgreSQL, Facebook OAuth, Node.js, and Express.',
    url: 'https://dmhenchman-8420e.firebaseapp.com/'
  },
  {
    title: 'Bubble Trouble',
    gif: '../images/BubbleTroubleGif.gif',
    description: 'An addictive game built for mobile - pop as many bubbles as you can before the timer runs out! Built using Unity, C#, and Xcode.',
    url: 'https://bubble-trouble-61c5c.firebaseapp.com/#/'
  },
  {
    title: 'BounceAround',
    gif: '../images/BounceAroundGif.gif',
    description: 'Plan the itinerary for your upcoming trip using a map of local restaurants/attractions. Built with Node.js, Express, PostgreSQL, Bootstrap, OAuth, and Google APIs.',
    url: 'https://bouncearound.herokuapp.com/'
  },
  {
    title: 'Candidate Watch 2016',
    gif: '../images/CandidateWatchGif.gif',
    description: 'Get a side-by-side comparison of the social media and news coverage of your presidential candidates and your congress members. Built with JavaScript, jQuery, custom CSS, Facebook and Twitter embedding, and several news APIs.',
    url: 'https://candidate-watch.firebaseapp.com/'
  },
  {
    title: 'Shake Shop',
    gif: '../images/ShakeShopGif.gif',
    description: 'A shopping cart app built with AngularJS. Filter through your milkshake choices, add them to your cart, and view the cart for your order total!',
    url: 'https://shake-shop.firebaseapp.com/'
  },
  {
    title: 'Pok&eacutemon Node',
    gif: '../images/PokemonNode.gif',
    description: 'Create pokemon, assign them to trainers, and battle them in a gym! This app is a CRUD database showcase using Node.js, Knex.js, Express, and PostgreSQL.',
    url: 'https://pokemon-node.herokuapp.com/'
  }
];

$(document).ready(function (){

  $(".collapsed").click(function() {
    $(".navbar-collapse").toggle('hide');
  });

  $("#about-link").click(function (){
    $(window).scrollTo($("#about"), 800);
  });

  $("#down-arrow").click(function (){
    $(window).scrollTo($("#about"), 800);
  });

  $("#projects-link").click(function (){
    $(window).scrollTo($("#projects"), 800);
  });

  $("#contact-link").click(function (){
    $(window).scrollTo($("#contact"), 800);
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });
  $('#projContainer').append("<div class='project'><h3 class='projTitle'><a href=" + projects[0].url + " target='_blank'>" + projects[0].title + "</a></h3><a href=" + projects[0].url + " target='_blank'><img class='projGif' src=" + projects[0].gif + " alt='No image available'/></a><div class='projDescription'>" + projects[0].description + "</div></div>");
  $('#projContainer').append("<div class='project'><h3 class='projTitle'><a href=" + projects[1].url + " target='_blank'>" + projects[1].title + "</a></h3><a href=" + projects[1].url + " target='_blank'><img class='projGifBubble' src=" + projects[1].gif + " alt='No image available'/></a><div class='projDescription'>" + projects[1].description + "</div></div>");
  for (var i = 2; i < projects.length; i++) {
    // $('#projContainer').append("<div class='project'><h3 class='projTitle'><a href=" + projects[i].url + " target='_blank'>" + projects[i].title + "</a></h3><img class='projGif' src=" + projects[i].gif + " alt='No image available'/><div class='projDescription'>" + projects[i].description + "</div></div>");
    $('#projContainer').append("<div class='project'><h3 class='projTitle'><a href=" + projects[i].url + " target='_blank'>" + projects[i].title + "</a></h3><a href=" + projects[i].url + " target='_blank'><img class='projGif' src=" + projects[i].gif + " alt='No image available'/></a><div class='projDescription'>" + projects[i].description + "</div></div>");
  }


});
