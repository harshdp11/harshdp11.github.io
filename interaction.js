
// Lazy loading images - img
const images = document.querySelectorAll(".lazy-load-image");
const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img = entry.target;
    if($(window).width() < 600)
    {
      img.src = img.src.replace("c_scale,q_50,w_5", "c_scale,q_100,w_900");
      img.srcset = img.srcset.replace("c_scale,q_50,w_5", "c_scale,q_100,w_900");
    }

    else{
      img.src = img.src.replace("c_scale,q_50,w_5", "c_scale,q_100,w_1680");
      img.srcset = img.srcset.replace("c_scale,q_50,w_5", "c_scale,q_100,w_1680");
      
    }
    
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);
images.forEach((img) => {
  imgObserver.observe(img);
});

// Lazy loading images - img small
const images_small = document.querySelectorAll(".lazy-load-small-image");
const imgOptions_small = {};
const imgObserver_small = new IntersectionObserver((entries, imgObserver_small) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img_small = entry.target;
    if($(window).width() < 600)
    {
      img_small.src = img_small.src.replace("c_scale,q_50,w_5", "c_scale,q_100,w_600");
    }

    else{
      img_small.src = img_small.src.replace("c_scale,q_50,w_5", "c_scale,q_100,w_1000");
    }
    
    imgObserver_small.unobserve(entry.target);
  });
}, imgOptions);
images_small.forEach((img_small) => {
  imgObserver_small.observe(img_small);
});

// Animate on scroll
const groups = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = `fadeInUp 0.8s forwards ease-out`;
    	observer.unobserve(entry.target);
    }

    else{
    	entry.target.style.animation = 'none';
    }
  })

})
groups.forEach((group) => {
  observer.observe(group);
});

// hamburger menu interaction
$(document).ready(function(){
    // hamburger menu hide and show
    $('.menu-icon').click(function(){
        $('.menu-expanded').css("opacity", "1");
        // make the menu clickable
        $('.menu-expanded').css("pointer-events", "auto");
        $('body').css("overflow", "hidden");
        
     });

     $('.close-icon').click(function(){
        $('.menu-expanded').css("opacity", "0");
        // make the menu unclickable
        $('.menu-expanded').css("pointer-events", "none");
        $('body').css("overflow", "scroll");
     });
});


// Page scroll indicator in project pages
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

//Click to scroll to the top in project pages

$(window).scroll(function() {
  if ($(this).scrollTop() > 100 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
/*
$(function(){
    $(".scrolltop").click(function(){
        $("html,body").animate({
          scrollTop:$(".navigation").offset().top},"1500");
          return false
})});
*/




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {myFunction()};
function myFunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
}






// parallax 
var rellax = new Rellax('.rellax');