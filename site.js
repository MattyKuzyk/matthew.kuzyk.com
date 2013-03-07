var bio = new Array();
var randomnumber=Math.floor(Math.random()*6);
bio[0] = "Blorange Enthusiast";
bio[1] = "Sloths, mang";
bio[2] = "Jack of all trades, master of some";
bio[3] = "What's Gucci?"
bio[4] = "I cry Based tears";
bio[5] = 'div id="yolo" because #yolo';


$(document).ready(function(){

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