$(".div1").hide();

$(document).ready(function(){
	$(".div1").slideDown(3000);
});

$(document).ready(function(){
	$(window).scroll(function(){
		var a=$(document).scrollTop();
		console.log(a)
		if(a>220){
			$("main").animate({opacity:"1"},2000)
		}
	})
})

function myFunction() {
	var x = document.getElementById("menudropdown");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}
	  

$(function () {
	$("#tabs").tabs({
		show: { effect: "blind", direction: "right", duration: 300 } });

	$("#accordion").accordion();

	var btn = $('#accordion li a');
	var wrapper = $('#accordion li');

	$(btn).on('click', function () {
		$(btn).removeClass('active');
		$(btn).parent().find('.addon').removeClass('fadein');

		$(this).addClass('active');
		$(this).parent().find('.addon').addClass('fadein');
	});
});

$(document).ready(function(){
	
	$("#lg-popular").click(function(){
		$(this).css("background-color", "rgb(214, 249, 253)");
		$(this).css("color", "black");
		
		$("#lg-latest").css("background-color", "black");
		$("#lg-latest").css("color", "white");
		
		$("#lg-pick").css("background-color", "black");
		$("#lg-pick").css("color", "white");
	});
	
	$("#lg-latest").click(function(){
		$(this).css("background-color", "rgb(214, 249, 253)");
		$(this).css("color", "black");
		
		$("#lg-popular").css("background-color", "black");
		$("#lg-popular").css("color", "white");
		
		$("#lg-pick").css("background-color", "black");
		$("#lg-pick").css("color", "white");
	});
	
	$("#lg-pick").click(function(){
		$(this).css("background-color", "rgb(214, 249, 253)");
		$(this).css("color", "black");
		
		$("#lg-popular").css("background-color", "black");
		$("#lg-popular").css("color", "white");
		
		$("#lg-latest").css("background-color", "black");
		$("#lg-latest").css("color", "white");
	});
	
});


//api 
function loadXMLDoc() {
	var xhttp = new XMLHttpRequest();
	var data;
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(this.responseText);
		console.log(data);
		console.log(data[0].address);
		var html = '<table>';
		  html += '<tr>';
		  for( var j in data[0] ) {
		  if(j==="address"){html += '<td>' + "city" + '</td>';}else{
			  html += '<th>' + j + '</th>';
			 }
		  }
		  html += '</tr>';
		  for( var i = 0; i < data.length; i++) {
			  html += '<tr>';
			  for( var j in data[i] ) {
				  console.log((j));
				  if(j==="address"){html += '<td>' + data[i][j].city + '</td>';}
				  else if(j==="company"){html += '<td>' + data[i][j].name + '</td>';}
				  else{
					  html += '<td>' + data[i][j] + 						'</td>';
					  }
			  }
			  html += '</tr>';
		  }
		  html += '</table>';
		  document.getElementById("card_table").innerHTML = html;
	   }
	  
	};
	const api = "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
	xhttp.open("GET", api, true);
	xhttp.send();
  }