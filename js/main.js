var quotes = ["Saddles are for wussies.", "The bigger the ears, the better.","He's only half a butt.","Galloping is hard. Bucking is better.","Salt blocks are life.","He's a hooved canine."];

$('#button').click(function(){
	$('#quoteArea').html(quotes[Math.floor(Math.random() * quotes.length)] );
});