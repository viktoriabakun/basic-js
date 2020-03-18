module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
let turnsSpeedInSeconds = (turnsSpeed / 3600);    
let turns = ((2 ** disksNumber) - 1);
let seconds = turns / turnsSpeedInSeconds;
return {turns, seconds};
};