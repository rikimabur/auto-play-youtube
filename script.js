// Code goes here
$(document).ready(function(){
  // desktop : autoplay: 1. autoplay , 0: not auto
  // link youtube: https://www.youtube.com/embed/Sa4BH3OIyRc
  // enablejsapi: mobile 
  $("iframe#bhxVids").on('load',function(){
   $('#bhxVids')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  });
});
