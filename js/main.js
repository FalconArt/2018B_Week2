var quotes = ["Saddles are for wussies.", "The bigger the ears, the better.","C","D","E","F"];

$('#button').click(function(){
	$('#quoteArea').html(quotes[Math.floor(Math.random() * quotes.length)] );
});