var bio = new Array();
var randomnumber=Math.floor(Math.random()*5);
bio[0] = "Blorange Enthusiast";
bio[1] = "Jack of all trades, master of some";
bio[2] = 'div id="yolo" because #yolo';
bio[3] = 'Not random, just psuedo-random';
bio[4] = "Girls say I can't commit, they should see my git log";
/*bio[5] = "What's Gucci?"
bio[6] = "I cry Based tears";
bio[7] = "Sloths, mang";
bio[8] = "Is this how I use Tumblr?";*/


$(document).ready(function(){

//GEE THIS ISN'T HACKY AT ALL

	$('#swag').text(bio[randomnumber]);

	setTimeout(function(){

          $('#name').fadeIn(1000);
      },500);

	setTimeout(function(){

          $('#swag').fadeIn(1000);
      },1000);
	  
	  setTimeout(function(){

          $('.link').fadeIn(1000);
      },1500);



      });