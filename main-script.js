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