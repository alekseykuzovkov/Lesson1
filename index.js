var player = require('play-sound')(opts = {})
var colors = require('colors');

console.log('You\'ve got mail!'.green);
setTimeout(function() {
	console.log('hallelujah'.red.underline);
	player.play('aol-hallelujah.wav', function(err){})
}, 1000);
